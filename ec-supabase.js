/* ===========================================================
   Enthusiasts Club — Supabase backend client
   Load the Supabase UMD script BEFORE this file:
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
   =========================================================== */

const SUPABASE_URL = "https://ilokcjglhczyjvcomrea.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Gv2kHn-h1XT-OqZEc7mmJw_YnSMYKb1";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;

/* ---------- DATA: cars & news (from the database, not hardcoded) ---------- */

let CARS = [];
let NEWS = [];
let NEWS_CATEGORIES = ["All"];
let dataLoaded = false;

async function loadData() {
  if (dataLoaded) return;
  const [carsRes, newsRes] = await Promise.all([
    sb.from("cars").select("*").order("price", { ascending: true }),
    sb.from("news_articles").select("*").order("date", { ascending: false }),
  ]);

  CARS = (carsRes.data || []).map((c) => ({
    id: c.id, brand: c.brand, model: c.model, year: c.year, bodyType: c.body_type,
    powertrain: c.powertrain, price: Number(c.price), mpgCity: c.mpg_city, mpgHwy: c.mpg_hwy,
    rangeMiles: c.range_miles, seats: c.seats, cargoCuFt: Number(c.cargo_cu_ft),
    zeroToSixty: Number(c.zero_to_sixty), safetyRating: c.safety_rating,
    warrantyYears: c.warranty_years, warrantyMiles: c.warranty_miles,
    reliabilityScore: c.reliability_score, techScore: c.tech_score,
    annualMaintenance: Number(c.annual_maintenance), awd: c.awd, features: c.features || [],
  }));

  NEWS = (newsRes.data || []).map((n) => ({
    id: n.id, category: n.category, title: n.title, date: n.date, readTime: n.read_time,
    excerpt: n.excerpt, body: n.body, relatedCarIds: n.related_car_ids || [],
  }));

  NEWS_CATEGORIES = ["All", ...Array.from(new Set(NEWS.map((n) => n.category)))];

  if (carsRes.error) console.error("Failed to load cars:", carsRes.error);
  if (newsRes.error) console.error("Failed to load news:", newsRes.error);

  dataLoaded = true;
}

function getCarById(id) { return CARS.find((c) => c.id === id); }
function formatPrice(n) { return "$" + Number(n).toLocaleString("en-US"); }

/* ---------- LEADS: contact / tool-submission capture ---------- */

async function submitLead(source, { name, email, message, payload } = {}) {
  const { error } = await sb.from("leads").insert({
    source, name: name || null, email: email || null, message: message || null, payload: payload || {},
  });
  if (error) console.error("Failed to submit lead:", error);
  return !error;
}

/* ---------- AUTH: My Garage accounts ---------- */

async function ecSignUp(email, password) {
  return sb.auth.signUp({ email, password });
}
async function ecSignIn(email, password) {
  return sb.auth.signInWithPassword({ email, password });
}
async function ecSignOut() {
  return sb.auth.signOut();
}
async function ecGetUser() {
  const { data } = await sb.auth.getUser();
  return data.user || null;
}
function ecOnAuthChange(cb) {
  sb.auth.onAuthStateChange((_event, session) => cb(session?.user || null));
}

/* ---------- MY GARAGE: saved comparisons & shortlists ---------- */

async function saveComparison(carIds, label) {
  const user = await ecGetUser();
  if (!user) return { error: "not_signed_in" };
  return sb.from("saved_comparisons").insert({ user_id: user.id, car_ids: carIds, label: label || null });
}
async function listSavedComparisons() {
  const { data, error } = await sb.from("saved_comparisons").select("*").order("created_at", { ascending: false });
  return error ? [] : data;
}
async function deleteSavedComparison(id) {
  return sb.from("saved_comparisons").delete().eq("id", id);
}

async function saveShortlist(carIds, quizSnapshot, label) {
  const user = await ecGetUser();
  if (!user) return { error: "not_signed_in" };
  return sb.from("saved_shortlists").insert({
    user_id: user.id, car_ids: carIds, quiz_snapshot: quizSnapshot || {}, label: label || null,
  });
}
async function listSavedShortlists() {
  const { data, error } = await sb.from("saved_shortlists").select("*").order("created_at", { ascending: false });
  return error ? [] : data;
}
async function deleteSavedShortlist(id) {
  return sb.from("saved_shortlists").delete().eq("id", id);
}

/* ---------- PREMIUM POSTERS: real Stripe checkout ---------- */

async function startCheckout(posterId, email) {
  const user = await ecGetUser();
  const { data: { session } } = await sb.auth.getSession();
  const res = await fetch(`${FUNCTIONS_URL}/create-checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
    },
    body: JSON.stringify({
      posterId,
      email: email || user?.email || undefined,
      successUrl: location.origin + location.pathname + "?purchase=success&session_id={CHECKOUT_SESSION_ID}",
      cancelUrl: location.origin + location.pathname + "?purchase=cancelled",
    }),
  });
  let out;
  try {
    out = await res.json();
  } catch {
    throw new Error(`Checkout service returned an unexpected response (status ${res.status}). Please try again.`);
  }
  if (out.error) throw new Error(out.error);
  if (!out.url) throw new Error("Checkout service didn't return a checkout URL. Please try again.");
  return out; // { url, sessionId }
}

async function checkPurchase(sessionId) {
  const res = await fetch(`${FUNCTIONS_URL}/check-purchase?session_id=${encodeURIComponent(sessionId)}`);
  if (!res.ok) return null;
  return res.json(); // { poster_id, status, amount_cents }
}
