/* ===========================================================
   Enthusiast's Club — shared sample data
   NOTE: Vehicle specs and prices below are illustrative sample
   data for this prototype, not live pricing/spec feeds. Wire this
   file up to a licensed automotive data API in production.
   =========================================================== */

const CARS = [
  { id: "civic-lx", brand: "Honda", model: "Civic LX", year: 2026, bodyType: "Sedan", powertrain: "Gas",
    price: 24500, mpgCity: 32, mpgHwy: 42, rangeMiles: null, seats: 5, cargoCuFt: 14.8, zeroToSixty: 8.0,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 9, techScore: 6,
    annualMaintenance: 450, awd: false, features: ["Apple CarPlay", "Lane Keep Assist", "Adaptive Cruise"] },

  { id: "corolla-le", brand: "Toyota", model: "Corolla LE", year: 2026, bodyType: "Sedan", powertrain: "Gas",
    price: 23200, mpgCity: 32, mpgHwy: 41, rangeMiles: null, seats: 5, cargoCuFt: 13.1, zeroToSixty: 8.9,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 9, techScore: 6,
    annualMaintenance: 420, awd: false, features: ["Toyota Safety Sense", "Apple CarPlay", "Android Auto"] },

  { id: "prius-le", brand: "Toyota", model: "Prius LE", year: 2026, bodyType: "Hatchback", powertrain: "Hybrid",
    price: 28800, mpgCity: 57, mpgHwy: 56, rangeMiles: null, seats: 5, cargoCuFt: 20.3, zeroToSixty: 7.2,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 9, techScore: 7,
    annualMaintenance: 430, awd: true, features: ["Toyota Safety Sense", "Hybrid Battery Warranty 10yr", "Wireless CarPlay"] },

  { id: "crv-hybrid", brand: "Honda", model: "CR-V Hybrid", year: 2026, bodyType: "SUV", powertrain: "Hybrid",
    price: 34500, mpgCity: 40, mpgHwy: 34, rangeMiles: null, seats: 5, cargoCuFt: 39.3, zeroToSixty: 7.8,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 8, techScore: 7,
    annualMaintenance: 480, awd: true, features: ["Honda Sensing", "Hands-Free Tailgate", "Wireless CarPlay"] },

  { id: "rav4-le", brand: "Toyota", model: "RAV4 LE", year: 2026, bodyType: "SUV", powertrain: "Gas",
    price: 31200, mpgCity: 27, mpgHwy: 35, rangeMiles: null, seats: 5, cargoCuFt: 37.6, zeroToSixty: 8.4,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 9, techScore: 6,
    annualMaintenance: 460, awd: true, features: ["Toyota Safety Sense", "AWD standard", "Apple CarPlay"] },

  { id: "model3-standard", brand: "Tesla", model: "Model 3 Standard", year: 2026, bodyType: "Sedan", powertrain: "EV",
    price: 39900, mpgCity: null, mpgHwy: null, rangeMiles: 275, seats: 5, cargoCuFt: 19.8, zeroToSixty: 5.8,
    safetyRating: 5, warrantyYears: 4, warrantyMiles: 50000, reliabilityScore: 7, techScore: 10,
    annualMaintenance: 300, awd: false, features: ["Autopilot", "Over-the-air updates", "15in touchscreen"] },

  { id: "ioniq6-se", brand: "Hyundai", model: "Ioniq 6 SE", year: 2026, bodyType: "Sedan", powertrain: "EV",
    price: 38650, mpgCity: null, mpgHwy: null, rangeMiles: 305, seats: 5, cargoCuFt: 11.2, zeroToSixty: 6.9,
    safetyRating: 5, warrantyYears: 5, warrantyMiles: 60000, reliabilityScore: 8, techScore: 9,
    annualMaintenance: 320, awd: false, features: ["800V ultra-fast charging", "Highway Driving Assist", "Vehicle-to-Load"] },

  { id: "ev6-wind", brand: "Kia", model: "EV6 Wind", year: 2026, bodyType: "SUV", powertrain: "EV",
    price: 44500, mpgCity: null, mpgHwy: null, rangeMiles: 310, seats: 5, cargoCuFt: 24.4, zeroToSixty: 6.1,
    safetyRating: 5, warrantyYears: 5, warrantyMiles: 60000, reliabilityScore: 8, techScore: 9,
    annualMaintenance: 340, awd: true, features: ["800V ultra-fast charging", "Highway Driving Assist 2", "Vehicle-to-Load"] },

  { id: "bolt-euv", brand: "Chevrolet", model: "Bolt EUV", year: 2026, bodyType: "SUV", powertrain: "EV",
    price: 29900, mpgCity: null, mpgHwy: null, rangeMiles: 247, seats: 5, cargoCuFt: 16.3, zeroToSixty: 7.0,
    safetyRating: 5, warrantyYears: 5, warrantyMiles: 60000, reliabilityScore: 7, techScore: 8,
    annualMaintenance: 300, awd: false, features: ["Super Cruise available", "One-Pedal Driving", "Wireless CarPlay"] },

  { id: "cx5-touring", brand: "Mazda", model: "CX-5 Touring", year: 2026, bodyType: "SUV", powertrain: "Gas",
    price: 32400, mpgCity: 25, mpgHwy: 31, rangeMiles: null, seats: 5, cargoCuFt: 30.9, zeroToSixty: 7.9,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 8, techScore: 6,
    annualMaintenance: 470, awd: true, features: ["i-Activsense Safety", "AWD standard", "Bose Audio"] },

  { id: "outback-premium", brand: "Subaru", model: "Outback Premium", year: 2026, bodyType: "SUV", powertrain: "Gas",
    price: 33500, mpgCity: 26, mpgHwy: 33, rangeMiles: null, seats: 5, cargoCuFt: 32.5, zeroToSixty: 8.7,
    safetyRating: 5, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 8, techScore: 6,
    annualMaintenance: 490, awd: true, features: ["Symmetrical AWD standard", "EyeSight Driver Assist", "X-Mode"] },

  { id: "f150-xlt", brand: "Ford", model: "F-150 XLT", year: 2026, bodyType: "Truck", powertrain: "Gas",
    price: 46800, mpgCity: 20, mpgHwy: 26, rangeMiles: null, seats: 6, cargoCuFt: 52.8, zeroToSixty: 6.9,
    safetyRating: 4, warrantyYears: 3, warrantyMiles: 36000, reliabilityScore: 7, techScore: 7,
    annualMaintenance: 620, awd: true, features: ["Pro Power Onboard", "4WD available", "SYNC 4"] },

  { id: "3-series-330i", brand: "BMW", model: "3 Series 330i", year: 2026, bodyType: "Sedan", powertrain: "Gas",
    price: 47200, mpgCity: 26, mpgHwy: 36, rangeMiles: null, seats: 5, cargoCuFt: 17.0, zeroToSixty: 5.6,
    safetyRating: 5, warrantyYears: 4, warrantyMiles: 50000, reliabilityScore: 6, techScore: 9,
    annualMaintenance: 780, awd: false, features: ["iDrive 8", "Adaptive M Suspension available", "Live Cockpit Pro"] },

  { id: "leaf-sv", brand: "Nissan", model: "Leaf SV", year: 2026, bodyType: "Hatchback", powertrain: "EV",
    price: 30500, mpgCity: null, mpgHwy: null, rangeMiles: 212, seats: 5, cargoCuFt: 23.6, zeroToSixty: 7.4,
    safetyRating: 4, warrantyYears: 5, warrantyMiles: 60000, reliabilityScore: 7, techScore: 7,
    annualMaintenance: 290, awd: false, features: ["ProPilot Assist", "e-Pedal", "8in touchscreen"] },
];

