/* ===========================================================
   The Enthusiasts Club — shared header / footer chrome
   Load order on every page:
     ec-style.css
     https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js
     ec-supabase.js
     ec-chrome.js
   Then call: renderChrome('home' | 'news' | 'compare' | 'find' | 'poster' | 'resources' | 'garage');
   =========================================================== */

const EC_NAV = [
  { key: "home",      label: "Home",             href: "ec-index.html" },
  { key: "news",      label: "News & Articles",  href: "ec-news.html" },
  { key: "compare",   label: "Compare Cars",     href: "ec-compare.html" },
  { key: "find",      label: "Find My Car",      href: "ec-find-my-car.html" },
  { key: "poster",    label: "Poster Studio",    href: "ec-poster-studio.html", highlight: true },
  { key: "resources", label: "Buyer Resources",  href: "ec-resources.html" },
];

function renderChrome(activeKey) {
  renderHeader(activeKey);
  renderFooter();
  renderAuthModal();
  refreshAuthArea();
  if (typeof ecOnAuthChange === "function") {
    ecOnAuthChange(() => refreshAuthArea());
  }
}

function renderHeader(activeKey) {
  const mount = document.getElementById("ec-header");
  if (!mount) return;

  const navHtml = EC_NAV.map((item) => {
    const classes = ["", item.highlight ? "highlight" : "", item.key === activeKey ? "active" : ""]
      .filter(Boolean).join(" ").trim();
    return `<a href="${item.href}" class="${classes}">${item.label}</a>`;
  }).join("");

  mount.innerHTML = `
    <div class="utility-bar">100% free to use &mdash; <strong>account optional, just for saving your picks.</strong></div>
    <header class="rw-header">
      <div class="rw-header-inner">
        <a href="ec-index.html" class="rw-brand" style="text-decoration:none; text-transform:uppercase; letter-spacing:0.4px;">The <span>Enthusiasts</span> Club</a>
        <nav class="rw-nav">${navHtml}</nav>
        <div id="ec-auth-area" style="display:flex; align-items:center; gap:10px;"></div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.getElementById("ec-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="rw-footer">
      <div class="container">
        <div>
          <div class="brand">THE ENTHUSIASTS CLUB</div>
          <div>Created by enthusiasts, for enthusiasts. Independent car &amp; bike guidance &mdash; free, always.</div>
        </div>
        <div class="links">
          <a href="ec-index.html">Home</a>
          <a href="ec-news.html">News</a>
          <a href="ec-compare.html">Compare</a>
          <a href="ec-find-my-car.html">Find My Car</a>
          <a href="ec-poster-studio.html">Poster Studio</a>
          <a href="ec-resources.html">Resources</a>
          <a href="ec-garage.html">My Garage</a>
          <a href="https://www.instagram.com/thenthusiastsclub/" target="_blank" rel="noopener">Instagram &#8599;</a>
        </div>
      </div>
      <div class="fine">Prototype build &middot; sample vehicle data for demonstration &middot; not affiliated with any manufacturer &middot; @thenthusiastsclub</div>
    </footer>
  `;
}

/* ---------- AUTH AREA (header) ---------- */

async function refreshAuthArea() {
  const area = document.getElementById("ec-auth-area");
  if (!area || typeof ecGetUser !== "function") return;
  const user = await ecGetUser();
  if (user) {
    area.innerHTML = `
      <a href="ec-garage.html" class="btn btn-outline" style="padding:8px 14px; font-size:12.5px;">My Garage</a>
      <span style="font-size:12.5px; color:var(--grey);">${user.email}</span>
      <button class="btn btn-outline" style="padding:8px 14px; font-size:12.5px;" onclick="ecSignOut().then(()=>location.reload())">Sign out</button>
    `;
  } else {
    area.innerHTML = `<button class="btn btn-navy" style="padding:9px 16px; font-size:13px;" onclick="openAuthModal()">Sign in</button>`;
  }
}

/* ---------- AUTH MODAL (sign in / sign up) ---------- */

function renderAuthModal() {
  if (document.getElementById("ec-auth-modal")) return;
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="modal-backdrop" id="ec-auth-modal" style="position:fixed; inset:0; background:rgba(15,20,30,0.55); display:none; align-items:center; justify-content:center; z-index:60; padding:20px;">
      <div style="background:#fff; border-radius:12px; padding:26px; max-width:380px; width:100%;">
        <div style="display:flex; gap:8px; margin-bottom:16px;">
          <button id="ec-auth-tab-in" class="filter-pill active" onclick="setAuthTab('in')" style="flex:1;">Sign in</button>
          <button id="ec-auth-tab-up" class="filter-pill" onclick="setAuthTab('up')" style="flex:1;">Create account</button>
        </div>
        <div class="field"><label>Email</label><input type="text" id="ec-auth-email" placeholder="you@example.com" /></div>
        <div class="field"><label>Password</label><input type="text" id="ec-auth-password" placeholder="At least 6 characters" /></div>
        <div id="ec-auth-msg" style="font-size:12.5px; color:var(--red); margin-bottom:10px; display:none;"></div>
        <button class="btn btn-gold btn-block" id="ec-auth-submit" onclick="submitAuth()">Sign in</button>
        <button class="btn btn-outline btn-block" style="margin-top:8px;" onclick="closeAuthModal()">Cancel</button>
        <div class="disclosure">Free account &mdash; only used to save your comparisons and Find My Car shortlists across visits.</div>
      </div>
    </div>
  `;
  document.body.appendChild(div.firstElementChild);
}

let ecAuthMode = "in";
function setAuthTab(mode) {
  ecAuthMode = mode;
  document.getElementById("ec-auth-tab-in").classList.toggle("active", mode === "in");
  document.getElementById("ec-auth-tab-up").classList.toggle("active", mode === "up");
  document.getElementById("ec-auth-submit").textContent = mode === "in" ? "Sign in" : "Create account";
  document.getElementById("ec-auth-msg").style.display = "none";
}
function openAuthModal() {
  document.getElementById("ec-auth-modal").classList.add("open");
  document.getElementById("ec-auth-modal").style.display = "flex";
}
function closeAuthModal() {
  document.getElementById("ec-auth-modal").style.display = "none";
}
async function submitAuth() {
  const email = document.getElementById("ec-auth-email").value.trim();
  const password = document.getElementById("ec-auth-password").value;
  const msg = document.getElementById("ec-auth-msg");
  msg.style.display = "none";
  if (!email || !password) {
    msg.textContent = "Enter both an email and a password.";
    msg.style.display = "block";
    return;
  }
  const result = ecAuthMode === "in" ? await ecSignIn(email, password) : await ecSignUp(email, password);
  if (result.error) {
    msg.textContent = result.error.message || "Something went wrong.";
    msg.style.display = "block";
    return;
  }
  if (ecAuthMode === "up" && !result.data.session) {
    msg.style.color = "var(--green)";
    msg.textContent = "Check your email to confirm your account, then sign in.";
    msg.style.display = "block";
    return;
  }
  closeAuthModal();
  refreshAuthArea();
}
