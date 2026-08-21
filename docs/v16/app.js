/* ============================================================================
   SUPPER CLUB DIRECT — curated weekly delivery platform (GTA)
   v5 · Raleway · Apple-clean · retina · SVG icons (no emoji)
   Two products: Subscriber app (light/green) + Partner portal (dark/amber).
   Features: 15 restaurants · build-your-box · 2-hr windows · live tracking
   to CN Tower · fleet board · order cadence (weekly/2-wk/monthly) · live
   DineSafe badges · flat $500/mo pricing · pickup option · animated demo.
   ========================================================================== */

/* ---------- versioning ---------- */
const VERSION = "v16";
const VERSION_LINK = "v15/";
const BRAND = "Supper Club Direct";

/* ---------- SVG icon set ---------- */
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
    swap: `<path d="M7 8h11l-3-3M17 16H6l3 3"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
    gear: `<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.3 3h-4l-.3 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5.6 12a7 7 0 0 0 .1 1.2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.3 2.7h4l.3-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.06-.4.1-.8.1-1.2z"/>`,
    pot: `<path d="M4 10h16v2a8 8 0 0 1-16 0z"/><path d="M12 10V5M8 7l-1.5-2M16 7l1.5-2"/>`,
    box: `<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>`,
    truck: `<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/><path d="M7 18h3M14 18h3"/>`,
    printer: `<path d="M7 8V3h10v5"/><rect x="4" y="8" width="16" height="8" rx="1.5"/><path d="M7 14h10v7H7z"/>`,
    download: `<path d="M12 3v11M8 10l4 4 4-4"/><path d="M4 19h16"/>`,
    store: `<path d="M4 10l1.5-5h13L20 10M4 10v9h16v-9"/><path d="M4 10h16"/><path d="M9 13h6v6H9z"/>`,
    chart: `<path d="M4 20V10M10 20V4M16 20v-7M20 20H3"/>`,
    wallet: `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18M16 15h2"/><path d="M6 7V6a2 2 0 0 1 2-2h7"/>`,
    shield: `<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>`,
    arrow: `<path d="M5 12h14M14 7l5 5-5 5"/>`,
    arrowLeft: `<path d="M19 12H5M10 7l-5 5 5 5"/>`,
    check: `<path d="M5 12l5 5 9-11"/>`,
    home: `<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>`,
    bag: `<path d="M6 7h12l1 13H5z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>`,
    people: `<circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/><path d="M16 5a3 3 0 0 1 0 6M20 20v-1a6 6 0 0 0-3-5"/>`,
    route: `<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l10 10M5 6v5h14v5"/>`,
    plane: `<path d="M12 3l3 7 6 2-2 2-5-1-2 5-1-2-1-6-4 3-1-3 5-3z"/>`,
    play: `<circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3z"/>`,
    bagCheck: `<path d="M6 7h12l1 13H5z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/><path d="M9 16l2 2 4-4"/>`,
    heart: `<path d="M12 21C7 17 3 13.5 3 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9 3.5c0 4-4 7.5-9 11.5z"/>`,
    gavel: `<path d="M13 5l6 6M4 16l8-8 4 4-8 8zM2 20h9"/><path d="M15 7l2-2 4 4-2 2z"/>`,
    search: `<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>`,
    eye: `<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.5"/>`,
    eyeOff: `<path d="M3 3l18 18"/><path d="M10.5 5.2A10 10 0 0 1 12 5c6.5 0 10 6 10 6a15 15 0 0 1-2.5 3.5M6.6 6.6A15 15 0 0 0 2 12s3.5 6 10 6a10 10 0 0 0 3.4-.6"/><path d="M9.9 9.9a2.5 2.5 0 0 0 3.2 3.2"/>`,
    x: `<path d="M6 6l12 12M18 6L6 18"/>`,
    lock: `<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,
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
  SPICY: "bg-red-100 text-red-700",
  STANDARD: "bg-slate-100 text-slate-600",
};

/* ============================================================================
   15 RESTAURANTS — varied cuisine across Toronto
   Each has: id, name, cuisine, area, neighborhood, postal, dineSafe status,
   hygieneRating (DineSafe score), googleRating, reviewCount, minWeeklyDishes,
   pickup (bool), deliveryRadius.
   ========================================================================== */
const RESTAURANTS = [
  { id: "rest_indian", name: "Indian Desire", cuisine: "Indian", neighborhood: "Bloor St W", postal: "M5R", dineSafe: "unconditional", hygiene: 100, google: 4.5, reviews: 520, pickup: true, radius: 8, dishes: 9 },
  { id: "rest_oak_ash", name: "Oak & Ash Kitchen", cuisine: "American grill", neighborhood: "Downtown / Bay", postal: "M5J", dineSafe: "unconditional", hygiene: 100, google: 4.8, reviews: 1284, pickup: true, radius: 6, dishes: 10 },
  { id: "rest_sweet_basil", name: "Sweet Basil", cuisine: "Mediterranean", neighborhood: "Harbourfront", postal: "M5V", dineSafe: "unconditional", hygiene: 98, google: 4.7, reviews: 863, pickup: true, radius: 6, dishes: 9 },
  { id: "rest_kobu", name: "Kobu Noodle & Rice", cuisine: "Japanese", neighborhood: "Financial District", postal: "M5K", dineSafe: "conditional", hygiene: 91, google: 4.6, reviews: 702, pickup: true, radius: 5, dishes: 9 },
  { id: "rest_casa_emilia", name: "Casa Emilia", cuisine: "Italian", neighborhood: "Little Italy", postal: "M6H", dineSafe: "unconditional", hygiene: 99, google: 4.6, reviews: 641, pickup: true, radius: 7, dishes: 9 },
  { id: "rest_wok", name: "Wok on Wheels", cuisine: "Chinese", neighborhood: "Chinatown", postal: "M5T", dineSafe: "unconditional", hygiene: 96, google: 4.4, reviews: 588, pickup: true, radius: 6, dishes: 9 },
  { id: "rest_seoul", name: "Seoul Food Co.", cuisine: "Korean", neighborhood: "Koreatown", postal: "M6H", dineSafe: "unconditional", hygiene: 97, google: 4.7, reviews: 412, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_banhmi", name: "Bánh Mì Bro", cuisine: "Vietnamese", neighborhood: "Kensington", postal: "M5T", dineSafe: "unconditional", hygiene: 95, google: 4.6, reviews: 490, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_taco", name: "Taco Toro", cuisine: "Mexican", neighborhood: "Queen West", postal: "M6J", dineSafe: "unconditional", hygiene: 96, google: 4.5, reviews: 533, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_falafel_mile", name: "The Falafel Mile", cuisine: "Middle Eastern", neighborhood: "Danforth", postal: "M4K", dineSafe: "unconditional", hygiene: 97, google: 4.6, reviews: 368, pickup: true, radius: 7, dishes: 8 },
  { id: "rest_saffron", name: "Saffron Thali", cuisine: "Punjabi", neighborhood: "Rexdale", postal: "M9W", dineSafe: "unconditional", hygiene: 98, google: 4.7, reviews: 298, pickup: true, radius: 9, dishes: 9 },
  { id: "rest_paris", name: "La Table Parisienne", cuisine: "French", neighborhood: "Yorkville", postal: "M4W", dineSafe: "unconditional", hygiene: 99, google: 4.6, reviews: 421, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_fish_fable", name: "Fish & Fable", cuisine: "Seafood", neighborhood: "St. Lawrence", postal: "M5E", dineSafe: "unconditional", hygiene: 100, google: 4.7, reviews: 354, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_green_table", name: "Green Table", cuisine: "Vegan / plant", neighborhood: "Leslieville", postal: "M4M", dineSafe: "unconditional", hygiene: 97, google: 4.5, reviews: 288, pickup: true, radius: 7, dishes: 8 },
  { id: "rest_oat_cart", name: "The Oat Cart", cuisine: "Breakfast / bakery", neighborhood: "Liberty Village", postal: "M6K", dineSafe: "unconditional", hygiene: 96, google: 4.6, reviews: 342, pickup: true, radius: 6, dishes: 8 },
  /* ---- Toronto fine-dining & neighbourhood kitchens (Google-profile data) ---- */
  { id: "rest_alo_canoe", name: "Alo Canoe Restaurant and Bar", cuisine: "Modern French", neighborhood: "Queen West", postal: "M5V 2B2", address: "483 Queen St W, Toronto, ON M5V 2B2", phone: "(416) 260-3335", hours: "Lun–Ven 11:30–14:30 · 17:00–22:00, Sam–Dim 10:00–14:00 · 17:00–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 100, google: 4.7, reviews: 3120, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_edulis", name: "Edulis Restaurant", cuisine: "French / Spanish", neighborhood: "Niagara", postal: "M6J 1L3", address: "169 Niagara St, Toronto, ON M6J 1L3", phone: "(416) 703-4222", hours: "Mar–Dim 12:00–14:30 · 17:30–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 100, google: 4.9, reviews: 1180, pickup: true, radius: 6, dishes: 6 },
  { id: "rest_bar_isabel", name: "Bar Isabel", cuisine: "Spanish", neighborhood: "Palmerston", postal: "M6G 1C7", address: "797 College St, Toronto, ON M6G 1C7", phone: "(416) 532-2222", hours: "Mar–Lun 17:00–23:00, Sam–Dim 12:00–23:00", price: "$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 2440, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_20_victoria", name: "Restaurant 20 Victoria", cuisine: "Contemporary Canadian", neighborhood: "Financial District", postal: "M5C 1N8", address: "20 Victoria St, Toronto, ON M5C 1N8", phone: "(416) 362-9599", hours: "Lun–Ven 11:30–14:30 · 17:00–22:00, Sam 17:00–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 880, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_giulietta", name: "Giulietta", cuisine: "Italian", neighborhood: "College St", postal: "M6H 1E1", address: "972 College St, Toronto, ON M6H 1E1", phone: "(416) 588-3323", hours: "Lun–Ven 17:00–22:00, Sam–Dim 17:00–22:00", price: "$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 1310, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_don_alfonso", name: "Don Alfonso 1890", cuisine: "Italian fine dining", neighborhood: "King West", postal: "M5V 1H8", address: "438 King St W, Toronto, ON M5V 1H8", phone: "(416) 597-8940", hours: "Mar–Dim 17:00–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 100, google: 4.7, reviews: 940, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_osteria_giulia", name: "Osteria Giulia", cuisine: "Italian", neighborhood: "Avenue Rd", postal: "M5R 2H5", address: "134 Avenue Rd, Toronto, ON M5R 2H5", phone: "(416) 964-8686", hours: "Lun–Dim 17:00–22:30", price: "$$$$", dineSafe: "unconditional", hygiene: 100, google: 4.8, reviews: 1120, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_quetzal", name: "Quetzal", cuisine: "Mexican", neighborhood: "College St", postal: "M5T 2A8", address: "419 College St, Toronto, ON M5T 2A8", phone: "(416) 792-7745", hours: "Lun–Ven 17:00–22:00, Sam–Dim 17:00–23:00", price: "$$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 1680, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_mamakas", name: "Mamakas Taverna", cuisine: "Greek", neighborhood: "Ossington", postal: "M6J 2Z2", address: "80 Ossington Ave, Toronto, ON M6J 2Z2", phone: "(416) 537-3548", hours: "Lun–Dim 17:00–22:00, Sam–Dim 12:00–22:00", price: "$$$", dineSafe: "unconditional", hygiene: 98, google: 4.6, reviews: 1450, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_bar_raval", name: "Bar Raval", cuisine: "Spanish tapas", neighborhood: "Palmerston", postal: "M6G 1C7", address: "505 College St, Toronto, ON M6G 1C7", phone: "(416) 530-2000", hours: "Lun–Ven 16:00–02:00, Sam–Dim 12:00–02:00", price: "$$$", dineSafe: "unconditional", hygiene: 98, google: 4.7, reviews: 2100, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_dreyfus", name: "Dreyfus", cuisine: "French-American", neighborhood: "Harbord", postal: "M5S 1B1", address: "96 Harbord St, Toronto, ON M5S 1B1", phone: "(416) 323-1281", hours: "Mar–Sam 17:00–22:00, Dim 17:00–21:00", price: "$$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 590, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_actinolite", name: "Actinolite Restaurant", cuisine: "Canadian seasonal", neighborhood: "Queen West", postal: "M6J 1J3", address: "971 Queen St W, Toronto, ON M6J 1J3", phone: "(416) 913-2997", hours: "Mar–Dim 17:30–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 99, google: 4.7, reviews: 760, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_danico", name: "DaNico", cuisine: "Italian", neighborhood: "Davenport", postal: "M4V 2C9", address: "444 Davenport Rd, Toronto, ON M4V 2C9", phone: "(416) 519-5233", hours: "Lun–Dim 17:00–22:00", price: "$$$", dineSafe: "unconditional", hygiene: 98, google: 4.7, reviews: 340, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_bar_prima", name: "Bar Prima", cuisine: "Italian aperitivo", neighborhood: "King West", postal: "M5V 2E9", address: "600 King St W, Toronto, ON M5V 2E9", phone: "(416) 360-0433", hours: "Lun–Dim 11:30–22:00", price: "$$$", dineSafe: "unconditional", hygiene: 98, google: 4.6, reviews: 620, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_pai", name: "Pai Northern Thai Kitchen", cuisine: "Northern Thai", neighborhood: "Kensington", postal: "M5V 2C4", address: "18 Duncan St, Toronto, ON M5V 2C4", phone: "(416) 901-4724", hours: "Lun–Dim 11:30–22:00, Ven–Sam 11:30–23:00", price: "$$", dineSafe: "unconditional", hygiene: 98, google: 4.7, reviews: 3600, pickup: true, radius: 6, dishes: 9 },
  { id: "rest_rd", name: "R&D", cuisine: "Modern Chinese", neighborhood: "Spadina", postal: "M5T 2E7", address: "241 Spadina Ave, Toronto, ON M5T 2E7", phone: "(416) 586-0000", hours: "Lun–Ven 11:30–15:00 · 17:00–22:00, Sam–Dim 12:00–22:00", price: "$$$", dineSafe: "unconditional", hygiene: 97, google: 4.5, reviews: 1500, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_black_blue", name: "Black and Blue", cuisine: "Steakhouse", neighborhood: "Entertainment District", postal: "M5V 1N3", address: "588 King St W, Toronto, ON M5V 1N3", phone: "(416) 977-7500", hours: "Lun–Dim 11:30–23:00", price: "$$$", dineSafe: "unconditional", hygiene: 98, google: 4.3, reviews: 2800, pickup: true, radius: 7, dishes: 8 },
  { id: "rest_inspire", name: "Inspire Restaurant", cuisine: "Contemporary Canadian", neighborhood: "Yorkville", postal: "M4W 3A6", address: "18 King St E, Toronto, ON M5C 1C4", phone: "(416) 363-6000", hours: "Lun–Ven 11:30–22:00, Sam 17:00–22:00", price: "$$$$", dineSafe: "unconditional", hygiene: 98, google: 4.6, reviews: 610, pickup: true, radius: 6, dishes: 8 },
  { id: "rest_peters", name: "Peter's Fine Dining Steak and Seafood", cuisine: "Steak / seafood", neighborhood: "North York", postal: "M2N 5R9", address: "5434 Yonge St, Toronto, ON M2N 5R9", phone: "(416) 226-1771", hours: "Lun–Dim 17:00–22:00, Dim 16:00–21:00", price: "$$$$", dineSafe: "unconditional", hygiene: 98, google: 4.6, reviews: 1230, pickup: true, radius: 8, dishes: 8 },
];
const restName = (id) => (RESTAURANTS.find((r) => r.id === id) || {}).name || "Partner kitchen";
const restOf = (id) => RESTAURANTS.find((r) => r.id === id) || {};
/* ---- global Dish of the Day (4 paid slots, $200/wk each) ---- */
const DISH_SLOTS = [
  { title: "Butter Chicken & Basmati", rest: "Indian Desire", rid: "rest_indian", recipe: "Tandoor-grilled chicken, tomato-makhani sauce, basmati. Serves 2. Pair with naan & a squeeze of lime.", image: "img/dish-butter-chicken.jpg" },
  { title: "Khao Soi", rest: "Pai Northern Thai Kitchen", rid: "rest_pai", recipe: "Northern Thai coconut-curry noodle soup with crispy egg noodles, chicken, and pickled mustard greens.", image: "img/dish-poke.jpg" },
  { title: "Truffle Fries", rest: "Black and Blue", rid: "rest_black_blue", recipe: "Crispy hand-cut fries tossed in truffle oil, parmesan, and fresh herbs. Serves 2 as a side.", image: "img/chef.jpg" },
  { title: "Risotto alla Milanese", rest: "Don Alfonso 1890", rid: "rest_don_alfonso", recipe: "Creamy saffron risotto with bone-marrow butter and aged parmesan. Serves 1.", image: "img/featured-chef.jpg" },
];
let dishIdx = 0;
let DISH_DATA = DISH_SLOTS[0];
function currentDish() { return DISH_SLOTS[dishIdx % DISH_SLOTS.length]; }
function dishNext() { dishIdx++; navNoScroll=true; navigate(); }
function dishGo(i) { dishIdx = i; navNoScroll=true; navigate(); }
function dishRestId(d) { return d.rid || "rest_indian"; }
function dishImage(d) { return d.image || "img/dish-butter-chicken.jpg"; }

/* ---------- DineSafe live badge ---------- */
function dineSafeHtml(r) {
  if (!r) return "";
  const uncond = r.dineSafe === "unconditional";
  return `<span class="dinesafe ${uncond ? "pass" : "cond"}">${ico(uncond ? "check" : "clock")} ${uncond ? "DineSafe: Pass (unconditional)" : "DineSafe: Conditional pass"}</span>`;
}
function googleHtml(r) {
  if (!r) return "";
  const override = r.google < 3.5;
  const label = r.google >= 4.0 ? "Highly rated" : "Community rated";
  return `<span class="grate">${starLine(r.google)} <b>${r.google.toFixed(1)}</b> <span class="muted">(${r.reviews.toLocaleString()}${override ? " · new partner" : ""})</span></span>`;
}

/* ============================================================================
   DISH CATALOG — 8–10 per restaurant, varied, with price/type/badges/macros
   ========================================================================== */
const D = {
  rest_indian: [
    ["Butter Chicken & Basmati", 13, "nonveg", ["BALANCED"], 610, 38], ["Chana Masala Bowl", 12, "veg", ["VEGETARIAN"], 480, 16],
    ["Paneer Tikka Biryani", 13, "veg", ["VEGETARIAN", "HIGH_PROTEIN"], 590, 26], ["Lamb Rogan Josh", 14, "nonveg", ["HIGH_PROTEIN"], 640, 42],
    ["Aloo Gobi & Rice", 12, "veg", ["VEGETARIAN"], 440, 12], ["Chicken Korma", 13, "nonveg", ["BALANCED"], 570, 34],
    ["Dal Makhani & Naan", 12, "veg", ["VEGETARIAN"], 520, 18], ["Tandoori Salmon Tikka", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 560, 40],
    ["Saag Paneer", 12, "veg", ["VEGETARIAN"], 470, 15],
  ],
  rest_oak_ash: [
    ["Grilled Chicken Shawarma Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 580, 48], ["Lemon Herb Atlantic Salmon", 14, "nonveg", ["GLUTEN_FREE"], 520, 42],
    ["Beef Teriyaki & Jasmine Rice", 13, "nonveg", ["BALANCED"], 610, 40], ["Chili Lime Steak & Sweet Potato", 14, "nonveg", ["HIGH_PROTEIN"], 640, 52],
    ["Turkey Chili & Brown Rice", 12, "nonveg", ["HIGH_PROTEIN"], 470, 36], ["Smoked Brisket Mac Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 620, 46],
    ["Harissa Chicken & Quinoa", 13, "nonveg", ["HIGH_PROTEIN", "GLUTEN_FREE"], 560, 45], ["Miso-Glazed Chicken Skewers", 13, "nonveg", ["HIGH_PROTEIN"], 540, 43],
    ["Roasted Veggie Grain Bowl", 12, "veg", ["VEGETARIAN"], 450, 14], ["Classic Cobb Salad", 12, "nonveg", ["GLUTEN_FREE"], 430, 32],
  ],
  rest_sweet_basil: [
    ["Mediterranean Falafel Plate", 12, "veg", ["VEGETARIAN"], 480, 18], ["Turkish Kofte & Bulgur", 13, "nonveg", ["GLUTEN_FREE"], 520, 38],
    ["Grilled Halloumi & Greens", 13, "veg", ["VEGETARIAN"], 490, 24], ["Za'atar Chicken & Couscous", 13, "nonveg", ["BALANCED"], 550, 41],
    ["Roasted Chicken Caesar Bowl", 13, "nonveg", ["BALANCED"], 540, 44], ["Hummus & Grilled Veg", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 430, 15],
    ["Shakshuka & Sourdough", 12, "veg", ["VEGETARIAN"], 460, 17], ["Lamb Kofta & Tabouleh", 14, "nonveg", ["HIGH_PROTEIN"], 570, 40],
    ["Greek Chicken & Orzo", 13, "nonveg", ["BALANCED"], 560, 39],
  ],
  rest_kobu: [
    ["Beef Teriyaki & Rice", 13, "nonveg", ["BALANCED"], 610, 40], ["Spicy Tuna Poke Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 510, 38],
    ["Kung Pao Chicken Bowl", 13, "nonveg", ["BALANCED"], 600, 42], ["Veggie Yakisoba", 12, "veg", ["VEGETARIAN"], 470, 20],
    ["Teriyaki Tofu & Rice", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 450, 26], ["Salmon Sashimi Bowl", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 540, 44],
    ["Chicken Katsu & Rice", 13, "nonveg", ["HIGH_PROTEIN"], 620, 41], ["Miso Ramen", 13, "nonveg", ["BALANCED"], 580, 34],
    ["Shrimp Tempura Udon", 14, "nonveg", ["BALANCED"], 560, 30],
  ],
  rest_casa_emilia: [
    ["Chicken Parmigiana", 13, "nonveg", ["BALANCED"], 640, 42], ["Penne Arrabbiata", 12, "veg", ["VEGETARIAN"], 520, 16],
    ["Beef Lasagna", 14, "nonveg", ["HIGH_PROTEIN"], 660, 40], ["Grilled Salmon Piccata", 14, "nonveg", ["GLUTEN_FREE"], 540, 44],
    ["Margherita & Arugula", 12, "veg", ["VEGETARIAN"], 480, 18], ["Rigatoni Bolognese", 13, "nonveg", ["BALANCED"], 620, 36],
    ["Chicken Milanese", 13, "nonveg", ["HIGH_PROTEIN"], 580, 45], ["Wild Mushroom Risotto", 13, "veg", ["VEGETARIAN"], 540, 14],
    ["Pesto Gnocchi", 12, "veg", ["VEGETARIAN"], 510, 13],
  ],
  rest_wok: [
    ["General Tao Chicken", 13, "nonveg", ["BALANCED"], 610, 38], ["Beef & Broccoli", 13, "nonveg", ["HIGH_PROTEIN"], 580, 40],
    ["Kung Pao Shrimp", 14, "nonveg", ["HIGH_PROTEIN"], 560, 34], ["Szechuan Tofu", 12, "veg", ["VEGETARIAN", "SPICY"], 470, 18],
    ["Vegetable Fried Rice", 12, "veg", ["VEGETARIAN"], 520, 15], ["Sweet & Sour Chicken", 13, "nonveg", ["BALANCED"], 590, 33],
    ["Mapo Tofu", 12, "veg", ["VEGETARIAN", "SPICY"], 460, 16], ["Honey Garlic Pork", 13, "nonveg", ["HIGH_PROTEIN"], 600, 36],
    ["Steamed Fish & Greens", 14, "nonveg", ["GLUTEN_FREE"], 490, 39],
  ],
  rest_seoul: [
    ["Bulgogi Beef Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 600, 42], ["Bibimbap", 13, "veg", ["VEGETARIAN"], 540, 20],
    ["Spicy Pork (Jeyuk)", 13, "nonveg", ["SPICY", "HIGH_PROTEIN"], 620, 41], ["Kimchi Fried Rice", 12, "veg", ["VEGETARIAN", "SPICY"], 510, 15],
    ["Japchae Noodles", 13, "veg", ["VEGETARIAN"], 520, 17], ["Tofu Stew (Sundubu)", 12, "veg", ["VEGETARIAN", "SPICY"], 460, 19],
    ["Chicken Bulgogi", 13, "nonveg", ["BALANCED"], 560, 40], ["Beef Short Rib (Galbi)", 14, "nonveg", ["HIGH_PROTEIN"], 650, 46],
  ],
  rest_banhmi: [
    ["Grilled Pork Bánh Mì Bowl", 13, "nonveg", ["BALANCED"], 560, 34], ["Lemongrass Chicken", 13, "nonveg", ["HIGH_PROTEIN"], 540, 40],
    ["Pho (Beef)", 13, "nonveg", ["GLUTEN_FREE"], 520, 36], ["Tofu Rice Noodle Bowl", 12, "veg", ["VEGETARIAN"], 470, 18],
    ["Shrimp Spring Rolls & Rice", 14, "nonveg", ["GLUTEN_FREE"], 500, 32], ["Veggie Bánh Mì Bowl", 12, "veg", ["VEGETARIAN"], 450, 14],
    ["Beef Pho (Brisket)", 14, "nonveg", ["GLUTEN_FREE"], 550, 40], ["Coconut Curry Tofu", 12, "veg", ["VEGETARIAN"], 490, 16],
  ],
  rest_taco: [
    ["Carne Asada Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 600, 42], ["Chicken Tinga Burrito", 13, "nonveg", ["BALANCED"], 620, 38],
    ["Veggie Fajita Bowl", 12, "veg", ["VEGETARIAN"], 480, 15], ["Al Pastor Tacos & Rice", 13, "nonveg", ["BALANCED"], 580, 34],
    ["Chipotle Shrimp Bowl", 14, "nonveg", ["SPICY", "GLUTEN_FREE"], 560, 38], ["Black Bean Tostada", 12, "veg", ["VEGETARIAN"], 440, 14],
    ["Barbacoa Beef Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 640, 45], ["Quesadilla & Pico", 12, "veg", ["VEGETARIAN"], 520, 20],
  ],
  rest_falafel_mile: [
    ["Falafel Plate", 12, "veg", ["VEGETARIAN"], 480, 18], ["Chicken Shawarma", 13, "nonveg", ["HIGH_PROTEIN"], 560, 42],
    ["Lamb Kebab & Rice", 14, "nonveg", ["HIGH_PROTEIN"], 620, 44], ["Halloumi & Hummus", 13, "veg", ["VEGETARIAN"], 490, 20],
    ["Grilled Kofta & Tabbouleh", 13, "nonveg", ["GLUTEN_FREE"], 540, 38], ["Vegetarian Mezze Bowl", 12, "veg", ["VEGETARIAN"], 450, 14],
    ["Beef Kebab Wrap", 13, "nonveg", ["BALANCED"], 570, 36], ["Shakshuka Bowl", 12, "veg", ["VEGETARIAN"], 460, 16],
  ],
  rest_saffron: [
    ["Chicken Tikka Masala", 13, "nonveg", ["BALANCED"], 600, 38], ["Daal & Rice Thali", 12, "veg", ["VEGETARIAN"], 520, 18],
    ["Lamb Karahi", 14, "nonveg", ["HIGH_PROTEIN"], 640, 44], ["Chana & Spinach Bowl", 12, "veg", ["VEGETARIAN"], 470, 15],
    ["Butter Paneer", 13, "veg", ["VEGETARIAN"], 560, 20], ["Chicken Biryani", 13, "nonveg", ["BALANCED"], 590, 36],
    ["Baingan Bharta", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 450, 12], ["Fish Curry & Rice", 14, "nonveg", ["GLUTEN_FREE"], 550, 38],
    ["Punjabi Kadhi", 12, "veg", ["VEGETARIAN"], 500, 15],
  ],
  rest_paris: [
    ["Coq au Vin", 14, "nonveg", ["HIGH_PROTEIN"], 580, 42], ["Ratatouille & Quinoa", 13, "veg", ["VEGETARIAN"], 460, 13],
    ["Steak Frites", 14, "nonveg", ["HIGH_PROTEIN"], 660, 48], ["Salmon à la Meunière", 14, "nonveg", ["GLUTEN_FREE"], 540, 44],
    ["Croque Monsieur", 12, "nonveg", ["BALANCED"], 520, 26], ["Vegetable Tartine", 12, "veg", ["VEGETARIAN"], 440, 12],
    ["Chicken Provençal", 13, "nonveg", ["BALANCED"], 560, 40], ["French Onion Soup & Bread", 12, "veg", ["VEGETARIAN"], 420, 14],
  ],
  rest_fish_fable: [
    ["Grilled Atlantic Salmon", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 520, 44], ["Fish & Chips (Air-fried)", 13, "nonveg", ["BALANCED"], 580, 32],
    ["Shrimp & Grits", 14, "nonveg", ["HIGH_PROTEIN"], 600, 40], ["Seared Halibut", 14, "nonveg", ["GLUTEN_FREE"], 490, 46],
    ["Tuna Niçoise", 13, "nonveg", ["GLUTEN_FREE"], 460, 38], ["Veggie Paella", 12, "veg", ["VEGETARIAN"], 480, 14],
    ["Crab Cake & Slaw", 14, "nonveg", ["GLUTEN_FREE"], 540, 36], ["Calamari & Rice", 13, "nonveg", ["BALANCED"], 520, 30],
  ],
  rest_green_table: [
    ["Buddha Bowl", 12, "veg", ["VEGAN"], 470, 16], ["Cauliflower Buffalo Wrap", 12, "veg", ["VEGAN"], 460, 13],
    ["Jackfruit Tacos", 12, "veg", ["VEGAN"], 450, 12], ["Green Curry Tofu", 13, "veg", ["VEGAN"], 480, 18],
    ["Mushroom & Walnut Bolognese", 13, "veg", ["VEGAN"], 520, 20], ["Rainbow Salad & Tahini", 11, "veg", ["VEGAN", "GLUTEN_FREE"], 420, 11],
    ["Chickpea Shawarma Wrap", 12, "veg", ["VEGAN"], 480, 17], ["Lentil Shepherd's Pie", 13, "veg", ["VEGAN"], 510, 19],
  ],
  rest_oat_cart: [
    ["Overnight Oats & Berries", 9, "veg", ["VEGETARIAN"], 380, 14], ["Egg & Avocado Toast", 11, "veg", ["BALANCED"], 440, 18],
    ["Breakfast Burrito", 12, "nonveg", ["HIGH_PROTEIN"], 540, 30], ["Acai Bowl", 11, "veg", ["VEGAN"], 390, 8],
    ["Turkey & Egg Sandwich", 12, "nonveg", ["HIGH_PROTEIN"], 500, 32], ["Greek Yogurt Parfait", 9, "veg", ["VEGETARIAN"], 340, 18],
    ["Smoked Salmon Toast", 13, "nonveg", ["GLUTEN_FREE"], 420, 26], ["Garden Veggie Wrap", 10, "veg", ["VEGAN"], 410, 13],
  ],
  rest_alo_canoe: [
    ["Foie Gras Torchon", 32, "nonveg", ["BALANCED"], 520, 16], ["Duo of Local Trout", 39, "nonveg", ["GLUTEN_FREE"], 480, 42],
    ["Dry-Aged Duck", 48, "nonveg", ["HIGH_PROTEIN"], 640, 52], ["Lobster & Shellfish", 58, "nonveg", ["GLUTEN_FREE"], 560, 40],
    ["Risotto of the Day", 36, "veg", ["VEGETARIAN"], 520, 12], ["Chocolate Marquise", 18, "veg", ["VEGETARIAN"], 420, 8],
    ["House Sourdough", 10, "veg", ["VEGETARIAN"], 320, 8], ["Wine Pairing Tasting", 95, "veg", ["VEGAN"], 200, 2],
  ],
  rest_edulis: [
    ["Mushroom & Black Truffle Toast", 26, "veg", ["VEGETARIAN"], 460, 10], ["Local Oysters", 28, "nonveg", ["GLUTEN_FREE"], 340, 18],
    ["Pan-Seared Scallops", 42, "nonveg", ["GLUTEN_FREE"], 480, 36], ["Roasted Heritage Chicken", 45, "nonveg", ["HIGH_PROTEIN"], 560, 50],
    ["Butter-Basted Lobster", 55, "nonveg", ["GLUTEN_FREE"], 520, 42], ["Seasonal Market Fish", 44, "nonveg", ["GLUTEN_FREE"], 470, 40],
  ],
  rest_bar_isabel: [
    ["Pan con Tomate", 12, "veg", ["VEGETARIAN"], 280, 4], ["Croquetas de Jamón", 16, "nonveg", ["BALANCED"], 360, 12],
    ["Grilled Octopus", 24, "nonveg", ["GLUTEN_FREE"], 420, 30], ["Beef Tongue", 22, "nonveg", ["HIGH_PROTEIN"], 480, 38],
    ["Secreto Ibérico", 34, "nonveg", ["HIGH_PROTEIN"], 560, 44], ["Squid Ink Fideuà", 28, "nonveg", ["BALANCED"], 520, 30],
    ["Gambas al Ajillo", 22, "nonveg", ["GLUTEN_FREE"], 400, 26], ["Basque Cheesecake", 14, "veg", ["VEGETARIAN"], 380, 10],
  ],
  rest_20_victoria: [
    ["Charcuterie Board", 28, "nonveg", ["BALANCED"], 460, 24], ["Wagyu Beef Tartare", 24, "nonveg", ["HIGH_PROTEIN"], 420, 34],
    ["Smoked Trout", 26, "nonveg", ["GLUTEN_FREE"], 380, 30], ["Confit Pork Belly", 34, "nonveg", ["HIGH_PROTEIN"], 580, 40],
    ["Hand-Cut Pappardelle", 27, "veg", ["VEGETARIAN"], 520, 16], ["Dry-Aged Striploin", 52, "nonveg", ["HIGH_PROTEIN"], 680, 55],
    ["Seasonal Vegetables", 18, "veg", ["VEGAN"], 320, 8], ["Crème Caramel", 13, "veg", ["VEGETARIAN"], 360, 8],
  ],
  rest_giulietta: [
    ["Marinara Pizza", 16, "veg", ["VEGETARIAN"], 520, 16], ["Margherita", 18, "veg", ["VEGETARIAN"], 560, 18],
    ["Funghi Pizza", 21, "veg", ["VEGETARIAN"], 540, 16], ["Tagliatelle al Ragu", 24, "nonveg", ["BALANCED"], 580, 34],
    ["Cacio e Pepe", 22, "veg", ["VEGETARIAN"], 540, 18], ["Arancini", 13, "veg", ["VEGETARIAN"], 360, 10],
    ["Rigatoni Amatriciana", 23, "nonveg", ["BALANCED"], 560, 28], ["Tiramisu", 12, "veg", ["VEGETARIAN"], 380, 8],
  ],
  rest_don_alfonso: [
    ["Handmade Gnocchi", 32, "veg", ["VEGETARIAN"], 540, 12], ["Risotto alla Milanese", 34, "veg", ["VEGETARIAN"], 560, 14],
    ["Lobster Ravioli", 46, "nonveg", ["BALANCED"], 520, 32], ["Agnolotti", 36, "veg", ["VEGETARIAN"], 500, 12],
    ["Branzino", 48, "nonveg", ["GLUTEN_FREE"], 480, 42], ["Wagyu Filet", 65, "nonveg", ["HIGH_PROTEIN"], 640, 52],
    ["Selection of Artisan Cheese", 24, "veg", ["VEGETARIAN"], 360, 14], ["Zabaglione", 16, "veg", ["VEGETARIAN"], 360, 8],
  ],
  rest_osteria_giulia: [
    ["Pappardelle al Cinghiale", 26, "nonveg", ["BALANCED"], 560, 32], ["Bucatini all'Amatriciana", 24, "nonveg", ["BALANCED"], 540, 26],
    ["Spaghetti alle Vongole", 27, "nonveg", ["GLUTEN_FREE"], 500, 24], ["Tortellini in Brodo", 23, "veg", ["VEGETARIAN"], 480, 14],
    ["Whole Grilled Branzino", 42, "nonveg", ["GLUTEN_FREE"], 460, 40], ["Veal Milanese", 38, "nonveg", ["HIGH_PROTEIN"], 580, 46],
    ["Burrata", 18, "veg", ["VEGETARIAN"], 380, 12], ["Panna Cotta", 12, "veg", ["VEGETARIAN"], 340, 8],
  ],
  rest_quetzal: [
    ["Fresh Nixtamal Tortillas", 14, "veg", ["VEGAN"], 360, 6], ["Guacamole & Totopos", 16, "veg", ["VEGAN"], 380, 6],
    ["Pescado Zarandeado", 38, "nonveg", ["GLUTEN_FREE"], 520, 40], ["Al Pastor", 24, "nonveg", ["BALANCED"], 520, 30],
    ["Carne a la Tampiqueña", 34, "nonveg", ["HIGH_PROTEIN"], 620, 48], ["Queso Fundido", 18, "veg", ["VEGETARIAN"], 440, 16],
    ["Mole Negro", 28, "nonveg", ["BALANCED"], 560, 34], ["Flan de Cajeta", 13, "veg", ["VEGETARIAN"], 380, 8],
  ],
  rest_mamakas: [
    ["Grilled Octopus", 24, "nonveg", ["GLUTEN_FREE"], 420, 30], ["Spanakopita", 14, "veg", ["VEGETARIAN"], 440, 12],
    ["Lamb Ribs", 28, "nonveg", ["HIGH_PROTEIN"], 560, 40], ["Moussaka", 22, "veg", ["VEGETARIAN"], 520, 18],
    ["Tzatziki & Pita", 12, "veg", ["VEGETARIAN"], 380, 8], ["Grilled Whole Fish", 36, "nonveg", ["GLUTEN_FREE"], 460, 40],
    ["Pastitsio", 23, "nonveg", ["BALANCED"], 560, 30], ["Baklava", 11, "veg", ["VEGETARIAN"], 360, 8],
  ],
  rest_bar_raval: [
    ["Tosta de Boquerones", 13, "nonveg", ["BALANCED"], 320, 12], ["Patatas Bravas", 11, "veg", ["VEGAN"], 380, 6],
    ["Gambas al Ajillo", 19, "nonveg", ["GLUTEN_FREE"], 400, 26], ["Pincho de Tortilla", 12, "veg", ["VEGETARIAN"], 360, 10],
    ["Chistorra", 15, "nonveg", ["BALANCED"], 420, 20], ["Oysters", 18, "nonveg", ["GLUTEN_FREE"], 320, 14],
    ["Jamón Ibérico", 26, "nonveg", ["BALANCED"], 380, 22], ["Crema Catalana", 12, "veg", ["VEGETARIAN"], 360, 8],
  ],
  rest_dreyfus: [
    ["Chicken Liver Mousse", 16, "nonveg", ["BALANCED"], 360, 14], ["Frozen Foie Gras", 24, "nonveg", ["BALANCED"], 380, 12],
    ["Wagyu Tartare", 26, "nonveg", ["HIGH_PROTEIN"], 440, 36], ["Duck au Poivre", 38, "nonveg", ["HIGH_PROTEIN"], 600, 46],
    ["Roasted Trout", 32, "nonveg", ["GLUTEN_FREE"], 460, 40], ["Steak Frites", 40, "nonveg", ["HIGH_PROTEIN"], 640, 50],
    ["Croque Madame", 20, "nonveg", ["BALANCED"], 520, 24], ["Floating Island", 13, "veg", ["VEGETARIAN"], 360, 8],
  ],
  rest_actinolite: [
    ["Seasonal Tasting Menu", 85, "veg", ["VEGETARIAN"], 1200, 40], ["Foraged Mushroom Toast", 18, "veg", ["VEGETARIAN"], 360, 8],
    ["Pan-Roasted Venison", 42, "nonveg", ["HIGH_PROTEIN"], 600, 50], ["Market Fish", 38, "nonveg", ["GLUTEN_FREE"], 460, 42],
    ["Local Cheese Plate", 20, "veg", ["VEGETARIAN"], 420, 16], ["Apple & Cider Dessert", 14, "veg", ["VEGETARIAN"], 340, 6],
    ["Heritage Grain Bowl", 22, "veg", ["VEGAN"], 480, 14], ["Seasonal Roots", 16, "veg", ["VEGAN"], 340, 6],
  ],
  rest_danico: [
    ["Fritto Misto", 18, "nonveg", ["GLUTEN_FREE"], 420, 22], ["Tagliatelle al Tartufo", 32, "veg", ["VEGETARIAN"], 560, 14],
    ["Rigatoni al Ragu", 26, "nonveg", ["BALANCED"], 580, 32], ["Burrata di Puglia", 19, "veg", ["VEGETARIAN"], 400, 12],
    ["Branzino al Limone", 40, "nonveg", ["GLUTEN_FREE"], 460, 42], ["Osso Buco", 46, "nonveg", ["HIGH_PROTEIN"], 660, 50],
    ["Gnocchi al Pesto", 24, "veg", ["VEGETARIAN"], 520, 12], ["Affogato", 10, "veg", ["VEGETARIAN"], 260, 6],
  ],
  rest_bar_prima: [
    ["Spritz di Aperol", 12, "veg", ["VEGAN"], 180, 0], ["Risotto al Funghi", 24, "veg", ["VEGETARIAN"], 540, 12],
    ["Vitello Tonnato", 20, "nonveg", ["BALANCED"], 460, 30], ["Cicchetti Selection", 16, "nonveg", ["BALANCED"], 380, 16],
    ["Rigatoni alla Vodka", 23, "veg", ["VEGETARIAN"], 560, 18], ["Pizza Prima", 19, "veg", ["VEGETARIAN"], 540, 16],
    ["Carpaccio di Manzo", 22, "nonveg", ["HIGH_PROTEIN"], 420, 34], ["Tiramisù", 12, "veg", ["VEGETARIAN"], 380, 8],
  ],
  rest_pai: [
    ["Khao Soi", 19, "nonveg", ["BALANCED"], 560, 24], ["Pad Thai", 18, "nonveg", ["BALANCED"], 540, 22],
    ["Tom Yum Soup", 12, "nonveg", ["SPICY", "GLUTEN_FREE"], 320, 12], ["Green Curry", 19, "nonveg", ["SPICY"], 520, 26],
    ["Mango Sticky Rice", 9, "veg", ["VEGETARIAN"], 340, 6], ["Crying Tiger Beef", 22, "nonveg", ["SPICY", "HIGH_PROTEIN"], 540, 38],
    ["Papaya Salad", 12, "veg", ["VEGAN", "SPICY"], 320, 6], ["Northern Sausage", 16, "nonveg", ["BALANCED"], 420, 22],
  ],
  rest_rd: [
    ["Peking Duck", 42, "nonveg", ["HIGH_PROTEIN"], 620, 40], ["Xiao Long Bao", 16, "nonveg", ["BALANCED"], 380, 12],
    ["Dan Dan Noodles", 18, "nonveg", ["SPICY"], 520, 22], ["Kung Pao Chicken", 20, "nonveg", ["SPICY", "HIGH_PROTEIN"], 540, 38],
    ["Mapo Tofu", 17, "veg", ["VEGAN", "SPICY"], 460, 12], ["Wok-Fried Greens", 14, "veg", ["VEGAN"], 340, 6],
    ["Char Siu", 24, "nonveg", ["BALANCED"], 520, 32], ["Egg Fried Rice", 12, "veg", ["VEGETARIAN"], 460, 12],
  ],
  rest_black_blue: [
    ["Classic Caesar Salad", 15, "nonveg", ["BALANCED"], 420, 10], ["Oysters on the Half Shell", 21, "nonveg", ["GLUTEN_FREE"], 320, 16],
    ["Tomahawk Steak (40oz)", 125, "nonveg", ["HIGH_PROTEIN"], 1200, 90], ["Ribeye (16oz)", 62, "nonveg", ["HIGH_PROTEIN"], 820, 58],
    ["Wagyu Striploin", 95, "nonveg", ["HIGH_PROTEIN"], 880, 60], ["Lobster Mac & Cheese", 24, "nonveg", ["BALANCED"], 540, 22],
    ["Truffle Fries", 13, "veg", ["VEGETARIAN"], 460, 8], ["Crème Brûlée", 12, "veg", ["VEGETARIAN"], 380, 8],
  ],
  rest_inspire: [
    ["Canadian Beet Salad", 16, "veg", ["VEGAN"], 360, 8], ["Seared Scallops", 28, "nonveg", ["GLUTEN_FREE"], 420, 34],
    ["BC Sablefish", 42, "nonveg", ["GLUTEN_FREE"], 500, 42], ["Ontario Pork Belly", 34, "nonveg", ["HIGH_PROTEIN"], 580, 40],
    ["AAA Beef Tenderloin", 48, "nonveg", ["HIGH_PROTEIN"], 640, 50], ["Wild Mushroom Risotto", 26, "veg", ["VEGETARIAN"], 540, 14],
    ["Lobster Bisque", 18, "nonveg", ["BALANCED"], 380, 12], ["Maple Crème Brûlée", 13, "veg", ["VEGETARIAN"], 380, 8],
  ],
  rest_peters: [
    ["Caesar Salad", 14, "nonveg", ["BALANCED"], 420, 10], ["Lobster Bisque", 16, "nonveg", ["BALANCED"], 380, 12],
    ["NY Striploin (12oz)", 55, "nonveg", ["HIGH_PROTEIN"], 760, 52], ["Filet Mignon (8oz)", 58, "nonveg", ["HIGH_PROTEIN"], 700, 48],
    ["Atlantic Lobster Tail", 49, "nonveg", ["GLUTEN_FREE"], 460, 36], ["Jumbo Shrimp Scampi", 32, "nonveg", ["BALANCED"], 520, 38],
    ["Garlic Mashed Potatoes", 10, "veg", ["VEGETARIAN"], 380, 8], ["Cheesecake", 12, "veg", ["VEGETARIAN"], 420, 10],
  ],
};
// Build a flat meals array from D
let _mid = 1;
const DATA_MEALS = [];
for (const [rid, list] of Object.entries(D)) {
  list.forEach(([title, price, type, badges, cal, protein]) => {
    DATA_MEALS.push({ id: `m${_mid++}`, restaurantId: rid, title, price, type, badges, calories: cal, proteinGrams: protein });
  });
}
const meals = DATA_MEALS;
const mealPrice = (m) => m.price;
const mealType = (m) => m.type;
const mealRestaurant = (m) => RESTAURANTS.find((r) => r.id === m.restaurantId);
const mealRestName = (m) => restName(m.restaurantId);

/* ============================================================================
   USERS / ORDERS — 24 sample customers with addresses + weekly orders
   ========================================================================== */
const USERS = [
  { id: "u1", name: "Aria Chen", addr: "120 Bay St, Unit 1402", postal: "M5J 2R8", badge: ["HIGH_PROTEIN"] },
  { id: "u2", name: "Marcus Lee", addr: "88 King St W, #805", postal: "M5V 3R2", badge: [] },
  { id: "u3", name: "Priya Nair", addr: "210 Queen St W, #12", postal: "M5V 1Z3", badge: ["VEGETARIAN"] },
  { id: "u4", name: "Sam Torres", addr: "45 Front St E, Apt 3", postal: "M5E 1B3", badge: ["GLUTEN_FREE"] },
  { id: "u5", name: "Jade Kim", addr: "612 Bloor St W", postal: "M6G 1K8", badge: ["SPICY"] },
  { id: "u6", name: "Dev Patel", addr: "340 Dundas St W", postal: "M5T 1G5", badge: ["VEGAN"] },
  { id: "u7", name: "Elena Rossi", addr: "101 College St, #22", postal: "M5T 1P8", badge: [] },
  { id: "u8", name: "Maya Liu", addr: "720 Yonge St, #1404", postal: "M4Y 2B3", badge: ["HIGH_PROTEIN"] },
  { id: "u9", name: "Omar Haddad", addr: "53 Danforth Ave", postal: "M4K 1N1", badge: [] },
  { id: "u10", name: "Nina Desai", addr: "19 Yorkville Ave", postal: "M4W 1L1", badge: ["VEGETARIAN"] },
  { id: "u11", name: "Liam Chen", addr: "77 Front St W, #1802", postal: "M5J 2S2", badge: ["GLUTEN_FREE"] },
  { id: "u12", name: "Zoe Martin", addr: "410 King St W, #9", postal: "M5V 1K2", badge: [] },
  { id: "u13", name: "Kai Nakamura", addr: "25 Scott St, #410", postal: "M5E 1A1", badge: ["HIGH_PROTEIN"] },
  { id: "u14", name: "Ava Thompson", addr: "500 Queen St E", postal: "M5A 1V1", badge: ["VEGAN"] },
  { id: "u15", name: "Leo Garcia", addr: "160 John St, #701", postal: "M5V 2E5", badge: [] },
  { id: "u16", name: "Sara Ali", addr: "220 King St E", postal: "M5A 1J7", badge: ["SPICY"] },
  { id: "u17", name: "Noah Kim", addr: "88 Spadina Ave, #1601", postal: "M5V 2J2", badge: ["GLUTEN_FREE"] },
  { id: "u18", name: "Emma Wilson", addr: "33 Bay St, #905", postal: "M5J 2Z1", badge: [] },
  { id: "u19", name: "Ravi Kumar", addr: "10 Dockside Dr", postal: "M5A 0B6", badge: ["VEGETARIAN"] },
  { id: "u20", name: "Chloe Brown", addr: "45 Adelaide St W, #12", postal: "M5H 1P4", badge: ["HIGH_PROTEIN"] },
  { id: "u21", name: "Ethan Ross", addr: "700 King St W, #3001", postal: "M5V 2Y6", badge: [] },
  { id: "u22", name: "Mia Johansson", addr: "220 Yonge St, #800", postal: "M5B 2H1", badge: ["VEGAN"] },
  { id: "u23", name: "Ryan Walsh", addr: "14 Bathurst St", postal: "M5T 2S6", badge: ["SPICY"] },
  { id: "u24", name: "Aisha Bello", addr: "3 Bremner Blvd, #2201", postal: "M5J 0A6", badge: [] },
];

/* ============================================================================
   DELIVERY / TRACKING
   ========================================================================== */
const DELIVERY_WINDOWS = [
  { id: "5-7", label: "5:00 – 7:00 PM", slot: "5:00 PM - 7:00 PM" },
  { id: "6-8", label: "6:00 – 8:00 PM", slot: "6:00 PM - 8:00 PM" },
  { id: "7-9", label: "7:00 – 9:00 PM", slot: "7:00 PM - 9:00 PM" },
];
const TRACK_STEPS = [
  { key: "preparing", label: "Preparing", icon: "pot" },
  { key: "packed", label: "Packed", icon: "box" },
  { key: "out", label: "Out for delivery", icon: "truck" },
  { key: "delivered", label: "Delivered", icon: "check" },
];
const TRACK = { status: "out", etaMin: 26, progress: 68, courierName: "Marcus", vehicle: "Bike · Downtown", from: "Indian Desire · 260 Bloor St W", to: "CN Tower · 301 Front St W", address: "120 Bay St, Unit 1402" };
// Fleet board — multiple live orders for the owner (each has a map position)
const FLEET = [
  { id: "ord-1001", customer: "Aria Chen", addr: "120 Bay St, #1402", rest: "Indian Desire", status: "out", courier: "Marcus", eta: "12 min", progress: 74, from: "Bloor St W", to: "CN Tower area", x: 210, y: 55, toX: 285, toY: 25 },
  { id: "ord-1002", customer: "Sam Torres", addr: "45 Front St E", rest: "Kobu", status: "out", courier: "Nadia", eta: "18 min", progress: 62, from: "Financial District", to: "St. Lawrence", x: 180, y: 80, toX: 250, toY: 60 },
  { id: "ord-1003", customer: "Priya Nair", addr: "210 Queen St W", rest: "Sweet Basil", status: "packed", courier: "—", eta: "30 min", progress: 45, from: "Harbourfront", to: "Queen West", x: 120, y: 100, toX: 150, toY: 95 },
  { id: "ord-1004", customer: "Maya Liu", addr: "720 Yonge St", rest: "Seoul Food Co.", status: "out", courier: "Tom", eta: "22 min", progress: 58, from: "Koreatown", to: "Midtown", x: 230, y: 40, toX: 265, toY: 15 },
  { id: "ord-1005", customer: "Jade Kim", addr: "612 Bloor St W", rest: "Bánh Mì Bro", status: "preparing", courier: "—", eta: "40 min", progress: 18, from: "Kensington", to: "Bloor West", x: 90, y: 115, toX: 70, toY: 125 },
  { id: "ord-1006", customer: "Dev Patel", addr: "340 Dundas St W", rest: "Green Table", status: "out", courier: "Sofia", eta: "15 min", progress: 70, from: "Leslieville", to: "Chinatown", x: 200, y: 70, toX: 165, toY: 90 },
];

/* ============================================================================
   PRICING — 10% of monthly sales, all-in (card + delivery + platform), auto-deducted
   ========================================================================== */
const PRICING = {
  base: 0,
  orderFeePct: 10,
  firstMonthFree: true,
};
function partnerMonthlyFee() {
  return PRICING.base;
}

/* ---------- helpers ---------- */
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function starLine(rating) {
  const f = Math.round(rating);
  return "★★★★★".slice(0, f) + "☆☆☆☆☆".slice(0, 5 - f);
}
function badgeHtml(label) {
  const k = label.toUpperCase().replace(/[\s-]/g, "_");
  return `<span class="chip ${BADGE_COLOR[k] || BADGE_COLOR.STANDARD}">${esc(label)}</span>`;
}
function money(n) { return "$" + Number(n).toFixed(2); }
function fmtDate(iso) { try { return new Date(iso).toLocaleDateString("en-CA", { weekday: "long", month: "short", day: "numeric" }); } catch { return iso; } }
function versionBadge(kind) {
  const v = `<span class="ver-badge">${VERSION} · latest</span>`;
  const older = `<a class="ver-older" href="${VERSION_LINK}">older version</a>`;
  return `<span class="ver-line ${kind === "partner" ? "p" : ""}">${esc(BRAND)} ${v} ${older} · offline-capable PWA</span>`;
}
function flash(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove("show"), 2400);
}
/* ---- audio explainers (small 🔊 play button per section) ---- */
let _audioEl = null;
function playAudio(src) {
  if (!_audioEl) { _audioEl = new Audio(); _audioEl.preload = "auto"; document.body.appendChild(_audioEl); }
  if (_audioEl.src && _audioEl.src.includes(src) && !_audioEl.paused) { _audioEl.pause(); _audioEl.currentTime = 0; return; }
  _audioEl.src = src;
  _audioEl.play().catch(() => flash("Audio is unavailable."));
}
function explainer(src) {
  if (!settingOn("showAudio")) return "";
  return `<button class="explainer-btn" onclick="playAudio('${src}')" title="Hear this explained" aria-label="Play audio explainer">${ico("play")}</button>`;
}
/* shared consumer topbar — critical links on every consumer page */
function consumerTopbar(active) {
  const A = (k, href, icon, label, cls) => `<a href="${href}" class="navbtn ${cls || "link"} ${active === k ? "active-nav" : ""}">${ico(icon)}<span>${label}</span></a>`;
  return `
    <header class="topbar">
      <a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b><span class="sub">Curated weekly meals · GTA</span></div></a>
      <nav class="consumer-nav top-links">
        ${A("auction", "#auction-deals", "gavel", "Sliding Scale", "ghost")}
        ${A("restaurants", "#restaurants", "store", "Restaurants", "ghost")}
        ${A("search", "#restaurants", "search", "Search", "ghost")}
        ${A("gives", "#gives", "heart", "Gives", "link")}
      </nav>
      <nav class="consumer-nav cta-row">
        <a href="#restaurants" class="navbtn primary cta-big"><span class="cta-stack"><span class="cta-bold">My Week. Fully Catered.</span><span class="cta-sub">One box, once a week. Delivered on your day.</span></span></a>
      </nav>
    </header>`;
}
function courierMapX(p) { return 20 + (265 * (p / 100)); }
function courierMapY(p) { return 130 - (105 * (p / 100)); }

/* ---------- modal dialog (budget prompts, confirmations) ---------- */
function showModal(o) {
  let el = document.getElementById("modal");
  if (!el) { el = document.createElement("div"); el.id = "modal"; document.body.appendChild(el); }
  el.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-card">
        ${o.ico ? `<div class="modal-ico">${ico(o.ico)}</div>` : ""}
        <div class="modal-title">${o.title}</div>
        ${o.message ? `<div class="modal-msg">${o.message}</div>` : ""}
        <div class="modal-btns">
          ${o.buttons.map((b, i) => `<button class="btn ${b.primary ? "primary" : "ghost"} ${b.danger ? "danger" : ""}" onclick="modalAction(${i})">${b.label}</button>`).join("")}
        </div>
      </div>
    </div>`;
  el.style.display = "block";
  window._modal = o.buttons;
}
function closeModal() { const el = document.getElementById("modal"); if (el) el.style.display = "none"; }
function modalAction(i) {
  const o = window._modal;
  if (o && o[i]) { const act = o[i].action; closeModal(); if (act) act(); }
}