const NEWS = [
  {
    id: "n1", category: "EV & Hybrid",
    title: "EVs on track for roughly 1 in 5 global car sales in 2026",
    date: "2026-06-18", readTime: "4 min",
    excerpt: "Global battery-electric sales are projected to climb another 19% this year, but affordability in the US still lags behind China's fast-cheapening EV market.",
    body: "Global EV adoption keeps accelerating: battery-electric vehicles are projected to reach close to a fifth of worldwide new-car sales in 2026, continuing a run-up from under 1 in 10 sales five years ago. The growth is not evenly spread. China now produces the majority of the world's EVs and batteries, and by 2025 nearly 70% of battery-electric cars sold there were already cheaper than equivalent gas models even before incentives. In the US, EV penetration is still closer to 1 in 10 new-car sales, held back by a straightforward affordability mismatch: close to half of American buyers want something under $45,000, but only a small share of available EV models are offered anywhere near that price. If you're cross-shopping an EV, run the numbers on our Compare Cars tool before assuming the price premium isn't worth it — falling battery costs are narrowing the gap faster than most buyers expect.",
    relatedCarIds: ["model3-standard", "ioniq6-se", "bolt-euv", "leaf-sv"],
  },
  {
    id: "n2", category: "EV & Hybrid",
    title: "Battery prices keep falling — and EV range keeps climbing",
    date: "2026-05-30", readTime: "3 min",
    excerpt: "Average battery costs are down roughly 8% year over year, driven largely by cheaper lithium iron phosphate (LFP) chemistry, and average EV range has climbed to around 325 miles.",
    body: "Two trends are reshaping what an EV shopper should expect this year. First, battery pack costs continue to decline, helped by widespread adoption of lithium iron phosphate (LFP) chemistry, which trades some energy density for a lower price tag, longer cycle life, and less reliance on nickel and cobalt. Second, partly as a result, the average expected range across popular EV models has climbed to roughly 325 miles, up from around 293 miles just a year earlier. The net effect for buyers: EVs at a given price point are getting more capable year over year, which is worth factoring in if you test-drove an EV a couple of years ago and wrote it off on range grounds.",
    relatedCarIds: ["ev6-wind", "ioniq6-se"],
  },
  {
    id: "n3", category: "Buying Guides",
    title: "What actually happens in the Finance & Insurance office — and how to protect yourself",
    date: "2026-05-14", readTime: "6 min",
    excerpt: "Add-ons like gap insurance, VIN etching, and rustproofing can add thousands to a deal and are often introduced late in the process. Here's what's usually worth it.",
    body: "Most dealerships route financed and leased buyers through a Finance & Insurance (F&I) department, which is where loan paperwork gets finalized — and where optional add-ons tend to get pitched. Common add-ons include gap insurance (covers the difference between what you owe and the car's value if it's totaled), VIN etching, extended service contracts, and rustproofing. None of these are inherently bad, but they're often mentioned for the first time at the end of an already long day, bundled into a payment figure that makes it hard to see the actual price tag of each one. Ask for an itemized list before you sign anything, ask the dealer to put every promise in writing, and separately price gap insurance through your own insurer — it's frequently cheaper there than through the dealership. Our Buyer Resources hub has a plain-language rundown of which add-ons are usually worth it and which typically aren't.",
    relatedCarIds: [],
  },
  {
    id: "n4", category: "Buying Guides",
    title: "Warranty vs. extended service contract: what's actually covered",
    date: "2026-04-22", readTime: "5 min",
    excerpt: "A factory warranty and a paid extended service contract are not the same thing, and confusing the two is one of the most common buyer mistakes.",
    body: "Every new car comes with a manufacturer warranty covering defects in materials or workmanship for a set period — commonly 3 years/36,000 miles bumper-to-bumper, though EV battery warranties often run longer (5 years/60,000 miles or more is now common). An extended service contract, sometimes marketed as an 'extended warranty,' is a separate, optional, paid product that kicks in after the factory warranty and covers specified repairs. Coverage varies a lot between providers, so before buying one, get exact answers on what's covered, for how long, whether it's transferable if you sell the car, and what your deductible looks like per visit. It's also worth comparing a manufacturer-backed contract against third-party providers — the manufacturer's is usually honored at more service centers.",
    relatedCarIds: [],
  },
  {
    id: "n5", category: "Industry Trends",
    title: "Hybrids are having a moment as buyers hedge between gas and EV",
    date: "2026-04-02", readTime: "4 min",
    excerpt: "Consumer sentiment on EVs remains steady but cautious, while hybrid demand keeps strengthening as a middle path on affordability and charging access.",
    body: "Recent automotive consumer research points to a clear pattern: demand for fully electric vehicles is holding steady but buyers remain cautious, while hybrids are picking up steam as the compromise option. The appeal is straightforward — meaningfully better fuel economy than a comparable gas vehicle, no dependence on charging infrastructure, and in most cases a smaller price premium than a full EV. If your household drives a lot of miles but doesn't have reliable home or workplace charging, a hybrid is worth putting on your shortlist alongside any EV you're considering. Our Find My Car tool will surface hybrid options automatically if you tell it you're open to any powertrain.",
    relatedCarIds: ["prius-le", "crv-hybrid"],
  },
  {
    id: "n6", category: "Industry Trends",
    title: "Why the same car can cost wildly different amounts to insure",
    date: "2026-03-19", readTime: "4 min",
    excerpt: "Sticker price, repair cost, top speed, and safety tech all factor into your premium — and none of it shows up on the window sticker.",
    body: "Two cars with an identical MSRP can carry very different insurance premiums, and it rarely has anything to do with the price tag alone. Insurers weigh the car's repair and replacement cost (luxury badges and complex electronics cost more to fix), performance (higher top speed and quicker acceleration generally cost more to insure), and safety equipment (features like automatic emergency braking and lane-departure warning can lower a premium by reducing claim frequency). The practical takeaway: get an insurance estimate before you sign anything, not after. Our Buyer Resources page includes a rough premium estimator you can run against any car you're considering.",
    relatedCarIds: [],
  },
  {
    id: "n7", category: "Reviews",
    title: "Compact SUVs, compared: where the CR-V Hybrid, RAV4, and CX-5 actually differ",
    date: "2026-03-05", readTime: "5 min",
    excerpt: "On paper these three look similar. In the numbers, they split clearly on running costs, cargo space, and all-wheel-drive availability.",
    body: "The compact SUV segment is the most cross-shopped category on this site, and for good reason — the CR-V Hybrid, RAV4, and CX-5 all land in a similar price band with similar size. Where they actually diverge: the CR-V Hybrid posts the best real-world fuel economy of the three thanks to its hybrid powertrain, the RAV4 offers the most cargo room and the lowest starting price, and the CX-5 leans into a noticeably nicer cabin and standard AWD across the range. None of these is a wrong answer — it comes down to whether running costs, price, or interior feel matters most to you. Load all three into our Compare Cars tool to see the full spec breakdown side by side.",
    relatedCarIds: ["crv-hybrid", "rav4-le", "cx5-touring"],
  },
  {
    id: "n8", category: "Safety & Recalls",
    title: "Why crash ratings alone don't tell the whole safety story",
    date: "2026-02-12", readTime: "3 min",
    excerpt: "A 5-star crash rating is a good baseline, but active-safety tech like automatic emergency braking increasingly separates cars within that top tier.",
    body: "Crash-test ratings are a useful floor, not a ceiling. Two 5-star-rated vehicles can still differ meaningfully in real-world safety outcomes depending on which active-safety features come standard versus optional. Automatic emergency braking, lane-keep assist, blind-spot monitoring, and adaptive cruise control all reduce the likelihood of a crash happening in the first place, rather than just improving your odds once one occurs. When you're comparing cars, check which of these are standard on the trim you're actually buying — not just the top-of-line trim used in marketing photos.",
    relatedCarIds: [],
  },
];

const NEWS_CATEGORIES = ["All", "EV & Hybrid", "Buying Guides", "Industry Trends", "Reviews", "Safety & Recalls"];

function getCarById(id) { return CARS.find((c) => c.id === id); }
function formatPrice(n) { return "$" + n.toLocaleString("en-US"); }
