/* ============================================================================
   Minimal Bites — self-contained static PWA demo
   Data embedded here mirrors the live Express + PostgreSQL API responses so the
   site works fully offline and on GitHub Pages (no backend needed).
   ========================================================================== */

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
    user: {
      fullName: "Aria Chen",
      phone: "+1 416 555 0198",
      dietaryBadges: ["HIGH_PROTEIN", "GLUTEN_FREE"],
      dropoffPreference: "CONCIERGE",
    },
    subscription: {
      id: "sub_77123",
      planTier: "MEALS_6",
      deliveryDay: "TUESDAY_PM",
      deliveryLabel: "TUESDAY PM",
      window: "5:00 PM - 7:00 PM",
      isPaused: false,
      perMeal: 13,
      boxMode: "MIXED",
      preferredRestaurant: null,
    },
    address: {
      street: "120 Bay St",
      unit: "Suite 1402",
      city: "Toronto",
      province: "ON",
      postalCode: "M5J 2R8",
    },
    order: {
      id: "ord_aria_20260818",
      deliveryDate: "2026-08-18T17:00:00.000Z",
      status: "SCHEDULED",
      totalAmount: 78,
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
    totalMealsToCook: 266,
    totalPacked: 180,
    dishes: [
      { mealId: "meal_shawarma_1", restaurantId: "rest_oak_ash", title: "Grilled Chicken Shawarma Bowl", calories: 580, badges: ["HIGH_PROTEIN"], totalQuantity: 140, packedQuantity: 80 },
      { mealId: "meal_salmon_2", restaurantId: "rest_sweet_basil", title: "Lemon Herb Atlantic Salmon", calories: 520, badges: ["GLUTEN_FREE"], totalQuantity: 85, packedQuantity: 85 },
      { mealId: "meal_teriyaki_3", restaurantId: "rest_kobu", title: "Beef Teriyaki & Jasmine Rice", calories: 610, badges: ["BALANCED"], totalQuantity: 25, packedQuantity: 0 },
      { mealId: "meal_falafel_4", restaurantId: "rest_sweet_basil", title: "Mediterranean Falafel Plate", calories: 480, badges: ["VEGETARIAN"], totalQuantity: 15, packedQuantity: 15 },
      { mealId: "meal_steak_5", restaurantId: "rest_oak_ash", title: "Chili Lime Steak & Sweet Potato", calories: 640, badges: ["HIGH_PROTEIN"], totalQuantity: 1, packedQuantity: 0 },
    ],
    routes: [
      { postalPrefix: "M5J", boxCount: 30 },
      { postalPrefix: "M5V", boxCount: 35 },
      { postalPrefix: "M5K", boxCount: 28 },
      { postalPrefix: "M5H", boxCount: 22 },
    ],
    courier: { M5V: 30, M5J: 30 },
  },
};

const TIERS = [
  { id: "MEALS_4", meals: 4, perMeal: 14, total: 56, desc: "Best for solo / couple" },
  { id: "MEALS_6", meals: 6, perMeal: 13, total: 78, desc: "Most popular" },
  { id: "MEALS_8", meals: 8, perMeal: 12, total: 96, desc: "Best per-meal value" },
];

const BADGE_COLOR = {
  HIGH_PROTEIN: "bg-rose-100 text-rose-700",
  GLUTEN_FREE: "bg-amber-100 text-amber-700",
  VEGETARIAN: "bg-emerald-100 text-emerald-700",
  VEGAN: "bg-lime-100 text-lime-700",
  KETO: "bg-violet-100 text-violet-700",
  BALANCED: "bg-sky-100 text-sky-700",
  STANDARD: "bg-slate-100 text-slate-600",
};

