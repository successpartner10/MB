/* ============================================================================
   Minimal Bites — static PWA (Raleway · Apple-clean · retina · SVG icons)
   Two distinct products:
     • Subscriber app  (home + dashboard) — light, green, consumer
     • Partner portal  (#partners, #kitchen) — dark, amber, business
   Reached separately: the home page links "Restaurant owners →" to #partners.
   ========================================================================== */

/* ---------- SVG icon set (line icons, currentColor, retina-crisp) ---------- */
const P = "M9 12l2 2 4-4"; // not used directly, kept as flavor

/* ---------- versioning ----------
   Stable, persistent version URLs. `/` always serves the latest release;
   each release is also archived at a permanent `/vN/` path so old links never
   break. Bump VERSION and archive the old build when publishing a new release. */
const VERSION = "v3";
const VERSION_LINK = "v2/"; // relative link to the previous stable release
function ico(name, cls = "") {
  const stroke = `stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const S = `<svg class="ic ${cls}" viewBox="0 0 24 24" ${stroke} aria-hidden="true">`;
  const E = `</svg>`;
  const paths = {
    chef: `<path d="M12 3a3 3 0 0 0-3 3c0 .8.3 1.5.8 2H7.5a2 2 0 0 0 0 4h9a2 2 0 0 0 0-4h-2.3a3 3 0 0 0 .8-2 3 3 0 0 0-3-3z"/><path d="M8 15h8l-1 5H9z"/><path d="M10 13v2M14 13v2"/>`,
    sparkle: `<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/>`,
    bolt: `<path d="M13 3L5 13h5l-1 8 8-10h-5z"/>`,
    tap: `<path d="M7 11a5 5 0 0 1 10 0v2"/><path d="M9 11v3a3 3 0 0 0 6 0v-3"/><path d="M10 20h4"/>`,
    factory: `<path d="M3 21V9l5 3V9l5 3V9l5 3v9z"/><path d="M7 17h2M12 17h2M17 17h2"/><path d="M8 21v-3M16 21v-3"/>`,
    calendar: `<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/><path d="M12 14l1.5 1.5L17 12"/>`,
    pin: `<path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/>`,
    pause: `<rect x="7" y="5" width="3.4" height="14" rx="1.4"/><rect x="13.6" y="5" width="3.4" height="14" rx="1.4"/>`,
    plus: `<path d="M12 5v14M5 12h14"/>`,
    swap: `<path d="M7 8h11l-3-3M17 16H6l3 3"/><path d="M7 8l-1 1-1-1M18 16l-1-1-1 1" opacity="0"/>`,
    arrows: `<path d="M8 9h11l-3-3"/><path d="M16 15H5l3 3"/><path d="M7 6.5l-2 2.5 2 2.5M17 12.5l2-2.5-2-2.5" opacity="0"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
    gear: `<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.3 3h-4l-.3 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5.6 12a7 7 0 0 0 .1 1.2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.3 2.7h4l.3-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.06-.4.1-.8.1-1.2z"/>`,
    pot: `<path d="M4 10h16v2a8 8 0 0 1-16 0z"/><path d="M12 10V5M8 7l-1.5-2M16 7l1.5-2"/>`,
    box: `<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>`,
    truck: `<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/><path d="M7 18h3M14 18h3"/>`,
    printer: `<path d="M7 8V3h10v5"/><rect x="4" y="8" width="16" height="8" rx="1.5"/><path d="M7 14h10v7H7z"/>`,
    download: `<path d="M12 3v11M8 10l4 4 4-4"/><path d="M4 19h16"/>`,
    store: `<path d="M4 10l1.5-5h13L20 10M4 10v9h16v-9"/><path d="M4 10h16"/><path d="M9 13h6v6H9z"/>`,
    menu: `<path d="M4 6h16M4 12h16M4 18h16"/><path d="M10 6v6"/><circle cx="12" cy="4" r="1"/>`,
    chart: `<path d="M4 20V10M10 20V4M16 20v-7M20 20H3"/>`,
    wallet: `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18M16 15h2"/><path d="M6 7V6a2 2 0 0 1 2-2h7"/>`,
    shield: `<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>`,
    arrow: `<path d="M5 12h14M14 7l5 5-5 5"/>`,
    arrowLeft: `<path d="M19 12H5M10 7l-5 5 5 5"/>`,
    check: `<path d="M5 12l5 5 9-11"/>`,
    home: `<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>`,
  };
  return S + (paths[name] || `<circle cx="12" cy="12" r="8"/>`) + E;
}

const BADGE_COLOR = {
  HIGH_PROTEIN: "bg-rose-100 text-rose-700",
  GLUTEN_FREE: "bg-amber-100 text-amber-700",
  VEGETARIAN: "bg-emerald-100 text-emerald-700",
  VEGAN: "bg-lime-100 text-lime-700",
  KETO: "bg-violet-100 text-violet-700",
  BALANCED: "bg-sky-100 text-sky-700",
  STANDARD: "bg-slate-100 text-slate-600",
};

const RESTAURANTS = [
  { id: "rest_oak_ash", name: "Oak & Ash Kitchen", cuisine: "Grill & bowls", neighborhood: "Downtown / Bay", postalPrefixes: ["M5J", "M5K"], hygieneRating: 4.9, healthScore: 100, verified: true, description: "Wood-fire grill and protein-forward bowls. Verified by Toronto DineSafe (100/100).", minWeeklyDishes: 3 },
  { id: "rest_sweet_basil", name: "Sweet Basil", cuisine: "Mediterranean & veg", neighborhood: "Harbourfront", postalPrefixes: ["M5V", "M5J"], hygieneRating: 4.7, healthScore: 98, verified: true, description: "Mediterranean and plant-forward plates. DineSafe pass (98).", minWeeklyDishes: 3 },
  { id: "rest_kobu", name: "Kobu Noodle & Rice", cuisine: "Asian bowls", neighborhood: "Financial District", postalPrefixes: ["M5K", "M5H"], hygieneRating: 4.6, healthScore: 96, verified: true, description: "Noodle and rice bowls with clean, balanced sauces. DineSafe pass (96).", minWeeklyDishes: 3 },
];
const restName = (id) => (RESTAURANTS.find((r) => r.id === id) || {}).name || "Partner kitchen";