/* ---------- router ---------- */
const routes = {
  "": renderHome, restaurants: renderRestaurants, build: renderBuild, dashboard: renderDashboard,
  schedule: renderSchedule, track: renderTrack, demo: renderDemo, gives: renderGives,
  "restaurant-menu": renderRestaurantMenu, checkout: renderCheckout,
  "auction-deals": renderAuctionDeals, login: renderLoginPage,
  partners: renderPartners, kitchen: renderKitchen, fleet: renderFleet, payouts: renderPayouts, auction: renderAuction, menu: renderMenu,
  admin: renderAdmin, settings: renderSettings,
};
const PARTNER_ROUTES = ["partners", "kitchen", "fleet", "payouts", "auction", "menu"];
function currentRoute() { const h = location.hash.replace(/^#\/?/, "").split("?")[0]; return routes[h] ? h : ""; }
function routeParams() { const qs = location.hash.split("?")[1] || ""; const p = {}; qs.split("&").forEach((kv) => { const [k, v] = kv.split("="); if (k) p[k] = decodeURIComponent(v || ""); }); return p; }

/* ---- owner auth gate (demo: password stored in localStorage; real auth in production) ---- */
const OWNER_PASS = "supperclub"; // restaurant-owner credential — replace with a vetted auth provider in prod
function isOwnerAuthed() { try { return localStorage.getItem("scd_owner") === "1"; } catch { return false; } }
/* ---- PLATFORM-OWNER auth (completely separate from restaurant owners). ---- */
const ADMIN_PASS = "supperclub-admin"; // platform-owner credential — demo; replace with real auth in prod
function isAdminAuthed() { try { return localStorage.getItem("scd_admin") === "1"; } catch { return false; } }
function adminLogin() {
  const inp = document.getElementById("admin-pass");
  const val = inp ? inp.value : "";
  if (val === ADMIN_PASS) {
    try { localStorage.setItem("scd_admin", "1"); } catch {}
    flash("✓ Platform admin signed in.");
    navigate();
  } else { flash("Incorrect platform-admin password."); }
}
function adminLogout() {
  try { localStorage.removeItem("scd_admin"); } catch {}
  flash("Signed out of admin.");
  navigate();
}

/* ---- ADMIN module toggles (default ON; admin can switch any off) ----
   These control which homepage sections / features are enabled. Stored in
   localStorage so toggles persist; admin panel edits them. */
const MODULE_DEFAULTS = {
  search: true,
  featured: true,        // Featured Restaurant hero
  dishOfDay: true,       // Dish of the Day (with recipe)
  chefStory: true,       // Chef Story of the Day
  whatAte: true,         // What Toronto Ate (auto-generated)
  gives: true,           // Supper Club Gives strip + ledger
  gallery: true,         // Fresh from the kitchens gallery
  auction: true,         // daily content auctions (owner tool)
  fleet: true,           // fleet board (owner tool)
  payouts: true,         // payouts (owner tool)
  kitchens: true,        // restaurant list
};
function getModules() {
  const m = { ...MODULE_DEFAULTS };
  try {
    const raw = localStorage.getItem("scd_modules");
    if (raw) { Object.assign(m, JSON.parse(raw)); }
  } catch {}
  return m;
}
function moduleOn(key) { return getModules()[key] !== false; }
function setModule(key, on) {
  const m = getModules();
  m[key] = !!on;
  try { localStorage.setItem("scd_modules", JSON.stringify(m)); } catch {}
  navigate();
}
/* ---- PLATFORM SETTINGS — full admin control (separate admin URL) ----
   Admin can toggle any feature on/off: auction, login, ordering, etc.
   Enabled/disabled via the admin panel; everything is stored in localStorage. */
const SETTINGS_DEFAULTS = {
  loginEnabled: false,     // email + Google login (built but DISABLED by default)
  auctionEnabled: true,    // Sliding Scale auction on/off
  orderingEnabled: true,   // allow orders
  changePriceBeforeCommit: true, // allow changing chosen price before committing
  showAudio: true,         // audio explainer buttons
  showWhatAte: true,       // "What the GTA ate"
  showGives: true,
};
const SETTINGS_KEY = "scd_settings";
function getSettings() {
  const s = { ...SETTINGS_DEFAULTS };
  try { const raw = localStorage.getItem(SETTINGS_KEY); if (raw) Object.assign(s, JSON.parse(raw)); } catch {}
  return s;
}
function settingOn(key) { return getSettings()[key] !== false; }
function setSetting(key, on) {
  const s = getSettings(); s[key] = !!on;
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch {}
  flash(`${on ? "Enabled" : "Disabled"}: ${key}.`);
  navigate();
}
/* ---- restaurant visibility (admin can uncheck to hide from customers) ---- */
const HIDDEN_REST_KEY = "scd_hidden_rest";
function hiddenRests() { try { return JSON.parse(localStorage.getItem(HIDDEN_REST_KEY) || "[]"); } catch { return []; } }
function restVisible(id) { return !hiddenRests().includes(id); }
function visibleRestaurants() { return RESTAURANTS.filter((r) => restVisible(r.id)); }
function setRestVisible(id, on) {
  let h = hiddenRests();
  if (on) h = h.filter((x) => x !== id); else if (!h.includes(id)) h.push(id);
  try { localStorage.setItem(HIDDEN_REST_KEY, JSON.stringify(h)); } catch {}
  navigate();
}
function renderLogin() {
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>restaurant owner sign-in</span></div></div></header>
      <section class="login-wrap">
        <div class="login-card">
          <div class="login-ico">${ico("shield")}</div>
          <h2>Restaurant Owner Sign-in</h2>
          <p class="muted sm">The auction, fleet, kitchen, and payout tools are for restaurant owners only. Sign in to continue.</p>
          <input type="password" id="owner-pass" placeholder="Enter owner password" class="login-input" onkeydown="if(event.key==='Enter')ownerLogin()" />
          <button class="btn p-primary" style="width:100%" onclick="ownerLogin()">${ico("arrow")} Sign in</button>
          <p class="muted sm" style="margin-top:12px">Demo password: <code>supperclub</code></p>
          <a href="#" class="btn p-outline sm" style="margin-top:8px">${ico("arrowLeft")} Back to eaters</a>
        </div>
      </section>
    </div>`;
}
function ownerLogin() {
  const inp = document.getElementById("owner-pass");
  const val = inp ? inp.value : "";
  if (val === OWNER_PASS) {
    try { localStorage.setItem("scd_owner", "1"); } catch {}
    flash("✓ Signed in as restaurant owner.");
    navigate();
  } else {
    flash("Incorrect password.");
  }
}
function ownerLogout() {
  try { localStorage.removeItem("scd_owner"); } catch {}
  flash("Signed out.");
  navigate();
}
let navNoScroll = false;
function navigate() {
  const r = currentRoute();
  const app = document.getElementById("app");
  // Admin = platform-owner tool, fully separate from the restaurant-owner portal.
  if (r === "admin") {
    if (!isAdminAuthed()) {
      app.className = "partner";
      app.innerHTML = renderAdminLogin();
      window.scrollTo(0, 0);
      return;
    }
    app.className = "partner";
    app.innerHTML = renderAdmin();
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r));
    window.scrollTo(0, 0);
    return;
  }
  // Settings = platform-owner admin URL (separate from the public app)
  if (r === "settings") {
    if (!isAdminAuthed()) {
      app.className = "partner";
      app.innerHTML = renderAdminLogin();
      window.scrollTo(0, 0);
      return;
    }
    app.className = "partner";
    app.innerHTML = renderSettings();
    window.scrollTo(0, 0);
    return;
  }
  // Restaurant-owner routes require owner sign-in
  if (PARTNER_ROUTES.includes(r) && !isOwnerAuthed()) {
    app.className = "partner";
    app.innerHTML = renderLogin();
    window.scrollTo(0, 0);
    return;
  }
  // Ordering disabled -> block checkout
  if (r === "checkout" && !settingOn("orderingEnabled")) {
    flash("Ordering is currently disabled.");
    app.className = "consumer";
    app.innerHTML = renderHome();
    window.scrollTo(0, 0);
    return;
  }
  // If login is enabled, require login to place orders
  if (settingOn("loginEnabled") && !isLoggedIn() && (r === "checkout" || r === "dashboard")) {
    app.className = "consumer";
    app.innerHTML = renderLoginPage();
    window.scrollTo(0, 0);
    return;
  }
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r));
  app.className = PARTNER_ROUTES.includes(r) ? "partner" : "consumer";
  app.innerHTML = routes[r]();
  if (!navNoScroll) window.scrollTo(0, 0);
  navNoScroll = false;
}

/* ============================================================================
   HERO ×4 AUTO-SLIDER — restaurants buy these slots ($200/wk). Only FILLED
   slots show; auto-rotates; tap opens the restaurant; touch/hover pauses.
   ========================================================================== */
let heroIdx = 0;
let heroTimer = null;
// filled hero slots (in a real build this comes from paid placements)
const HERO_SLIDES = [
  { rid: "rest_indian", image: "img/featured-restaurant.jpg", tag: "Featured restaurant" },
  { rid: "rest_pai", image: "img/dish-poke.jpg", tag: "Dish of the Day" },
  { rid: "rest_black_blue", image: "img/chef.jpg", tag: "Steakhouse feature" },
  { rid: "rest_alo_canoe", image: "img/featured-chef.jpg", tag: "Fine dining feature" },
];
function heroStart() { clearInterval(heroTimer); heroTimer = setInterval(heroNext, 6000); }
function heroStop() { clearInterval(heroTimer); heroTimer = null; }
function heroNext() { heroIdx = (heroIdx + 1) % HERO_SLIDES.length; navNoScroll=true; navigate(); }
function heroGo(i) { heroIdx = i; navNoScroll=true; navigate(); }
function renderHero() {
  const filled = HERO_SLIDES.filter((h) => h.rid && restVisible(h.rid));
  if (!filled.length) return "";
  const cur = filled[heroIdx % filled.length];
  const r = RESTAURANTS.find((x) => x.id === cur.rid) || {};
  const dots = filled.map((_, i) => `<button class="hero-dot ${i === heroIdx % filled.length ? "on" : ""}" onclick="heroGo(${i})"></button>`).join("");
  return `
    <section class="hero-slider" onmouseenter="heroStop()" onmouseleave="heroStart()" ontouchstart="heroStop()" ontouchend="setTimeout(heroStart,3000)">
      <a href="#restaurant-menu?rest=${cur.rid}" class="hero-slide" style="background-image:url('${cur.image}')">
        <div class="hero-slide-overlay">
          <div class="hero-slide-tag">${esc(cur.tag)} · ${esc(r.name || "")}</div>
          <div class="hero-slide-title">${esc(r.name || "")} — ${esc(r.cuisine || "")}</div>
          <div class="hero-slide-sub">${googleHtml(r)}</div>
          <span class="hero-slide-cta">${ico("arrow")} Order from ${esc(r.name || "this restaurant")}</span>
          <div class="hero-dinesafe">${dineSafeHtml(r)}</div>
        </div>
      </a>
      <div class="hero-dots">${dots}</div>
    </section>`;
}
function renderHome() {
  const steps = [
    ["1", "Register", "One-tap Apple Pay / Google Pay. No forms.", "bolt"],
    ["2", "Choose", "Pick your kitchen & meals — see who cooks your food.", "tap"],
    ["3", "Get delivery", "One box, one bill, weekly or monthly. All-inclusive.", "truck"],
  ].map(([n, t, d, ic]) => `<div class="step"><div class="step-num">${n}</div><div class="step-body"><div class="step-head">${ico(ic)}<span>${t}</span></div><div class="step-d">${d}</div></div></div>`).join("");

  const homeRestaurants = visibleRestaurants().filter((r) => {
    if (homeFilter.q && !(r.name.toLowerCase().includes(homeFilter.q) || r.cuisine.toLowerCase().includes(homeFilter.q))) return false;
    if (homeFilter.type === "high-protein") { const hp = meals.filter((m) => m.restaurantId === r.id && m.badges.includes("HIGH_PROTEIN")).length; if (!hp) return false; }
    if (homeFilter.type === "vegetarian") { const vg = meals.filter((m) => m.restaurantId === r.id && m.type === "veg").length; if (!vg) return false; }
    if (homeFilter.type === "nearby" && r.radius < 7) return false;
    if (homeFilter.type === "under-13") { const cheap = meals.some((m) => m.restaurantId === r.id && m.price <= 12); if (!cheap) return false; }
    return true;
  }).slice(0, 6);
  const top = (homeRestaurants.length ? homeRestaurants : visibleRestaurants().slice(0, 6)).map((r) => `
    <div class="rest-card ${r.dineSafe !== "unconditional" ? "warn" : ""}">
      <div class="rest-avatar">${esc(r.name[0])}</div>
      <div class="rest-info"><div class="rest-name">${esc(r.name)}</div>
        <div class="rest-meta">${esc(r.cuisine)} · ${esc(r.neighborhood)}</div>
        <div class="rest-trust">${googleHtml(r)} ${dineSafeHtml(r)}</div>
      </div>
    </div>`).join("");

  /* ---- auto-generated content sections ----
     Uses LIVE_CONTENT from the API when available, else embedded demo data. */
  const live = LIVE_CONTENT || {};
  const featured = live.featured
    ? { name: live.featured.name, cuisine: live.featured.cuisine, neighborhood: live.featured.neighborhood, google: live.featured.google, dineSafe: live.featured.dineSafe }
    : (RESTAURANTS.find((r) => r.id === "rest_indian") || RESTAURANTS[0]);
  const dish = live.dishOfTheDay
    ? { title: live.dishOfTheDay.title, rest: live.dishOfTheDay.restaurant, recipe: live.dishOfTheDay.recipe, rid: live.dishOfTheDay.restaurantId || "rest_indian", image: "img/dish-butter-chicken.jpg" }
    : currentDish();
  const whatAte = (live.whatTorontoAte && live.whatTorontoAte.length)
    ? live.whatTorontoAte.map((w) => ({ dish: w.dish, rest: w.restaurant, orders: w.orders }))
    : [
        { dish: "Bulgogi Beef Bowl", rest: "Seoul Food Co.", orders: 214 },
        { dish: "Chicken Tikka Masala", rest: "Indian Desire", orders: 198 },
        { dish: "Lemon Herb Salmon", rest: "Sweet Basil", orders: 176 },
        { dish: "Carne Asada Bowl", rest: "Taco Toro", orders: 149 },
      ];
  // social-proof stats (anonymous, on-platform)
  const GTA_TOTAL_MEALS = "2,400";
  const GTA_REORDER_PCT = 82;

  return `
    <div class="consumer-shell">
      ${consumerTopbar("")}

      ${moduleOn("search") ? `
      <!-- search bar -->
      <section class="search-bar">
        <input type="search" placeholder="Search food, restaurant, or cuisine…" oninput="homeSearch(this.value)" value="${esc(homeFilter.q)}" />
        <div class="search-filters bold-chips">
          <button class="chip ${homeFilter.type === "all" ? "on" : ""}" onclick="homeFilterType('all')">All</button>
          <button class="chip ${homeFilter.type === "high-protein" ? "on" : ""}" onclick="homeFilterType('high-protein')">💪 High-protein</button>
          <button class="chip ${homeFilter.type === "vegetarian" ? "on" : ""}" onclick="homeFilterType('vegetarian')">🥦 Vegetarian</button>
          <button class="chip ${homeFilter.type === "nearby" ? "on" : ""}" onclick="homeFilterType('nearby')">📍 Nearby</button>
          <button class="chip ${homeFilter.type === "under-13" ? "on" : ""}" onclick="homeFilterType('under-13')">💵 Under $13</button>
        </div>
      </section>` : ""}

      <section class="hero">
        <div class="hero-title">
          <div class="eyebrow">Just 3 things. That's it.</div>
          <h1>Chef-prepared meals.<br/><span class="accent">One box, once a week.</span></h1>
          <p>Your week, delivered in one drop — not a different courier every day. Pick a kitchen, build your box (min. $80), get it on your day. No forms, no surprise fees, every kitchen live-vetted.</p>
          <div style="display:flex;gap:12px;align-items:center;margin-top:18px;flex-wrap:wrap"><a href="#restaurants" class="btn primary">${ico("arrow")} Plan your week</a>${explainer("audio/week.mp3")}</div>
        </div>
        <div class="steps hero-steps">${steps}</div>
      </section>

      ${moduleOn("featured") ? renderHero() : ""}

      ${moduleOn("whatAte") && settingOn("showWhatAte") ? `
      <!-- WHAT THE GTA ATE — 4-stat social-proof strip (anonymous, on-platform) -->
      <section class="content-sec gta-strip">
        <div class="kicker">${ico("chart")} What the GTA ate last week</div>
        <div class="gta-grid">
          <div class="gta-stat"><span class="gta-num">${(() => { const total = whatAte.reduce((a, w) => a + w.orders, 0); return total ? Math.round((whatAte[0].orders / total) * 100) + "%" : "—"; })()}</span><span class="gta-l">of orders were our #1 dish</span></div>
          <div class="gta-stat"><span class="gta-num">${GTA_TOTAL_MEALS}</span><span class="gta-l">meals delivered this week</span></div>
          <div class="gta-stat"><span class="gta-num">${GTA_REORDER_PCT}%</span><span class="gta-l">of customers reorder weekly</span></div>
          <div class="gta-stat"><span class="gta-num">5–7pm</span><span class="gta-l">our busiest delivery window</span></div>
        </div>
      </section>` : ""}

      ${moduleOn("gallery") ? `
      <!-- REAL DISH PHOTOS from partner kitchens (GTA cuisines) -->
      <section class="content-sec">
        <div class="kicker">${ico("chef")} Fresh from the kitchens · this week's specials</div>
        <div class="dish-gallery">
          <div class="dg-item"><img src="img/dish-butter-chicken.jpg" alt="Indian Desire" /><span class="dg-label">Indian Desire</span></div>
          <div class="dg-item"><img src="img/dish-poke.jpg" alt="Kobu Noodle & Rice" /><span class="dg-label">Kobu</span></div>
          <div class="dg-item"><img src="img/dish-veggie-bowl.jpg" alt="Green Table" /><span class="dg-label">Green Table</span></div>
          <div class="dg-item"><img src="img/chef-2.jpg" alt="Sweet Basil" /><span class="dg-label">Sweet Basil</span></div>
          <div class="dg-item"><img src="img/chef-3.jpg" alt="Seoul Food Co." /><span class="dg-label">Seoul Food Co.</span></div>
        </div>
      </section>` : ""}

      ${moduleOn("kitchens") ? `
      <section class="top-rest">
        <div class="kicker" style="margin:0 0 12px">${ico("store")} Partner kitchens</div>
        <div class="top-grid">${top}</div>
        <a href="#restaurants" class="btn ghost sm" style="margin-top:14px">View all ${visibleRestaurants().length} restaurants ${ico("arrow")}</a>
      </section>` : ""}

      <footer class="foot">${versionBadge()}
        <span class="admin-foot">· <a href="#admin" style="opacity:.6">Platform admin</a></span></footer>
    </div>`;
}

function homeSearch(q) {
  homeFilter.q = (q || "").toLowerCase().trim();
  navigate();
}
function slidingCard(a) {
  const { next } = auctionLevelLabel(a);
  const chosen = a._chosen != null ? a._chosen : a.levels[a.levels.length - 1].price; // default = lowest
  const need = next ? next.qty : a.levels[a.levels.length - 1].qty;
  return `<div class="wa-card">
    <div class="wa-img"><img src="${a.image}" alt="${esc(a.dish)}" loading="lazy" /></div>
    <div class="wa-body">
      <div class="wa-rest">${esc(a.rest)}</div>
      <div class="wa-dish">${esc(a.dish)}</div>
      <div class="wa-listed">Listed $${a.listed}</div>
      <div class="wa-holdnote">${ico("lock")} Card hold required to count. No hold = no count. Charged only if the deal fires — else released.</div>
      <div class="wa-pick">${ico("tap")} Choose your price</div>
      <div class="wa-levels">
        ${a.levels.map((l, i) => {
          const hit = a.confirmed >= l.qty;
          const sel = l.price === chosen;
          const isBest = i === a.levels.length - 1;
          return `<button class="wa-level ${sel ? "sel" : ""} ${hit ? "hit" : ""}" onclick="auctionPick('${a.id}', ${l.price})">
            <span class="wl-price">$${l.price}</span>
            <span class="wl-qty">at ${l.qty}+ card-confirmed</span>
            ${sel ? `<span class="wl-badge sel-b">✓ chosen</span>` : ""}
            ${isBest && hit ? `<span class="wl-badge">unlocked</span>` : ""}
          </button>`;
        }).join("")}
      </div>
      <div class="wa-progress"><div class="wa-bar"><div class="wa-fill" style="width:${Math.min(100, (a.confirmed / need) * 100)}%"></div></div><span class="wa-count"><b>${a.confirmed}</b> confirmed (${a.pledged} pledged) · ${need} needed to fire</span></div>
      <button class="btn primary sm wa-join" onclick="auctionJoin('${a.id}')">${ico("check")} Join at $${chosen}</button>
    </div>
  </div>`;
}
function renderAuctionDeals() {
  const cards = WEEK_AUCTION.map((a) => slidingCard(a)).join("");
  return `
    <div class="consumer-shell">
      ${consumerTopbar("auction")}
      <section class="build-hero">
        <div class="eyebrow">Sliding Scale · closes Monday · delivers Wednesday</div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h1 style="margin:0">Best price when we hit the numbers.</h1>${explainer("audio/sliding.mp3")}</div>
        <p>Restaurants set a low price only if enough of you commit. A deal fires on card-confirmed orders — the price settles to the level the real demand reaches.</p>
      </section>
      <section class="wa-howto" style="max-width:1080px;margin:0 auto;padding:0 24px">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px"><div class="h2" style="margin:0">How it works</div>${explainer("audio/howto.mp3")}</div>
        <div class="howto-grid">
          <div class="howto-step">${ico("tap")}<b>1 · Pledge</b><span>Say you're in (free, no card). Shows interest.</span></div>
          <div class="howto-step">${ico("lock")}<b>2 · Add a card hold</b><span>Only card-confirmed orders count toward the deal. No hold = no count.</span></div>
          <div class="howto-step">${ico("check")}<b>3 · Deal fires</b><span>When enough confirm, you're charged at your level. If not reached, your hold is released — no charge.</span></div>
        </div>
      </section>
      <section class="week-auction" style="margin-top:16px"><div class="wa-grid">${cards}</div></section>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}
function homeFilterType(type) {
  homeFilter.type = type;
  flash(type === "all" ? "Showing all kitchens" : `Filtering by ${type.replace("-", " ")}…`);
  navigate();
}

/* ---- optional live-content fetch: tries the API, falls back to embedded data ----
   On GitHub Pages (no backend) it silently uses embedded data. In a local/demo build
   with a public API reachable, it uses live content. Set API_BASE to a public URL. */
const API_BASE = ""; // 🔌 SET THIS: e.g. "https://supperclub-api.onrender.com" when you host the backend publicly. "" = embedded fallback (works offline / GitHub Pages).
let LIVE_CONTENT = null;
let LIVE_LOADED = false;
async function loadLiveContent() {
  if (LIVE_LOADED) return;
  LIVE_LOADED = true;
  if (!API_BASE) return; // no API configured -> keep embedded
  try {
    const res = await fetch(`${API_BASE}/api/v1/content`);
    if (res.ok) { LIVE_CONTENT = await res.json(); }
  } catch { /* offline / no API -> keep embedded */ }
}
function liveOr(field, fallback) {
  return LIVE_CONTENT && LIVE_CONTENT[field] != null ? LIVE_CONTENT[field] : fallback;
}
// kick off content load once at boot
if (typeof window !== "undefined") { loadLiveContent(); }

/* ============================================================================
   SUPPER CLUB GIVES — public transparent ledger
   ========================================================================== */
const GIVES_LEDGER = [
  { date: "Jul 14", sponsor: "NorthStar Bank", restaurant: "Indian Desire", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Daily Bread Food Bank" },
  { date: "Jul 15", sponsor: "Liberty Gym", restaurant: "Seoul Food Co.", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Fred Victor" },
  { date: "Jul 16", sponsor: "Queen Laundromat", restaurant: "Sweet Basil", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Scott Mission" },
  { date: "Jul 17", sponsor: "Bay Street Legal", restaurant: "Taco Toro", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Daily Bread Food Bank" },
  { date: "Jul 18", sponsor: "Green Table Grocer", restaurant: "The Oat Cart", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Fred Victor" },
  { date: "Jul 19", sponsor: "NorthStar Bank", restaurant: "Kobu Noodle & Rice", app: "Supper Club Direct", amount: "500 / 500 / 500", shelter: "Scott Mission" },
];
function renderGives() {
  const totalMeals = 1830;
  const total$ = 9000;
  const rows = GIVES_LEDGER.map((g) => `<div class="gl-row">
    <span class="gl-date">${g.date}</span>
    <span class="gl-sponsor">${esc(g.sponsor)}</span>
    <span class="gl-rest">${esc(g.restaurant)}</span>
    <span class="gl-app">${esc(g.app)}</span>
    <span class="gl-amt">${esc(g.amount)}</span>
    <span class="gl-shelter">${esc(g.shelter)}</span>
  </div>`).join("");
  return `
    <div class="consumer-shell">
      ${consumerTopbar("gives")}
      <section class="build-hero">
        <div class="eyebrow">Supper Club Gives</div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h1 style="margin:0">Feeding our community, transparently</h1>${explainer("audio/howto.mp3")}</div>
        <p>Every week, a restaurant + a sponsor + Supper Club Direct each give $500. Here's the full, searchable record — no fine print.</p>
        <div class="gives-totals">
          <div><span class="gt-num">${totalMeals.toLocaleString()}</span><span class="gt-l">meals given</span></div>
          <div><span class="gt-num">$${total$}</span><span class="gt-l">donated</span></div>
          <div><span class="gt-num">${GIVES_LEDGER.length}</span><span class="gt-l">community partners</span></div>
        </div>
      </section>
      <section class="gives-search">
        <input type="search" placeholder="Search by sponsor, restaurant, or shelter…" />
        <div class="search-filters"><button class="chip on">All</button><button class="chip">July</button><button class="chip">August</button></div>
      </section>
      <section class="gl-ledger">
        <div class="gl-head"><span>Date</span><span>Sponsor</span><span>Restaurant</span><span>App</span><span>Amount ($ each)</span><span>Shelter</span></div>
        ${rows}
      </section>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

/* ============================================================================
   AUCTION — daily featured/dish/chef bidding (partner portal)
   ========================================================================== */
const AUCTION_SLOTS = [
  { slot: "Featured Restaurant", day: "Thursday", topBid: 85, bids: 6, leader: "Indian Desire", examples: ["Indian Desire $85", "Richmond Station $70", "Aloette $65"] },
  { slot: "Dish of the Day", day: "Thursday", topBid: 70, bids: 4, leader: "Richmond Station", examples: ["Richmond Station $70", "Pai $60", "Indian Desire $55"] },
  { slot: "Chef Story", day: "Thursday", topBid: 60, bids: 3, leader: "Pai", examples: ["Pai $60", "Aloette $55", "Seoul Food Co. $50"] },
];
let auctionWeek = 1;
/* ---- Sliding Scale (reverse/group-buy) ----
   Restaurant bids how FEW orders unlock a discount. 3 price levels (listed/mid/lowest),
   each with a min-order count. Transparent live totals. Closes Mon, delivers Wed. */
const WEEK_AUCTION = [
  { id: "wa1", rest: "Indian Desire", dish: "Butter Chicken & Basmati", image: "img/dish-butter-chicken.jpg", listed: 20, levels: [ { qty: 40, price: 19 }, { qty: 60, price: 17 }, { qty: 100, price: 15 } ], pledged: 47, confirmed: 18 },
  { id: "wa2", rest: "Pai Northern Thai Kitchen", dish: "Khao Soi", image: "img/dish-poke.jpg", listed: 19, levels: [ { qty: 40, price: 16 }, { qty: 70, price: 14 }, { qty: 100, price: 12 } ], pledged: 35, confirmed: 12 },
  { id: "wa3", rest: "Sweet Basil", dish: "Mediterranean Falafel Plate", image: "img/dish-veggie-bowl.jpg", listed: 12, levels: [ { qty: 50, price: 10 }, { qty: 80, price: 9 }, { qty: 120, price: 8 } ], pledged: 21, confirmed: 6 },
  { id: "wa4", rest: "R&D", dish: "Dan Dan Noodles", image: "img/chef-2.jpg", listed: 18, levels: [ { qty: 40, price: 15 }, { qty: 60, price: 13 }, { qty: 90, price: 11 } ], pledged: 12, confirmed: 4 },
  { id: "wa5", rest: "Quetzal", dish: "Al Pastor", image: "img/chef-3.jpg", listed: 24, levels: [ { qty: 30, price: 20 }, { qty: 50, price: 17 }, { qty: 80, price: 15 } ], pledged: 8, confirmed: 2 },
  { id: "wa6", rest: "Black and Blue", dish: "Truffle Fries", image: "img/chef.jpg", listed: 13, levels: [ { qty: 40, price: 10 }, { qty: 70, price: 9 }, { qty: 100, price: 8 } ], pledged: 3, confirmed: 1 },
  { id: "wa7", rest: "Seoul Food Co.", dish: "Bulgogi Beef Bowl", image: "img/dish-indian-2.jpg", listed: 13, levels: [ { qty: 50, price: 11 }, { qty: 80, price: 10 }, { qty: 110, price: 9 } ], pledged: 0, confirmed: 0 },
  { id: "wa8", rest: "Don Alfonso 1890", dish: "Risotto alla Milanese", image: "img/featured-restaurant.jpg", listed: 34, levels: [ { qty: 25, price: 28 }, { qty: 40, price: 25 }, { qty: 60, price: 22 } ], pledged: 2, confirmed: 1 },
  { id: "wa9", rest: "Bar Raval", dish: "Gambas al Ajillo", image: "img/chef-2.jpg", listed: 19, levels: [ { qty: 35, price: 15 }, { qty: 55, price: 13 }, { qty: 80, price: 11 } ], pledged: 0, confirmed: 0 },
  { id: "wa10", rest: "Pai Northern Thai Kitchen", dish: "Tom Yum Soup", image: "img/dish-poke.jpg", listed: 12, levels: [ { qty: 50, price: 9 }, { qty: 80, price: 8 }, { qty: 110, price: 7 } ], pledged: 4, confirmed: 2 },
];
function auctionJoin(waId) {
  const a = WEEK_AUCTION.find((x) => x.id === waId);
  if (!a) return;
  a.pledged++;
  flash(`✓ You're pledged on ${a.dish}. To count, add a card hold — no hold, no count.`);
  showModal({
    ico: "lock",
    title: "Add a card hold to count",
    message: `You're pledged at $${a._chosen != null ? a._chosen : a.levels[a.levels.length-1].price}. To count toward this deal you need a card hold. You're only charged if the deal fires — otherwise it's released, no charge.`,
    buttons: [
      { label: "Add card hold now", primary: true, action: () => auctionConfirm(waId) },
      { label: "Just pledge (doesn't count)", action: () => {} },
    ],
  });
}
function auctionConfirm(waId) {
  const a = WEEK_AUCTION.find((x) => x.id === waId);
  if (!a) return;
  a.confirmed++;
  flash(`✓ Card hold added — you count toward ${a.dish}. Charged only if the deal fires.`);
  // In production this calls the backend Stripe hold for the chosen level.
  apiPaymentIntent(Math.round((a._chosen != null ? a._chosen : a.levels[a.levels.length-1].price) * 100)).then((intent) => {
    if (intent) { /* hold created; captured when threshold reached, refunded if not */ }
  });
  navigate();
}
function auctionPick(waId, price) {
  const a = WEEK_AUCTION.find((x) => x.id === waId);
  if (!a) return;
  // Allow changing your mind before you commit a card hold. Once confirmed (card hold added),
  // you're locked into that level until the deal resolves.
  if (settingOn("changePriceBeforeCommit") && a._confirmedByMe) {
    flash("You've already added a card hold for this deal — price is locked in.");
    return;
  }
  a._chosen = price;
  navigate();
}
function auctionLevelLabel(a) {
  // A level is reachable if confirmed count (card-holds) reaches its min
  let unlocked = null;
  for (const l of a.levels) { if (a.confirmed >= l.qty) unlocked = l; }
  const next = a.levels.find((l) => a.confirmed < l.qty);
  return { unlocked, next };
}
function submitAuctionBid() {
  const g = (id) => { const e = document.getElementById(id); return e ? e.value : ""; };
  const dish = g("ab-dish").trim();
  const listed = parseFloat(g("ab-listed"));
  const q1 = parseInt(g("ab-q1")); const p1 = parseFloat(g("ab-p1"));
  const q2 = parseInt(g("ab-q2")); const p2 = parseFloat(g("ab-p2"));
  const q3 = parseInt(g("ab-q3")); const p3 = parseFloat(g("ab-p3"));
  if (!dish || !listed || !q1 || !p1 || !q3 || !p3) { flash("Fill the dish name, listed price, and at least level 1 & 3."); return; }
  // Bid = how FEW orders unlock the best price (q3). Lower q3 = stronger bid.
  const a = { id: "wa" + Date.now(), rest: menuRest ? restName(menuRest) : "Indian Desire", dish, image: "img/dish-butter-chicken.jpg", listed, levels: [ { qty: q1, price: p1 }, { qty: q2 || q1, price: p2 || p1 }, { qty: q3, price: p3 } ], pledged: 0, confirmed: 0 };
  WEEK_AUCTION.push(a);
  flash(`✓ Submitted "${dish}" — bids to unlock at ${q3}+ orders.`);
  navigate();
}
function buyPlacement(kind) {
  const prices = { hero: 200, dod: 50, auction: 100 };
  const labels = { hero: "Hero slot", dod: "Dish of the Day", auction: "Reverse-auction listing" };
  const img = document.getElementById("pl-img");
  if (!img || !img.value.trim()) { flash("⚠ Sized image required — attach one or there's no refund."); return; }
  showModal({
    ico: "gavel", title: `Buy ${labels[kind]} — $${prices[kind]}/week`,
    message: `Charge card on file? Sized image is required. No refund if it's not provided on time.`,
    buttons: [
      { label: `Pay $${prices[kind]} & confirm`, primary: true, action: () => { flash(`✓ ${labels[kind]} purchased — sized image required weekly, no refund on forfeit.`); } },
      { label: "Cancel", action: () => {} },
    ],
  });
}
function renderAuction() {
  const rows = AUCTION_SLOTS.map((a) => `<div class="auction-row">
    <div class="auction-slot">${esc(a.slot)}</div>
    <div class="auction-day">${esc(a.day)}</div>
    <div class="auction-bid"><b>$${a.topBid}</b> <span class="muted">top bid</span></div>
    <div class="auction-count">${a.bids} bids</div>
    <div class="auction-leader">${esc(a.leader)}</div>
    <button class="btn p-outline sm" onclick="flash('Bid placed. You must wait for this week to close before bidding another slot.')">${ico("gavel")} Bid</button>
  </div>`).join("");
  const bidFeed = AUCTION_SLOTS.flatMap((a) => a.examples.map((e) => ({ slot: a.slot, text: e })))
    .map((b) => `<div class="bid-feed-item"><span class="bf-slot">${esc(b.slot)}</span><span>${esc(b.text)}</span></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>restaurant owner portal</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn active" data-nav="auction">${ico("gavel")} Auctions</a>
          <a href="#menu" class="p-navbtn" data-nav="menu">${ico("bag")} Menu</a></nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-hero"><div class="eyebrow dark">Placements &amp; Sliding Scale · restaurant owners only</div>
        <h1>Buy placements &amp; bid your dishes</h1>
        <p>Hero ×4, Dish of the Day, and reverse-auction listings. All require sized images or no refund. Placements re-bid every week.</p></section>

      <section class="pl-buy p-dark-card">
        <div class="mf-label">${ico("chef")} Buy a placement — sized image required (no refund if not provided)</div>
        <div class="pl-row">
          <button class="btn p-primary" onclick="buyPlacement('hero')">Hero ×4 — $200/wk</button>
          <button class="btn p-primary" onclick="buyPlacement('dod')">Dish of the Day — $50/wk</button>
          <button class="btn p-primary" onclick="buyPlacement('auction')">Auction listing — $100/wk</button>
        </div>
        <div class="pl-img"><input id="pl-img" type="text" placeholder="Attach sized image URL (required)" /></div>
      </section>

      <section class="auction-note">
        <span>${ico("shield")} Sliding Scale closes Monday · delivers Wednesday · one slot per restaurant per week · payments confirmed on app.</span>
        <button class="btn p-outline sm" onclick="flash('Week cycles automatically')">Week ${auctionWeek} of the month</button>
      </section>

      <section class="ab-form p-dark-card">
        <div class="mf-label">${ico("gavel")} Submit a reverse-auction dish (bid = how few orders unlock best price)</div>
        <div class="ab-grid">
          <input id="ab-dish" type="text" placeholder="Dish name" />
          <input id="ab-listed" type="number" placeholder="Listed price $" />
        </div>
        <div class="ab-levels">
          <div class="ab-level"><span class="ab-l">Level 1</span><input id="ab-q1" type="number" placeholder="min orders" /><input id="ab-p1" type="number" placeholder="price $" /></div>
          <div class="ab-level"><span class="ab-l">Level 2</span><input id="ab-q2" type="number" placeholder="min orders" /><input id="ab-p2" type="number" placeholder="price $" /></div>
          <div class="ab-level"><span class="ab-l">Level 3 (best)</span><input id="ab-q3" type="number" placeholder="min orders" /><input id="ab-p3" type="number" placeholder="price $" /></div>
        </div>
        <button class="btn p-primary" style="margin-top:12px" onclick="submitAuctionBid()">${ico("gavel")} Submit to Sliding Scale</button>
      </section>

      <section class="auction-board">
        <div class="auction-head"><span>Slot</span><span>Day</span><span>Top bid</span><span>Bids</span><span>Leader</span><span></span></div>
        ${rows}
      </section>
      <section class="bid-feed">
        <div class="bid-feed-title">${ico("chart")} Live bids this week</div>
        ${bidFeed}
      </section>
      <footer class="p-foot">Placements: Hero $200/wk · Dish of Day $50/wk · Auction $100/wk · sized image required (no refund).</footer>
    </div>`;
}

/* ============================================================================
   RESTAURANTS (browse 15)
   ========================================================================== */
let restFilter = { cuisine: "all", area: "all", diet: "all" };
let homeFilter = { type: "all", q: "" }; // homepage search + bold chips
function renderRestaurants() {
  const cuisines = [...new Set(visibleRestaurants().map((r) => r.cuisine))];
  const list = visibleRestaurants().filter((r) => {
    if (restFilter.cuisine !== "all" && r.cuisine !== restFilter.cuisine) return false;
    if (restFilter.area !== "all" && r.radius < (restFilter.area === "nearby" ? 6 : 7)) return false;
    if (restFilter.diet !== "all" && !r.dishes) return false;
    return true;
  });
  const cards = list.map((r) => {
    const menu = meals.filter((m) => m.restaurantId === r.id);
    return `<a href="#restaurant-menu?rest=${r.id}" class="rest-full link-card ${r.dineSafe !== "unconditional" ? "warn" : ""}">
      <div class="rest-full-head">
        <div class="rest-avatar big">${esc(r.name[0])}</div>
        <div>
          <div class="rest-name lg">${esc(r.name)}</div>
          <div class="rest-meta">${esc(r.cuisine)} · ${esc(r.neighborhood)} · ${r.radius} km</div>
          <div class="rest-trust">${googleHtml(r)} ${dineSafeHtml(r)} ${r.pickup ? `<span class="chip bg-slate-100 text-slate-600">${ico("bag")} Pickup</span>` : ""}</div>
        </div>
      </div>
      <div class="rest-dishes"><div class="kicker" style="margin-bottom:8px">Menu · ${menu.length} dishes</div>
        <div class="dish-chips">${menu.slice(0, 8).map((m) => `<span class="dish-chip">${esc(m.title)} · $${m.price}</span>`).join("")}</div>
      </div>
      <div class="rest-order-btn">${ico("arrow")} Add to weekly box</div>
    </a>`;
  }).join("");

  return `
    <div class="consumer-shell">
      ${consumerTopbar("restaurants")}
      <section class="build-hero">
        <div class="eyebrow">Partner kitchens</div>
        <h1>Choose where your food comes from</h1>
        <p>Every kitchen is vetted with live DineSafe inspection status and Google ratings — updated nightly. Pickup available.</p>
      </section>
      ${moduleOn("dishOfDay") ? `
      <!-- DISH OF THE DAY + recipe (4 paid slots, $200/wk each) — visible to shoppers -->
      <section class="rest-dod" style="max-width:1080px;margin:14px auto 0;padding:0 24px">
        ${(() => { const d = currentDish(); return `<a href="#restaurant-menu?rest=${dishRestId(d)}" class="rest-dod-card">
          <div class="rest-dod-img"><img src="${dishImage(d)}" alt="${esc(d.title)}" loading="lazy" /></div>
          <div class="rest-dod-body">
            <div class="rest-dod-tag">${ico("chef")} Dish of the Day · by ${esc(d.rest)}</div>
            <div class="rest-dod-title">${esc(d.title)}</div>
            <div class="rest-dod-recipe">${esc(d.recipe)}</div>
            <span class="rest-dod-cta">${ico("arrow")} Order this dish</span>
          </div>
        </a>`; })()}
        <div class="hero-dots dish-dots">
          ${DISH_SLOTS.map((_, i) => `<button class="hero-dot ${i === dishIdx % DISH_SLOTS.length ? "on" : ""}" onclick="dishGo(${i})"></button>`).join("")}
        </div>
      </section>` : ""}
      <div class="filters" style="max-width:1080px;margin:0 auto;padding:0 24px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="chip ${restFilter.cuisine === "all" ? "on" : ""}" onclick="setRestFilter('cuisine','all')">All cuisines</button>
        ${cuisines.map((c) => `<button class="chip ${restFilter.cuisine === c ? "on" : ""}" onclick="setRestFilter('cuisine','${esc(c)}')">${esc(c)}</button>`).join("")}
      </div>
      <div class="rest-list">${cards}</div>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}
function setRestFilter(field, val) { restFilter[field] = val; navigate(); }

/* ============================================================================
   RESTAURANT MENU — pick a restaurant, then add its dishes to your weekly box
   ========================================================================== */
function renderRestaurantMenu() {
  const p = routeParams();
  const rid = p.rest || RESTAURANTS[0].id;
  const r = RESTAURANTS.find((x) => x.id === rid) || visibleRestaurants()[0];
  const o = getOrder(rid);
  const menu = meals.filter((m) => m.restaurantId === r.id);
  const tot = orderTotals(rid);
  const rows = menu.map((m) => {
    const q = o.selected[m.id] || 0;
    return `<div class="meal-pick ${q ? "on" : ""}">
      <div class="mp-info"><div class="mp-title">${esc(m.title)}</div>
        <div class="mp-meta">${m.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${m.calories} Cal · ${m.proteinGrams}g</span><span class="mp-price">$${m.price}</span></div></div>
      <div class="stepper"><button class="stp-btn" onclick="orderAdd('${rid}','${m.id}',-1)">−</button><span class="stp-val">${q}</span><button class="stp-btn" onclick="orderAdd('${rid}','${m.id}',1)">+</button></div>
    </div>`;
  }).join("");
  const meetsMin = tot.total >= MIN_ORDER;
  const minNote = meetsMin
    ? `<span class="min-ok">${ico("check")} Meets the $${MIN_ORDER} minimum</span>`
    : `<span class="min-warn">Closing in on the $${MIN_ORDER} minimum — ${money(Math.max(0, MIN_ORDER - tot.total))} to go</span>`;
  return `
    <div class="consumer-shell">
      ${consumerTopbar("restaurants")}
      <section class="build-hero">
        <div class="eyebrow">${esc(r.cuisine)} · ${esc(r.neighborhood)}${r.price ? " · " + esc(r.price) : ""}</div>
        <h1>${esc(r.name)}</h1>
        <p>${googleHtml(r)} ${dineSafeHtml(r)}</p>
        <div class="min-banner">${ico("info")} Every weekly order meets a $${MIN_ORDER} minimum · delivered in one weekly drop on your day. ${explainer("audio/howto.mp3")}</div>
        <div class="rest-profile">
          ${r.address ? `<span>${ico("pin")} ${esc(r.address)}</span>` : ""}
          ${r.phone ? `<a href="tel:${esc(r.phone.replace(/[^0-9+]/g, ""))}">${ico("tap")} ${esc(r.phone)}</a>` : ""}
          ${r.hours ? `<span>${ico("clock")} ${esc(r.hours)}</span>` : ""}
        </div>
      </section>
      ${moduleOn("dishOfDay") && dishRestId(DISH_DATA) === rid ? `
      <section class="rest-dod" style="max-width:1080px;margin:14px auto;padding:0 24px">
        <div class="rest-dod-card">
          <div class="rest-dod-img"><img src="${dishImage(DISH_DATA)}" alt="${esc(DISH_DATA.title)}" loading="lazy" /></div>
          <div class="rest-dod-body">
            <div class="rest-dod-tag">${ico("chef")} Dish of the Day · this week</div>
            <div class="rest-dod-title">${esc(DISH_DATA.title)}</div>
            <div class="rest-dod-recipe">${esc(DISH_DATA.recipe)}</div>
          </div>
        </div>
      </section>` : ""}
      <div class="build-grid">
        <div class="meals-panel"><div class="meals-count">${menu.length} dishes · ${esc(r.name)}</div><div class="meal-picks">${rows}</div></div>
      </div>
      <div class="your-box">
        <div class="yb-head"><span class="yb-title">${ico("box")} Your week from ${esc(r.name)} — ${tot.count} ${tot.count === 1 ? "meal" : "meals"}</span>
          ${tot.count ? `<button class="btn ghost sm" onclick="clearOrder('${rid}')">${ico("arrowLeft")} Clear</button>` : ""}</div>
        ${tot.count ? `<div class="yb-list">${menu.filter((m) => o.selected[m.id] > 0).map((m) => `
          <div class="yb-row">
            <span class="yb-qty">${o.selected[m.id]}×</span>
            <span class="yb-name">${esc(m.title)}</span>
            <span class="yb-price">${money(o.selected[m.id] * m.price)}</span>
          </div>`).join("")}</div>
        <div class="yb-total">
          <span class="yb-budget">Order: $${money(tot.total)} · ${minNote}</span>
          <span class="yb-amt">${money(tot.total)}</span>
        </div>` : `<p class="muted">Your order is empty. Tap <b>+</b> on dishes from ${esc(r.name)}. Minimum order $${MIN_ORDER}, delivered weekly.</p>`}
        ${meetsMin
          ? `<a href="#checkout" class="btn primary sm" style="margin-top:12px;width:100%">${ico("bagCheck")} Check out this order — ${money(tot.total)}</a>`
          : `<button class="btn primary sm disabled" style="margin-top:12px;width:100%" onclick="flash('Add at least $${MIN_ORDER} of dishes from ${esc(r.name)} first.')">${ico("bagCheck")} Add more (min $${MIN_ORDER})</button>`}
      </div>
    </div>`;
}
function clearOrder(rid) { ORDERS[rid] = { selected: {} }; navigate(); }

/* ============================================================================
   CHECKOUT — review weekly box + delivery, then confirm
   ========================================================================== */
function renderCheckout() {
  const active = myOrders(); // restaurantIds with items (drafts)
  const confirmed = allRestaurantOrders(); // placed orders
  const placed = windowConfirmed && confirmed.length > 0;
  const empty = !active.length && confirmed.length === 0;
  let grandTotal = 0;
  const draftBlocks = active.map((rid) => {
    const o = ORDERS[rid];
    const r = RESTAURANTS.find((x) => x.id === rid) || {};
    const tot = orderTotals(rid);
    const items = meals.filter((m) => o.selected[m.id] > 0);
    grandTotal += tot.total;
    const meetsMin = tot.total >= MIN_ORDER;
    return `
      <section class="order-card ${meetsMin ? "" : "below-min"}">
        <div class="oc-head"><div class="oc-brand">${esc(r.name || "Kitchen")}</div></div>
        ${items.map((m) => `<div class="billrow"><span>${o.selected[m.id]}× ${esc(m.title)}</span><span class="bold">${money(o.selected[m.id] * m.price)}</span></div>`).join("")}
        <div class="billrow total"><span>${esc(r.name || "Kitchen")} subtotal</span><span class="tb-amt">${money(tot.total)}</span></div>
        <div class="oc-min">${meetsMin ? `<span class="min-ok">${ico("check")} Meets $${MIN_ORDER} minimum</span>` : `<span class="min-warn">Below $${MIN_ORDER} minimum — add more or remove this order</span>`}</div>
        <div class="billrow muted sm"><span>Delivery (single kitchen → you)</span><span class="accent bold">INCLUDED</span></div>
      </section>`;
  }).join("");
  // Confirmed (placed) order blocks — shown after placing, or if customer returns
  const confirmedBlocks = confirmed.map((o) => {
    grandTotal += o.total;
    return `
      <section class="order-card">
        <div class="oc-head"><div class="oc-brand">${esc(o.rest)} <span class="oc-tag">confirmed</span></div></div>
        ${o.items.map((it) => `<div class="billrow"><span>${it.qty}× ${esc(it.title)}</span><span class="bold">${money(it.qty * it.price)}</span></div>`).join("")}
        <div class="billrow total"><span>${esc(o.rest)} subtotal</span><span class="tb-amt">${money(o.total)}</span></div>
        <div class="billrow muted sm"><span>Delivery (single kitchen → you)</span><span class="accent bold">INCLUDED</span></div>
      </section>`;
  }).join("");
  const orderBlocks = draftBlocks + confirmedBlocks;
  const d = fmtDate(nextDeliveryDate());
  const dateBtns = deliveryDates().map((dd, i) => {
    const on = i === chosenDateIdx;
    return `<button class="date-chip ${on ? "on" : ""}" onclick="setDeliveryDate(${i})"><span class="dc-d">${dd.getDate()}</span><span class="dc-w">${dd.toLocaleDateString("en-CA", { weekday: "short" })}</span></button>`;
  }).join("");
  const winBlock = `
    <section class="card block" style="max-width:720px;margin:0 auto 16px">
      <div class="kicker">${ico("truck")} Choose delivery date &amp; time</div>
      <div class="muted">${ico("pin")} 120 Bay St, Unit 1402 · Concierge</div>
      <div class="date-pick" style="margin-top:10px"><span class="wp-label">${ico("calendar")} Delivery date</span><div class="date-opts">${dateBtns}</div></div>
      <div class="window-pick" style="margin-top:10px"><span class="wp-label">${ico("clock")} 2-hour window</span><div class="wp-opts">
        ${DELIVERY_WINDOWS.map((w) => `<button class="wp-opt ${chosenWindow === w.id ? "on" : ""}" onclick="setDeliveryWindow('${w.id}')">${w.label}</button>`).join("")}</div></div>
      ${windowConfirmed ? `<div class="confirm-banner">${ico("check")} Delivery confirmed — ${deliveryWindowSlot()} on ${d}. <button class="btn ghost sm" onclick="changeWindow()">Change</button></div>` : ""}
    </section>`;
  const confirmBlock = placed ? `
    <section class="card block confirm-card" style="max-width:720px;margin:0 auto 16px">
      <div class="kicker">${ico("check")} Order confirmed</div>
      <div class="billrow"><span>Total (${allRestaurantOrders().reduce((a, o) => a + o.items.reduce((x, it) => x + it.qty, 0), 0)} meals)</span><span class="bold">$${allRestaurantOrders().reduce((a, o) => a + o.total, 0).toFixed(2)}</span></div>
      <div class="billrow"><span>Delivery date</span><span class="bold">${d}</span></div>
      <div class="billrow"><span>Delivery window</span><span class="bold">${deliveryWindowSlot()}</span></div>
      <div class="billrow"><span>Delivery</span><span class="accent bold">INCLUDED</span></div>
      <div class="share-actions">
        <span class="share-label">${ico("tap")} Send to your calendar:</span>
        <div class="share-btns">
          <a class="btn ghost sm" href="${emailLink()}">${ico("printer")} Email</a>
          <a class="btn ghost sm" href="${smsLink()}">${ico("tap")} Text</a>
          <a class="btn ghost sm" href="${calendarLink()}" target="_blank">${ico("calendar")} Calendar</a>
          <a class="btn ghost sm" href="${icsLink()}" download="supper-club-delivery.ics">${ico("download")} .ics</a>
        </div>
        <p class="muted sm">Add the date &amp; window to your calendar so you know when to expect it.</p>
      </div>
    </section>` : "";
  return `
    <div class="consumer-shell">
      ${consumerTopbar("checkout")}
      <section class="build-hero">
        <div class="eyebrow">Checkout · your weekly orders</div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h1 style="margin:0">Review, choose a window, confirm.</h1>${explainer("audio/delivery.mp3")}</div>
        <p>Each order is delivered separately from its kitchen. Pick your delivery window and confirm below.</p></section>
      <section class="checkout-orders" style="max-width:720px;margin:0 auto 16px">
        ${empty ? `<p class="muted">No weekly orders yet. <a href="#restaurants">Pick a kitchen</a> and build your first order.</p>` : orderBlocks}
      </section>
      ${empty ? `<div style="text-align:center;padding:20px"><a href="#restaurants" class="btn primary">${ico("store")} Choose a kitchen</a></div>` : `
      ${winBlock}
      <section class="card block" style="max-width:720px;margin:0 auto 16px">
        <div class="billrow total"><span>All-inclusive weekly total</span><span class="tb-amt">${money(grandTotal)}</span></div>
        <p class="muted sm">Delivery included on every order. Split across ${active.length} ${active.length === 1 ? "kitchen" : "kitchens"} — each delivered separately.</p>
      </section>
      ${confirmBlock}
      ${placed ? `<div style="max-width:720px;margin:0 auto;text-align:center"><a href="#dashboard" class="btn ghost" style="width:100%">${ico("arrow")} Go to your week</a></div>` : `
      <section class="card block pay-methods" style="max-width:720px;margin:0 auto 16px">
        <div class="kicker">${ico("wallet")} How you'd like to pay</div>
        <div class="pm-opts">
          <button class="pm-opt ${payMethod === "full" ? "on" : ""}" onclick="setPayMethod('full')">
            <span class="pm-t">Pay in full</span>
            <span class="pm-s">${money(grandTotal)} today · via card/Stripe</span>
          </button>
          <button class="pm-opt ${payMethod === "bnpl" ? "on" : ""}" onclick="setPayMethod('bnpl')">
            <span class="pm-t">Pay in 4 (BNPL)</span>
            <span class="pm-s">4 payments of ${money(grandTotal / 4)} · no interest</span>
          </button>
        </div>
        <p class="muted sm" style="margin-top:8px">Powered by Stripe + BNPL partners. Pay on the app — restaurants are paid separately.</p>
      </section>
      <div style="max-width:720px;margin:0 auto;text-align:center">
        <button class="btn primary" style="width:100%" onclick="confirmAndPlace()">${ico("check")} ${payMethod === "bnpl" ? "Confirm & start BNPL — " + money(grandTotal / 4) + "/mo × 4" : "Confirm & pay " + money(grandTotal)}</button>
        <p class="muted sm" style="margin-top:8px">Each restaurant is notified by email &amp; text. You'll see a confirmation with your delivery date, time, and price.</p>
      </div>`}`}
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}
let grandTotalCache = 0;
async function confirmAndPlace() {
  if (!windowConfirmed) { flash("Choose your 2-hour delivery window first."); return; }
  // 1) compute total
  const ids = myOrders();
  let total = 0; ids.forEach((rid) => { total += orderTotals(rid).total; });
  if (!total) { flash("No orders to place."); return; }
  grandTotalCache = total;
  // 2) create payment intent (Stripe via backend, or demo fallback)
  flash("Processing payment…");
  const intent = await apiPaymentIntent(Math.round(total * 100));
  // 3) process the payment (Stripe confirm or demo success)
  const paid = await apiConfirmPayment(intent);
  if (!paid) { flash("Payment failed — please try again."); return; }
  // 4) quote + create delivery (best-price via backend, or demo fallback)
  const delivery = await apiCreateDelivery(ids[0]);
  // 5) place orders
  placeOrders({ paymentId: intent.paymentId, delivery });
}

/* ---- production API integration (calls backend; graceful demo fallback) ----
   Uses the API_BASE declared above. Empty = demo mode (works offline/GitHub Pages). */
async function apiPost(path, body) {
  if (!API_BASE) return null; // demo mode: no backend
  try {
    const r = await fetch(API_BASE + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    return await r.json();
  } catch { return null; }
}
async function apiPaymentIntent(amountCents) {
  const r = await apiPost("/api/v1/payments/intent", { amountCents, orderId: "weekly" + Date.now() });
  if (r && r.clientSecret) return r;
  return { clientSecret: "demo_cs_" + Date.now(), paymentId: "pi_demo_" + Date.now(), demo: true };
}
async function apiConfirmPayment(intent) {
  if (intent.demo) return true;
  // In production this uses Stripe.js confirmCardPayment with the clientSecret.
  // Stripe.js is loaded on the checkout page; here we confirm via backend for completeness.
  const r = await apiPost("/api/v1/payments/confirm", { paymentId: intent.paymentId });
  return !r || r.status === "OK";
}
async function apiCreateDelivery(rid) {
  const r = RESTAURANTS.find((x) => x.id === rid) || {};
  const body = {
    pickupAddress: r.address || (r.neighborhood || "Toronto"),
    dropoffAddress: "120 Bay St, Toronto, ON M5J 2R8",
    pickupPostal: r.postal || "M5V",
    dropoffPostal: "M5J",
    items: myOrders().length ? [{ qty: 1, name: "Weekly box" }] : [{ qty: 1, name: "Weekly box" }],
  };
  const res = await apiPost("/api/v1/delivery/quote", body);
  if (res && res.quote) return { provider: res.quote.provider, costCents: res.quote.priceCents, etaMin: res.quote.etaMin };
  return { provider: "ORDEROUT", costCents: 800, etaMin: 22, demo: true };
}

/* ============================================================================
   DELIVERY — how your weekly box gets to you (recommendations)
   ========================================================================== */
function renderDemo() {
  const d = DEMO_SCRIPT[Math.min(demoIdx, DEMO_SCRIPT.length - 1)];
  const dots = DEMO_SCRIPT.map((_, i) => `<span class="demo-dot ${i === demoIdx ? "on" : ""}"></span>`).join("");
  return `
    <div class="consumer-shell">
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#" class="navbtn ghost sm" onclick="flash('Demo stopped')">Exit demo</a></header>
      <section class="demo-stage ${d.side}">
        <div class="demo-ic">${ico(d.icon)}</div>
        <div class="demo-side-tag">${d.side === "owner" ? "Restaurant owner" : "Subscriber"}</div>
        <div class="demo-title">${d.title}</div>
        <div class="demo-text">${d.text}</div>
        <div class="demo-dots">${dots}</div>
        <div class="demo-controls">
          <button class="btn ghost sm" onclick="demoPrev()">${ico("arrowLeft")} Prev</button>
          <button class="btn primary sm" onclick="demoNext()">${demoIdx >= DEMO_SCRIPT.length - 1 ? "Restart" : "Next"} ${ico("arrow")}</button>
        </div>
      </section>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}
function demoNext() { demoIdx = demoIdx >= DEMO_SCRIPT.length - 1 ? 0 : demoIdx + 1; navigate(); }
function demoPrev() { demoIdx = demoIdx <= 0 ? 0 : demoIdx - 1; navigate(); }

/* ============================================================================
   BUILD YOUR BOX
   ========================================================================== */
const buildState = { selected: {}, rest: "all", area: "all", cuisines: [], distance: 0, postal: "", budget: "80" };
/* ---- Single-restaurant weekly orders (v11 model) ----
   Each weekly order comes from ONE restaurant. A customer can hold several,
   one per restaurant. Minimum $80/order.
   ORDERS[restaurantId] = { selected:{mealId:qty} } */
const ORDERS = {};
const MIN_ORDER = 80;
let activeRest = null;
function openRest(rid) { activeRest = rid; if (!ORDERS[rid]) ORDERS[rid] = { selected: {} }; }
function getOrder(rid) { openRest(rid); return ORDERS[rid]; }
function orderTotals(rid) { const o = ORDERS[rid]; if (!o) return { total: 0, count: 0 }; let t = 0, c = 0; meals.forEach((m) => { const q = o.selected[m.id] || 0; if (q > 0) { t += q * m.price; c += q; } }); return { total: t, count: c }; }
function orderTotal(rid) { return orderTotals(rid).total; }
function orderAdd(rid, mid, delta) {
  doOrderAdd(rid, mid, delta);
}
function doOrderAdd(rid, mid, delta) {
  const o = getOrder(rid);
  const q = (o.selected[mid] || 0) + delta;
  if (q <= 0) delete o.selected[mid]; else o.selected[mid] = q;
  navigate();
}
function askOrderCheckoutOrChange(rid) {
  showModal({
    ico: "box",
    title: "What would you like to do?",
    message: `Check out this order from ${esc(restName(rid))}, or remove some items to fit your weekly plan?`,
    buttons: [
      { label: "Check out this order", primary: true, action: () => { getOrder(rid).continue = false; location.hash = "#checkout"; navigate(); } },
      { label: "Reconsider items", action: () => { getOrder(rid).continue = false; } },
    ],
  });
}
function myOrders() { return Object.keys(ORDERS).filter((rid) => orderTotals(rid).count > 0); }
function orderLine(rid, mid) { const o = ORDERS[rid]; const m = meals.find((x) => x.id === mid); if (!o || !m) return ""; return `<div class="billrow"><span>${o.selected[mid]}× ${esc(m.title)}</span><span class="bold">${money(o.selected[mid] * m.price)}</span></div>`; }

/* ---- CONFIRMED ORDERS (sent to restaurants) ----
   When a customer confirms checkout, each restaurant's order is snapshotted
   into CONFIRMED_ORDERS[restaurantId] = [order, ...], newest appended.
   The restaurant-side Kitchen page lists them, earliest delivery date on top. */
const CONFIRMED_ORDERS = {};
let orderSeq = 1000;
function placeOrders(meta) {
  meta = meta || {};
  const ids = myOrders();
  if (!ids.length) { flash("No orders to place."); return; }
  const d = fmtDate(nextDeliveryDate());
  const slot = deliveryWindowSlot();
  const customer = { name: "Aria Chen", addr: "120 Bay St, Unit 1402", postal: "M5J 2R8" };
  ids.forEach((rid) => {
    const o = ORDERS[rid];
    const r = RESTAURANTS.find((x) => x.id === rid) || { name: "Kitchen" };
    const items = meals.filter((m) => o.selected[m.id] > 0).map((m) => ({ title: m.title, qty: o.selected[m.id], price: m.price }));
    const total = items.reduce((a, it) => a + it.qty * it.price, 0);
    const order = {
      id: "ORD-" + (++orderSeq),
      rid, rest: r.name, total,
      items, customer, deliveryDate: d, window: slot, status: "received",
      placedAt: new Date().toLocaleString("en-CA"),
      paymentId: meta.paymentId || null,
      delivery: meta.delivery || null,
    };
    if (!CONFIRMED_ORDERS[rid]) CONFIRMED_ORDERS[rid] = [];
    CONFIRMED_ORDERS[rid].push(order);
  });
  // clear drafts once placed
  ids.forEach((rid) => { ORDERS[rid] = { selected: {} }; });
  windowConfirmed = true;
  flash("✓ Orders placed — restaurants notified.");
  location.hash = "#checkout";
  navigate();
}
function restaurantOrders(rid) { return (CONFIRMED_ORDERS[rid] || []).slice().sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate)); }
function allRestaurantOrders() {
  const out = [];
  Object.keys(CONFIRMED_ORDERS).forEach((rid) => out.push(...CONFIRMED_ORDERS[rid]));
  return out.sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate));
}
function notifyRestaurant(order, mode) {
  // Real build: POST to a webhook/email/SMS provider. Here we build the message + links.
  const body = `New order received at ${order.rest}:\n\nOrder #${order.id}\nCustomer: ${order.customer.name} · ${order.customer.addr} ${order.customer.postal}\nDelivery: ${order.deliveryDate}, ${order.window}\n\n${order.items.map((it) => `${it.qty}× ${it.title} — $${(it.qty * it.price).toFixed(2)}`).join("\n")}\n\nTotal: $${order.total.toFixed(2)}`;
  if (mode === "email") return "mailto:kitchen@" + order.rid + ".com?subject=" + encodeURIComponent("New order " + order.id + " — " + order.rest) + "&body=" + encodeURIComponent(body);
  return "sms:?body=" + encodeURIComponent(body);
}
const budgetState = { continue: false }; // after "yes, keep adding" we stop nagging
function budgetValue() { const v = parseFloat(buildState.budget); return (v && v > 0) ? v : 80; }
function doAdd(id, delta) {
  const q = (buildState.selected[id] || 0) + delta;
  if (q <= 0) delete buildState.selected[id]; else buildState.selected[id] = q;
  navigate();
}
function setQty(id, delta) {
  doAdd(id, delta);
}
function askCheckoutOrChange() {
  showModal({
    ico: "box",
    title: "What would you like to do?",
    message: "Check out with your current box, or change the combination to fit your budget.",
    buttons: [
      { label: "Check out now", primary: true, action: () => { budgetState.continue = false; location.hash = "#checkout"; navigate(); } },
      { label: "Change combination", action: () => { budgetState.continue = false; } },
    ],
  });
}
function buildMeals() {
  return meals.filter((m) => {
    const r = mealRestaurant(m);
    if (buildState.rest !== "all" && m.restaurantId !== buildState.rest) return false;
    if (buildState.area !== "all" && (buildState.area === "nearby" ? r.radius >= 6 : r.radius < 6)) return false;
    if (buildState.distance > 0 && r.radius > buildState.distance) return false;
    if (buildState.cuisines.length && !buildState.cuisines.includes(r.cuisine)) return false;
    if (buildState.diet !== "all" && !m.badges.includes(buildState.diet)) return false;
    return true;
  });
}
function buildTotals() {
  let total = 0, count = 0, veg = 0, nonveg = 0, protein = 0;
  meals.forEach((m) => { const q = buildState.selected[m.id] || 0; if (q > 0) { total += q * m.price; count += q; if (m.type === "veg") veg += q; else nonveg += q; protein += q * m.proteinGrams; } });
  return { total, count, veg, nonveg, protein };
}
function setBuildFilter(field, val) { buildState[field] = val; navigate(); }
function toggleCuisine(c) {
  const arr = buildState.cuisines.slice();
  const i = arr.indexOf(c);
  if (i >= 0) arr.splice(i, 1); else arr.push(c);
  buildState.cuisines = arr;
  navigate();
}
function applyPostal() {
  // Demo: derive a rough distance radius from the first letter of the postal area.
  // In production this geocodes the postal code to lat/lng and filters by true distance.
  const p = (buildState.postal || "").trim().toUpperCase();
  if (p.length >= 1) { buildState.distance = p.charCodeAt(0) % 3 === 0 ? 12 : (p.charCodeAt(0) % 2 === 0 ? 8 : 5); }
  flash(`✓ Delivery radius set around ${p || "your area"}.`);
  navigate();
}
function boxTotal() { return buildTotals().total; }
function selectedItems() { return meals.filter((m) => buildState.selected[m.id] > 0); }
function quickCombo(kind) {
  if (kind === "budget") { applyBudget(); return; } // budget is only a target — never auto-adds
  buildState.selected = {};
  if (kind === "2+3") {
    const vegs = meals.filter((m) => m.type === "veg").sort((a, b) => a.price - b.price);
    const meats = meals.filter((m) => m.type === "nonveg").sort((a, b) => a.price - b.price);
    [...meats.slice(0, 2), ...vegs.slice(0, 3)].forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "all") {
    buildMeals().forEach((m) => (buildState.selected[m.id] = 1));
  }
  navigate();
}
function applyBudget() {
  // Just records the budget as a target — it never auto-adds meals.
  // The user chooses what goes in their box; we show live progress against it.
  budgetState.continue = false;
  flash(`✓ Weekly budget set to $${budgetValue()}. You pick the meals.`);
  navigate();
}
function clearBox() { buildState.selected = {}; budgetState.continue = false; flash("Box cleared."); navigate(); }
function renderBuild() {
  const cuisines = [...new Set(visibleRestaurants().map((r) => r.cuisine))];
  const totals = buildTotals();
  const budget = budgetValue();
  const list = buildMeals();
  const rows = list.map((m) => {
    const r = mealRestaurant(m); const q = buildState.selected[m.id] || 0;
    return `<div class="meal-pick ${q ? "on" : ""}">
      <div class="mp-info"><div class="mp-title">${esc(m.title)}</div>
        <div class="mp-meta">${m.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${m.calories} Cal · ${m.proteinGrams}g</span><span class="mp-price">$${m.price}</span></div>
        <div class="mp-rest">${ico("pin")} ${esc(restName(m.restaurantId))} · ${esc(r.neighborhood)}</div></div>
      <div class="stepper"><button class="stp-btn" onclick="setQty('${m.id}',-1)">−</button><span class="stp-val">${q}</span><button class="stp-btn" onclick="setQty('${m.id}',1)">+</button></div>
    </div>`;
  }).join("");

  return `
    <div class="consumer-shell">
      ${consumerTopbar("build")}
      <section class="build-hero">
        <div class="eyebrow">My Week. Fully Catered.</div><h1>Build your weekly box. See your total <span class="accent">instantly.</span></h1>
        <p>This is a recurring weekly order — mix veg &amp; non-veg, filter by restaurant/cuisine/diet. Each order meets an $80 weekly minimum, delivered in one drop.</p></section>
      <div class="combo-strip">
        <div class="combo-title">Quick add</div>
        <button class="btn ghost sm" onclick="quickCombo('2+3')">2 non-veg + 3 veg</button>
        <button class="btn ghost sm" onclick="quickCombo('all')">Add all shown</button>

      </div>
      <div class="build-grid">
        <div class="filters-panel">
          <div class="kicker">${ico("gear")} Filters</div>
          <div class="frow"><span class="frow-label">Near me — distance</span>
            <button class="chip ${buildState.distance === 0 ? "on" : ""}" onclick="setBuildFilter('distance',0)">Any</button>
            <button class="chip ${buildState.distance === 5 ? "on" : ""}" onclick="setBuildFilter('distance',5)">≤ 5 km</button>
            <button class="chip ${buildState.distance === 8 ? "on" : ""}" onclick="setBuildFilter('distance',8)">≤ 8 km</button>
            <button class="chip ${buildState.distance === 12 ? "on" : ""}" onclick="setBuildFilter('distance',12)">≤ 12 km</button>
            <span class="postal-input"><input id="postal" type="text" placeholder="Postal code e.g. M5V" value="${esc(buildState.postal)}" oninput="buildState.postal=this.value;applyPostal()" maxlength="3" /></span></div>
          <div class="frow"><span class="frow-label">Cuisine — pick 2+</span>
            <button class="chip ${!buildState.cuisines.length ? "on" : ""}" onclick="setBuildFilter('cuisines',[] )">All</button>
            ${cuisines.map((c) => `<button class="chip ${buildState.cuisines.includes(c) ? "on" : ""}" onclick="toggleCuisine('${esc(c)}')">${esc(c)}</button>`).join("")}</div>
          <div class="frow"><span class="frow-label">Diet</span>
            <button class="chip ${buildState.diet === "all" ? "on" : ""}" onclick="setBuildFilter('diet','all')">All</button>
            ${["HIGH_PROTEIN", "VEGETARIAN", "VEGAN", "GLUTEN_FREE", "SPICY"].map((d) => `<button class="chip ${buildState.diet === d ? "on" : ""}" onclick="setBuildFilter('diet','${d}')">${esc(d.replace("_", " ").toLowerCase())}</button>`).join("")}</div>
        </div>
        <div class="meals-panel"><div class="meals-count">${list.length} meals shown</div><div class="meal-picks">${rows}</div></div>
      </div>
      <div class="your-box">
        <div class="yb-head"><span class="yb-title">${ico("box")} Your box — ${totals.count} ${totals.count === 1 ? "meal" : "meals"}</span>
          ${totals.count ? `<button class="btn ghost sm" onclick="clearBox()">${ico("arrowLeft")} Clear</button>` : ""}</div>
        ${totals.count ? `<div class="yb-list">${selectedItems().map((m) => `
          <div class="yb-row">
            <span class="yb-qty">${buildState.selected[m.id]}×</span>
            <span class="yb-name">${esc(m.title)} <span class="muted">· ${esc(restName(m.restaurantId))}</span></span>
            <span class="yb-price">${money(buildState.selected[m.id] * m.price)}</span>
          </div>`).join("")}</div>
        <div class="yb-total">
          <span class="yb-budget">Your week · $${money(totals.total)} · delivered in one weekly drop</span>
          <span class="yb-amt">${money(totals.total)}</span>
        </div>` : `<p class="muted">Your box is empty. Tap <b>+</b> on the meals you want below.</p>`}
        <a href="#checkout" class="btn primary sm" style="margin-top:12px;width:100%">${ico("bagCheck")} Check out — ${money(totals.total)}</a>
      </div>
      <div class="total-bar">
        <div class="tb-stats"><span><b>${totals.count}</b> meals</span><span><b>${totals.veg}</b> veg</span><span><b>${totals.nonveg}</b> non-veg</span><span><b>${totals.protein}</b> g protein</span></div>
        <div class="tb-total"><span class="tb-label">All-inclusive total</span><span class="tb-amt">${money(totals.total)}</span><span class="tb-note">delivery, fees &amp; tax included</span></div>
      </div>
    </div>`;
}

/* ============================================================================
   DASHBOARD
   ========================================================================== */
let chosenWindow = "5-7";
let chosenDateIdx = 0; // index into available delivery dates (earliest first)
let payMethod = "full"; // "full" | "bnpl"
function setPayMethod(m) { payMethod = m; navigate(); }
let cadence = "weekly";
function deliveryDates() {
  const out = [];
  for (let i = 1; i <= 7; i++) { const d = new Date(); d.setDate(d.getDate() + i); out.push(d); }
  return out;
}
function chosenDeliveryDate() { const ds = deliveryDates(); return ds[Math.min(chosenDateIdx, ds.length - 1)]; }
function setDeliveryDate(idx) { chosenDateIdx = idx; windowConfirmed = true; navigate(); }
let windowConfirmed = false;
function deliveryWindowSlot() { return (DELIVERY_WINDOWS.find((w) => w.id === chosenWindow) || DELIVERY_WINDOWS[0]).slot; }
function orderSummary() {
  const ids = myOrders();
  const lines = [];
  let total = 0, count = 0;
  // Include confirmed (placed) orders in the customer's view
  const confirmed = allRestaurantOrders().slice();
  ids.forEach((rid) => {
    const o = ORDERS[rid];
    const r = RESTAURANTS.find((x) => x.id === rid) || { name: "Kitchen" };
    const items = meals.filter((m) => o.selected[m.id] > 0);
    let sub = 0;
    items.forEach((m) => { const q = o.selected[m.id]; sub += q * m.price; count += q; });
    total += sub;
    lines.push({ rest: r.name, sub, items, status: "draft" });
  });
  confirmed.forEach((o) => {
    const items = o.items.map((it) => { const m = meals.find((x) => x.title === it.title); return { id: m ? m.id : "x", title: it.title, price: it.price, restaurantId: o.rid, qty: it.qty }; });
    total += o.total; count += o.items.reduce((a, it) => a + it.qty, 0);
    lines.push({ rest: o.rest, sub: o.total, items, status: "confirmed", oid: o.id });
  });
  return { ids, lines, total, count, confirmed: confirmed.length > 0 };
}
function setDeliveryWindow(id) { chosenWindow = id; windowConfirmed = true; navigate(); }
function confirmDelivery() { windowConfirmed = true; flash("✓ Delivery confirmed — window saved."); navigate(); }
function changeWindow() { windowConfirmed = false; navigate(); }
function orderSummaryText() {
  const s = orderSummary();
  const parts = s.lines.map((l) => `${l.rest} — $${l.sub.toFixed(2)}`).join(", ");
  return `My Week. Fully Catered.\n\n${s.lines.map((l) => `• ${l.rest}: ${l.items.map((m) => `${s.lines.find(x=>x.rest===l.rest).items}`).length}`).join("\n")}\n\nTotal: $${s.total.toFixed(2)}\nDelivery: ${fmtDate(nextDeliveryDate())}, ${deliveryWindowSlot()}`;
}
function nextDeliveryDate() { return chosenDeliveryDate(); }
function calendarLink() {
  const start = nextDeliveryDate(); const s = new Date(start); s.setHours(17,0,0);
  const e = new Date(start); e.setHours(19,0,0);
  const fmt = (x) => x.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const text = encodeURIComponent("My Week. Fully Catered. delivery — $" + orderSummary().total.toFixed(2));
  const det = encodeURIComponent("Delivery window " + deliveryWindowSlot() + " · " + orderSummary().lines.map((l) => l.rest).join(", "));
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${fmt(s)}/${fmt(e)}&details=${det}`;
}
function emailLink() {
  const s = orderSummary();
  const body = encodeURIComponent(`My Week. Fully Catered.\n\n${s.lines.map((l) => `• ${l.rest}: $${l.sub.toFixed(2)}`).join("\n")}\n\nTotal: $${s.total.toFixed(2)}\nDelivery: ${fmtDate(nextDeliveryDate())}, ${deliveryWindowSlot()}\nAddress: 120 Bay St, Unit 1402, Toronto`);
  return `mailto:?subject=${encodeURIComponent("My Week. Fully Catered. delivery — " + fmtDate(nextDeliveryDate()))}&body=${body}`;
}
function smsLink() {
  const s = orderSummary();
  const body = encodeURIComponent(`My Week delivery ${fmtDate(nextDeliveryDate())} ${deliveryWindowSlot()}. $${s.total.toFixed(2)}. ${s.lines.map((l) => l.rest).join(", ")}`);
  return `sms:?body=${body}`;
}
function icsLink() {
  const start = nextDeliveryDate(); const s = new Date(start); s.setHours(17,0,0);
  const e = new Date(start); e.setHours(19,0,0);
  const f = (x) => x.getFullYear() + ("0"+(x.getMonth()+1)).slice(-2) + ("0"+x.getDate()).slice(-2) + "T" + ("0"+x.getHours()).slice(-2) + ("0"+x.getMinutes()).slice(-2) + "00";
  const desc = `My Week. Fully Catered. delivery ${deliveryWindowSlot()} - ${orderSummary().lines.map((l) => l.rest).join(", ")}.`;
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//SupperClub//EN\nBEGIN:VEVENT\nDTSTART:${f(s)}\nDTEND:${f(e)}\nSUMMARY:${desc}\nEND:VEVENT\nEND:VCALENDAR`;
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}
function setCadence(c) { cadence = c; flash(`✓ Plan set to ${c === "weekly" ? "weekly" : c === "biweekly" ? "every 2 weeks" : "monthly"}.`); navigate(); }
function renderDashboard() {
  const s = orderSummary();
  const items = s.lines.map((l) => `
    <section class="card meal">
      <div class="meal-top"><div><div class="meal-title"><span class="slot">${ico("store")}</span> ${esc(l.rest)}</div>
        <div class="meal-rest">${ico("calendar")} ${esc(BRAND)} weekly</div></div>
        <span class="acc-amt">$${l.sub.toFixed(2)}</span></div>
      <div class="yb-list">${l.items.map((m) => {
        const q = (m.qty != null) ? m.qty : (ORDERS[s.ids[s.lines.indexOf(l)]] || {}).selected?.[m.id] || 0;
        return `<div class="yb-row"><span class="yb-qty">${q}×</span><span class="yb-name">${esc(m.title)}</span><span class="yb-price">${money(q * m.price)}</span></div>`;
      }).join("")}</div>
    </section>`).join("");
  const empty = s.count === 0;
  const d = fmtDate(nextDeliveryDate());

  return `
    <div class="mobile">
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a></header>

      <section class="card block">
        <div class="kicker">${ico("truck")} Next delivery</div>
        <div class="h2">${d}</div>
        <div class="muted">${ico("pin")} 120 Bay St, Unit 1402 · Concierge</div>
        <div class="window-pick"><span class="wp-label">${ico("clock")} 2-hour window</span><div class="wp-opts">
          ${DELIVERY_WINDOWS.map((w) => `<button class="wp-opt ${chosenWindow === w.id ? "on" : ""}" onclick="setDeliveryWindow('${w.id}')">${w.label}</button>`).join("")}</div></div>
        ${windowConfirmed ? `
          <div class="confirm-banner">${ico("check")} Window confirmed — ${deliveryWindowSlot()} on ${d}. <button class="btn ghost sm" onclick="changeWindow()">Change</button></div>
        ` : `
          <button class="btn primary sm" style="width:100%;margin-top:12px" onclick="confirmDelivery()">${ico("check")} Confirm delivery window</button>
        `}
        <div class="cadence-row"><span class="wp-label">${ico("calendar")} Plan frequency</span><div class="wp-opts">
          <button class="wp-opt ${cadence === "weekly" ? "on" : ""}" onclick="setCadence('weekly')">Weekly</button>
          <button class="wp-opt ${cadence === "biweekly" ? "on" : ""}" onclick="setCadence('biweekly')">Every 2 wks</button>
          <button class="wp-opt ${cadence === "monthly" ? "on" : ""}" onclick="setCadence('monthly')">Monthly</button></div></div>
        <div class="cutoff">${ico("clock")} Pause up to 3 days before · <a href="#track" class="track-link">${ico("truck")} Track</a></div>
      </section>

      ${empty ? `<section class="card block"><p class="muted">You have no weekly orders yet. <a href="#restaurants">Pick a kitchen</a> to get started.</p></section>` : `
      <div class="row-between"><div class="h3">Your week</div><div class="accent bold">$${s.total.toFixed(2)} all-in</div></div>
      <div class="meals">${items}</div>`}

      ${windowConfirmed && !empty ? `
      <section class="card block confirm-card">
        <div class="kicker">${ico("check")} Order confirmed</div>
        <div class="billrow"><span>Total (${s.count} meals)</span><span class="bold">$${s.total.toFixed(2)}</span></div>
        <div class="billrow"><span>Delivery date</span><span class="bold">${d}</span></div>
        <div class="billrow"><span>Delivery window</span><span class="bold">${deliveryWindowSlot()}</span></div>
        <div class="billrow"><span>Delivery</span><span class="accent bold">INCLUDED</span></div>
        <div class="share-actions">
          <span class="share-label">${ico("tap")} Send to your calendar:</span>
          <div class="share-btns">
            <a class="btn ghost sm" href="${emailLink()}">${ico("printer")} Email</a>
            <a class="btn ghost sm" href="${smsLink()}">${ico("tap")} Text</a>
            <a class="btn ghost sm" href="${calendarLink()}" target="_blank">${ico("calendar")} Calendar</a>
            <a class="btn ghost sm" href="${icsLink()}" download="supper-club-delivery.ics">${ico("download")} .ics</a>
          </div>
          <p class="muted sm">Add the date &amp; window to your calendar so you know when to expect it.</p>
        </div>
      </section>` : ""}

      <div class="actions">
        <button class="btn ghost col" onclick="flash('✓ Week paused — no charge.')">${ico("pause")}<span>Pause</span></button>
        <button class="btn ghost col" onclick="flash('✓ Switched to pickup.')">${ico("bag")}<span>Pickup</span></button>
        <button class="btn ghost col" onclick="flash('✓ Delivery mode.')">${ico("truck")}<span>Deliver</span></button>
      </div>
    </div>
    <div class="mobnav">
      <a data-nav="dashboard" href="#dashboard" class="active">${ico("home")}<span>This Week</span></a>
      <a data-nav="schedule" href="#schedule">${ico("calendar")}<span>Schedule</span></a>
      <a data-nav="track" href="#track">${ico("truck")}<span>Track</span></a>
      <a data-nav="restaurants" href="#restaurants">${ico("store")}<span>Restaurants</span></a>
    </div>`;
}

/* ============================================================================
   SCHEDULE — order cadence + pause
   ========================================================================== */
const SCHEDULE = [
  { date: "Aug 18", cad: "weekly", total: 78 }, { date: "Aug 25", cad: "weekly", total: 78 },
  { date: "Sep 01", cad: "weekly", total: 78 }, { date: "Sep 08", cad: "weekly", total: 78 },
];
let schedSkip = {};
function toggleWeek(i) { schedSkip[i] = !schedSkip[i]; flash(schedSkip[i] ? "✓ Week skipped — no charge." : "✓ Week restored."); navigate(); }
function renderSchedule() {
  const rows = SCHEDULE.map((w, i) => `<div class="card sched-row">
    <div class="sched-date"><span class="sched-week">${w.date}</span><span class="muted sm">${w.cad} · ${w.total} · ${deliveryWindowSlot()}</span></div>
    <button class="btn ghost sm ${schedSkip[i] ? "on-skip" : ""}" onclick="toggleWeek(${i})">${ico("pause")} ${schedSkip[i] ? "Un-skip" : "Skip"}</button></div>`).join("");
  return `
    <div class="mobile"><header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
      <a href="#dashboard" class="navbtn ghost sm">${ico("arrowLeft")} Back</a></header>
      <section class="card block"><div class="kicker">${ico("calendar")} Delivery schedule</div>
        <div class="h2">Your next 4 weeks ${explainer("audio/howto.mp3")}</div><p class="muted sm">Skip any week up to 3 days before its Sunday 11:59 PM cutoff.</p></section>
      <div class="sched-list">${rows}</div>
      <section class="card block"><div class="kicker">${ico("bolt")} Auto-selection</div>
        <p class="muted sm">Don't choose? We pick meals from your dietary badges before each cutoff.</p></section>
    </div>`;
}

/* ============================================================================
   TRACK — Indian Desire → CN Tower live map
   ========================================================================== */
function renderTrack() {
  const stateIdx = TRACK_STEPS.findIndex((x) => x.key === TRACK.status);
  const steps = TRACK_STEPS.map((s, i) => {
    const done = i < stateIdx, active = i === stateIdx;
    return `<div class="tr-step ${active ? "active" : done ? "done" : "todo"}">
      <div class="tr-node">${done ? ico("check") : ico(s.icon)}</div>
      <div class="tr-info"><div class="tr-label">${s.label}</div>${active ? `<div class="tr-sub">${stepSub(s.key)}</div>` : ""}</div></div>`;
  }).join("");
  const statusLabel = TRACK_STEPS.find((s) => s.key === TRACK.status).label;
  return `
    <div class="mobile">
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#dashboard" class="navbtn ghost sm">${ico("arrowLeft")} Back</a></header>
      <section class="card block">
        <div class="kicker">${ico("truck")} Live tracking</div>
        <div class="h2">${esc(statusLabel)}</div>
        <div class="eta-big">${TRACK.etaMin} min</div>
        <div class="route-label">${ico("pin")} ${esc(TRACK.from)} ${ico("arrow")} ${ico("pin")} ${esc(TRACK.to)}</div>
        <div class="progress"><div class="progress-fill" style="width:${TRACK.progress}%"></div></div>
      </section>
      <section class="card block">
        <div class="kicker">${ico("pin")} Live map</div>
        <div class="mini-map"><svg viewBox="0 0 300 150" class="map-svg">
          <path d="M20 130 L70 90 L130 100 L200 60 L285 25" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-dasharray="5 5"/>
          <circle cx="20" cy="130" r="6" fill="#f59e0b"/><text x="12" y="146" font-size="10" fill="#94a3b8">Kitchen</text>
          <circle cx="285" cy="25" r="6" fill="#0d9488"/><text x="252" y="20" font-size="10" fill="#0d9488">You</text>
          <circle cx="${courierMapX(TRACK.progress)}" cy="${courierMapY(TRACK.progress)}" r="8" fill="#0d9488" stroke="#fff" stroke-width="2.5"/>
          <text x="${courierMapX(TRACK.progress) - 24}" y="${courierMapY(TRACK.progress) - 12}" font-size="10" font-weight="700" fill="#0d9488">${esc(TRACK.courierName)}</text>
        </svg>
        <div class="map-note">${ico("pin")} Live position · same map the kitchen sees</div></div>
      </section>
      <section class="track-steps">${steps}</section>
      <section class="card block"><div class="kicker">${ico("truck")} Your courier</div>
        <div class="courier-row"><div class="c-avatar">${esc(TRACK.courierName[0])}</div>
          <div><div class="bold">${esc(TRACK.courierName)}</div><div class="muted sm">${esc(TRACK.vehicle)} · delivering to ${esc(TRACK.address)}</div></div>
          <button class="btn ghost sm" onclick="flash('Calling courier…')">${ico("tap")} Call</button></div></section>
      <div class="actions"><button class="btn ghost col" onclick="advanceTrack()">${ico("check")}<span>Simulate</span></button>
        <button class="btn ghost col" onclick="flash('Courier contacted.')">${ico("truck")}<span>Contact</span></button></div>
    </div>`;
}
function stepSub(key) { return { preparing: "Cooking & packing", packed: "Box sealed & labeled", out: "On the way", delivered: "Enjoy!" }[key] || ""; }
function fmtEta(min) { const t = new Date(Date.now() + min * 60000); return t.toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" }); }
function advanceTrack() {
  const i = TRACK_STEPS.findIndex((x) => x.key === TRACK.status);
  if (i < TRACK_STEPS.length - 1) { TRACK.status = TRACK_STEPS[i + 1].key; TRACK.etaMin = Math.max(3, TRACK.etaMin - 22); TRACK.progress = Math.min(100, TRACK.progress + 26); }
  flash("✓ Order status updated."); navigate();
}

/* ============================================================================
   PARTNER — overview, kitchen, fleet board, payouts
   ========================================================================== */
function renderPartners() {
  const steps = [
    ["1", "Set up", "Profile, menu & zones. Automated DineSafe + rating vetting.", "store"],
    ["2", "Fulfill orders", "Committed weekly volume + one consolidated prep list.", "pot"],
    ["3", "Get paid", "10% of sales — INCLUDING your credit-card fees. Auto-deducted before payout.", "wallet"],
  ].map(([n, t, d, ic]) => `<div class="pstep"><span class="pstep-num">${n}</span><div class="pstep-body"><div class="pstep-t">${ico(ic)} ${t}</div><div class="pstep-d">${d}</div></div></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>for restaurant partners</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn active" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
          <a href="#menu" class="p-navbtn" data-nav="menu">${ico("bag")} Menu</a>
        <a href="#" class="btn p-outline sm" onclick="ownerLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Get on the GTA's zero-friction meal box</div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h1 style="margin:0">Run your kitchen on ${esc(BRAND)}</h1>${explainer("audio/owner.mp3")}</div>
        <p>Committed weekly customers, consolidated batch orders, automated vetting, and automatic payouts. You just cook.</p></section>
      <section class="p-steps"><div class="p-label">It's 3 steps to your first payout</div>${steps}</section>
      <section class="pricing-band">
        <div class="pb-item"><span class="pb-num">10%</span><span class="pb-l">of your monthly sales</span></div>
        <div class="pb-plus">=</div>
        <div class="pb-item accent"><span class="pb-num">10% includes</span><span class="pb-l">your credit-card fees</span></div>
      </section>
      <section class="p-cta"><div class="p-cta-left"><div class="p-label">Automated vetting — no manual checks</div>
        <div class="p-cta-t">DineSafe &amp; Google rating, verified nightly</div>
        <div class="p-cta-d">Open the Kitchen Dashboard to see your production matrix, fleet board, and payout analytics.</div></div>
        <a href="#fleet" class="btn p-primary">${ico("truck")} Open Fleet Board ${ico("arrow")}</a></section>
      <footer class="p-foot">${esc(BRAND)} for Partners · ${versionBadge("partner")}</footer>
    </div>`;
}

/* FLEET BOARD — multiple live orders */
function renderFleet() {
  const rows = FLEET.map((o) => {
    const stateIdx = TRACK_STEPS.findIndex((x) => x.key === o.status);
    const state = TRACK_STEPS[stateIdx].label;
    return `<div class="fleet-row">
      <div class="fleet-id">#${o.id}</div>
      <div class="fleet-cust"><b>${esc(o.customer)}</b><div class="muted sm">${esc(o.addr)}</div></div>
      <div class="fleet-rest">${esc(o.rest)}</div>
      <div class="fleet-status"><span class="status-pill ${o.status}">${state}</span></div>
      <div class="fleet-courier">${esc(o.courier)}</div>
      <div class="fleet-eta">${esc(o.eta)}</div>
      <div class="fleet-bar"><div class="bar"><div class="fill" style="width:${o.progress}%"></div></div></div>
    </div>`;
  }).join("");

  // Live fleet MAP — all active orders as pins on one shared map
  const pins = FLEET.map((o) => {
    const isOut = o.status === "out";
    const pinColor = isOut ? "#0d9488" : o.status === "packed" ? "#f59e0b" : "#94a3b8";
    return `<g>
      <line x1="${o.x}" y1="${o.y}" x2="${o.toX}" y2="${o.toY}" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="${o.x}" cy="${o.y}" r="7" fill="${pinColor}" stroke="#fff" stroke-width="2"/>
      <text x="${o.x - 30}" y="${o.y - 10}" font-size="9" font-weight="700" fill="${pinColor}">${esc(o.courier === "—" ? o.rest : o.courier)}</text>
    </g>`;
  }).join("");

  const out = FLEET.filter((o) => o.status === "out").length;
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>fleet map & board</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn active" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
          <a href="#menu" class="p-navbtn" data-nav="menu">${ico("bag")} Menu</a>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-filters">
        <button class="btn p-outline sm">${ico("calendar")} Today ▼</button>
        <button class="btn p-outline sm">${ico("clock")} 5–7 PM ▼</button>
        <span class="fleet-count">${out} orders out · ${FLEET.length} active</span>
      </section>

      <!-- LIVE MAP: every order on one map -->
      <section class="fleet-map-card">
        <div class="fleet-map-head">${ico("pin")} Live courier map · all orders</div>
        <div class="mini-map fleet-map"><svg viewBox="0 0 300 150" class="map-svg">
          <rect width="300" height="150" fill="#f1f5f9"/>
          <path d="M15 130 L70 90 L120 100 L165 90 L210 55 L265 25 L285 15" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 4"/>
          <circle cx="15" cy="130" r="6" fill="#f59e0b"/><text x="22" y="134" font-size="9" fill="#64748b">Kitchens</text>
          ${pins}
          <text x="150" y="148" text-anchor="middle" font-size="9" fill="#94a3b8">Downtown Toronto · live fleet positions</text>
        </svg></div>
        <div class="fleet-legend">
          <span><i class="lg-dot out"></i>Out</span>
          <span><i class="lg-dot packed"></i>Packed</span>
          <span><i class="lg-dot preparing"></i>Preparing</span>
          <span class="muted sm">Every pin = one order. Customers see only their own courier on the same map.</span>
        </div>
      </section>

      <section class="fleet-board">
        <div class="fleet-head"><span>Order</span><span>Customer</span><span>Kitchen</span><span>Status</span><span>Courier</span><span>ETA</span><span>Progress</span></div>
        ${rows}
      </section>
      <footer class="p-foot">Fleet map & board — see every order at once. Customers see the same map, scoped to their own courier.</footer>
    </div>`;
}

/* KITCHEN — production matrix */
function renderKitchen() {
  const orders = allRestaurantOrders();
  const empty = !orders.length;
  const cards = orders.map((o) => `
    <section class="k-order">
      <div class="ko-head">
        <span class="ko-id">${esc(o.id)}</span>
        <span class="ko-status received">${ico("check")} Received</span>
        <span class="ko-date">${ico("calendar")} ${esc(o.deliveryDate)} · ${esc(o.window)}</span>
      </div>
      <div class="ko-cust">${ico("pin")} <b>${esc(o.customer.name)}</b> — ${esc(o.customer.addr)} ${esc(o.customer.postal)}</div>
      <div class="ko-items">${o.items.map((it) => `<div class="billrow"><span>${it.qty}× ${esc(it.title)}</span><span class="bold">${money(it.qty * it.price)}</span></div>`).join("")}</div>
      <div class="ko-total"><span>Total (${o.items.reduce((a, i) => a + i.qty, 0)} items)</span><span class="tb-amt">${money(o.total)}</span></div>
      <div class="ko-notify">
        <a class="btn ghost sm" href="${notifyRestaurant(o, "email")}">${ico("printer")} Email owner</a>
        <a class="btn ghost sm" href="${notifyRestaurant(o, "sms")}">${ico("tap")} Text owner</a>
      </div>
    </section>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>kitchen portal</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn active" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
          <a href="#menu" class="p-navbtn" data-nav="menu">${ico("bag")} Menu</a>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-hero"><div class="eyebrow dark">Incoming orders</div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h1 style="margin:0">Confirmed orders</h1>${explainer("audio/owner.mp3")}</div>
        <p>${orders.length ? `${orders.length} order${orders.length === 1 ? "" : "s"} received, earliest delivery first.` : "No orders yet — they'll appear here the moment a customer confirms."}</p></section>
      <section class="k-list">
        ${empty ? `<div class="p-table-card"><div class="muted" style="padding:24px">No orders received yet.</div></div>` : cards}
      </section>
      <footer class="p-foot">Kitchen portal — every confirmed order, with customer, dishes, price, and delivery details.</footer>
    </div>`;
}

/* ============================================================================
   MENU MANAGEMENT — owner imports menu by restaurant name (or adds manually),
   then updates prices or hides/shows items.
   ========================================================================== */
// Store: MENU_STORE[restaurantId] = { name, source:"imported"|"manual", items:[{id,title,price,type,category,hidden}] }
const MENU_STORE = {};
let menuRest = "rest_indian";
function menuItems(rid) {
  if (!MENU_STORE[rid]) {
    // Seed from the built-in catalog (acts as the "found" restaurant)
    const base = meals.filter((m) => m.restaurantId === rid).map((m, i) => ({ id: "mi" + i, title: m.title, price: m.price, type: m.type, category: "Entrée", hidden: false }));
    MENU_STORE[rid] = { name: restName(rid), source: "imported", items: base };
  }
  return MENU_STORE[rid];
}
function setMenuRest(rid) { menuRest = rid; navigate(); }
function menuFindByName() {
  const inp = document.getElementById("menu-find");
  const q = (inp ? inp.value : "").trim().toLowerCase();
  if (!q) { flash("Type a restaurant name first."); return; }
  const found = RESTAURANTS.find((r) => r.name.toLowerCase().includes(q)) || RESTAURANTS.find((r) => r.cuisine.toLowerCase().includes(q));
  if (found) {
    menuRest = found.id;
    const st = menuItems(found.id);
    st.source = "imported";
    flash(`✓ Found ${found.name} — menu imported from Google profile.`);
  } else {
    // If not in catalog, create a new manual entry
    const nid = "rest_" + q.replace(/[^a-z0-9]/g, "");
    if (!RESTAURANTS.some((r) => r.id === nid)) { RESTAURANTS.push({ id: nid, name: inp.value.trim(), cuisine: "Other", neighborhood: "GTA", radius: 7, dineSafe: "unconditional", hygiene: 97, google: 4.3, reviews: 10, pickup: true, dishes: 6 }); }
    MENU_STORE[nid] = { name: inp.value.trim(), source: "manual", items: [] };
    menuRest = nid;
    flash("✓ Added a new kitchen — now add items manually.");
  }
  navigate();
}
function menuAddManual() {
  const title = document.getElementById("mi-title").value.trim();
  const price = parseFloat(document.getElementById("mi-price").value);
  const cat = document.getElementById("mi-cat").value || "Entrée";
  if (!title || !price) { flash("Enter a dish name and price."); return; }
  const st = menuItems(menuRest);
  st.items.push({ id: "mi" + Date.now(), title, price, type: "nonveg", category: cat, hidden: false });
  flash(`✓ Added “${title}” — $${price.toFixed(2)}.`);
  navigate();
}
function menuToggleHidden(rid, mid) {
  const st = menuItems(rid);
  const it = st.items.find((x) => x.id === mid);
  if (it) it.hidden = !it.hidden;
  navigate();
}
function menuDelete(rid, mid) {
  const st = menuItems(rid);
  st.items = st.items.filter((x) => x.id !== mid);
  flash("Item removed.");
  navigate();
}
function menuEditPrice(rid, mid) {
  const inp = document.getElementById("price-" + mid);
  const v = parseFloat(inp ? inp.value : 0);
  const st = menuItems(rid);
  const it = st.items.find((x) => x.id === mid);
  if (it && v > 0) { it.price = v; flash("Price updated."); navigate(); }
}
function renderMenu() {
  const rid = menuRest;
  const st = menuItems(rid);
  const restBtns = RESTAURANTS.map((r) => `<button class="chip ${rid === r.id ? "on" : ""}" onclick="setMenuRest('${r.id}')">${esc(r.name)}</button>`).join("");
  const rows = st.items.map((it) => `
    <div class="menu-row ${it.hidden ? "hidden" : ""}">
      <div class="mr-main">
        <div class="mr-title">${esc(it.title)} ${it.hidden ? '<span class="mr-badge hid">hidden</span>' : '<span class="mr-badge">live</span>'}</div>
        <div class="mr-cat">${esc(it.category)} · ${esc(it.type)}</div>
      </div>
      <div class="mr-price"><span>$</span><input id="price-${it.id}" type="number" value="${it.price}" class="mr-input" /><button class="btn ghost sm" onclick="menuEditPrice('${rid}','${it.id}')">${ico("check")} Save</button></div>
      <div class="mr-actions">
        <button class="btn ghost sm" onclick="menuToggleHidden('${rid}','${it.id}')">${it.hidden ? ico("eye") + " Show" : ico("eyeOff") + " Hide"}</button>
        <button class="btn ghost sm" onclick="menuDelete('${rid}','${it.id}')">${ico("x")} Remove</button>
      </div>
    </div>`).join("");
  const visible = st.items.filter((x) => !x.hidden).length;
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>menu management</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#menu" class="p-navbtn active" data-nav="menu">${ico("bag")} Menu</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
        <a href="#" class="btn p-outline sm" onclick="ownerLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Menu management</div>
        <h1>${esc(st.name)}</h1>
        <p>Find your restaurant by name to import its menu, or add items manually. Update prices and hide items anytime.</p></section>

      <section class="menu-find card p-dark-card">
        <div class="mf-label">${ico("search")} Find your restaurant on Google / the web</div>
        <div class="mf-input"><input id="menu-find" type="text" placeholder="Type a restaurant name, e.g. Indian Desire" /><button class="btn p-primary" onclick="menuFindByName()">${ico("search")} Find & import menu</button></div>
        <p class="muted sm">We pull the menu, prices &amp; photos from the restaurant's public Google profile. You can edit everything after.</p>
      </section>

      <div class="menu-tabs"><button class="chip on">Restaurants</button><span class="muted sm">${RESTAURANTS.length} in your account</span></div>
      <div class="rest-pills">${restBtns}</div>

      <section class="menu-live">
        <div class="ml-head"><span class="bold">${ico("bag")} Live menu — ${esc(st.name)}</span><span class="ml-count">${visible} live · ${st.items.length - visible} hidden</span></div>
        ${rows || `<p class="muted" style="padding:20px">No items yet. Add a dish below.</p>`}
      </section>

      <section class="menu-add card p-dark-card">
        <div class="mf-label">${ico("plus")} Add a dish manually</div>
        <div class="ma-grid">
          <input id="mi-title" type="text" placeholder="Dish name, e.g. Butter Chicken" />
          <input id="mi-price" type="number" placeholder="Price, e.g. 13" />
          <select id="mi-cat"><option>Entrée</option><option>Main</option><option>Side</option><option>Drink</option><option>Dessert</option></select>
          <button class="btn p-primary" onclick="menuAddManual()">${ico("plus")} Add dish</button>
        </div>
      </section>
      <footer class="p-foot">Menu management — import by restaurant name or add manually, then update or hide items.</footer>
    </div>`;
}

/* PAYOUTS */
function renderPayouts() {
  const sales = 4200; // example monthly platform sales for this kitchen
  const feeRate = 0.10;
  const fee = Math.round(sales * feeRate);
  const net = sales - fee;
  const rows = [
    [`Gross platform sales (month)`, money(sales), ""],
    [`Supper Club fee (${feeRate * 100}% — INCLUDES credit-card fees)`, money(fee), "deduct"],
    [`Net paid to you`, money(net), "total"],
  ].map(([l, v, c]) => `<div class="pay-row"><span>${l}</span><span class="pay-val">${v} ${c === "total" ? `<span class="pay-dir up">▲</span>` : c === "deduct" ? `<span class="pay-dir down">▼</span>` : ""}</span></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>partner payouts</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn active" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
          <a href="#menu" class="p-navbtn" data-nav="menu">${ico("bag")} Menu</a>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="pay-hero"><div class="pay-hero-label">Net paid to you this month ${explainer("audio/owner.mp3")}</div><div class="pay-hero-amt">${money(net)}</div>
        <div class="pay-hero-sub">That's 10% of your platform sales — and it INCLUDES your credit-card fees. No card fees on top, no hidden charges. Auto-deducted before payout.</div></section>
      <section class="p-table-card"><div class="p-table-head"><span class="bold">${ico("chart")} Payout breakdown</span></div>${rows}</section>
      <footer class="p-foot">You pay 10% of monthly platform sales — and that 10% INCLUDES your credit-card fees. Auto-deducted before payout. No card fees on top, no hidden charges.</footer>
    </div>`;
}

/* ============================================================================
   ADMIN — module control panel (enable/disable features)
   ========================================================================== */
const MODULE_META = [
  { key: "search", label: "Search bar", desc: "Search box + filter chips on the homepage" },
  { key: "featured", label: "Featured Restaurant hero", desc: "Hero banner on the homepage" },
  { key: "dishOfDay", label: "Dish of the Day", desc: "Daily featured dish with recipe" },
  { key: "chefStory", label: "Chef Story of the Day", desc: "Daily chef profile" },
  { key: "whatAte", label: "What Toronto Ate", desc: "Auto-generated top-dishes list" },
  { key: "gives", label: "Supper Club Gives", desc: "Community giving strip + ledger" },
  { key: "gallery", label: "Fresh from the kitchens", desc: "Real dish-photo gallery" },
  { key: "auction", label: "Content Auctions", desc: "Daily featured/dish/chef bidding (owner tool)" },
  { key: "fleet", label: "Fleet Board", desc: "Owner live-order tracking" },
  { key: "payouts", label: "Payouts", desc: "Owner payout dashboard" },
  { key: "kitchens", label: "Partner Kitchens", desc: "Restaurant list on the homepage" },
];
function renderAdminLogin() {
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("gear")}<div><b>${esc(BRAND)}</b><span>platform admin · owner only</span></div></div></header>
      <section class="login-wrap">
        <div class="login-card">
          <div class="login-ico" style="background:#0d9488">${ico("shield")}</div>
          <h2>Platform Admin</h2>
          <p class="muted sm">This panel controls which features are live. It is internal-only — never shown to customers or restaurant owners.</p>
          <input type="password" id="admin-pass" placeholder="Enter platform-admin password" class="login-input" onkeydown="if(event.key==='Enter')adminLogin()" />
          <button class="btn p-primary" style="width:100%" onclick="adminLogin()">${ico("arrow")} Sign in to admin</button>
          <p class="muted sm" style="margin-top:12px">Demo password: <code>supperclub-admin</code></p>
          <a href="#" class="btn p-outline sm" style="margin-top:8px">${ico("arrowLeft")} Back to eaters</a>
        </div>
      </section>
    </div>`;
}
function renderAdmin() {
  const m = getModules();
  const rows = MODULE_META.map((mod) => {
    const on = m[mod.key] !== false;
    return `<div class="admin-row">
      <div class="admin-info"><div class="admin-label">${esc(mod.label)}</div><div class="muted sm">${esc(mod.desc)}</div></div>
      <label class="switch">
        <input type="checkbox" ${on ? "checked" : ""} onchange="setModule('${mod.key}', this.checked)" />
        <span class="slider"></span>
      </label>
    </div>`;
  }).join("");
  const restRows = RESTAURANTS.map((r) => {
    const on = restVisible(r.id);
    return `<div class="admin-row">
      <div class="admin-info"><div class="admin-label">${esc(r.name)} <span class="muted sm">· ${esc(r.cuisine)}</span></div><div class="muted sm">${esc(r.address || r.neighborhood)} · ${r.google.toFixed(1)}★ (${r.reviews.toLocaleString()})</div></div>
      <label class="switch">
        <input type="checkbox" ${on ? "checked" : ""} onchange="setRestVisible('${r.id}', this.checked)" />
        <span class="slider"></span>
      </label>
    </div>`;
  }).join("");
  const SETTINGS_META = [
    { key: "loginEnabled", label: "Customer login (email + Google)", desc: "Require sign-in to order. Disabled by default." },
    { key: "auctionEnabled", label: "Sliding Scale auction", desc: "Show the group-buy deals on the homepage." },
    { key: "orderingEnabled", label: "Ordering", desc: "Allow customers to place orders." },
    { key: "changePriceBeforeCommit", label: "Change price before commit", desc: "Let customers switch their chosen price until a card hold is added." },
    { key: "showAudio", label: "Audio explainers", desc: "Show the 'Listen' buttons." },
    { key: "showWhatAte", label: "What the GTA ate", desc: "Show the ranked data section." },
    { key: "showGives", label: "Supper Club Gives", desc: "Show the giving strip + ledger." },
  ];
  const settingRows = SETTINGS_META.map((s) => {
    const on = settingOn(s.key);
    return `<div class="admin-row">
      <div class="admin-info"><div class="admin-label">${esc(s.label)}</div><div class="muted sm">${esc(s.desc)}</div></div>
      <label class="switch">
        <input type="checkbox" ${on ? "checked" : ""} onchange="setSetting('${s.key}', this.checked)" />
        <span class="slider"></span>
      </label>
    </div>`;
  }).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("gear")}<div><b>${esc(BRAND)}</b><span>platform admin · owner only</span></div></div>
        <nav class="p-nav"><a href="#admin" class="p-navbtn active" data-nav="admin">${ico("gear")} Admin</a></nav>
        <a href="#" class="btn p-outline sm" onclick="adminLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Platform control</div>
        <h1>Enable features &amp; restaurants</h1>
        <p>Toggle features and hide/show any restaurant. Uncheck a restaurant to remove it from the customer app. Changes save instantly.</p></section>
      <section class="admin-board">
        <div class="admin-head">Platform settings</div>
        ${settingRows}
        <div class="admin-head">Content modules</div>
        ${rows}
        <div class="admin-head">Restaurants (uncheck to hide from customers)</div>
        ${restRows}
      </section>
      <footer class="p-foot">Admin panel — full control. Set an admin URL in your hosting config to restrict access.</footer>
    </div>`;
}

/* ============================================================================
   CONSUMER LOGIN — email + Google (BUILT but DISABLED until admin enables it)
   ========================================================================== */
let loggedInUser = null;
function isLoggedIn() { return !!loggedInUser || localStorage.getItem("scd_user") === "1"; }
function loginEmail() {
  const email = (document.getElementById("login-email") || {}).value || "";
  if (!email.includes("@")) { flash("Enter a valid email."); return; }
  loggedInUser = email; localStorage.setItem("scd_user", "1");
  flash("✓ Signed in with " + email);
  location.hash = "#"; navigate();
}
function loginGoogle() {
  // Real build: Google Identity Services / OAuth. Demo: simulate success.
  loggedInUser = "google-user@example.com"; localStorage.setItem("scd_user", "1");
  flash("✓ Signed in with Google.");
  location.hash = "#"; navigate();
}
function logoutUser() { loggedInUser = null; localStorage.removeItem("scd_user"); flash("Signed out."); navigate(); }
function renderLoginPage() {
  if (!settingOn("loginEnabled")) return renderHome();
  return `
    <div class="consumer-shell">
      ${consumerTopbar("login")}
      <section class="login-wrap" style="max-width:420px;margin:60px auto">
        <div class="login-card">
          <div class="login-ico">${ico("people")}</div>
          <h2>Sign in to ${esc(BRAND)}</h2>
          <input id="login-email" type="email" placeholder="you@email.com" class="login-input" onkeydown="if(event.key==='Enter')loginEmail()" />
          <button class="btn p-primary" style="width:100%" onclick="loginEmail()">${ico("arrow")} Continue with email</button>
          <div style="margin:14px 0;text-align:center;color:#64748b;font-size:13px">or</div>
          <button class="btn p-outline" style="width:100%" onclick="loginGoogle()">${ico("people")} Continue with Google</button>
        </div>
      </section>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

/* ============================================================================
   SETTINGS PAGE — admin full-control (separate admin URL)
   ========================================================================== */
function renderSettings() {
  const s = getSettings();
  const rows = Object.keys(SETTINGS_DEFAULTS).map((k) => `
    <div class="admin-row">
      <div class="admin-info"><div class="admin-label">${esc(k)}</div><div class="muted sm">${s[k] ? "ON" : "OFF"}</div></div>
      <label class="switch"><input type="checkbox" ${s[k] ? "checked" : ""} onchange="setSetting('${k}', this.checked)" /><span class="slider"></span></label>
    </div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("gear")}<div><b>${esc(BRAND)}</b><span>platform settings</span></div></div>
        <nav class="p-nav"><a href="#settings" class="p-navbtn active" data-nav="settings">${ico("gear")} Settings</a></nav>
        <a href="#" class="btn p-outline sm" onclick="adminLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Full control</div>
        <h1>Platform settings</h1><p>Toggle any capability. This is the admin URL — restrict it in hosting config.</p></section>
      <section class="admin-board">${rows}</section>
      <footer class="p-foot">Admin settings — separate URL, full control.</footer>
    </div>`;
}

/* ---------- boot ---------- */
window.addEventListener("hashchange", navigate);
window.navigate = navigate;
window.getModules = getModules;
window.setModule = setModule;
window.getSettings = getSettings; window.settingOn = settingOn; window.setSetting = setSetting;
window.moduleOn = moduleOn;
window.setQty = setQty; window.setBuildFilter = setBuildFilter; window.quickCombo = quickCombo; window.applyBudget = applyBudget; window.buildState = buildState;
window.toggleCuisine = toggleCuisine; window.applyPostal = applyPostal;
window.boxTotal = boxTotal; window.selectedItems = selectedItems; window.clearBox = clearBox;
window.orderAdd = orderAdd; window.clearOrder = clearOrder; window.ORDERS = ORDERS;
window.placeOrders = placeOrders; window.CONFIRMED_ORDERS = CONFIRMED_ORDERS; window.confirmDelivery = confirmDelivery; window.changeWindow = changeWindow; window.confirmAndPlace = confirmAndPlace; window.setDeliveryDate = setDeliveryDate; window.setPayMethod = setPayMethod;
window.setMenuRest = setMenuRest; window.menuFindByName = menuFindByName; window.menuAddManual = menuAddManual; window.menuToggleHidden = menuToggleHidden; window.menuDelete = menuDelete; window.menuEditPrice = menuEditPrice; window.MENU_STORE = MENU_STORE;
window.setRestVisible = setRestVisible; window.restVisible = restVisible; window.visibleRestaurants = visibleRestaurants;
window.auctionJoin = auctionJoin; window.auctionPick = auctionPick; window.auctionConfirm = auctionConfirm; window.WEEK_AUCTION = WEEK_AUCTION;
window.submitAuctionBid = submitAuctionBid; window.buyPlacement = buyPlacement;
window.setDeliveryWindow = setDeliveryWindow; window.setCadence = setCadence; window.toggleWeek = toggleWeek; window.advanceTrack = advanceTrack; window.TRACK = TRACK;
window.setRestFilter = setRestFilter; window.demoNext = demoNext; window.demoPrev = demoPrev;
window.meals = meals; window.RESTAURANTS = RESTAURANTS;
window.homeSearch = homeSearch;
window.homeFilterType = homeFilterType;
window.closeModal = closeModal;
window.heroStart = heroStart; window.heroStop = heroStop; window.heroNext = heroNext; window.heroGo = heroGo;
window.dishGo = dishGo; window.dishNext = dishNext; window.currentDish = currentDish;
window.playAudio = playAudio; window.explainer = explainer;
window.modalAction = modalAction;
window.ownerLogin = ownerLogin;
window.ownerLogout = ownerLogout;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.loginEmail = loginEmail; window.loginGoogle = loginGoogle; window.logoutUser = logoutUser; window.isLoggedIn = isLoggedIn;
window.flash = flash;
if (navigator && navigator.serviceWorker && typeof navigator.serviceWorker.register === "function") { navigator.serviceWorker.register("sw.js").catch(() => {}); }
heroStart();
navigate();