/* ---------- helpers ---------- */
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function badgeHtml(label) {
  const k = label.toUpperCase().replace(/[\s-]/g, "_");
  return `<span class="chip ${BADGE_COLOR[k] || BADGE_COLOR.STANDARD}">${esc(label)}</span>`;
}

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { weekday: "long", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}
function fmtWindow(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { weekday: "long", month: "short", day: "numeric" }) + " · 5:00 PM - 7:00 PM";
  } catch {
    return iso;
  }
}
function timeLeft(iso) {
  const cutoff = new Date(iso).getTime();
  const diff = Math.max(0, cutoff - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  return `${days} Day${days === 1 ? "" : "s"} ${hours} Hour${hours === 1 ? "" : "s"}`;
}
function money(n) {
  return "$" + Number(n).toFixed(2);
}

/* ---------- toast ---------- */
function flash(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- router ---------- */
const routes = {
  "": renderLanding,
  dashboard: renderDashboard,
  kitchen: renderKitchen,
};

function currentRoute() {
  const h = location.hash.replace(/^#\/?/, "").split("?")[0];
  return routes[h] ? h : "";
}
function navigate() {
  const r = currentRoute();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === r);
  });
  const app = document.getElementById("app");
  app.innerHTML = routes[r]();
  window.scrollTo(0, 0);
}

/* ==================== LANDING ==================== */
function renderLanding() {
  let selected = "MEALS_6";
  const tierBtns = TIERS.map(
    (t) => `<button class="tier ${t.id === selected ? "selected" : ""}" data-tier="${t.id}" onclick="selectTier(this,'${t.id}')">
      <div class="tier-meals">${t.meals} meals/wk</div>
      <div class="tier-price">$${t.perMeal}<span>/meal</span></div>
      <div class="tier-total">${money(t.total)}/wk all-in</div>
      <div class="tier-desc">${t.desc}</div>
    </button>`
  ).join("");

  const features = [
    ["🧠", "Zero Choice Fatigue", "6–10 curated chef-prepared meals weekly. No 50-item menus."],
    ["💸", "Zero Fee Surprise", "Flat $12–$14/meal. Taxes, shipping & service included. Always."],
    ["⚡", "Passwordless Onboarding", "Apple Pay / Google Pay creates your account & address in one tap."],
    ["👆", "1-Tap Subscription Controls", "Skip, pause, swap or change your window without exit surveys."],
    ["🏭", "Kitchen Batch Aggregation", "Partners get 'Cook 140x Shawarma Bowls', not 140 separate tickets."],
    ["🗓️", "Auto-Selection Engine", "Forgot to choose? Dietary-badge-aware meals are picked for you."],
  ].map(([i, t, d]) => `<div class="feature"><div class="feat-ico">${i}</div><div class="feat-t">${t}</div><div class="feat-d">${d}</div></div>`).join("");

  return `
    <header class="topbar">
      <div class="brand"><span class="logo">MB</span><div><b>Minimal Bites</b><span class="sub">Zero-friction meals · GTA</span></div></div>
      <nav>
        <a data-nav="dashboard" href="#dashboard" class="navbtn ghost">Subscriber Dashboard</a>
        <a data-nav="kitchen" href="#kitchen" class="navbtn ghost">Kitchen Portal</a>
      </nav>
    </header>

    <section class="steps-wrap">
      <div class="steps-head">How it works — just 3 steps</div>
      <div class="steps">
        <div class="step"><span class="step-num">1</span><div><div class="step-t">Register</div><div class="step-d">One-tap Apple Pay / Google Pay. No forms, no passwords — your account &amp; address are created automatically.</div></div></div>
        <div class="step"><span class="step-num">2</span><div><div class="step-t">Choose</div><div class="step-d">Pick your kitchen (know who cooks your food &amp; their hygiene score) or let us curate. Pick your meals, 1-tap.</div></div></div>
        <div class="step"><span class="step-num">3</span><div><div class="step-t">Get delivery</div><div class="step-d">One box, one bill, one predictable weekly delivery. All-inclusive — no surprise fees, ever.</div></div></div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-left">
        <h1>Chef-prepared meals. <span class="accent">Zero decision fatigue.</span></h1>
        <p>A curated weekly menu delivered across Toronto. One flat all-inclusive price — taxes, delivery and service fees are already in the number you see. No forms, no passwords, no exit surveys.</p>
        <div class="tiers">${tierBtns}</div>
        <div class="card checkout">
          <div class="kicker">Live demo — <code>POST /api/v1/auth/wallet-checkout</code></div>
          <p>One call creates the account, extracts the address from the wallet token, charges Stripe and selects your meals.</p>
          <button class="btn primary big" onclick="simulateCheckout()">Apple Pay / Google Pay — subscribe</button>
          <pre id="checkout-result" hidden></pre>
        </div>
      </div>
      <div class="hero-right"><div class="featgrid">${features}</div></div>
    </section>
    <footer class="foot">Minimal Bites — PWA prototype · Install me for offline use · View on GitHub</footer>`;
}

