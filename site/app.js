/* ============================================================================
   SUPPER CLUB DIRECT — curated weekly delivery platform (GTA)
   v5 · Raleway · Apple-clean · retina · SVG icons (no emoji)
   Two products: Subscriber app (light/green) + Partner portal (dark/amber).
   Features: 15 restaurants · build-your-box · 2-hr windows · live tracking
   to CN Tower · fleet board · order cadence (weekly/2-wk/monthly) · live
   DineSafe badges · flat $500/mo pricing · pickup option · animated demo.
   ========================================================================== */

/* ---------- versioning ---------- */
const VERSION = "v11";
const VERSION_LINK = "v10/";
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
];
const restName = (id) => (RESTAURANTS.find((r) => r.id === id) || {}).name || "Partner kitchen";
const restOf = (id) => RESTAURANTS.find((r) => r.id === id) || {};

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
   PRICING — flat $500/month, first month free (no commission)
   ========================================================================== */
const PRICING = {
  base: 500,
  orderFeePct: 0,
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
  "restaurant-menu": renderRestaurantMenu, checkout: renderCheckout, delivery: renderDelivery,
  partners: renderPartners, kitchen: renderKitchen, fleet: renderFleet, payouts: renderPayouts, auction: renderAuction,
  admin: renderAdmin,
};
const PARTNER_ROUTES = ["partners", "kitchen", "fleet", "payouts", "auction"];
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
  // Restaurant-owner routes require owner sign-in
  if (PARTNER_ROUTES.includes(r) && !isOwnerAuthed()) {
    app.className = "partner";
    app.innerHTML = renderLogin();
    window.scrollTo(0, 0);
    return;
  }
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r));
  app.className = PARTNER_ROUTES.includes(r) ? "partner" : "consumer";
  app.innerHTML = routes[r]();
  window.scrollTo(0, 0);
}

/* ============================================================================
   HOME (rebranded)
   ========================================================================== */
