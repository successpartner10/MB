/* ============================================================================
   SUPPER CLUB DIRECT — curated weekly delivery platform (GTA)
   v5 · Raleway · Apple-clean · retina · SVG icons (no emoji)
   Two products: Subscriber app (light/green) + Partner portal (dark/amber).
   Features: 15 restaurants · build-your-box · 2-hr windows · live tracking
   to CN Tower · fleet board · order cadence (weekly/2-wk/monthly) · live
   DineSafe badges · $200 + 10% pricing · pickup option · animated demo.
   ========================================================================== */

/* ---------- versioning ---------- */
const VERSION = "v5";
const VERSION_LINK = "v4/";
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
// Fleet board — multiple live orders for the owner
const FLEET = [
  { id: "ord-1001", customer: "Aria Chen", addr: "120 Bay St, #1402", rest: "Indian Desire", status: "out", courier: "Marcus", eta: "12 min", progress: 74, from: "Bloor St W", to: "CN Tower area" },
  { id: "ord-1002", customer: "Sam Torres", addr: "45 Front St E", rest: "Kobu", status: "out", courier: "Nadia", eta: "18 min", progress: 62, from: "Financial District", to: "St. Lawrence" },
  { id: "ord-1003", customer: "Priya Nair", addr: "210 Queen St W", rest: "Sweet Basil", status: "packed", courier: "—", eta: "30 min", progress: 45, from: "Harbourfront", to: "Queen West" },
  { id: "ord-1004", customer: "Maya Liu", addr: "720 Yonge St", rest: "Seoul Food Co.", status: "out", courier: "Tom", eta: "22 min", progress: 58, from: "Koreatown", to: "Midtown" },
  { id: "ord-1005", customer: "Jade Kim", addr: "612 Bloor St W", rest: "Bánh Mì Bro", status: "preparing", courier: "—", eta: "40 min", progress: 18, from: "Kensington", to: "Bloor West" },
  { id: "ord-1006", customer: "Dev Patel", addr: "340 Dundas St W", rest: "Green Table", status: "out", courier: "Sofia", eta: "15 min", progress: 70, from: "Leslieville", to: "Chinatown" },
];

/* ============================================================================
   PRICING — $200/month flat + 10% of app order value; first week free
   ========================================================================== */