function selectTier(el, id) {
  document.querySelectorAll(".tier").forEach((b) => b.classList.remove("selected"));
  el.classList.add("selected");
}
function simulateCheckout() {
  const tier = document.querySelector(".tier.selected")?.dataset.tier || "MEALS_6";
  const t = TIERS.find((x) => x.id === tier);
  const res = {
    status: "SUCCESS",
    userId: "usr_" + Math.random().toString(36).slice(2, 8),
    subscriptionId: "sub_" + Math.random().toString(36).slice(2, 8),
    totalChargedCAD: t.total,
    nextDeliveryDate: "2026-08-18T17:00:00.000Z",
    cutoffAt: "2026-08-16T23:59:59.000Z",
    shippingAddress: { street: "120 Bay St", unit: "Suite 1402", postalCode: "M5J 2R8", city: "Toronto" },
    mealsSelected: t.meals,
  };
  const pre = document.getElementById("checkout-result");
  pre.hidden = false;
  pre.textContent = JSON.stringify(res, null, 2);
  flash(`✓ Charged ${money(t.total)} · ${t.meals} meals selected · all-inclusive`);
}

/* ==================== DASHBOARD ==================== */
let kitchenFilter = "all";
function renderDashboard() {
  const d = DATA.dashboard;
  const { order, subscription, address, user } = d;
  const perMeal = subscription.perMeal;
  const total = order.totalAmount;
  const planCount = { MEALS_4: "4 meals", MEALS_6: "6 meals", MEALS_8: "8 meals" }[subscription.planTier];

  // unique kitchens across this week's meals
  const kitchens = [];
  const seen = {};
  order.items.forEach((it) => {
    if (it.restaurantId && !seen[it.restaurantId]) {
      seen[it.restaurantId] = true;
      kitchens.push({ id: it.restaurantId, name: restName(it.restaurantId) });
    }
  });
  const visibleItems = kitchenFilter === "all" ? order.items : order.items.filter((it) => it.restaurantId === kitchenFilter);

  const filterChips = kitchens.length > 1
    ? `<div class="kitchen-filters">
        <button class="chip ${kitchenFilter === "all" ? "on" : ""}" onclick="setKitchenFilter('all')">All kitchens</button>
        ${kitchens.map((k) => `<button class="chip ${kitchenFilter === k.id ? "on" : ""}" onclick="setKitchenFilter('${k.id}')">${esc(k.name)}</button>`).join("")}
      </div>`
    : "";

  const items = visibleItems.map((it, i) => `
    <div class="card meal">
      <div class="meal-top">
        <div>
          <div class="meal-title"><span class="slot">${i + 1}</span> ${esc(it.title)}</div>
          ${it.restaurantId ? `<div class="meal-rest">prepared by ${esc(restName(it.restaurantId))}</div>` : ""}
          <div class="meal-meta">${it.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${it.calories} Cal / ${it.proteinGrams}g protein</span></div>
        </div>
        <button class="btn ghost sm" onclick="renderSwap(${it.slot})">🔄 Swap</button>
      </div>
      <div id="swap-${it.slot}"></div>
    </div>`).join("");

  return `
    <div class="mobile">
      <header class="topbar">
        <div class="brand"><span class="logo">MB</span><div><b>Minimal Bites</b></div></div>
        <a href="#dashboard" class="navbtn ghost">👤 ${esc(user.fullName.split(" ")[0])}</a>
      </header>

      <section class="card block">
        <div class="kicker">Next Delivery</div>
        <div class="h2">${fmtWindow(order.deliveryDate)}</div>
        <div class="muted">📍 ${esc(address.street)}${address.unit ? ", " + esc(address.unit) : ""} (${esc(user.dropoffPreference.replace("_", " "))} drop-off)</div>
        <div class="cutoff">⏳ Edit cutoff: ${timeLeft(order.cutoffAt)} left</div>
      </section>

      <section class="card block">
        ${kitchenCard(d.subscription)}
      </section>

      <div class="row-between"><div class="h3">Your ${planCount} this week</div><div class="accent bold">${money(total)} all-inclusive</div></div>
      ${filterChips}
      <div class="meals">${items}</div>

      <div class="actions">
        <button class="btn ghost col" onclick="flash('✓ Week skipped — no charge.')"><span class="big">⏸</span>Skip Next Week</button>
        <button class="btn ghost col" onclick="flash('✓ Address updated to 100 King St W.')"><span class="big">📍</span>Change Address</button>
        <button class="btn ghost col" onclick="flash('✓ Added meal · new total ' + money(${total + perMeal}))"><span class="big">➕</span>Add Meal</button>
      </div>

      <section class="card block">
        <div class="kicker">Billing summary</div>
        <div class="billrow"><span>${order.items.length} meals × ${money(perMeal)}/ea</span><span class="bold">${money(total)}</span></div>
        <div class="billrow"><span>Delivery, service fees &amp; taxes</span><span class="accent bold">INCLUDED ($0.00)</span></div>
        <div class="autocharge">Auto-charging ${money(total)} on ${fmtDate(order.cutoffAt)} at 11:59 PM.</div>
      </section>
    </div>
    <div class="mobnav">
      <a data-nav="dashboard" href="#dashboard" class="active">🍽️ This Week</a>
      <a href="#dashboard" onclick="flash('Schedule coming soon')">📅 Schedule</a>
      <a href="#dashboard" onclick="flash('Settings coming soon')">⚙️ Settings</a>
    </div>`;
}