const DATA = {
  restaurants: RESTAURANTS,
  dashboard: {
    userId: "usr_99812",
    user: { fullName: "Aria Chen", phone: "+1 416 555 0198", dietaryBadges: ["HIGH_PROTEIN", "GLUTEN_FREE"], dropoffPreference: "CONCIERGE" },
    subscription: {
      id: "sub_77123", planTier: "MEALS_6", deliveryDay: "TUESDAY_PM", deliveryLabel: "TUESDAY PM",
      window: "5:00 PM - 7:00 PM", isPaused: false, perMeal: 13, boxMode: "MIXED", preferredRestaurant: null,
    },
    address: { street: "120 Bay St", unit: "Suite 1402", city: "Toronto", province: "ON", postalCode: "M5J 2R8" },
    order: {
      id: "ord_aria_20260818", deliveryDate: "2026-08-18T17:00:00.000Z", status: "SCHEDULED", totalAmount: 78,
      cutoffAt: "2026-08-16T23:59:59.000Z",
      items: [
        { slot: 1, mealId: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", calories: 580, proteinGrams: 48, badges: ["HIGH_PROTEIN"] },
        { slot: 2, mealId: "meal_salmon_2", restaurantId: "rest_sweet_basil", title: "Lemon Herb Atlantic Salmon", calories: 520, proteinGrams: 42, badges: ["GLUTEN_FREE"] },
        { slot: 3, mealId: "meal_teriyaki_3", restaurantId: "rest_kobu", title: "Beef Teriyaki & Jasmine Rice", calories: 610, proteinGrams: 40, badges: ["BALANCED"] },
        { slot: 4, mealId: "meal_falafel_4", restaurantId: "rest_sweet_basil", title: "Mediterranean Falafel Plate", calories: 480, proteinGrams: 18, badges: ["VEGETARIAN"] },
        { slot: 5, mealId: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", calories: 580, proteinGrams: 48, badges: ["HIGH_PROTEIN"] },
        { slot: 6, mealId: "meal_steak_5", restaurantId: "rest_oak_ash", title: "Chili Lime Steak & Sweet Potato", calories: 640, proteinGrams: 52, badges: ["HIGH_PROTEIN"] },
      ],
    },
  },

  meals: [
    { id: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", calories: 580, proteinGrams: 48, badges: ["HIGH_PROTEIN"] },
    { id: "meal_salmon_2", restaurantId: "rest_sweet_basil", title: "Lemon Herb Atlantic Salmon", calories: 520, proteinGrams: 42, badges: ["GLUTEN_FREE"] },
    { id: "meal_teriyaki_3", restaurantId: "rest_kobu", title: "Beef Teriyaki & Jasmine Rice", calories: 610, proteinGrams: 40, badges: ["BALANCED"] },
    { id: "meal_falafel_4", restaurantId: "rest_sweet_basil", title: "Mediterranean Falafel Plate", calories: 480, proteinGrams: 18, badges: ["VEGETARIAN"] },
    { id: "meal_steak_5", restaurantId: "rest_oak_ash", title: "Chili Lime Steak & Sweet Potato", calories: 640, proteinGrams: 52, badges: ["HIGH_PROTEIN"] },
    { id: "meal_padthai_6", restaurantId: "rest_kobu", title: "Shrimp Pad Thai", calories: 590, proteinGrams: 33, badges: ["GLUTEN_FREE"] },
    { id: "meal_caesar_7", restaurantId: "rest_sweet_basil", title: "Roasted Chicken Caesar Bowl", calories: 540, proteinGrams: 44, badges: ["BALANCED"] },
    { id: "meal_chili_8", restaurantId: "rest_oak_ash", title: "Turkey Chili & Brown Rice", calories: 470, proteinGrams: 36, badges: ["HIGH_PROTEIN"] },
    { id: "meal_brisket_9", restaurantId: "rest_oak_ash", title: "Smoked Brisket Mac Bowl", calories: 620, proteinGrams: 46, badges: ["HIGH_PROTEIN"] },
    { id: "meal_harissa_10", restaurantId: "rest_oak_ash", title: "Harissa Chicken & Quinoa", calories: 560, proteinGrams: 45, badges: ["HIGH_PROTEIN", "GLUTEN_FREE"] },
    { id: "meal_skewer_11", restaurantId: "rest_oak_ash", title: "Miso-Glazed Chicken Skewers", calories: 540, proteinGrams: 43, badges: ["HIGH_PROTEIN"] },
    { id: "meal_kofte_12", restaurantId: "rest_sweet_basil", title: "Turkish Kofte & Bulgur", calories: 520, proteinGrams: 38, badges: ["GLUTEN_FREE"] },
    { id: "meal_halloumi_13", restaurantId: "rest_sweet_basil", title: "Grilled Halloumi & Greens", calories: 490, proteinGrams: 24, badges: ["VEGETARIAN"] },
    { id: "meal_zaatar_14", restaurantId: "rest_sweet_basil", title: "Za'atar Chicken & Couscous", calories: 550, proteinGrams: 41, badges: ["BALANCED"] },
    { id: "meal_tunapoke_15", restaurantId: "rest_kobu", title: "Spicy Tuna Poke Bowl", calories: 510, proteinGrams: 38, badges: ["HIGH_PROTEIN"] },
    { id: "meal_kungpao_16", restaurantId: "rest_kobu", title: "Kung Pao Chicken Bowl", calories: 600, proteinGrams: 42, badges: ["BALANCED"] },
    { id: "meal_yakisoba_17", restaurantId: "rest_kobu", title: "Veggie Yakisoba", calories: 470, proteinGrams: 20, badges: ["VEGETARIAN"] },
    { id: "meal_teriyakitofu_18", restaurantId: "rest_kobu", title: "Teriyaki Tofu & Rice", calories: 450, proteinGrams: 26, badges: ["VEGETARIAN", "GLUTEN_FREE"] },
  ],

  productionMatrix: {
    deliveryDate: "2026-08-18",
    source: "postgresql/prisma (static snapshot)",
    totalMealsToCook: 266, totalPacked: 180,
    dishes: [
      { mealId: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", totalQuantity: 140, packedQuantity: 80 },
      { mealId: "meal_salmon_2", restaurantId: "rest_sweet_basil", title: "Lemon Herb Atlantic Salmon", totalQuantity: 85, packedQuantity: 85 },
      { mealId: "meal_teriyaki_3", restaurantId: "rest_kobu", title: "Beef Teriyaki & Jasmine Rice", totalQuantity: 25, packedQuantity: 0 },
      { mealId: "meal_falafel_4", restaurantId: "rest_sweet_basil", title: "Mediterranean Falafel Plate", totalQuantity: 15, packedQuantity: 15 },
    ],
    routes: [
      { postalPrefix: "M5J", boxCount: 30 }, { postalPrefix: "M5V", boxCount: 35 },
      { postalPrefix: "M5K", boxCount: 28 }, { postalPrefix: "M5H", boxCount: 22 },
    ],
    courier: { M5V: 30, M5J: 30 },
  },
};

const TIERS = [
  { id: "MEALS_4", meals: 4, perMeal: 14, total: 56, desc: "Best for solo / couple" },
  { id: "MEALS_6", meals: 6, perMeal: 13, total: 78, desc: "Most popular" },
  { id: "MEALS_8", meals: 8, perMeal: 12, total: 96, desc: "Best per-meal value" },
];

/* ---- per-meal pricing + type + area metadata (used by the Build-Your-Box tool) ---- */
const MEAL_META = {
  meal_shawarma_1: { price: 13, type: "nonveg" },
  meal_salmon_2: { price: 14, type: "nonveg" },
  meal_teriyaki_3: { price: 13, type: "nonveg" },
  meal_falafel_4: { price: 12, type: "veg" },
  meal_steak_5: { price: 14, type: "nonveg" },
  meal_padthai_6: { price: 14, type: "nonveg" },
  meal_caesar_7: { price: 13, type: "nonveg" },
  meal_chili_8: { price: 12, type: "nonveg" },
  meal_brisket_9: { price: 14, type: "nonveg" },
  meal_harissa_10: { price: 13, type: "nonveg" },
  meal_skewer_11: { price: 13, type: "nonveg" },
  meal_kofte_12: { price: 13, type: "nonveg" },
  meal_halloumi_13: { price: 13, type: "veg" },
  meal_zaatar_14: { price: 13, type: "nonveg" },
  meal_tunapoke_15: { price: 14, type: "nonveg" },
  meal_kungpao_16: { price: 13, type: "nonveg" },
  meal_yakisoba_17: { price: 12, type: "veg" },
  meal_teriyakitofu_18: { price: 12, type: "veg" },
};
const mealPrice = (id) => (MEAL_META[id] || {}).price ?? 13;
const mealType = (id) => (MEAL_META[id] || {}).type ?? "nonveg";
/* Area filter — the subscriber's delivery area is M5J (downtown). */
const REST_AREA = { rest_oak_ash: "nearby", rest_sweet_basil: "nearby", rest_kobu: "further" };
const areaLabel = (a) => (a === "nearby" ? "In your area" : a === "further" ? "Further away" : a);

/* ---- 2-hour delivery windows for TUESDAY_PM ---- */
const DELIVERY_WINDOWS = [
  { id: "5-7", label: "5:00 – 7:00 PM", slot: "5:00 PM - 7:00 PM" },
  { id: "6-8", label: "6:00 – 8:00 PM", slot: "6:00 PM - 8:00 PM" },
  { id: "7-9", label: "7:00 – 9:00 PM", slot: "7:00 PM - 9:00 PM" },
];
/* ---- live delivery tracking state (simulated) ---- */
const TRACK = {
  status: "preparing", // preparing -> packed -> out -> delivered
  etaMin: 62,
  progress: 22,
  courierName: "Marcus",
  vehicle: "Bike · Downtown",
  address: "120 Bay St, Unit 1402",
};
const TRACK_STEPS = [
  { key: "preparing", label: "Preparing", icon: "pot" },
  { key: "packed", label: "Packed", icon: "box" },
  { key: "out", label: "Out for delivery", icon: "truck" },
  { key: "delivered", label: "Delivered", icon: "check" },
];

/* ---------- helpers ---------- */
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function badgeHtml(label) {
  const k = label.toUpperCase().replace(/[\s-]/g, "_");
  return `<span class="chip ${BADGE_COLOR[k] || BADGE_COLOR.STANDARD}">${esc(label)}</span>`;
}
function fmtDate(iso) { try { return new Date(iso).toLocaleDateString("en-CA", { weekday: "long", month: "short", day: "numeric" }); } catch { return iso; } }
function timeLeft(iso) {
  const diff = Math.max(0, new Date(iso).getTime() - Date.now());
  const days = Math.floor(diff / 86400000), hours = Math.floor((diff % 86400000) / 3600000);
  return `${days} Day${days === 1 ? "" : "s"} ${hours} Hour${hours === 1 ? "" : "s"}`;
}
function money(n) { return "$" + Number(n).toFixed(2); }
function trustHtml(r) {
  return `<span class="trust-badge">${r.hygieneRating}★</span><span class="trust-sub">DineSafe ${r.healthScore}/100${r.verified ? " · verified" : ""}</span>`;
}
function versionBadge(kind) {
  const v = `<span class="ver-badge">${VERSION} · latest</span>`;
  const older = `<a class="ver-older" href="${VERSION_LINK}">older version</a>`;
  return `<span class="ver-line ${kind === "partner" ? "p" : ""}">Minimal Bites ${v} ${older} · offline-capable PWA</span>`;
}
function flash(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- router ---------- */
const routes = { "": renderHome, build: renderBuild, dashboard: renderDashboard, track: renderTrack, partners: renderPartners, kitchen: renderKitchen };
function currentRoute() { const h = location.hash.replace(/^#\/?/, "").split("?")[0]; return routes[h] ? h : ""; }
function navigate() {
  const r = currentRoute();
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r));
  const app = document.getElementById("app");
  app.className = (r === "partners" || r === "kitchen") ? "partner" : "consumer";
  app.innerHTML = routes[r]();
  window.scrollTo(0, 0);
}

/* ==================== SUBSCRIBER · HOME ==================== */
function renderHome() {
  let selected = "MEALS_6";
  const tierBtns = TIERS.map((t) => `<button class="tier ${t.id === selected ? "selected" : ""}" data-tier="${t.id}" onclick="selectTier(this,'${t.id}')">
      <div class="tier-meals">${t.meals} meals/wk</div>
      <div class="tier-price">$${t.perMeal}<span>/meal</span></div>
      <div class="tier-total">${money(t.total)}/wk all-in</div>
      <div class="tier-desc">${t.desc}</div>
    </button>`).join("");

  const steps = [
    ["1", "Register", "One-tap Apple Pay / Google Pay. No forms, no passwords.", "bolt"],
    ["2", "Choose", "Pick your kitchen & meals — you see who cooks your food.", "tap"],
    ["3", "Get delivery", "One box, one bill, one weekly delivery. All-inclusive.", "truck"],
  ].map(([n, t, d, ic]) => `
    <div class="step">
      <div class="step-num">${n}</div>
      <div class="step-body">
        <div class="step-head">${ico(ic)}<span>${t}</span></div>
        <div class="step-d">${d}</div>
      </div>
    </div>`).join("");

  const features = [
    ["chef", "Zero Choice Fatigue", "6–10 curated chef-prepared meals weekly."],
    ["sparkle", "Zero Fee Surprise", "Flat $12–$14/meal. Fees included, always."],
    ["bolt", "Passwordless", "Wallet tap creates your account & address."],
    ["tap", "1-Tap Controls", "Skip, pause, swap — no exit surveys."],
    ["factory", "Kitchen Aggregation", "Partners get batch totals, not 140 tickets."],
    ["calendar", "Auto-Selection", "Forgot to choose? Meals picked from your diet."],
  ].map(([ic, t, d]) => `<div class="feature"><div class="feat-ic">${ico(ic)}</div><div class="feat-t">${t}</div><div class="feat-d">${d}</div></div>`).join("");

  return `
    <div class="consumer-shell">
      <header class="topbar">
        <a href="#" class="brand">${ico("home")}<div><b>Minimal Bites</b><span class="sub">Zero-friction meals · GTA</span></div></a>
        <nav class="consumer-nav">
          <a href="#build" class="navbtn primary">${ico("plus")}<span>Build your box</span></a>
          <a href="#dashboard" class="navbtn ghost">${ico("tap")}<span>My Meals</span></a>
          <a href="#partners" class="navbtn link">${ico("store")}<span>Restaurant owners</span></a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-title">
          <div class="eyebrow">Just 3 things. That's it.</div>
          <h1>Chef-prepared meals.<br/><span class="accent">3 easy steps.</span></h1>
          <p>Register, choose, get weekly delivery. No forms. No surprise fees. Know exactly who cooks your food — and their hygiene score.</p>
        </div>

        <div class="steps hero-steps">${steps}</div>

        <div class="tiers">${tierBtns}</div>
        <div class="card checkout">
          <div class="kicker">Live demo — <code>POST /api/v1/auth/wallet-checkout</code></div>
          <button class="btn primary big" onclick="simulateCheckout()">${ico("wallet")}<span>Apple Pay / Google Pay — subscribe</span></button>
          <pre id="checkout-result" hidden></pre>
        </div>
      </section>

      <section class="features">
        <div class="featgrid">${features}</div>
      </section>

      <section class="for-partners">
        <div class="fp-icon">${ico("store")}</div>
        <div>
          <div class="kicker">Own a kitchen?</div>
          <div class="fp-t">Run your restaurant on Minimal Bites</div>
          <div class="fp-d">Set up your profile & menu, fulfill committed weekly orders, get paid automatically.</div>
        </div>
        <a href="#partners" class="btn dark">${ico("arrow")}<span>Restaurant owners →</span></a>
      </section>

      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

function selectTier(el, id) { document.querySelectorAll(".tier").forEach((b) => b.classList.remove("selected")); el.classList.add("selected"); }
function simulateCheckout() {
  const tier = document.querySelector(".tier.selected")?.dataset.tier || "MEALS_6";
  const t = TIERS.find((x) => x.id === tier);
  const res = { status: "SUCCESS", userId: "usr_" + Math.random().toString(36).slice(2, 8), subscriptionId: "sub_" + Math.random().toString(36).slice(2, 8), totalChargedCAD: t.total, nextDeliveryDate: "2026-08-18T17:00:00.000Z", cutoffAt: "2026-08-16T23:59:59.000Z", shippingAddress: { street: "120 Bay St", unit: "Suite 1402", postalCode: "M5J 2R8", city: "Toronto" }, mealsSelected: t.meals };
  const pre = document.getElementById("checkout-result");
  pre.hidden = false; pre.textContent = JSON.stringify(res, null, 2);
  flash(`✓ Charged ${money(t.total)} · ${t.meals} meals selected · all-inclusive`);
}

/* ==================== SUBSCRIBER · BUILD YOUR BOX ==================== */
const buildState = {
  selected: {}, // mealId -> qty
  rest: "all", area: "all", cuisine: "all", diet: "all", cal: "all", price: "all",
  budget: "", sort: "default",
};
function buildMeals() {
  return DATA.meals.filter((m) => {
    const r = RESTAURANTS.find((x) => x.id === m.restaurantId);
    if (buildState.rest !== "all" && m.restaurantId !== buildState.rest) return false;
    if (buildState.area !== "all" && REST_AREA[m.restaurantId] !== buildState.area) return false;
    if (buildState.cuisine !== "all" && !(r && r.cuisine === buildState.cuisine)) return false;
    if (buildState.diet !== "all" && !m.badges.includes(buildState.diet)) return false;
    if (buildState.cal === "low" && m.calories >= 500) return false;
    if (buildState.cal === "mid" && (m.calories < 500 || m.calories > 600)) return false;
    if (buildState.cal === "high" && m.calories <= 600) return false;
    if (buildState.price === "12" && mealPrice(m.id) !== 12) return false;
    if (buildState.price === "13" && mealPrice(m.id) !== 13) return false;
    if (buildState.price === "14" && mealPrice(m.id) !== 14) return false;
    return true;
  });
}
function buildTotals() {
  let total = 0, count = 0, veg = 0, nonveg = 0, protein = 0;
  DATA.meals.forEach((m) => {
    const q = buildState.selected[m.id] || 0;
    if (q > 0) { total += q * mealPrice(m.id); count += q; if (mealType(m.id) === "veg") veg += q; else nonveg += q; protein += q * m.proteinGrams; }
  });
  return { total, count, veg, nonveg, protein };
}
function setQty(id, delta) {
  const q = (buildState.selected[id] || 0) + delta;
  if (q <= 0) delete buildState.selected[id]; else buildState.selected[id] = q;
  navigate();
}
function buildFilter(label) { return `<button class="chip ${label === "all" ? "on" : ""}" onclick="setBuildFilter('${label}')">All</button>`; }
function setBuildFilter(field, val) { buildState[field] = val; navigate(); }
function quickCombo(kind) {
  buildState.selected = {};
  const meals = DATA.meals;
  if (kind === "2+3") {
    // 2 non-veg + 3 veg
    const vegs = meals.filter((m) => mealType(m.id) === "veg").sort((a, b) => mealPrice(a.id) - mealPrice(b.id));
    const meats = meals.filter((m) => mealType(m.id) === "nonveg").sort((a, b) => mealPrice(a.id) - mealPrice(b.id));
    [...meats.slice(0, 2), ...vegs.slice(0, 3)].forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "highprotein") {
    meals.filter((m) => m.badges.includes("HIGH_PROTEIN")).sort((a, b) => b.proteinGrams - a.proteinGrams).slice(0, 6).forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "budget") {
    meals.sort((a, b) => mealPrice(a.id) - mealPrice(b.id)).slice(0, 6).forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "all") {
    buildMeals().forEach((m) => (buildState.selected[m.id] = 1));
  }
  navigate();
}
function applyBudget() {
  const budget = parseFloat(buildState.budget);
  if (!budget) return;
  // best-value: maximize meal count within budget (cheapest first)
  buildState.selected = {};
  const pool = [...buildMeals()].sort((a, b) => mealPrice(a.id) - mealPrice(b.id));
  let spent = 0;
  for (const m of pool) { const p = mealPrice(m.id); if (spent + p <= budget) { buildState.selected[m.id] = 1; spent += p; } }
  navigate();
}

function renderBuild() {
  const cuisines = [...new Set(RESTAURANTS.map((r) => r.cuisine))];
  const diets = ["HIGH_PROTEIN", "GLUTEN_FREE", "VEGETARIAN", "BALANCED"];
  const totals = buildTotals();
  const list = buildMeals().sort((a, b) => {
    if (buildState.sort === "price") return mealPrice(a.id) - mealPrice(b.id);
    if (buildState.sort === "protein") return b.proteinGrams - a.proteinGrams;
    return 0;
  });

  const rows = list.map((m) => {
    const r = RESTAURANTS.find((x) => x.id === m.restaurantId);
    const q = buildState.selected[m.id] || 0;
    const p = mealPrice(m.id);
    return `<div class="meal-pick ${q ? "on" : ""}">
      <div class="mp-info">
        <div class="mp-title">${esc(m.title)}</div>
        <div class="mp-meta">${m.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${m.calories} Cal · ${m.proteinGrams}g</span><span class="mp-price">$${p}</span></div>
        <div class="mp-rest">${ico("pin")} ${esc(r.name)} · ${esc(r.neighborhood)} · ${areaLabel(REST_AREA[m.restaurantId])}</div>
      </div>
      <div class="stepper">
        <button class="stp-btn" onclick="setQty('${m.id}',-1)">−</button>
        <span class="stp-val">${q}</span>
        <button class="stp-btn" onclick="setQty('${m.id}',1)">+</button>
      </div>
    </div>`;
  }).join("");

  return `
    <div class="consumer-shell">
      <header class="topbar">
        <a href="#" class="brand">${ico("home")}<div><b>Minimal Bites</b></div></a>
        <nav class="consumer-nav">
          <a href="#dashboard" class="navbtn ghost">${ico("tap")}<span>My Meals</span></a>
          <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a>
        </nav>
      </header>

      <section class="build-hero">
        <div class="eyebrow">Build your box</div>
        <h1>Pick your meals.<br/>See your total <span class="accent">instantly.</span></h1>
        <p>Mix veg &amp; non-veg, filter by restaurant or area, or set a weekly budget — we show what's possible and your all-inclusive total updates live.</p>
      </section>

      <div class="combo-strip">
        <div class="combo-title">Quick combos</div>
        <button class="btn ghost sm" onclick="quickCombo('2+3')">2 non-veg + 3 veg</button>
        <button class="btn ghost sm" onclick="quickCombo('highprotein')">High-protein ×6</button>
        <button class="btn ghost sm" onclick="quickCombo('budget')">Best value ×6</button>
        <button class="btn ghost sm" onclick="quickCombo('all')">Add all shown</button>
      </div>

      <div class="build-grid">
        <div class="filters-panel">
          <div class="kicker">${ico("gear")} Filters</div>
          <div class="frow"><span class="frow-label">Area</span>
            <button class="chip ${buildState.area === "all" ? "on" : ""}" onclick="setBuildFilter('area','all')">All</button>
            <button class="chip ${buildState.area === "nearby" ? "on" : ""}" onclick="setBuildFilter('area','nearby')">In your area</button>
            <button class="chip ${buildState.area === "further" ? "on" : ""}" onclick="setBuildFilter('area','further')">Further away</button>
          </div>
          <div class="frow"><span class="frow-label">Restaurant</span>
            <button class="chip ${buildState.rest === "all" ? "on" : ""}" onclick="setBuildFilter('rest','all')">All</button>
            ${RESTAURANTS.map((r) => `<button class="chip ${buildState.rest === r.id ? "on" : ""}" onclick="setBuildFilter('rest','${r.id}')">${esc(r.name)}</button>`).join("")}
          </div>
          <div class="frow"><span class="frow-label">Cuisine</span>
            <button class="chip ${buildState.cuisine === "all" ? "on" : ""}" onclick="setBuildFilter('cuisine','all')">All</button>
            ${cuisines.map((c) => `<button class="chip ${buildState.cuisine === c ? "on" : ""}" onclick="setBuildFilter('cuisine','${esc(c)}')">${esc(c)}</button>`).join("")}
          </div>
          <div class="frow"><span class="frow-label">Diet</span>
            <button class="chip ${buildState.diet === "all" ? "on" : ""}" onclick="setBuildFilter('diet','all')">All</button>
            ${diets.map((d) => `<button class="chip ${buildState.diet === d ? "on" : ""}" onclick="setBuildFilter('diet','${d}')">${esc(d.replace("_", " ").toLowerCase())}</button>`).join("")}
          </div>
          <div class="frow"><span class="frow-label">Calories</span>
            <button class="chip ${buildState.cal === "all" ? "on" : ""}" onclick="setBuildFilter('cal','all')">All</button>
            <button class="chip ${buildState.cal === "low" ? "on" : ""}" onclick="setBuildFilter('cal','low')">Under 500</button>
            <button class="chip ${buildState.cal === "mid" ? "on" : ""}" onclick="setBuildFilter('cal','mid')">500–600</button>
            <button class="chip ${buildState.cal === "high" ? "on" : ""}" onclick="setBuildFilter('cal','high')">600+</button>
          </div>
          <div class="frow"><span class="frow-label">Price / meal</span>
            <button class="chip ${buildState.price === "all" ? "on" : ""}" onclick="setBuildFilter('price','all')">All</button>
            <button class="chip ${buildState.price === "12" ? "on" : ""}" onclick="setBuildFilter('price','12')">$12</button>
            <button class="chip ${buildState.price === "13" ? "on" : ""}" onclick="setBuildFilter('price','13')">$13</button>
            <button class="chip ${buildState.price === "14" ? "on" : ""}" onclick="setBuildFilter('price','14')">$14</button>
          </div>
          <div class="frow"><span class="frow-label">Sort</span>
            <button class="chip ${buildState.sort === "default" ? "on" : ""}" onclick="setBuildFilter('sort','default')">Default</button>
            <button class="chip ${buildState.sort === "price" ? "on" : ""}" onclick="setBuildFilter('sort','price')">Low price</button>
            <button class="chip ${buildState.sort === "protein" ? "on" : ""}" onclick="setBuildFilter('sort','protein')">High protein</button>
          </div>
          <div class="budget-box">
            <div class="kicker">${ico("wallet")} Weekly budget</div>
            <div class="budget-input"><span>$</span><input id="budget-input" type="number" min="0" placeholder="e.g. 80" value="${buildState.budget}" oninput="buildState.budget=this.value" /><button class="btn primary sm" onclick="applyBudget()">What's possible</button></div>
            <p class="muted sm">We pick the best-value mix under your budget and show the total.</p>
          </div>
        </div>

        <div class="meals-panel">
          <div class="meals-count">${list.length} meals shown${buildState.rest !== "all" || buildState.area !== "all" ? " · filtered" : ""}</div>
          <div class="meal-picks">${rows}</div>
        </div>
      </div>

      <div class="total-bar">
        <div class="tb-stats">
          <span><b>${totals.count}</b> meals</span>
          <span><b>${totals.veg}</b> veg</span>
          <span><b>${totals.nonveg}</b> non-veg</span>
          <span><b>${totals.protein}</b> g protein</span>
        </div>
        <div class="tb-total"><span class="tb-label">All-inclusive total</span><span class="tb-amt">${money(totals.total)}</span><span class="tb-note">delivery, fees &amp; tax included</span></div>
      </div>
    </div>`;
}

/* ---- delivery window selection (2-hour slots) ---- */
let chosenWindow = "5-7";
function deliveryWindowId() { return chosenWindow; }
function deliveryWindowSlot() { return (DELIVERY_WINDOWS.find((w) => w.id === chosenWindow) || DELIVERY_WINDOWS[0]).slot; }
function setDeliveryWindow(id) { chosenWindow = id; flash(`✓ Delivery window set to ${(DELIVERY_WINDOWS.find((w) => w.id === id) || {}).label}.`); navigate(); }

/* ==================== SUBSCRIBER · LIVE TRACKING ==================== */
function renderTrack() {
  const steps = TRACK_STEPS.map((s, i) => {
    const stateIdx = TRACK_STEPS.findIndex((x) => x.key === TRACK.status);
    const done = i < stateIdx, active = i === stateIdx;
    return `<div class="tr-step ${active ? "active" : done ? "done" : "todo"}">
      <div class="tr-node">${done ? ico("check") : ico(s.icon)}</div>
      <div class="tr-info"><div class="tr-label">${s.label}</div>${active ? `<div class="tr-sub">${stepSub(s.key)}</div>` : done ? `<div class="tr-sub">Complete</div>` : ""}</div>
    </div>`;
  }).join("");

  const statusLabel = TRACK_STEPS.find((s) => s.key === TRACK.status).label;

  return `
    <div class="mobile">
      <header class="topbar">
        <a href="#" class="brand">${ico("home")}<div><b>Minimal Bites</b></div></a>
        <a href="#dashboard" class="navbtn ghost sm">${ico("arrowLeft")} Back</a>
      </header>

      <section class="card block">
        <div class="kicker">${ico("truck")} Live tracking</div>
        <div class="h2">${esc(statusLabel)}</div>
        <div class="eta-big">${TRACK.etaMin} min</div>
        <div class="muted">ETA ${fmtEta(TRACK.etaMin)} · arriving ${esc(TRACK.address)}</div>
        <div class="progress"><div class="progress-fill" style="width:${TRACK.progress}%"></div></div>
      </section>

      <section class="track-steps">${steps}</section>

      <section class="card block">
        <div class="kicker">${ico("truck")} Your courier</div>
        <div class="courier-row">
          <div class="c-avatar">${esc(TRACK.courierName[0])}</div>
          <div><div class="bold">${esc(TRACK.courierName)}</div><div class="muted sm">${esc(TRACK.vehicle)} · ${esc(TRACK.address)}</div></div>
        </div>
        <div class="cutoff" style="margin-top:12px">${ico("clock")} Next update in ~2 min · live</div>
      </section>

      <div class="actions">
        <button class="btn ghost col" onclick="advanceTrack()">${ico("check")}<span>Simulate step</span></button>
        <button class="btn ghost col" onclick="flash('Courier contacted.')">${ico("truck")}<span>Contact courier</span></button>
      </div>
    </div>`;
}
function stepSub(key) {
  return { preparing: "Your meals are being cooked & packed", packed: "Box sealed & labeled", out: "Courier is on the way", delivered: "Enjoy your meals!" }[key] || "";
}
function fmtEta(min) {
  const now = new Date();
  const t = new Date(now.getTime() + min * 60000);
  return t.toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
}
function advanceTrack() {
  const idx = TRACK_STEPS.findIndex((x) => x.key === TRACK.status);
  if (idx < TRACK_STEPS.length - 1) {
    TRACK.status = TRACK_STEPS[idx + 1].key;
    TRACK.etaMin = Math.max(3, TRACK.etaMin - 22);
    TRACK.progress = Math.min(100, TRACK.progress + 26);
  }
  flash("✓ Order status updated.");
  navigate();
}

/* ==================== SUBSCRIBER · DASHBOARD ==================== */
let kitchenFilter = "all";
function renderDashboard() {
  const d = DATA.dashboard;
  const { order, subscription, address, user } = d;
  const perMeal = subscription.perMeal, total = order.totalAmount;
  const planCount = { MEALS_4: "4 meals", MEALS_6: "6 meals", MEALS_8: "8 meals" }[subscription.planTier];
  const kitchens = []; const seen = {};
  order.items.forEach((it) => { if (it.restaurantId && !seen[it.restaurantId]) { seen[it.restaurantId] = true; kitchens.push({ id: it.restaurantId, name: restName(it.restaurantId) }); } });
  const visible = kitchenFilter === "all" ? order.items : order.items.filter((it) => it.restaurantId === kitchenFilter);
  const filterChips = kitchens.length > 1 ? `<div class="kitchen-filters">
      <button class="chip ${kitchenFilter === "all" ? "on" : ""}" onclick="setKitchenFilter('all')">All kitchens</button>
      ${kitchens.map((k) => `<button class="chip ${kitchenFilter === k.id ? "on" : ""}" onclick="setKitchenFilter('${k.id}')">${esc(k.name)}</button>`).join("")}</div>` : "";

  const items = visible.map((it) => `
    <div class="card meal">
      <div class="meal-top">
        <div>
          <div class="meal-title"><span class="slot">${it.slot}</span> ${esc(it.title)}</div>
          ${it.restaurantId ? `<div class="meal-rest">${ico("chef")} prepared by ${esc(restName(it.restaurantId))}</div>` : ""}
          <div class="meal-meta">${it.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${it.calories} Cal · ${it.proteinGrams}g protein</span></div>
        </div>
        <button class="btn ghost sm" onclick="renderSwap(${it.slot})">${ico("swap")} Swap</button>
      </div>
      <div id="swap-${it.slot}"></div>
    </div>`).join("");

  return `
    <div class="mobile">
      <header class="topbar">
        <a href="#" class="brand">${ico("home")}<div><b>Minimal Bites</b></div></a>
        <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a>
      </header>

      <section class="card block">
        <div class="kicker">${ico("truck")} Next delivery</div>
        <div class="h2">${fmtDate(order.deliveryDate)} · ${deliveryWindowSlot()}</div>
        <div class="muted">${ico("pin")} ${esc(address.street)}${address.unit ? ", " + esc(address.unit) : ""} · ${esc(user.dropoffPreference.replace("_", " "))}</div>
        <div class="window-pick">
          <span class="wp-label">${ico("clock")} Choose your 2-hour window</span>
          <div class="wp-opts">
            ${DELIVERY_WINDOWS.map((w) => `<button class="wp-opt ${deliveryWindowId() === w.id ? "on" : ""}" onclick="setDeliveryWindow('${w.id}')">${w.label}</button>`).join("")}
          </div>
        </div>
        <div class="cutoff">${ico("clock")} Edit cutoff: ${timeLeft(order.cutoffAt)} left · <a href="#track" class="track-link">${ico("truck")} Track</a></div>
      </section>

      <section class="card block">${kitchenCard(subscription)}</section>

      <div class="row-between"><div class="h3">Your ${planCount} this week</div><div class="accent bold">${money(total)} all-in</div></div>
      ${filterChips}
      <div class="meals">${items}</div>

      <div class="actions">
        <button class="btn ghost col" onclick="flash('✓ Week skipped — no charge.')">${ico("pause")}<span>Skip week</span></button>
        <button class="btn ghost col" onclick="flash('✓ Address updated to 100 King St W.')">${ico("pin")}<span>Address</span></button>
        <button class="btn ghost col" onclick="flash('✓ Added meal · new total ' + money(${total + perMeal}))">${ico("plus")}<span>Add meal</span></button>
      </div>

      <section class="card block">
        <div class="kicker">${ico("wallet")} Billing summary</div>
        <div class="billrow"><span>${order.items.length} meals × ${money(perMeal)}/ea</span><span class="bold">${money(total)}</span></div>
        <div class="billrow"><span>Delivery, service fees &amp; taxes</span><span class="accent bold">INCLUDED ($0.00)</span></div>
        <div class="autocharge">${ico("clock")} Auto-charging ${money(total)} on ${fmtDate(order.cutoffAt)} at 11:59 PM.</div>
      </section>
    </div>
    <div class="mobnav">
      <a data-nav="dashboard" href="#dashboard" class="active">${ico("home")}<span>This Week</span></a>
      <a data-nav="track" href="#track">${ico("truck")}<span>Track</span></a>
      <a href="#dashboard" onclick="flash('Settings coming soon')">${ico("gear")}<span>Settings</span></a>
    </div>`;
}

function kitchenCard(sub) {
  if (sub.boxMode === "SINGLE_RESTAURANT" && sub.preferredRestaurant) {
    const r = sub.preferredRestaurant;
    return `<div class="row-between" style="margin:0 0 6px"><div class="kicker">${ico("chef")} Your kitchen</div>
        <button class="btn ghost sm" onclick="setBoxMode('MIXED',null)">Variety</button></div>
      <div class="kitchen-line"><span class="k-avatar">${esc(r.name[0])}</span>
        <div><div class="bold">${esc(r.name)}</div><div class="trust-row">${trustHtml(r)}</div>
        <div class="muted sm">${esc(r.neighborhood)} · full-week box committed</div></div></div>
      <p class="muted sm">All ${DATA.dashboard.order.items.length} meals from this kitchen. They know you're committed for the full week.</p>`;
  }
  return `<div class="row-between" style="margin:0 0 6px"><div class="kicker">${ico("chef")} Your kitchen</div>
      <button class="btn ghost sm" onclick="toggleKitchenPick()">${ico("swap")} Choose</button></div>
    <p class="muted sm">Currently <b>curated variety</b> — every meal labeled with its kitchen.</p>
    <div id="kitchen-pick" hidden>
      <div class="kicker" style="margin:10px 0 6px">Commit your whole weekly box to one kitchen:</div>
      ${DATA.restaurants.map((r) => `<button class="kitchen-opt" onclick="setBoxMode('SINGLE_RESTAURANT','${r.id}')">
          <span class="k-avatar">${esc(r.name[0])}</span><div><div class="bold">${esc(r.name)}</div>
          <div class="trust-row">${trustHtml(r)}</div>
          <div class="muted sm">${esc(r.cuisine)} · ${esc(r.neighborhood)}</div></div></button>`).join("")}
    </div>`;
}
function toggleKitchenPick() { const el = document.getElementById("kitchen-pick"); if (el) el.hidden = !el.hidden; }
function setKitchenFilter(id) { kitchenFilter = id; navigate(); }
function setBoxMode(mode, restId) {
  const sub = DATA.dashboard.subscription;
  sub.boxMode = mode;
  sub.preferredRestaurant = mode === "SINGLE_RESTAURANT" ? RESTAURANTS.find((r) => r.id === restId) : null;
  if (mode === "SINGLE_RESTAURANT") {
    const menu = DATA.meals.filter((m) => m.restaurantId === restId);
    if (menu.length) DATA.dashboard.order.items = DATA.dashboard.order.items.map((it, i) => {
      const m = menu[i % menu.length];
      return { slot: it.slot, mealId: m.id, restaurantId: m.restaurantId, title: m.title, calories: m.calories, proteinGrams: m.proteinGrams, badges: m.badges };
    });
  }
  flash(mode === "SINGLE_RESTAURANT" ? `✓ Your whole weekly box is now from ${(sub.preferredRestaurant || {}).name}.` : "✓ Your box is now curated variety.");
  navigate();
}
function renderSwap(slot) {
  const item = DATA.dashboard.order.items.find((x) => x.slot === slot); if (!item) return;
  const opts = DATA.meals.map((m) => `<button class="swap-opt ${m.id === item.mealId ? "on" : ""}" onclick="doSwap(${slot},'${m.id}')">${esc(m.title)}<span class="muted">${m.calories} Cal · ${esc(restName(m.restaurantId))}</span></button>`).join("");
  document.getElementById("swap-" + slot).innerHTML = `<div class="kicker" style="margin-top:10px">Choose a replacement:</div><div class="swap-grid">${opts}</div>`;
}
function doSwap(slot, id) {
  const item = DATA.dashboard.order.items.find((x) => x.slot === slot); const m = DATA.meals.find((x) => x.id === id);
  if (!item || !m) return;
  Object.assign(item, { mealId: id, restaurantId: m.restaurantId, title: m.title, calories: m.calories, proteinGrams: m.proteinGrams, badges: m.badges });
  flash("✓ Meal swapped."); navigate();
}

/* ==================== PARTNER · PORTAL (distinct product) ==================== */
function renderPartners() {
  const steps = [
    ["1", "Set up", "Profile, menu & delivery zones. Publish your hygiene score.", "store"],
    ["2", "Fulfill orders", "Committed weekly volume + one consolidated prep list.", "pot"],
    ["3", "Get paid", "Automatic weekly payout for every confirmed meal.", "wallet"],
  ].map(([n, t, d, ic]) => `<div class="pstep"><span class="pstep-num">${n}</span><div class="pstep-body"><div class="pstep-t">${ico(ic)} ${t}</div><div class="pstep-d">${d}</div></div></div>`).join("");

  return `
    <div class="partner-shell">
      <header class="p-topbar">
        <div class="p-brand">${ico("store")}<div><b>Minimal Bites</b><span>for restaurant partners</span></div></div>
        <nav class="p-nav">
          <a href="#partners" class="p-navbtn active" data-nav="partners">${ico("home")} Overview</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen Dashboard</a>
        </nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a>
      </header>

      <section class="p-hero">
        <div class="eyebrow dark">Get on the GTA's zero-friction meal box</div>
        <h1>Run your kitchen on Minimal Bites</h1>
        <p>We bring you committed weekly customers, consolidated batch orders, and automatic payouts. You just cook.</p>
      </section>

      <section class="p-steps"><div class="p-label">It's 3 steps to your first payout</div>${steps}</section>

      <section class="p-cta">
        <div class="p-cta-left">
          <div class="p-label">Start now — no login needed for this demo</div>
          <div class="p-cta-t">Open the Kitchen Dashboard</div>
          <div class="p-cta-d">See your production matrix, committed weekly volume, and courier kanban.</div>
        </div>
        <a href="#kitchen" class="btn p-primary">${ico("pot")} Open Kitchen Dashboard ${ico("arrow")}</a>
      </section>

      <footer class="p-foot">Minimal Bites for Partners — a separate product for restaurant owners · ${versionBadge("partner")}</footer>
    </div>`;
}

/* ==================== PARTNER · KITCHEN DASHBOARD ==================== */
let kitchenSel = "all";
function setKitchenSel(id) { kitchenSel = id; navigate(); }
function renderKitchen() {
  const pm = DATA.productionMatrix;
  const dishes = kitchenSel === "all" ? pm.dishes : pm.dishes.filter((d) => d.restaurantId === kitchenSel);
  const kitchenName = kitchenSel === "all" ? "All partner kitchens" : restName(kitchenSel);
  const totalForKitchen = dishes.reduce((s, d) => s + d.totalQuantity, 0);
  const packedForKitchen = dishes.reduce((s, d) => s + d.packedQuantity, 0);
  const out = Object.values(pm.courier).reduce((s, n) => s + n, 0);
  const cooking = totalForKitchen - packedForKitchen - out;

  const rows = dishes.map((d) => {
    const pct = d.totalQuantity ? Math.round((d.packedQuantity / d.totalQuantity) * 100) : 0;
    const state = pct >= 100 ? "DONE" : pct > 0 ? "PACKED" : "READY";
    return `<tr><td class="qty">${d.totalQuantity}x</td><td class="name">${esc(d.title)}</td>
      <td>${restName(d.restaurantId) === d.title ? "" : `<span class="p-muted">${esc(restName(d.restaurantId))}</span>`}</td>
      <td><div class="pack"><div class="bar"><div class="fill" style="width:${pct}%"></div></div>
        <span>${d.packedQuantity}/${d.totalQuantity} ${state}</span>
        <button class="link" onclick="flash('Labels sent to printer')">${ico("printer")} Print</button></div></td></tr>`;
  }).join("");

  const kitchenSelect = `<label class="btn p-outline sm">${ico("store")} Kitchen
      <select onchange="setKitchenSel(this.value)">
        <option value="all" ${kitchenSel === "all" ? "selected" : ""}>All partner kitchens</option>
        ${DATA.restaurants.map((r) => `<option value="${r.id}" ${kitchenSel === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}
      </select></label>`;

  const commitment = kitchenSel !== "all"
    ? `<section class="commit-banner">
        <div><span class="cmt-label">Committed customers</span><span class="cmt-num">${committedCountFor(kitchenSel)}</span><span class="cmt-sub">signed up for a full week</span></div>
        <div><span class="cmt-label">Guaranteed weekly meals</span><span class="cmt-num">${committedMealsFor(kitchenSel)}</span><span class="cmt-sub">predictable volume</span></div>
        <div><span class="cmt-label">Weekly portions</span><span class="cmt-num">${totalForKitchen}</span><span class="cmt-sub">Tue 5–7PM · full-week routing</span></div>
      </section>` : "";

  return `
    <div class="partner-shell">
      <header class="p-topbar">
        <div class="p-brand">${ico("store")}<div><b>Minimal Bites</b><span>kitchen partner portal</span></div></div>
        <nav class="p-nav">
          <a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#kitchen" class="p-navbtn active" data-nav="kitchen">${ico("pot")} Kitchen Dashboard</a>
        </nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a>
      </header>

      <section class="p-filters">
        ${kitchenSelect}
        <button class="btn p-outline sm">${ico("calendar")} Tue, Aug 18 ▼</button>
        <button class="btn p-outline sm">${ico("clock")} 5–7 PM ▼</button>
        <button class="btn p-outline sm">${ico("chart")} Aggregated prep list ▼</button>
      </section>

      ${commitment}

      <section class="p-table-card">
        <div class="p-table-head"><span class="bold">${ico("pot")} Production Summary · ${esc(kitchenName)}</span><span class="p-sum">${totalForKitchen} MEALS</span></div>
        <table><thead><tr><th>Qty</th><th>Dish</th><th>Kitchen</th><th>Packing</th></tr></thead><tbody>${rows}</tbody></table>
      </section>

      <div class="kanban">
        <div class="lane"><div class="lane-h">${ico("pot")}<span>In Cooking</span><span class="pill slate">${Math.max(0, cooking)}</span></div>
          <ul>${dishes.filter((d) => d.packedQuantity < d.totalQuantity).map((d) => `<li>${d.totalQuantity - d.packedQuantity}x ${short(d.title)}</li>`).join("") || `<li class="muted">Nothing cooking</li>`}</ul></div>
        <div class="lane"><div class="lane-h">${ico("box")}<span>Packed & Labeled</span><span class="pill brand">${packedForKitchen}</span></div>
          <ul>${dishes.filter((d) => d.packedQuantity > 0).map((d) => `<li>${d.packedQuantity}x ${short(d.title)}</li>`).join("")}</ul></div>
        <div class="lane"><div class="lane-h">${ico("truck")}<span>Out With Courier</span><span class="pill sky">${out}</span></div>
          <ul>${pm.routes.map((r) => `<li>Route ${r.postalPrefix} — ${r.boxCount} boxes${pm.courier[r.postalPrefix] ? ` <span class="accent">(${pm.courier[r.postalPrefix]} shipped)</span>` : ""}</li>`).join("")}</ul></div>
      </div>

      <section class="p-controls card">
        <div class="p-label">Batch controls</div>
        <div class="controls">
          <button class="btn p-primary" onclick="flash('Thermal labels printing…')">${ico("printer")} Print all Tuesday labels</button>
          <button class="btn p-outline" onclick="flash('All dishes marked PACKED.')">${ico("check")} Mark all packed</button>
          <button class="btn p-outline" onclick="flash('Route shipped to courier.')">${ico("truck")} Ship next route</button>
          <button class="btn p-outline" onclick="exportMatrix()">${ico("download")} Export dish totals</button>
        </div>
      </section>

      <footer class="p-foot">Kitchen partner portal — aggregate batch totals, not chaotic order tickets.</footer>
    </div>`;
}
function committedCountFor(restId) { return DATA.dashboard.subscription.boxMode === "SINGLE_RESTAURANT" && DATA.dashboard.subscription.preferredRestaurant?.id === restId ? 1 : 0; }
function committedMealsFor(restId) { return committedCountFor(restId) * 6; }
function exportMatrix() {
  const blob = new Blob([JSON.stringify(DATA.productionMatrix, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "production-matrix.json"; a.click(); URL.revokeObjectURL(url); flash("Exported dish totals.");
}
function short(s) { return s.length > 26 ? s.slice(0, 26) + "…" : s; }

/* ---------- boot ---------- */
window.addEventListener("hashchange", navigate);
window.navigate = navigate;
window.setQty = setQty;
window.setBuildFilter = setBuildFilter;
window.quickCombo = quickCombo;
window.applyBudget = applyBudget;
window.buildState = buildState;
window.setDeliveryWindow = setDeliveryWindow;
window.advanceTrack = advanceTrack;
window.TRACK = TRACK;
window.selectTier = selectTier;
window.simulateCheckout = simulateCheckout;
window.renderSwap = renderSwap;
window.doSwap = doSwap;
window.setKitchenFilter = setKitchenFilter;
window.setKitchenSel = setKitchenSel;
window.setBoxMode = setBoxMode;
window.toggleKitchenPick = toggleKitchenPick;
window.flash = flash;
window.exportMatrix = exportMatrix;

if (navigator && navigator.serviceWorker && typeof navigator.serviceWorker.register === "function") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
navigate();