const PRICING = {
  base: 200,
  orderFeePct: 0.10,
  firstWeekFree: true,
};
function partnerMonthlyFee(monthlyOrderValue) {
  return PRICING.base + Math.round(monthlyOrderValue * PRICING.orderFeePct * 100) / 100;
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

/* ---------- router ---------- */
const routes = {
  "": renderHome, restaurants: renderRestaurants, build: renderBuild, dashboard: renderDashboard,
  schedule: renderSchedule, track: renderTrack, demo: renderDemo,
  partners: renderPartners, kitchen: renderKitchen, fleet: renderFleet, payouts: renderPayouts,
};
function currentRoute() { const h = location.hash.replace(/^#\/?/, "").split("?")[0]; return routes[h] ? h : ""; }
function navigate() {
  const r = currentRoute();
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r));
  const app = document.getElementById("app");
  app.className = (r === "partners" || r === "kitchen" || r === "fleet" || r === "payouts") ? "partner" : "consumer";
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

  const top = RESTAURANTS.slice(0, 6).map((r) => `
    <div class="rest-card ${r.dineSafe !== "unconditional" ? "warn" : ""}">
      <div class="rest-avatar">${esc(r.name[0])}</div>
      <div class="rest-info"><div class="rest-name">${esc(r.name)}</div>
        <div class="rest-meta">${esc(r.cuisine)} · ${esc(r.neighborhood)}</div>
        <div class="rest-trust">${googleHtml(r)} ${dineSafeHtml(r)}</div>
      </div>
    </div>`).join("");

  return `
    <div class="consumer-shell">
      <header class="topbar">
        <a href="#" class="brand">${ico("sparkle")}<div><b>${esc(BRAND)}</b><span class="sub">Curated weekly meals · GTA</span></div></a>
        <nav class="consumer-nav">
          <a href="#build" class="navbtn primary">${ico("plus")}<span>Build your box</span></a>
          <a href="#restaurants" class="navbtn ghost">${ico("store")}<span>Restaurants</span></a>
          <a href="#demo" class="navbtn ghost">${ico("play")}<span>Demo</span></a>
          <a href="#partners" class="navbtn link">${ico("store")}<span>Restaurant owners</span></a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-title">
          <div class="eyebrow">Just 3 things. That's it.</div>
          <h1>Chef-prepared meals.<br/><span class="accent">3 easy steps.</span></h1>
          <p>Register, choose, get delivery — weekly, every two weeks, or monthly. No forms. No surprise fees. Every kitchen shows live DineSafe status &amp; ratings.</p>
          <a href="#demo" class="btn primary" style="margin-top:18px">${ico("play")} Watch the 60-second demo</a>
        </div>
        <div class="steps hero-steps">${steps}</div>
      </section>

      <section class="top-rest">
        <div class="kicker" style="margin:0 0 12px">${ico("store")} Partner kitchens</div>
        <div class="top-grid">${top}</div>
        <a href="#restaurants" class="btn ghost sm" style="margin-top:14px">View all ${RESTAURANTS.length} restaurants ${ico("arrow")}</a>
      </section>

      <section class="for-partners">
        <div class="fp-icon">${ico("store")}</div>
        <div>
          <div class="kicker">Own a kitchen?</div>
          <div class="fp-t">Run your restaurant on ${esc(BRAND)}</div>
          <div class="fp-d">First week free, then $200/mo + 10% of the orders we bring you. No 25% commissions. Ever.</div>
        </div>
        <a href="#partners" class="btn dark">${ico("arrow")}<span>Restaurant owners →</span></a>
      </section>

      <footer class="foot">${versionBadge()}</footer>
    </div>`;
}

/* ============================================================================
   RESTAURANTS (browse 15)
   ========================================================================== */
let restFilter = { cuisine: "all", area: "all", diet: "all" };
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
    return `<div class="rest-full ${r.dineSafe !== "unconditional" ? "warn" : ""}">
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
    </div>`;
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
   ANIMATED DEMO — self-running feature walkthrough (both sides)
   ========================================================================== */
const DEMO_SCRIPT = [
  { side: "sub", icon: "bolt", title: "1 · Register", text: "One-tap Apple Pay / Google Pay. Your account & address are created automatically — no forms." },
  { side: "sub", icon: "store", title: "2 · Choose a kitchen", text: "Browse 15 vetted restaurants. See live DineSafe status & ratings before you commit." },
  { side: "sub", icon: "box", title: "3 · Build your box", text: "Pick 6 meals, filter by budget/area/diet, and see your all-inclusive total instantly." },
  { side: "sub", icon: "truck", title: "4 · Live delivery", text: "Track your courier live — e.g. Indian Desire on Bloor St all the way to the CN Tower." },
  { side: "owner", icon: "factory", title: "A · Owner: batch orders", text: "One consolidated prep list per kitchen. No chaotic per-order tickets." },
  { side: "owner", icon: "truck", title: "B · Owner: fleet board", text: "See every order out at once — courier, live map, ETA, status." },
  { side: "owner", icon: "wallet", title: "C · Owner: get paid", text: "$200/mo + 10% of the orders we bring. First week free. Predictable, no 25% commission." },
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
const buildState = { selected: {}, rest: "all", area: "all", cuisine: "all", diet: "all", budget: "" };
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
function setQty(id, delta) {
  const q = (buildState.selected[id] || 0) + delta;
  if (q <= 0) delete buildState.selected[id]; else buildState.selected[id] = q;
  navigate();
}
function setBuildFilter(field, val) { buildState[field] = val; navigate(); }
function quickCombo(kind) {
  buildState.selected = {};
  if (kind === "2+3") {
    const vegs = meals.filter((m) => m.type === "veg").sort((a, b) => a.price - b.price);
    const meats = meals.filter((m) => m.type === "nonveg").sort((a, b) => a.price - b.price);
    [...meats.slice(0, 2), ...vegs.slice(0, 3)].forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "budget") {
    meals.sort((a, b) => a.price - b.price).slice(0, 6).forEach((m) => (buildState.selected[m.id] = 1));
  } else if (kind === "all") {
    buildMeals().forEach((m) => (buildState.selected[m.id] = 1));
  }
  navigate();
}
function applyBudget() {
  const budget = parseFloat(buildState.budget);
  if (!budget) return;
  buildState.selected = {};
  let spent = 0;
  [...buildMeals()].sort((a, b) => a.price - b.price).forEach((m) => { if (spent + m.price <= budget) { buildState.selected[m.id] = 1; spent += m.price; } });
  navigate();
}
function renderBuild() {
  const cuisines = [...new Set(RESTAURANTS.map((r) => r.cuisine))];
  const totals = buildTotals();
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
        <div class="eyebrow">Build your box</div><h1>Pick your meals. See your total <span class="accent">instantly.</span></h1>
        <p>Mix veg &amp; non-veg, filter by restaurant/area/cuisine/diet, or set a weekly budget.</p></section>
      <div class="combo-strip">
        <div class="combo-title">Quick combos</div>
        <button class="btn ghost sm" onclick="quickCombo('2+3')">2 non-veg + 3 veg</button>
        <button class="btn ghost sm" onclick="quickCombo('budget')">Best value ×6</button>
        <button class="btn ghost sm" onclick="quickCombo('all')">Add all shown</button>
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
            <div class="budget-input"><span>$</span><input type="number" placeholder="e.g. 80" oninput="buildState.budget=this.value" /><button class="btn primary sm" onclick="applyBudget()">What's possible</button></div>
            <p class="muted sm">We pick the best-value mix under your budget.</p></div>
        </div>
        <div class="meals-panel"><div class="meals-count">${list.length} meals shown</div><div class="meal-picks">${rows}</div></div>
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
          <path d="M20 130 L70 90 L130 100 L200 60 L285 25" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="5 5"/>
          <circle cx="20" cy="130" r="6" fill="#f59e0b"/><text x="12" y="146" font-size="10" fill="#64748b">Indian Desire</text>
          <circle cx="285" cy="25" r="6" fill="#0d9488"/><text x="252" y="20" font-size="10" fill="#64748b">CN Tower</text>
          <circle cx="${courierMapX(TRACK.progress)}" cy="${courierMapY(TRACK.progress)}" r="7" fill="#0d9488" stroke="#fff" stroke-width="2"/>
          <text x="${courierMapX(TRACK.progress) - 24}" y="${courierMapY(TRACK.progress) - 12}" font-size="10" fill="#0d9488">${esc(TRACK.courierName)}</text>
        </svg></div>
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
    ["3", "Get paid", "$200/mo + 10% of orders we bring. First week free.", "wallet"],
  ].map(([n, t, d, ic]) => `<div class="pstep"><span class="pstep-num">${n}</span><div class="pstep-body"><div class="pstep-t">${ico(ic)} ${t}</div><div class="pstep-d">${d}</div></div></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>for restaurant partners</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn active" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a></nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-hero"><div class="eyebrow dark">Get on the GTA's zero-friction meal box</div>
        <h1>Run your kitchen on ${esc(BRAND)}</h1>
        <p>Committed weekly customers, consolidated batch orders, automated vetting, and automatic payouts. You just cook.</p></section>
      <section class="p-steps"><div class="p-label">It's 3 steps to your first payout</div>${steps}</section>
      <section class="pricing-band">
        <div class="pb-item"><span class="pb-num">$200</span><span class="pb-l">/ month</span></div>
        <div class="pb-plus">+</div>
        <div class="pb-item"><span class="pb-num">10%</span><span class="pb-l">of app orders</span></div>
        <div class="pb-plus">=</div>
        <div class="pb-item accent"><span class="pb-num">First week</span><span class="pb-l">free</span></div>
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
  const out = FLEET.filter((o) => o.status === "out").length;
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>fleet board</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn active" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a></nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="p-filters">
        <button class="btn p-outline sm">${ico("calendar")} Today ▼</button>
        <button class="btn p-outline sm">${ico("clock")} 5–7 PM ▼</button>
        <span class="fleet-count">${out} orders out · ${FLEET.length} active</span>
      </section>
      <section class="fleet-board">
        <div class="fleet-head"><span>Order</span><span>Customer</span><span>Kitchen</span><span>Status</span><span>Courier</span><span>ETA</span><span>Progress</span></div>
        ${rows}
      </section>
      <footer class="p-foot">Fleet board — track every order out at once.</footer>
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
          <a href="#payouts" class="p-navbtn" data-nav="payouts">${ico("wallet")} Payouts</a></nav>
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
    ["Flat membership", "$200", "fixed"], ["10% of app orders", "$325", "10% of $3,250"], ["Total this month", "$525", "total"],
  ].map(([l, v, c]) => `<div class="pay-row"><span>${l}</span><span class="pay-val">${v} ${c === "total" ? `<span class="pay-dir up">▲</span>` : ""}</span></div>`).join("");
  return `
    <div class="partner-shell">
      <header class="p-topbar"><div class="p-brand">${ico("store")}<div><b>${esc(BRAND)}</b><span>partner payouts</span></div></div>
        <nav class="p-nav"><a href="#partners" class="p-navbtn" data-nav="partners">${ico("home")} Overview</a>
          <a href="#fleet" class="p-navbtn" data-nav="fleet">${ico("truck")} Fleet</a>
          <a href="#kitchen" class="p-navbtn" data-nav="kitchen">${ico("pot")} Kitchen</a>
          <a href="#payouts" class="p-navbtn active" data-nav="payouts">${ico("wallet")} Payouts</a></nav>
        <a href="#" class="btn p-outline sm">${ico("arrowLeft")} Back to eaters</a></header>
      <section class="pay-hero"><div class="pay-hero-label">Your fee this month</div><div class="pay-hero-amt">$525</div>
        <div class="pay-hero-sub">$200 base + 10% of $3,250 in app orders · deposited Thu, Aug 20</div></section>
      <section class="p-table-card"><div class="p-table-head"><span class="bold">${ico("chart")} Fee breakdown</span></div>${rows}</section>
      <footer class="p-foot">Predictable: flat $200 + 10% of the orders we bring. First week free.</footer>
    </div>`;
}

/* ---------- boot ---------- */
window.addEventListener("hashchange", navigate);
window.navigate = navigate;
window.setQty = setQty; window.setBuildFilter = setBuildFilter; window.quickCombo = quickCombo; window.applyBudget = applyBudget; window.buildState = buildState;
window.setDeliveryWindow = setDeliveryWindow; window.setCadence = setCadence; window.toggleWeek = toggleWeek; window.advanceTrack = advanceTrack; window.TRACK = TRACK;
window.setRestFilter = setRestFilter; window.demoNext = demoNext; window.demoPrev = demoPrev;
window.flash = flash;
if (navigator && navigator.serviceWorker && typeof navigator.serviceWorker.register === "function") { navigator.serviceWorker.register("sw.js").catch(() => {}); }
navigate();