function renderSwap(slot) {
  const d = DATA.dashboard;
  const item = d.order.items.find((x) => x.slot === slot);
  if (!item) return;
  const current = item.mealId;
  const opts = DATA.meals
    .map((m) => `<button class="swap-opt ${m.id === current ? "on" : ""}" onclick="doSwap(${slot},'${m.id}')">${esc(m.title)}<span class="muted">${m.calories} Cal · ${esc(restName(m.restaurantId))}</span></button>`)
    .join("");
  document.getElementById("swap-" + slot).innerHTML =
    `<div class="kicker" style="margin-top:10px">Choose a replacement:</div><div class="swap-grid">${opts}</div>`;
}
function doSwap(slot, id) {
  const d = DATA.dashboard;
  const item = d.order.items.find((x) => x.slot === slot);
  if (!item) return;
  const m = DATA.meals.find((x) => x.id === id);
  if (!m) return;
  item.mealId = id;
  item.restaurantId = m.restaurantId;
  item.title = m.title;
  item.calories = m.calories;
  item.proteinGrams = m.proteinGrams;
  item.badges = m.badges;
  flash("✓ Meal swapped.");
  navigate();
}

function setKitchenFilter(id) {
  kitchenFilter = id;
  navigate();
}

// Box mode: restaurant-first (trust + full-week commitment) vs curated variety.
function setBoxMode(mode, restId) {
  const sub = DATA.dashboard.subscription;
  sub.boxMode = mode;
  sub.preferredRestaurant = mode === "SINGLE_RESTAURANT" ? RESTAURANTS.find((r) => r.id === restId) : null;
  // In restaurant-first mode, rebuild the week from that kitchen's menu.
  if (mode === "SINGLE_RESTAURANT") {
    const menu = DATA.meals.filter((m) => m.restaurantId === restId);
    if (menu.length) {
      DATA.dashboard.order.items = DATA.dashboard.order.items.map((it, i) => {
        const m = menu[i % menu.length];
        return { slot: it.slot, mealId: m.id, restaurantId: m.restaurantId, title: m.title, calories: m.calories, proteinGrams: m.proteinGrams, badges: m.badges };
      });
    }
  }
  flash(mode === "SINGLE_RESTAURANT"
    ? `✓ Your whole weekly box is now from ${(sub.preferredRestaurant || {}).name}.`
    : "✓ Your box is now curated variety across kitchens.");
  navigate();
}