function renderHome() {
  const steps = [
    ["1", "Register", "One-tap Apple Pay / Google Pay. No forms.", "bolt"],
    ["2", "Choose", "Pick your kitchen & meals — see who cooks your food.", "tap"],
    ["3", "Get delivery", "One box, one bill, weekly or monthly. All-inclusive.", "truck"],
  ].map(([n, t, d, ic]) => `<div class="step"><div class="step-num">${n}</div><div class="step-body"><div class="step-head">${ico(ic)}<span>${t}</span></div><div class="step-d">${d}</div></div></div>`).join("");

  const homeRestaurants = RESTAURANTS.filter((r) => {
    if (homeFilter.q && !(r.name.toLowerCase().includes(homeFilter.q) || r.cuisine.toLowerCase().includes(homeFilter.q))) return false;
    if (homeFilter.type === "high-protein") { const hp = meals.filter((m) => m.restaurantId === r.id && m.badges.includes("HIGH_PROTEIN")).length; if (!hp) return false; }
    if (homeFilter.type === "vegetarian") { const vg = meals.filter((m) => m.restaurantId === r.id && m.type === "veg").length; if (!vg) return false; }
    if (homeFilter.type === "nearby" && r.radius < 7) return false;
    if (homeFilter.type === "under-13") { const cheap = meals.some((m) => m.restaurantId === r.id && m.price <= 12); if (!cheap) return false; }
    return true;
  }).slice(0, 6);
  const top = (homeRestaurants.length ? homeRestaurants : RESTAURANTS.slice(0, 6)).map((r) => `
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
    ? { title: live.dishOfTheDay.title, rest: live.dishOfTheDay.restaurant, recipe: live.dishOfTheDay.recipe }
    : { title: "Butter Chicken & Basmati", rest: "Indian Desire", recipe: "Tandoor-grilled chicken, tomato-makhani sauce, basmati. Serves 2. Pair with naan & a squeeze of lime." };
  const chefStory = live.chefStory
    ? { rest: live.chefStory.restaurant, chef: live.chefStory.chef, line: live.chefStory.line }
    : { rest: "Richmond Station", chef: "Carl Heinrich", line: "Top Chef Canada winner, cooks contemporary Canadian with a farm-first ethos at Richmond Station." };
  const whatAte = (live.whatTorontoAte && live.whatTorontoAte.length)
    ? live.whatTorontoAte.map((w) => ({ dish: w.dish, rest: w.restaurant, orders: w.orders }))
    : [
        { dish: "Bulgogi Beef Bowl", rest: "Seoul Food Co.", orders: 214 },
        { dish: "Chicken Tikka Masala", rest: "Indian Desire", orders: 198 },
        { dish: "Lemon Herb Salmon", rest: "Sweet Basil", orders: 176 },
        { dish: "Carne Asada Bowl", rest: "Taco Toro", orders: 149 },
      ];

  return `
    <div class="consumer-shell">
      <header class="topbar">
        <a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b><span class="sub">Curated weekly meals · GTA</span></div></a>
        <nav class="consumer-nav">
          <a href="#restaurants" class="navbtn primary cta-big">${ico("plus")}<span class="cta-stack"><span class="cta-bold">My Week. Fully Catered.</span><span class="cta-sub">(Pick a kitchen, then your meals)</span></span></a>
          <a href="#restaurants" class="navbtn ghost">${ico("store")}<span>Restaurants</span></a>
          <a href="#gives" class="navbtn link">${ico("heart")}<span>Gives</span></a>
          <a href="#delivery" class="navbtn link">${ico("truck")}<span>Delivery</span></a>
        </nav>
      </header>

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
          <h1>Chef-prepared meals.<br/><span class="accent">3 easy steps.</span></h1>
          <p>Register, choose, get delivery — weekly, every two weeks, or monthly. No forms. No surprise fees. Every kitchen shows live DineSafe status &amp; ratings.</p>
          <a href="#demo" class="btn primary" style="margin-top:18px">${ico("play")} Watch the 60-second demo</a>
        </div>
        <div class="steps hero-steps">${steps}</div>
      </section>

      ${moduleOn("featured") ? `
      <!-- FEATURED RESTAURANT (hero) — daily auction winner -->
      <section class="featured-hero">
        <div class="fh-photo"><img src="img/featured-restaurant.jpg" alt="${esc(featured.name)} — ${esc(featured.cuisine)}" loading="lazy" /></div>
        <div class="fh-body">
          <div class="fh-tag">Featured restaurant of the day</div>
          <div class="fh-name">${esc(featured.name)}</div>
          <div class="fh-meta">${esc(featured.cuisine)} · ${esc(featured.neighborhood)} ${googleHtml(featured)}</div>
          <a href="#restaurants" class="btn primary sm" style="margin-top:12px">Order from ${esc(featured.name)} ${ico("arrow")}</a>
        </div>
      </section>` : ""}

      ${moduleOn("dishOfDay") ? `
      <!-- DISH OF THE DAY (with recipe) — daily auction winner -->
      <section class="content-sec">
        <div class="kicker">Dish of the day · by ${esc(dish.rest)}</div>
        <div class="dish-card">
          <div class="dish-img"><img src="img/dish-butter-chicken.jpg" alt="${esc(dish.title)}" /></div>
          <div class="dish-body">
            <div class="dish-title">${esc(dish.title)}</div>
            <div class="dish-recipe">${esc(dish.recipe)}</div>
          </div>
        </div>
      </section>` : ""}

      ${moduleOn("chefStory") ? `
      <!-- CHEF STORY OF THE DAY — daily auction winner -->
      <section class="content-sec">
        <div class="kicker">Chef story · ${esc(chefStory.rest)}</div>
        <div class="chef-card">
          <div class="chef-avatar"><img src="img/chef.jpg" alt="${esc(chefStory.chef)}" /></div>
          <div><div class="chef-name">${esc(chefStory.chef)}</div><div class="chef-line">${esc(chefStory.line)}</div></div>
        </div>
      </section>` : ""}

      ${moduleOn("whatAte") ? `
      <!-- WHAT TORONTO ATE (auto-generated from data) -->
      <section class="content-sec">
        <div class="kicker">${ico("chart")} What Toronto ate this week · <em>auto-generated</em></div>
        <div class="top-dishes">
          ${whatAte.map((w, i) => `<div class="top-dish"><span class="td-rank">${i + 1}</span><span class="td-name">${esc(w.dish)}</span><span class="td-rest">${esc(w.rest)}</span><span class="td-orders">${w.orders} orders</span></div>`).join("")}
        </div>
      </section>` : ""}

      ${moduleOn("gives") ? `
      <!-- SUPPER CLUB GIVES strip → links to ledger -->
      <section class="gives-strip">
        <div class="gs-icon">${ico("heart")}</div>
        <div>
          <div class="gs-title">Supper Club Gives</div>
          <div class="gs-sub">Supper Club Direct + a restaurant + a sponsor each give $500 this week to feed a local shelter.</div>
        </div>
        <a href="#gives" class="btn dark sm">See the ledger ${ico("arrow")}</a>
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
        <a href="#restaurants" class="btn ghost sm" style="margin-top:14px">View all ${RESTAURANTS.length} restaurants ${ico("arrow")}</a>
      </section>` : ""}

      <footer class="foot">${versionBadge()}
        <span class="admin-foot">· <a href="#admin" style="opacity:.6">Platform admin</a></span></footer>
      <div class="owner-mini"><a href="#partners">${ico("store")} Restaurant owners — deliver & run your kitchen on ${esc(BRAND)}</a></div>
    </div>`;
}

function homeSearch(q) {
  homeFilter.q = (q || "").toLowerCase().trim();
  navigate();
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
      <header class="topbar"><a href="#" class="brand">${ico("heart")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#" class="navbtn ghost sm">${ico("arrowLeft")} Back</a></header>
      <section class="build-hero">
        <div class="eyebrow">Supper Club Gives</div>
        <h1>Feeding our community, transparently</h1>
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
          <a href="#auction" class="p-navbtn active" data-nav="auction">${ico("gavel")} Auctions</a></nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-hero"><div class="eyebrow dark">Daily content auctions · restaurant owners only</div>
        <h1>Bid for the homepage — starting at $50</h1>
        <p>One slot per restaurant per week. Bids open Monday–Wednesday. Transparent — you can see every bid. Winner supplies the material for the next day.</p></section>
      <section class="auction-note">
        <span>${ico("shield")} Fairness rule: you can win ONE slot per week. Once you've bid, you can't bid another slot until next week.</span>
        <button class="btn p-outline sm" onclick="flash('Week cycles automatically')">Week ${auctionWeek} of the month</button>
      </section>
      <section class="auction-board">
        <div class="auction-head"><span>Slot</span><span>Day</span><span>Top bid</span><span>Bids</span><span>Leader</span><span></span></div>
        ${rows}
      </section>
      <section class="bid-feed">
        <div class="bid-feed-title">${ico("chart")} Live bids this week</div>
        ${bidFeed}
      </section>
      <footer class="p-foot">Daily auctions · $50 start · one slot per restaurant per week · transparent bids.</footer>
    </div>`;
}

/* ============================================================================
   RESTAURANTS (browse 15)
   ========================================================================== */
let restFilter = { cuisine: "all", area: "all", diet: "all" };
let homeFilter = { type: "all", q: "" }; // homepage search + bold chips
function renderRestaurants() {
  const cuisines = [...new Set(RESTAURANTS.map((r) => r.cuisine))];
  const list = RESTAURANTS.filter((r) => {
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
      <header class="topbar">
        <a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a>
      </header>
      <section class="build-hero">
        <div class="eyebrow">Partner kitchens</div>
        <h1>Choose where your food comes from</h1>
        <p>Every kitchen is vetted with live DineSafe inspection status and Google ratings — updated nightly. Pickup available.</p>
      </section>
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
  const r = RESTAURANTS.find((x) => x.id === rid) || RESTAURANTS[0];
  const o = getOrder(rid);
  const menu = meals.filter((m) => m.restaurantId === r.id);
  const tot = orderTotals(rid);
  const tier = o.tier;
  const rows = menu.map((m) => {
    const q = o.selected[m.id] || 0;
    return `<div class="meal-pick ${q ? "on" : ""}">
      <div class="mp-info"><div class="mp-title">${esc(m.title)}</div>
        <div class="mp-meta">${m.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${m.calories} Cal · ${m.proteinGrams}g</span><span class="mp-price">$${m.price}</span></div></div>
      <div class="stepper"><button class="stp-btn" onclick="orderAdd('${rid}','${m.id}',-1)">−</button><span class="stp-val">${q}</span><button class="stp-btn" onclick="orderAdd('${rid}','${m.id}',1)">+</button></div>
    </div>`;
  }).join("");
  const tierBtns = WEEKLY_TIERS.map((t) => `<button class="tier-chip ${tier === t ? "on" : ""}" onclick="setTier('${rid}',${t})">$${t}<span class="tier-sub">/week</span></button>`).join("");
  const meetsMin = tot.total >= MIN_ORDER;
  const minNote = meetsMin
    ? `<span class="min-ok">${ico("check")} Meets the $${MIN_ORDER} minimum</span>`
    : `<span class="min-warn">Need at least $${MIN_ORDER} in this order (${money(Math.max(0, MIN_ORDER - tot.total))} more)</span>`;
  const tierState = tot.total >= tier ? "met" : "pending";
  return `
    <div class="consumer-shell">
      <header class="topbar"><a href="#restaurants" class="brand">${ico("arrowLeft")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#restaurants" class="navbtn ghost sm">${ico("store")} All restaurants</a></header>
      <section class="build-hero">
        <div class="eyebrow">${esc(r.cuisine)} · ${esc(r.neighborhood)}</div>
        <h1>${esc(r.name)}</h1>
        <p>${googleHtml(r)} ${dineSafeHtml(r)}</p></section>
      <section class="order-tier">
        <div class="ot-label">${ico("calendar")} Your weekly order from ${esc(r.name)} — pick a plan</div>
        <div class="ot-tiers">${tierBtns}</div>
        <p class="muted sm">One order = one restaurant. You can add a different kitchen as its own weekly order. Committing at least $100/week keeps every kitchen worth its $500/month membership.</p>
      </section>
      <div class="build-grid">
        <div class="meals-panel"><div class="meals-count">${menu.length} dishes · ${esc(r.name)}</div><div class="meal-picks">${rows}</div></div>
      </div>
      <div class="your-box">
        <div class="yb-head"><span class="yb-title">${ico("box")} This week from ${esc(r.name)} — ${tot.count} ${tot.count === 1 ? "meal" : "meals"}</span>
          ${tot.count ? `<button class="btn ghost sm" onclick="clearOrder('${rid}')">${ico("arrowLeft")} Clear</button>` : ""}</div>
        ${tot.count ? `<div class="yb-list">${menu.filter((m) => o.selected[m.id] > 0).map((m) => `
          <div class="yb-row">
            <span class="yb-qty">${o.selected[m.id]}×</span>
            <span class="yb-name">${esc(m.title)}</span>
            <span class="yb-price">${money(o.selected[m.id] * m.price)}</span>
          </div>`).join("")}</div>
        <div class="yb-total">
          <span class="yb-budget">Order: $${money(tot.total)} / $${tier} plan · ${minNote}</span>
          <span class="yb-amt">${money(tot.total)}</span>
        </div>` : `<p class="muted">Your order is empty. Tap <b>+</b> on dishes from ${esc(r.name)}. Minimum order $${MIN_ORDER}.</p>`}
        ${meetsMin
          ? `<a href="#checkout" class="btn primary sm" style="margin-top:12px;width:100%">${ico("bagCheck")} Check out this order — ${money(tot.total)}</a>`
          : `<button class="btn primary sm disabled" style="margin-top:12px;width:100%" onclick="flash('Add at least $${MIN_ORDER} of dishes from ${esc(r.name)} first.')">${ico("bagCheck")} Add more (min $${MIN_ORDER})</button>`}
      </div>
    </div>`;
}
function clearOrder(rid) { ORDERS[rid] = { selected: {}, tier: 100 }; navigate(); }

/* ============================================================================
   CHECKOUT — review weekly box + delivery, then confirm
   ========================================================================== */
function renderCheckout() {
  const active = myOrders(); // restaurantIds with items
  const empty = !active.length;
  let grandTotal = 0;
  const orderBlocks = active.map((rid) => {
    const o = ORDERS[rid];
    const r = RESTAURANTS.find((x) => x.id === rid) || {};
    const tot = orderTotals(rid);
    const items = meals.filter((m) => o.selected[m.id] > 0);
    grandTotal += tot.total;
    const meetsMin = tot.total >= MIN_ORDER;
    const tier = o.tier || 100;
    return `
      <section class="order-card ${meetsMin ? "" : "below-min"}">
        <div class="oc-head"><div class="oc-brand">${esc(r.name || "Kitchen")}</div>
          <span class="oc-plan">$${tier}<span class="tier-sub">/week plan</span></span></div>
        ${items.map((m) => `<div class="billrow"><span>${o.selected[m.id]}× ${esc(m.title)}</span><span class="bold">${money(o.selected[m.id] * m.price)}</span></div>`).join("")}
        <div class="billrow total"><span>${esc(r.name || "Kitchen")} subtotal</span><span class="tb-amt">${money(tot.total)}</span></div>
        <div class="oc-min">${meetsMin ? `<span class="min-ok">${ico("check")} Meets $${MIN_ORDER} minimum</span>` : `<span class="min-warn">Below $${MIN_ORDER} minimum — add more or remove this order</span>`}</div>
        <div class="billrow muted sm"><span>Delivery (single kitchen → you)</span><span class="accent bold">INCLUDED</span></div>
      </section>`;
  }).join("");
  return `
    <div class="consumer-shell">
      <header class="topbar"><a href="#restaurants" class="brand">${ico("arrowLeft")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#restaurants" class="navbtn ghost sm">${ico("store")} Add another kitchen</a></header>
      <section class="build-hero">
        <div class="eyebrow">Checkout · your weekly orders</div><h1>Your week, one order per kitchen.</h1>
        <p>Each order is delivered separately, directly from its kitchen — live-tracked, delivery included.</p></section>
      <section class="checkout-orders" style="max-width:720px;margin:0 auto 16px">
        ${empty ? `<p class="muted">No weekly orders yet. <a href="#restaurants">Pick a kitchen</a> and build your first order.</p>` : orderBlocks}
      </section>
      ${empty ? `<div style="text-align:center;padding:20px"><a href="#restaurants" class="btn primary">${ico("store")} Choose a kitchen</a></div>` : `
      <section class="card block" style="max-width:720px;margin:0 auto 16px">
        <div class="billrow total"><span>All-inclusive weekly total</span><span class="tb-amt">${money(grandTotal)}</span></div>
        <p class="muted sm">Delivery included on every order. Split across ${active.length} ${active.length === 1 ? "kitchen" : "kitchens"} — each delivered separately.</p>
      </section>
      <div style="max-width:720px;margin:0 auto;text-align:center">
        <a href="#dashboard" class="btn primary" style="width:100%">${ico("check")} Confirm all weekly orders — ${money(grandTotal)}</a>
        <button class="btn ghost sm" style="margin-top:10px" onclick="flash('Scheduled for your delivery day. Manage anytime.')">${ico("calendar")} Choose delivery day</button>
      </div>`}
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

/* ============================================================================
   DELIVERY — how your weekly box gets to you (recommendations)
   ========================================================================== */
function renderDelivery() {
  const providers = [
    { name: "Multi-provider dispatch (best-price routing)", rec: "RECOMMENDED", how: "We quote the same drop across several courier networks and pick the lowest cost + best ETA on every order, with automatic failover. No single provider lock-in.", why: "Why: guarantees the cheapest reliable drop per week, never marooned when one courier is unavailable." },
    { name: "Restaurant self-delivery (batched routes)", rec: "LOWEST COST", how: "Partner kitchens with their own driver deliver the whole neighborhood's boxes in one scheduled loop.", why: "Why: a single driver doing 6–12 drops in one trip beats per-order couriers — typically $2–$4/drop." },
    { name: "Scheduled Canadian courier network (e.g. GoFor/Dropoff)", rec: "FOR VOLUME ROUTES", how: "A planned, recurring route provider with Toronto coverage handles bigger weekly volumes.", why: "Why: purpose-built for scheduled/recurring batches — matches our weekly model, negotiable at volume." },
    { name: "White-label courier engines (Uber Direct / DoorDash Drive)", rec: "COVERAGE FALLBACK", how: "Used as the courier only — the order, branding and customer data stay on Supper Club Direct, never on a marketplace.", why: "Why: full GTA coverage when needed, without restaurant commissions or losing the customer." },
    { name: "Pickup & pickup-points", rec: "FREE / ZERO-COST", how: "Pick up at the kitchen, a local café, or a community locker.", why: "Why: $0 delivery, always available, and our default fallback for efficiency." },
  ];
  const rows = providers.map((p) => `<div class="dlv-row">
    <div class="dlv-head"><span class="dlv-name">${ico("truck")} ${esc(p.name)}</span><span class="dlv-rec">${esc(p.rec)}</span></div>
    <div class="dlv-how">${esc(p.how)}</div>
    <div class="dlv-why">${esc(p.why)}</div>
  </div>`).join("");
  return `
    <div class="consumer-shell">
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#" class="navbtn ghost sm">${ico("arrowLeft")} Back</a></header>
      <section class="build-hero">
        <div class="eyebrow">Delivery, handled</div><h1>How your weekly box gets to you</h1>
        <p>Delivery is <b>included</b> — no surprise fees. We optimize the route behind the scenes and you just watch it live-track to your door.</p></section>
      <section class="card block" style="max-width:820px;margin:0 auto 16px">
        <div class="kicker">${ico("box")} Our delivery model</div>
        <div class="billrow"><span>Delivery cost</span><span class="accent bold">INCLUDED</span></div>
        <div class="billrow muted sm"><span>Pickup option</span><span class="accent bold">$0, always available</span></div>
        <div class="billrow muted sm"><span>You choose the courier?</span><span>No — we route for lowest cost + reliability</span></div>
      </section>
      <section class="content-sec" style="max-width:820px;margin:0 auto">
        <div class="kicker">${ico("route")} How we choose the delivery option</div>
        <div class="dlv-board">${rows}</div>
      </section>
      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

/* ============================================================================
   ANIMATED DEMO — self-running feature walkthrough (both sides)
   ========================================================================== */
const DEMO_SCRIPT = [
  { side: "sub", icon: "bolt", title: "1 · Register", text: "One-tap Apple Pay / Google Pay. Your account & address are created automatically — no forms." },
  { side: "sub", icon: "store", title: "2 · Choose a kitchen", text: "Browse 15 vetted restaurants. See live DineSafe status & ratings before you commit." },
  { side: "sub", icon: "box", title: "3 · Build your box", text: "Pick 6 meals, filter by budget/area/diet, and see your all-inclusive total instantly." },
  { side: "sub", icon: "truck", title: "4 · Live delivery", text: "Track your courier live — e.g. Indian Desire on Bloor St all the way to the CN Tower." },
  { side: "owner", icon: "factory", title: "A · Owner: batch orders", text: "One consolidated prep list per kitchen. No chaotic per-order tickets." },
  { side: "owner", icon: "truck", title: "B · Owner: fleet board", text: "See every order out at once — courier, live map, ETA, status." },
  { side: "owner", icon: "wallet", title: "C · Owner: get paid", text: "Flat $500/month. First month free. No commissions. Predictable." },
];
let demoIdx = 0;
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
const buildState = { selected: {}, rest: "all", area: "all", cuisine: "all", diet: "all", budget: "80" };
/* ---- Single-restaurant weekly orders (v11 model) ----
   Each weekly order comes from ONE restaurant. A customer can hold several,
   one per restaurant. Minimum $40/order; weekly tier $100/$200/$300 per restaurant.
   ORDERS[restaurantId] = { selected:{mealId:qty}, tier:100 } */
const ORDERS = {};
const MIN_ORDER = 100;
const WEEKLY_TIERS = [100, 150, 200, 250, 300];
let activeRest = null;
function openRest(rid) { activeRest = rid; if (!ORDERS[rid]) ORDERS[rid] = { selected: {}, tier: 100 }; }
function getOrder(rid) { openRest(rid); return ORDERS[rid]; }
function orderTotals(rid) { const o = ORDERS[rid]; if (!o) return { total: 0, count: 0 }; let t = 0, c = 0; meals.forEach((m) => { const q = o.selected[m.id] || 0; if (q > 0) { t += q * m.price; c += q; } }); return { total: t, count: c }; }
function orderTotal(rid) { return orderTotals(rid).total; }
function setTier(rid, tier) { const o = getOrder(rid); o.tier = tier; o.continue = false; flash(`✓ Weekly order set to $${tier}/week from ${esc(restName(rid))}.`); navigate(); }
function orderAdd(rid, mid, delta) {
  const o = getOrder(rid);
  const q = (o.selected[mid] || 0) + delta;
  if (delta > 0) {
    const m = meals.find((x) => x.id === mid);
    const tier = o.tier || WEEKLY_TIERS[0];
    const tot = orderTotals(rid);
    const addPrice = m ? m.price : 0;
    if (tier && (tot.total + addPrice) > tier && !o.continue) {
      showModal({
        ico: "calendar",
        title: `Weekly order reached — $${tier}`,
        message: `Your order from ${esc(restName(rid))} is at $${tot.total.toFixed(2)}. Adding “${m ? esc(m.title) : "this item"}” brings it to $${(tot.total + addPrice).toFixed(2)}, past your $${tier}/week plan. Do you want to continue or reconsider?`,
        buttons: [
          { label: "Yes, continue", primary: true, action: () => { o.continue = true; doOrderAdd(rid, mid, delta); } },
          { label: "Reconsider items", action: () => askOrderCheckoutOrChange(rid) },
        ],
      });
      return;
    }
  }
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
const budgetState = { continue: false }; // after "yes, keep adding" we stop nagging
function budgetValue() { const v = parseFloat(buildState.budget); return (v && v > 0) ? v : 80; }
function doAdd(id, delta) {
  const q = (buildState.selected[id] || 0) + delta;
  if (q <= 0) delete buildState.selected[id]; else buildState.selected[id] = q;
  navigate();
}
function setQty(id, delta) {
  if (delta > 0) {
    const m = meals.find((x) => x.id === id);
    const budget = budgetValue();
    const tot = buildTotals();
    const addPrice = m ? m.price : 0;
    if (budget && (tot.total + addPrice) > budget && !budgetState.continue) {
      showModal({
        ico: "wallet",
        title: `Weekly budget reached — $${budget}`,
        message: `Your box is at $${tot.total.toFixed(2)}. Adding “${m ? esc(m.title) : "this item"}” brings it to $${(tot.total + addPrice).toFixed(2)}, past your $${budget} budget. Do you want to keep adding?`,
        buttons: [
          { label: "Yes, keep adding", primary: true, action: () => { budgetState.continue = true; doAdd(id, delta); } },
          { label: "No, stop", action: () => askCheckoutOrChange() },
        ],
      });
      return;
    }
  }
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
    if (buildState.cuisine !== "all" && r.cuisine !== buildState.cuisine) return false;
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
  const cuisines = [...new Set(RESTAURANTS.map((r) => r.cuisine))];
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
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a></header>
      <section class="build-hero">
        <div class="eyebrow">My Week. Fully Catered.</div><h1>Build your weekly box. See your total <span class="accent">instantly.</span></h1>
        <p>This is a recurring weekly order — mix veg &amp; non-veg, filter by restaurant/cuisine/diet, or set a weekly budget. We'll warn you when you hit it.</p></section>
      <div class="combo-strip">
        <div class="combo-title">Quick add</div>
        <button class="btn ghost sm" onclick="quickCombo('2+3')">2 non-veg + 3 veg</button>
        <button class="btn ghost sm" onclick="quickCombo('all')">Add all shown</button>
        <span class="muted sm">Tip: set a weekly budget and pick exactly what fits.</span>
      </div>
      <div class="build-grid">
        <div class="filters-panel">
          <div class="kicker">${ico("gear")} Filters</div>
          <div class="frow"><span class="frow-label">Area</span>
            <button class="chip ${buildState.area === "all" ? "on" : ""}" onclick="setBuildFilter('area','all')">All</button>
            <button class="chip ${buildState.area === "nearby" ? "on" : ""}" onclick="setBuildFilter('area','nearby')">Nearby</button>
            <button class="chip ${buildState.area === "further" ? "on" : ""}" onclick="setBuildFilter('area','further')">Further</button></div>
          <div class="frow"><span class="frow-label">Cuisine</span>
            <button class="chip ${buildState.cuisine === "all" ? "on" : ""}" onclick="setBuildFilter('cuisine','all')">All</button>
            ${cuisines.map((c) => `<button class="chip ${buildState.cuisine === c ? "on" : ""}" onclick="setBuildFilter('cuisine','${esc(c)}')">${esc(c)}</button>`).join("")}</div>
          <div class="frow"><span class="frow-label">Diet</span>
            <button class="chip ${buildState.diet === "all" ? "on" : ""}" onclick="setBuildFilter('diet','all')">All</button>
            ${["HIGH_PROTEIN", "VEGETARIAN", "VEGAN", "GLUTEN_FREE", "SPICY"].map((d) => `<button class="chip ${buildState.diet === d ? "on" : ""}" onclick="setBuildFilter('diet','${d}')">${esc(d.replace("_", " ").toLowerCase())}</button>`).join("")}</div>
          <div class="budget-box"><div class="kicker">${ico("wallet")} Weekly budget</div>
            <div class="budget-input"><span>$</span><input type="number" placeholder="e.g. 80" value="${esc(buildState.budget || "")}" oninput="buildState.budget=this.value;document.getElementById('budget-disp').textContent='Box: $'+boxTotal()+' / $'+budgetValue();" onchange="applyBudget()" /><button class="btn primary sm" onclick="applyBudget()">Set budget</button></div>
            <p class="muted sm">We never auto-add meals — you choose what's in your box. This is just your target.</p></div>
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
          <span id="budget-disp" class="yb-budget">Box: $${money(totals.total)} / $${budget}${totals.total > budget ? " · over by $" + money(totals.total - budget) : " · $" + money(Math.max(0, budget - totals.total)) + " left"}</span>
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
let cadence = "weekly";
function deliveryWindowSlot() { return (DELIVERY_WINDOWS.find((w) => w.id === chosenWindow) || DELIVERY_WINDOWS[0]).slot; }
function setDeliveryWindow(id) { chosenWindow = id; flash(`✓ Delivery window set.`); navigate(); }
function setCadence(c) { cadence = c; flash(`✓ Plan set to ${c === "weekly" ? "weekly" : c === "biweekly" ? "every 2 weeks" : "monthly"}.`); navigate(); }
function renderDashboard() {
  const order = { items: 6, total: 78 };
  const items = [1, 2, 3, 4, 5, 6].map((n) => {
    const m = meals[(n * 3) % meals.length];
    const r = mealRestaurant(m);
    return `<div class="card meal"><div class="meal-top"><div>
      <div class="meal-title"><span class="slot">${n}</span> ${esc(m.title)}</div>
      <div class="meal-rest">${ico("chef")} prepared by ${esc(restName(m.restaurantId))}</div>
      <div class="meal-meta">${m.badges.map(badgeHtml).join("")}<span class="chip bg-slate-100 text-slate-600">${m.calories} Cal · ${m.proteinGrams}g</span></div></div>
      <button class="btn ghost sm" onclick="flash('Swap coming in full build')">${ico("swap")} Swap</button></div></div>`;
  }).join("");

  return `
    <div class="mobile">
      <header class="topbar"><a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b></div></a>
        <a href="#partners" class="navbtn link sm">${ico("store")}<span>Restaurant owners</span></a></header>
      <section class="card block">
        <div class="kicker">${ico("truck")} Next delivery</div>
        <div class="h2">${fmtDate(new Date())} · ${deliveryWindowSlot()}</div>
        <div class="muted">${ico("pin")} 120 Bay St, Unit 1402 · Concierge</div>
        <div class="window-pick"><span class="wp-label">${ico("clock")} 2-hour window</span><div class="wp-opts">
          ${DELIVERY_WINDOWS.map((w) => `<button class="wp-opt ${chosenWindow === w.id ? "on" : ""}" onclick="setDeliveryWindow('${w.id}')">${w.label}</button>`).join("")}</div></div>
        <div class="cadence-row"><span class="wp-label">${ico("calendar")} Plan frequency</span><div class="wp-opts">
          <button class="wp-opt ${cadence === "weekly" ? "on" : ""}" onclick="setCadence('weekly')">Weekly</button>
          <button class="wp-opt ${cadence === "biweekly" ? "on" : ""}" onclick="setCadence('biweekly')">Every 2 wks</button>
          <button class="wp-opt ${cadence === "monthly" ? "on" : ""}" onclick="setCadence('monthly')">Monthly</button></div></div>
        <div class="cutoff">${ico("clock")} Pause up to 3 days before · <a href="#track" class="track-link">${ico("truck")} Track</a></div>
      </section>
      <div class="row-between"><div class="h3">Your 6 meals this week</div><div class="accent bold">$78 all-in</div></div>
      <div class="meals">${items}</div>
      <div class="actions">
        <button class="btn ghost col" onclick="flash('✓ Week paused — no charge.')">${ico("pause")}<span>Pause</span></button>
        <button class="btn ghost col" onclick="flash('✓ Switched to pickup.')">${ico("bag")}<span>Pickup</span></button>
        <button class="btn ghost col" onclick="flash('✓ Delivery mode.')">${ico("truck")}<span>Deliver</span></button>
      </div>
      <section class="card block"><div class="kicker">${ico("wallet")} Billing</div>
        <div class="billrow"><span>6 meals × $13/ea</span><span class="bold">$78.00</span></div>
        <div class="billrow"><span>Delivery, fees &amp; taxes</span><span class="accent bold">INCLUDED</span></div></section>
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
        <div class="h2">Your next 4 weeks</div><p class="muted sm">Skip any week up to 3 days before its Sunday 11:59 PM cutoff.</p></section>
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
    ["3", "Get paid", "Flat $500/month. First month free.", "wallet"],
  ].map(([n, t, d, ic]) => `<div class="pstep"><span class="pstep-num">${n}</span><div class="pstep-body"><div class="pstep-t">${ico(ic)} ${t}</div><div class="pstep-d">${d}</div></div></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>for restaurant partners</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn active" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
        <a href="#" class="btn p-outline sm" onclick="ownerLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Get on the GTA's zero-friction meal box</div>
        <h1>Run your kitchen on ${esc(BRAND)}</h1>
        <p>Committed weekly customers, consolidated batch orders, automated vetting, and automatic payouts. You just cook.</p></section>
      <section class="p-steps"><div class="p-label">It's 3 steps to your first payout</div>${steps}</section>
      <section class="pricing-band">
        <div class="pb-item"><span class="pb-num">$500</span><span class="pb-l">/ month</span></div>
        <div class="pb-plus">=</div>
        <div class="pb-item accent"><span class="pb-num">First month</span><span class="pb-l">free</span></div>
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
  const dishRows = [
    { n: 140, title: "Chicken Tikka Masala", rest: "Indian Desire" }, { n: 85, title: "Bulgogi Beef Bowl", rest: "Seoul Food Co." },
    { n: 60, title: "Lemon Herb Salmon", rest: "Sweet Basil" }, { n: 40, title: "Carne Asada Bowl", rest: "Taco Toro" },
  ].map((d) => `<tr><td class="qty">${d.n}x</td><td class="name">${esc(d.title)}</td><td class="p-muted">${esc(d.rest)}</td>
    <td><div class="pack"><div class="bar"><div class="fill" style="width:70%"></div></div><span>${Math.round(d.n * 0.7)}/${d.n} PACKED</span></div></td></tr>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>kitchen portal</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn active" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-table-card">
        <div class="p-table-head"><span class="bold">${ico("pot")} Production Summary</span><span class="p-sum">325 MEALS</span></div>
        <table><thead><tr><th>Qty</th><th>Dish</th><th>Kitchen</th><th>Packing</th></tr></thead><tbody>${dishRows}</tbody></table>
      </section>
      <footer class="p-foot">Kitchen portal — aggregate batch totals, not chaotic order tickets.</footer>
    </div>`;
}

/* PAYOUTS */
function renderPayouts() {
  const rows = [
    ["Flat membership", "$500", "fixed"], ["Total this month", "$500", "total"],
  ].map(([l, v, c]) => `<div class="pay-row"><span>${l}</span><span class="pay-val">${v} ${c === "total" ? `<span class="pay-dir up">▲</span>` : ""}</span></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>partner payouts</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn active" data-nav="payouts">${ico("wallet")} Payouts</a>
          <a href="#auction" class="p-navbtn" data-nav="auction">${ico("gavel")} Auctions</a>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="pay-hero"><div class="pay-hero-label">Your membership fee</div><div class="pay-hero-amt">$500</div>
        <div class="pay-hero-sub">Flat $500/month · first month free · no commission, ever · deposited Thu, Aug 20</div></section>
      <section class="p-table-card"><div class="p-table-head"><span class="bold">${ico("chart")} Fee breakdown</span></div>${rows}</section>
      <footer class="p-foot">Predictable: flat $500/month, first month free. No commission.</footer>
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
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("gear")}<div><b>${esc(BRAND)}</b><span>platform admin · owner only</span></div></div>
        <nav class="p-nav"><a href="#admin" class="p-navbtn active" data-nav="admin">${ico("gear")} Modules</a></nav>
        <a href="#" class="btn p-outline sm" onclick="adminLogout()">${ico("arrowLeft")} Sign out</a></header>
      <section class="p-hero"><div class="eyebrow dark">Module control</div>
        <h1>Enable or disable features</h1>
        <p>Every module is ON by default. Toggle any off to hide it from the app. Changes save instantly and persist.</p></section>
      <section class="admin-board">
        <div class="admin-head">Module</div>
        ${rows}
      </section>
      <footer class="p-foot">Admin panel — control which features are live. Default: all ON.</footer>
    </div>`;
}

/* ---------- boot ---------- */
window.addEventListener("hashchange", navigate);
window.navigate = navigate;
window.getModules = getModules;
window.setModule = setModule;
window.moduleOn = moduleOn;
window.setQty = setQty; window.setBuildFilter = setBuildFilter; window.quickCombo = quickCombo; window.applyBudget = applyBudget; window.buildState = buildState;
window.boxTotal = boxTotal; window.selectedItems = selectedItems; window.clearBox = clearBox;
window.orderAdd = orderAdd; window.setTier = setTier; window.clearOrder = clearOrder; window.ORDERS = ORDERS;
window.setDeliveryWindow = setDeliveryWindow; window.setCadence = setCadence; window.toggleWeek = toggleWeek; window.advanceTrack = advanceTrack; window.TRACK = TRACK;
window.setRestFilter = setRestFilter; window.demoNext = demoNext; window.demoPrev = demoPrev;
window.meals = meals; window.RESTAURANTS = RESTAURANTS;
window.homeSearch = homeSearch;
window.homeFilterType = homeFilterType;
window.closeModal = closeModal;
window.modalAction = modalAction;
window.ownerLogin = ownerLogin;
window.ownerLogout = ownerLogout;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.flash = flash;
if (navigator && navigator.serviceWorker && typeof navigator.serviceWorker.register === "function") { navigator.serviceWorker.register("sw.js").catch(() => {}); }
navigate();