function trustHtml(r) {
  return `<span class="trust-badge">${r.hygieneRating}★</span><span class="trust-sub">DineSafe ${r.healthScore}/100${r.verified ? " · verified" : ""}</span>`;
}

function kitchenCard(sub) {
  if (sub.boxMode === "SINGLE_RESTAURANT" && sub.preferredRestaurant) {
    const r = sub.preferredRestaurant;
    return `<div class="row-between" style="margin:0 0 6px"><div class="kicker">Your Kitchen</div>
        <button class="btn ghost sm" onclick="setBoxMode('MIXED',null)">Switch to variety</button></div>
      <div class="kitchen-line"><span class="k-avatar">${esc(r.name[0])}</span>
        <div><div class="bold">${esc(r.name)}</div><div class="trust-row">${trustHtml(r)}</div>
        <div class="muted sm">${esc(r.neighborhood)} · full-week box committed</div></div></div>
      <p class="muted sm">All 6 meals are prepared by this kitchen. They know you're committed for the full week, so every delivery is a complete, predictable order.</p>`;
  }
  return `<div class="row-between" style="margin:0 0 6px"><div class="kicker">Your Kitchen</div>
      <button class="btn ghost sm" onclick="toggleKitchenPick()">🍴 Choose a kitchen</button></div>
    <p class="muted sm">Currently <b>curated variety</b> — meals from several kitchens, each labeled.</p>
    <div id="kitchen-pick" hidden>
      <div class="kicker" style="margin:10px 0 6px">Commit your whole weekly box to one kitchen:</div>
      ${DATA.restaurants.map((r) => `<button class="kitchen-opt" onclick="setBoxMode('SINGLE_RESTAURANT','${r.id}')">
          <span class="k-avatar">${esc(r.name[0])}</span><div><div class="bold">${esc(r.name)}</div>
          <div class="trust-row">${trustHtml(r)}</div>
          <div class="muted sm">${esc(r.cuisine)} · ${esc(r.neighborhood)}</div></div>
        </button>`).join("")}
    </div>`;
}
function toggleKitchenPick() {
  const el = document.getElementById("kitchen-pick");
  if (el) el.hidden = !el.hidden;
}

/* ==================== KITCHEN ==================== */
let kitchenSel = "all";
function setKitchenSel(id) {
  kitchenSel = id;
  navigate();
}
function renderKitchen() {
  const pm = DATA.productionMatrix;
  const filteredDishes = kitchenSel === "all" ? pm.dishes : pm.dishes.filter((d) => d.restaurantId === kitchenSel);
  const kitchenName = kitchenSel === "all" ? "All partner kitchens" : restName(kitchenSel);
  const totalForKitchen = filteredDishes.reduce((s, d) => s + d.totalQuantity, 0);
  const packedForKitchen = filteredDishes.reduce((s, d) => s + d.packedQuantity, 0);
  const outForKitchen = Object.values(pm.courier).reduce((s, n) => s + n, 0);
  const cooking = totalForKitchen - packedForKitchen - outForKitchen;

  const rows = filteredDishes.map((d) => {
    const pct = d.totalQuantity ? Math.round((d.packedQuantity / d.totalQuantity) * 100) : 0;
    const state = pct >= 100 ? "DONE" : pct > 0 ? "PACKED" : "READY";
    return `<tr>
      <td class="qty">${d.totalQuantity}x</td>
      <td class="name">${esc(d.title)}</td>
      <td>${(d.badges.length ? d.badges : ["STANDARD"]).map(badgeHtml).join("")}</td>
      <td>
        <div class="pack">
          <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
          <span>${d.packedQuantity}/${d.totalQuantity} ${state}</span>
          <button class="link" onclick="flash('🖨️ Thermal labels sent to label printer for ${esc(d.title)}')">🖨️ Print Labels</button>
        </div>
      </td>
    </tr>`;
  }).join("");

  const cookingItems = filteredDishes.filter((d) => d.packedQuantity < d.totalQuantity)
    .map((d) => `<li>${d.totalQuantity - d.packedQuantity}x ${short(d.title)}</li>`).join("") || `<li class="muted">Nothing cooking</li>`;
  const packedItems = filteredDishes.filter((d) => d.packedQuantity > 0)
    .map((d) => `<li>${d.packedQuantity}x ${short(d.title)}</li>`).join("");
  // routes relevant to this kitchen (by its served postal prefixes)
  const servedPrefixes = kitchenSel === "all" ? pm.routes.map((r) => r.postalPrefix) : (DATA.restaurants.find((r) => r.id === kitchenSel) || {}).postalPrefixes || [];
  const routeItems = pm.routes.filter((r) => servedPrefixes.includes(r.postalPrefix)).map((r) => {
    const shipped = pm.courier[r.postalPrefix] || 0;
    return `<li>Route ${r.postalPrefix} — ${r.boxCount} boxes${shipped ? ` <span class="accent">(${shipped} shipped)</span>` : ""}</li>`;
  }).join("");

  const kitchenSelect = `
    <label class="btn ghost">🏠 Kitchen
      <select onchange="setKitchenSel(this.value)">
        <option value="all" ${kitchenSel === "all" ? "selected" : ""}>All partner kitchens</option>
        ${DATA.restaurants.map((r) => `<option value="${r.id}" ${kitchenSel === r.id ? "selected" : ""}>${esc(r.name)} · ${esc(r.neighborhood)}</option>`).join("")}
      </select>
    </label>`;

  const commitmentBanner = kitchenSel !== "all"
    ? `<section class="commit-banner">
        <div><span class="cmt-label">Committed customers</span><span class="cmt-num">${committedCountFor(kitchenSel)}</span><span class="cmt-sub">signed up for a full week from you</span></div>
        <div><span class="cmt-label">Guaranteed weekly meals</span><span class="cmt-num">${committedMealsFor(kitchenSel)}</span><span class="cmt-sub">predictable volume to plan &amp; cook</span></div>
        <div><span class="cmt-label">Weekly portions (all orders)</span><span class="cmt-num">${totalForKitchen}</span><span class="cmt-sub">Tue 5–7PM · full-week routing</span></div>
      </section>`
    : "";

  return `
    <header class="topbar">
      <div class="brand"><span class="logo dark">MB</span><div><b>Minimal Bites</b><span class="sub">Kitchen Partner Portal · ${esc(kitchenName)}</span></div></div>
      <a href="#dashboard" class="navbtn ghost">Subscriber →</a>
    </header>

    <section class="steps-wrap kitchen-steps">
      <div class="steps-head">Your business — just 3 steps</div>
      <div class="steps">
        <div class="step"><span class="step-num">1</span><div><div class="step-t">Set up</div><div class="step-d">Business profile, menu &amp; delivery zones. Tell subscribers your hygiene score.</div></div></div>
        <div class="step"><span class="step-num">2</span><div><div class="step-t">Fulfill orders</div><div class="step-d">See committed weekly volume &amp; one consolidated prep list. Cook in batches, not chaos.</div></div></div>
        <div class="step"><span class="step-num">3</span><div><div class="step-t">Get paid</div><div class="step-d">Automatic weekly payout (every Thursday) for every meal you confirmed &amp; cooked.</div></div></div>
      </div>
    </section>

    <div class="filters">
      ${kitchenSelect}
      <button class="btn ghost">📅 Date: Tuesday, Aug 18 ▼</button>
      <button class="btn ghost">🕐 Window: 5PM–7PM ▼</button>
      <button class="btn ghost">🧮 View: Aggregated Prep List ▼</button>
    </div>

    ${commitmentBanner}

    <section class="card table-card">
      <div class="table-head"><span class="bold">🏭 Production Summary · ${esc(kitchenName)}</span><span class="sum">${totalForKitchen} MEALS TOTAL</span></div>
      <table><thead><tr><th>Qty</th><th>Meal dish name</th><th>Dietary badges</th><th>Packing status</th></tr></thead><tbody>${rows}</tbody></table>
    </section>

    <div class="kanban">
      <div class="lane"><div class="lane-h"><span>🍳 In Cooking</span><span class="pill slate">${Math.max(0, cooking)}</span></div><ul>${cookingItems}</ul></div>
      <div class="lane"><div class="lane-h"><span>📦 Packed &amp; Labeled</span><span class="pill brand">${packedForKitchen}</span></div><ul>${packedItems}</ul></div>
      <div class="lane"><div class="lane-h"><span>🚚 Out With Courier</span><span class="pill sky">${outForKitchen}</span></div><ul>${routeItems}</ul></div>
    </div>

    <section class="card block">
      <div class="kicker">Batch controls</div>
      <div class="controls">
        <button class="btn primary" onclick="flash('🖨️ All Tuesday thermal labels printing…')">🖨️ Print All Thermal Labels</button>
        <button class="btn ghost" onclick="flash('✅ All dishes marked PACKED (batch kanban updated).')">✅ Mark All Packed</button>
        <button class="btn ghost" onclick="flash('🚚 Route shipped to courier.')">🚚 Ship Next Route</button>
        <button class="btn ghost" onclick="exportMatrix()">📥 Export Dish Totals</button>
      </div>
      <p class="muted sm">Tip: this snapshot mirrors the live <code>production-matrix</code> endpoint backed by PostgreSQL + Prisma.</p>
    </section>
    <footer class="foot">Kitchen Partner Portal — aggregated batch totals, not chaotic order tickets.</footer>`;
}

// Static commitment demo: Aria commits her 6-meal box to the selected kitchen.
function committedCountFor(restId) {
  return DATA.dashboard.subscription.boxMode === "SINGLE_RESTAURANT" &&
    DATA.dashboard.subscription.preferredRestaurant?.id === restId ? 1 : 0;
}
function committedMealsFor(restId) {
  return committedCountFor(restId) * 6;
}

function exportMatrix() {
  const blob = new Blob([JSON.stringify(DATA.productionMatrix, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "production-matrix-2026-08-18.json";
  a.click();
  URL.revokeObjectURL(url);
  flash("📥 Exported dish totals to JSON.");
}
function short(s) {
  return s.length > 26 ? s.slice(0, 26) + "…" : s;
}

/* ---------- boot ---------- */
window.addEventListener("hashchange", navigate);
window.navigate = navigate;
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

// register service worker (guarded for all environments)
if (navigator && navigator.serviceWorker && typeof navigator.serviceWorker.register === "function") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

navigate();
