// ============================================================================
// SUPPER CLUB DIRECT — v5 full catalog
// 15 restaurants · 128 dishes · 24 sample users · fleet · pricing
// Mirrors the static PWA data so the live API serves the same dataset.
// ============================================================================

import { db, type Restaurant, type Meal, type User, type Address, type Subscription, type Order } from "./db.js";

// ---------- restaurants (15, varied cuisine across Toronto) ----------
export const CATALOG_RESTAURANTS: Restaurant[] = [
  { id: "rest_indian", name: "Indian Desire", cuisine: "Indian", neighborhood: "Bloor St W", postalPrefixes: ["M5R"], dineSafe: "unconditional", google: 4.5, reviews: 520, pickup: true, radius: 8, hygieneRating: 100, healthScore: 100, minWeeklyDishes: 3, description: "North Indian classics. DineSafe Pass (unconditional).", verified: true, isActive: true },
  { id: "rest_oak_ash", name: "Oak & Ash Kitchen", cuisine: "American grill", neighborhood: "Downtown / Bay", postalPrefixes: ["M5J", "M5K"], dineSafe: "unconditional", google: 4.8, reviews: 1284, pickup: true, radius: 6, hygieneRating: 100, healthScore: 100, minWeeklyDishes: 3, description: "Wood-fire grill bowls.", verified: true, isActive: true },
  { id: "rest_sweet_basil", name: "Sweet Basil", cuisine: "Mediterranean", neighborhood: "Harbourfront", postalPrefixes: ["M5V", "M5J"], dineSafe: "unconditional", google: 4.7, reviews: 863, pickup: true, radius: 6, hygieneRating: 98, healthScore: 98, minWeeklyDishes: 3, description: "Mediterranean & plant-forward.", verified: true, isActive: true },
  { id: "rest_kobu", name: "Kobu Noodle & Rice", cuisine: "Japanese", neighborhood: "Financial District", postalPrefixes: ["M5K", "M5H"], dineSafe: "conditional", google: 4.6, reviews: 702, pickup: true, radius: 5, hygieneRating: 91, healthScore: 91, minWeeklyDishes: 3, description: "Noodle & rice bowls. NOTE: currently Conditional pass.", verified: true, isActive: true },
  { id: "rest_casa_emilia", name: "Casa Emilia", cuisine: "Italian", neighborhood: "Little Italy", postalPrefixes: ["M6H"], dineSafe: "unconditional", google: 4.6, reviews: 641, pickup: true, radius: 7, hygieneRating: 99, healthScore: 99, minWeeklyDishes: 3, description: "Italian comfort classics.", verified: true, isActive: true },
  { id: "rest_wok", name: "Wok on Wheels", cuisine: "Chinese", neighborhood: "Chinatown", postalPrefixes: ["M5T"], dineSafe: "unconditional", google: 4.4, reviews: 588, pickup: true, radius: 6, hygieneRating: 96, healthScore: 96, minWeeklyDishes: 3, description: "Wok-fired Chinese favourites.", verified: true, isActive: true },
  { id: "rest_seoul", name: "Seoul Food Co.", cuisine: "Korean", neighborhood: "Koreatown", postalPrefixes: ["M6H"], dineSafe: "unconditional", google: 4.7, reviews: 412, pickup: true, radius: 6, hygieneRating: 97, healthScore: 97, minWeeklyDishes: 3, description: "Korean bowls & BBQ.", verified: true, isActive: true },
  { id: "rest_banhmi", name: "Bánh Mì Bro", cuisine: "Vietnamese", neighborhood: "Kensington", postalPrefixes: ["M5T"], dineSafe: "unconditional", google: 4.6, reviews: 490, pickup: true, radius: 6, hygieneRating: 95, healthScore: 95, minWeeklyDishes: 3, description: "Bánh mì & pho bowls.", verified: true, isActive: true },
  { id: "rest_taco", name: "Taco Toro", cuisine: "Mexican", neighborhood: "Queen West", postalPrefixes: ["M6J"], dineSafe: "unconditional", google: 4.5, reviews: 533, pickup: true, radius: 6, hygieneRating: 96, healthScore: 96, minWeeklyDishes: 3, description: "Mexican bowls & tacos.", verified: true, isActive: true },
  { id: "rest_falafel_mile", name: "The Falafel Mile", cuisine: "Middle Eastern", neighborhood: "Danforth", postalPrefixes: ["M4K"], dineSafe: "unconditional", google: 4.6, reviews: 368, pickup: true, radius: 7, hygieneRating: 97, healthScore: 97, minWeeklyDishes: 3, description: "Middle Eastern mezze & wraps.", verified: true, isActive: true },
  { id: "rest_saffron", name: "Saffron Thali", cuisine: "Punjabi", neighborhood: "Rexdale", postalPrefixes: ["M9W"], dineSafe: "unconditional", google: 4.7, reviews: 298, pickup: true, radius: 9, hygieneRating: 98, healthScore: 98, minWeeklyDishes: 3, description: "Punjabi thali & curry.", verified: true, isActive: true },
  { id: "rest_paris", name: "La Table Parisienne", cuisine: "French", neighborhood: "Yorkville", postalPrefixes: ["M4W"], dineSafe: "unconditional", google: 4.6, reviews: 421, pickup: true, radius: 6, hygieneRating: 99, healthScore: 99, minWeeklyDishes: 3, description: "French bistro classics.", verified: true, isActive: true },
  { id: "rest_fish_fable", name: "Fish & Fable", cuisine: "Seafood", neighborhood: "St. Lawrence", postalPrefixes: ["M5E"], dineSafe: "unconditional", google: 4.7, reviews: 354, pickup: true, radius: 6, hygieneRating: 100, healthScore: 100, minWeeklyDishes: 3, description: "Fresh seafood plates.", verified: true, isActive: true },
  { id: "rest_green_table", name: "Green Table", cuisine: "Vegan / plant", neighborhood: "Leslieville", postalPrefixes: ["M4M"], dineSafe: "unconditional", google: 4.5, reviews: 288, pickup: true, radius: 7, hygieneRating: 97, healthScore: 97, minWeeklyDishes: 3, description: "Plant-forward & vegan bowls.", verified: true, isActive: true },
  { id: "rest_oat_cart", name: "The Oat Cart", cuisine: "Breakfast / bakery", neighborhood: "Liberty Village", postalPrefixes: ["M6K"], dineSafe: "unconditional", google: 4.6, reviews: 342, pickup: true, radius: 6, hygieneRating: 96, healthScore: 96, minWeeklyDishes: 3, description: "Breakfast & bakery.", verified: true, isActive: true },
];

// ---------- dishes (128) — [restaurantId, title, price, type, badges, cal, protein] ----------
const RAW_DISHES: [string, string, number, "veg" | "nonveg", string[], number, number][] = [
  ["rest_indian", "Butter Chicken & Basmati", 13, "nonveg", ["BALANCED"], 610, 38], ["rest_indian", "Chana Masala Bowl", 12, "veg", ["VEGETARIAN"], 480, 16], ["rest_indian", "Paneer Tikka Biryani", 13, "veg", ["VEGETARIAN", "HIGH_PROTEIN"], 590, 26], ["rest_indian", "Lamb Rogan Josh", 14, "nonveg", ["HIGH_PROTEIN"], 640, 42], ["rest_indian", "Aloo Gobi & Rice", 12, "veg", ["VEGETARIAN"], 440, 12], ["rest_indian", "Chicken Korma", 13, "nonveg", ["BALANCED"], 570, 34], ["rest_indian", "Dal Makhani & Naan", 12, "veg", ["VEGETARIAN"], 520, 18], ["rest_indian", "Tandoori Salmon Tikka", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 560, 40], ["rest_indian", "Saag Paneer", 12, "veg", ["VEGETARIAN"], 470, 15],
  ["rest_oak_ash", "Grilled Chicken Shawarma Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 580, 48], ["rest_oak_ash", "Lemon Herb Atlantic Salmon", 14, "nonveg", ["GLUTEN_FREE"], 520, 42], ["rest_oak_ash", "Beef Teriyaki & Jasmine Rice", 13, "nonveg", ["BALANCED"], 610, 40], ["rest_oak_ash", "Chili Lime Steak & Sweet Potato", 14, "nonveg", ["HIGH_PROTEIN"], 640, 52], ["rest_oak_ash", "Turkey Chili & Brown Rice", 12, "nonveg", ["HIGH_PROTEIN"], 470, 36], ["rest_oak_ash", "Smoked Brisket Mac Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 620, 46], ["rest_oak_ash", "Harissa Chicken & Quinoa", 13, "nonveg", ["HIGH_PROTEIN", "GLUTEN_FREE"], 560, 45], ["rest_oak_ash", "Miso-Glazed Chicken Skewers", 13, "nonveg", ["HIGH_PROTEIN"], 540, 43], ["rest_oak_ash", "Roasted Veggie Grain Bowl", 12, "veg", ["VEGETARIAN"], 450, 14], ["rest_oak_ash", "Classic Cobb Salad", 12, "nonveg", ["GLUTEN_FREE"], 430, 32],
  ["rest_sweet_basil", "Mediterranean Falafel Plate", 12, "veg", ["VEGETARIAN"], 480, 18], ["rest_sweet_basil", "Turkish Kofte & Bulgur", 13, "nonveg", ["GLUTEN_FREE"], 520, 38], ["rest_sweet_basil", "Grilled Halloumi & Greens", 13, "veg", ["VEGETARIAN"], 490, 24], ["rest_sweet_basil", "Za'atar Chicken & Couscous", 13, "nonveg", ["BALANCED"], 550, 41], ["rest_sweet_basil", "Roasted Chicken Caesar Bowl", 13, "nonveg", ["BALANCED"], 540, 44], ["rest_sweet_basil", "Hummus & Grilled Veg", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 430, 15], ["rest_sweet_basil", "Shakshuka & Sourdough", 12, "veg", ["VEGETARIAN"], 460, 17], ["rest_sweet_basil", "Lamb Kofta & Tabouleh", 14, "nonveg", ["HIGH_PROTEIN"], 570, 40], ["rest_sweet_basil", "Greek Chicken & Orzo", 13, "nonveg", ["BALANCED"], 560, 39],
  ["rest_kobu", "Beef Teriyaki & Rice", 13, "nonveg", ["BALANCED"], 610, 40], ["rest_kobu", "Spicy Tuna Poke Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 510, 38], ["rest_kobu", "Kung Pao Chicken Bowl", 13, "nonveg", ["BALANCED"], 600, 42], ["rest_kobu", "Veggie Yakisoba", 12, "veg", ["VEGETARIAN"], 470, 20], ["rest_kobu", "Teriyaki Tofu & Rice", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 450, 26], ["rest_kobu", "Salmon Sashimi Bowl", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 540, 44], ["rest_kobu", "Chicken Katsu & Rice", 13, "nonveg", ["HIGH_PROTEIN"], 620, 41], ["rest_kobu", "Miso Ramen", 13, "nonveg", ["BALANCED"], 580, 34], ["rest_kobu", "Shrimp Tempura Udon", 14, "nonveg", ["BALANCED"], 560, 30],
  ["rest_casa_emilia", "Chicken Parmigiana", 13, "nonveg", ["BALANCED"], 640, 42], ["rest_casa_emilia", "Penne Arrabbiata", 12, "veg", ["VEGETARIAN"], 520, 16], ["rest_casa_emilia", "Beef Lasagna", 14, "nonveg", ["HIGH_PROTEIN"], 660, 40], ["rest_casa_emilia", "Grilled Salmon Piccata", 14, "nonveg", ["GLUTEN_FREE"], 540, 44], ["rest_casa_emilia", "Margherita & Arugula", 12, "veg", ["VEGETARIAN"], 480, 18], ["rest_casa_emilia", "Rigatoni Bolognese", 13, "nonveg", ["BALANCED"], 620, 36], ["rest_casa_emilia", "Chicken Milanese", 13, "nonveg", ["HIGH_PROTEIN"], 580, 45], ["rest_casa_emilia", "Wild Mushroom Risotto", 13, "veg", ["VEGETARIAN"], 540, 14], ["rest_casa_emilia", "Pesto Gnocchi", 12, "veg", ["VEGETARIAN"], 510, 13],
  ["rest_wok", "General Tao Chicken", 13, "nonveg", ["BALANCED"], 610, 38], ["rest_wok", "Beef & Broccoli", 13, "nonveg", ["HIGH_PROTEIN"], 580, 40], ["rest_wok", "Kung Pao Shrimp", 14, "nonveg", ["HIGH_PROTEIN"], 560, 34], ["rest_wok", "Szechuan Tofu", 12, "veg", ["VEGETARIAN", "SPICY"], 470, 18], ["rest_wok", "Vegetable Fried Rice", 12, "veg", ["VEGETARIAN"], 520, 15], ["rest_wok", "Sweet & Sour Chicken", 13, "nonveg", ["BALANCED"], 590, 33], ["rest_wok", "Mapo Tofu", 12, "veg", ["VEGETARIAN", "SPICY"], 460, 16], ["rest_wok", "Honey Garlic Pork", 13, "nonveg", ["HIGH_PROTEIN"], 600, 36], ["rest_wok", "Steamed Fish & Greens", 14, "nonveg", ["GLUTEN_FREE"], 490, 39],
  ["rest_seoul", "Bulgogi Beef Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 600, 42], ["rest_seoul", "Bibimbap", 13, "veg", ["VEGETARIAN"], 540, 20], ["rest_seoul", "Spicy Pork (Jeyuk)", 13, "nonveg", ["SPICY", "HIGH_PROTEIN"], 620, 41], ["rest_seoul", "Kimchi Fried Rice", 12, "veg", ["VEGETARIAN", "SPICY"], 510, 15], ["rest_seoul", "Japchae Noodles", 13, "veg", ["VEGETARIAN"], 520, 17], ["rest_seoul", "Tofu Stew (Sundubu)", 12, "veg", ["VEGETARIAN", "SPICY"], 460, 19], ["rest_seoul", "Chicken Bulgogi", 13, "nonveg", ["BALANCED"], 560, 40], ["rest_seoul", "Beef Short Rib (Galbi)", 14, "nonveg", ["HIGH_PROTEIN"], 650, 46],
  ["rest_banhmi", "Grilled Pork Bánh Mì Bowl", 13, "nonveg", ["BALANCED"], 560, 34], ["rest_banhmi", "Lemongrass Chicken", 13, "nonveg", ["HIGH_PROTEIN"], 540, 40], ["rest_banhmi", "Pho (Beef)", 13, "nonveg", ["GLUTEN_FREE"], 520, 36], ["rest_banhmi", "Tofu Rice Noodle Bowl", 12, "veg", ["VEGETARIAN"], 470, 18], ["rest_banhmi", "Shrimp Spring Rolls & Rice", 14, "nonveg", ["GLUTEN_FREE"], 500, 32], ["rest_banhmi", "Veggie Bánh Mì Bowl", 12, "veg", ["VEGETARIAN"], 450, 14], ["rest_banhmi", "Beef Pho (Brisket)", 14, "nonveg", ["GLUTEN_FREE"], 550, 40], ["rest_banhmi", "Coconut Curry Tofu", 12, "veg", ["VEGETARIAN"], 490, 16],
  ["rest_taco", "Carne Asada Bowl", 13, "nonveg", ["HIGH_PROTEIN"], 600, 42], ["rest_taco", "Chicken Tinga Burrito", 13, "nonveg", ["BALANCED"], 620, 38], ["rest_taco", "Veggie Fajita Bowl", 12, "veg", ["VEGETARIAN"], 480, 15], ["rest_taco", "Al Pastor Tacos & Rice", 13, "nonveg", ["BALANCED"], 580, 34], ["rest_taco", "Chipotle Shrimp Bowl", 14, "nonveg", ["SPICY", "GLUTEN_FREE"], 560, 38], ["rest_taco", "Black Bean Tostada", 12, "veg", ["VEGETARIAN"], 440, 14], ["rest_taco", "Barbacoa Beef Bowl", 14, "nonveg", ["HIGH_PROTEIN"], 640, 45], ["rest_taco", "Quesadilla & Pico", 12, "veg", ["VEGETARIAN"], 520, 20],
  ["rest_falafel_mile", "Falafel Plate", 12, "veg", ["VEGETARIAN"], 480, 18], ["rest_falafel_mile", "Chicken Shawarma", 13, "nonveg", ["HIGH_PROTEIN"], 560, 42], ["rest_falafel_mile", "Lamb Kebab & Rice", 14, "nonveg", ["HIGH_PROTEIN"], 620, 44], ["rest_falafel_mile", "Halloumi & Hummus", 13, "veg", ["VEGETARIAN"], 490, 20], ["rest_falafel_mile", "Grilled Kofta & Tabbouleh", 13, "nonveg", ["GLUTEN_FREE"], 540, 38], ["rest_falafel_mile", "Vegetarian Mezze Bowl", 12, "veg", ["VEGETARIAN"], 450, 14], ["rest_falafel_mile", "Beef Kebab Wrap", 13, "nonveg", ["BALANCED"], 570, 36], ["rest_falafel_mile", "Shakshuka Bowl", 12, "veg", ["VEGETARIAN"], 460, 16],
  ["rest_saffron", "Chicken Tikka Masala", 13, "nonveg", ["BALANCED"], 600, 38], ["rest_saffron", "Daal & Rice Thali", 12, "veg", ["VEGETARIAN"], 520, 18], ["rest_saffron", "Lamb Karahi", 14, "nonveg", ["HIGH_PROTEIN"], 640, 44], ["rest_saffron", "Chana & Spinach Bowl", 12, "veg", ["VEGETARIAN"], 470, 15], ["rest_saffron", "Butter Paneer", 13, "veg", ["VEGETARIAN"], 560, 20], ["rest_saffron", "Chicken Biryani", 13, "nonveg", ["BALANCED"], 590, 36], ["rest_saffron", "Baingan Bharta", 12, "veg", ["VEGETARIAN", "GLUTEN_FREE"], 450, 12], ["rest_saffron", "Fish Curry & Rice", 14, "nonveg", ["GLUTEN_FREE"], 550, 38], ["rest_saffron", "Punjabi Kadhi", 12, "veg", ["VEGETARIAN"], 500, 15],
  ["rest_paris", "Coq au Vin", 14, "nonveg", ["HIGH_PROTEIN"], 580, 42], ["rest_paris", "Ratatouille & Quinoa", 13, "veg", ["VEGETARIAN"], 460, 13], ["rest_paris", "Steak Frites", 14, "nonveg", ["HIGH_PROTEIN"], 660, 48], ["rest_paris", "Salmon à la Meunière", 14, "nonveg", ["GLUTEN_FREE"], 540, 44], ["rest_paris", "Croque Monsieur", 12, "nonveg", ["BALANCED"], 520, 26], ["rest_paris", "Vegetable Tartine", 12, "veg", ["VEGETARIAN"], 440, 12], ["rest_paris", "Chicken Provençal", 13, "nonveg", ["BALANCED"], 560, 40], ["rest_paris", "French Onion Soup & Bread", 12, "veg", ["VEGETARIAN"], 420, 14],
  ["rest_fish_fable", "Grilled Atlantic Salmon", 14, "nonveg", ["GLUTEN_FREE", "HIGH_PROTEIN"], 520, 44], ["rest_fish_fable", "Fish & Chips (Air-fried)", 13, "nonveg", ["BALANCED"], 580, 32], ["rest_fish_fable", "Shrimp & Grits", 14, "nonveg", ["HIGH_PROTEIN"], 600, 40], ["rest_fish_fable", "Seared Halibut", 14, "nonveg", ["GLUTEN_FREE"], 490, 46], ["rest_fish_fable", "Tuna Niçoise", 13, "nonveg", ["GLUTEN_FREE"], 460, 38], ["rest_fish_fable", "Veggie Paella", 12, "veg", ["VEGETARIAN"], 480, 14], ["rest_fish_fable", "Crab Cake & Slaw", 14, "nonveg", ["GLUTEN_FREE"], 540, 36], ["rest_fish_fable", "Calamari & Rice", 13, "nonveg", ["BALANCED"], 520, 30],
  ["rest_green_table", "Buddha Bowl", 12, "veg", ["VEGAN"], 470, 16], ["rest_green_table", "Cauliflower Buffalo Wrap", 12, "veg", ["VEGAN"], 460, 13], ["rest_green_table", "Jackfruit Tacos", 12, "veg", ["VEGAN"], 450, 12], ["rest_green_table", "Green Curry Tofu", 13, "veg", ["VEGAN"], 480, 18], ["rest_green_table", "Mushroom & Walnut Bolognese", 13, "veg", ["VEGAN"], 520, 20], ["rest_green_table", "Rainbow Salad & Tahini", 11, "veg", ["VEGAN", "GLUTEN_FREE"], 420, 11], ["rest_green_table", "Chickpea Shawarma Wrap", 12, "veg", ["VEGAN"], 480, 17], ["rest_green_table", "Lentil Shepherd's Pie", 13, "veg", ["VEGAN"], 510, 19],
  ["rest_oat_cart", "Overnight Oats & Berries", 9, "veg", ["VEGETARIAN"], 380, 14], ["rest_oat_cart", "Egg & Avocado Toast", 11, "veg", ["BALANCED"], 440, 18], ["rest_oat_cart", "Breakfast Burrito", 12, "nonveg", ["HIGH_PROTEIN"], 540, 30], ["rest_oat_cart", "Acai Bowl", 11, "veg", ["VEGAN"], 390, 8], ["rest_oat_cart", "Turkey & Egg Sandwich", 12, "nonveg", ["HIGH_PROTEIN"], 500, 32], ["rest_oat_cart", "Greek Yogurt Parfait", 9, "veg", ["VEGETARIAN"], 340, 18], ["rest_oat_cart", "Smoked Salmon Toast", 13, "nonveg", ["GLUTEN_FREE"], 420, 26], ["rest_oat_cart", "Garden Veggie Wrap", 10, "veg", ["VEGAN"], 410, 13],
];

// ---------- users (24) ----------
const RAW_USERS: [string, string, string, string, string[]][] = [
  ["u1", "Aria Chen", "120 Bay St, Unit 1402", "M5J 2R8", ["HIGH_PROTEIN"]], ["u2", "Marcus Lee", "88 King St W, #805", "M5V 3R2", []],
  ["u3", "Priya Nair", "210 Queen St W, #12", "M5V 1Z3", ["VEGETARIAN"]], ["u4", "Sam Torres", "45 Front St E, Apt 3", "M5E 1B3", ["GLUTEN_FREE"]],
  ["u5", "Jade Kim", "612 Bloor St W", "M6G 1K8", ["SPICY"]], ["u6", "Dev Patel", "340 Dundas St W", "M5T 1G5", ["VEGAN"]],
  ["u7", "Elena Rossi", "101 College St, #22", "M5T 1P8", []], ["u8", "Maya Liu", "720 Yonge St, #1404", "M4Y 2B3", ["HIGH_PROTEIN"]],
  ["u9", "Omar Haddad", "53 Danforth Ave", "M4K 1N1", []], ["u10", "Nina Desai", "19 Yorkville Ave", "M4W 1L1", ["VEGETARIAN"]],
  ["u11", "Liam Chen", "77 Front St W, #1802", "M5J 2S2", ["GLUTEN_FREE"]], ["u12", "Zoe Martin", "410 King St W, #9", "M5V 1K2", []],
  ["u13", "Kai Nakamura", "25 Scott St, #410", "M5E 1A1", ["HIGH_PROTEIN"]], ["u14", "Ava Thompson", "500 Queen St E", "M5A 1V1", ["VEGAN"]],
  ["u15", "Leo Garcia", "160 John St, #701", "M5V 2E5", []], ["u16", "Sara Ali", "220 King St E", "M5A 1J7", ["SPICY"]],
  ["u17", "Noah Kim", "88 Spadina Ave, #1601", "M5V 2J2", ["GLUTEN_FREE"]], ["u18", "Emma Wilson", "33 Bay St, #905", "M5J 2Z1", []],
  ["u19", "Ravi Kumar", "10 Dockside Dr", "M5A 0B6", ["VEGETARIAN"]], ["u20", "Chloe Brown", "45 Adelaide St W, #12", "M5H 1P4", ["HIGH_PROTEIN"]],
  ["u21", "Ethan Ross", "700 King St W, #3001", "M5V 2Y6", []], ["u22", "Mia Johansson", "220 Yonge St, #800", "M5B 2H1", ["VEGAN"]],
  ["u23", "Ryan Walsh", "14 Bathurst St", "M5T 2S6", ["SPICY"]], ["u24", "Aisha Bello", "3 Bremner Blvd, #2201", "M5J 0A6", []],
];

// ---------- fleet (live orders) ----------
export const FLEET = [
  { id: "ord-1001", customer: "Aria Chen", addr: "120 Bay St, #1402", rest: "Indian Desire", status: "OUT_FOR_DELIVERY", courier: "Marcus", etaMin: 12, progress: 74, from: "Bloor St W", to: "CN Tower area" },
  { id: "ord-1002", customer: "Sam Torres", addr: "45 Front St E", rest: "Kobu", status: "OUT_FOR_DELIVERY", courier: "Nadia", etaMin: 18, progress: 62, from: "Financial District", to: "St. Lawrence" },
  { id: "ord-1003", customer: "Priya Nair", addr: "210 Queen St W", rest: "Sweet Basil", status: "PACKED", courier: "—", etaMin: 30, progress: 45, from: "Harbourfront", to: "Queen West" },
  { id: "ord-1004", customer: "Maya Liu", addr: "720 Yonge St", rest: "Seoul Food Co.", status: "OUT_FOR_DELIVERY", courier: "Tom", etaMin: 22, progress: 58, from: "Koreatown", to: "Midtown" },
  { id: "ord-1005", customer: "Jade Kim", addr: "612 Bloor St W", rest: "Bánh Mì Bro", status: "PREPARING", courier: "—", etaMin: 40, progress: 18, from: "Kensington", to: "Bloor West" },
  { id: "ord-1006", customer: "Dev Patel", addr: "340 Dundas St W", rest: "Green Table", status: "OUT_FOR_DELIVERY", courier: "Sofia", etaMin: 15, progress: 70, from: "Leslieville", to: "Chinatown" },
];

// ---------- pricing ----------
export const PRICING = { base: 200, orderFeePct: 0.10, firstWeekFree: true };
export function partnerMonthlyFee(monthlyOrderValue: number): number {
  return PRICING.base + Math.round(monthlyOrderValue * PRICING.orderFeePct * 100) / 100;
}

// ---------- seed function ----------
export function seedCatalog() {
  // restaurants (additive; keep existing)
  for (const r of CATALOG_RESTAURANTS) {
    if (!db.restaurants.find((x) => x.id === r.id)) {
      db.restaurants.push({
        id: r.id, name: r.name, cuisine: r.cuisine, neighborhood: r.neighborhood,
        postalPrefixes: r.postalPrefixes ?? [], isActive: r.isActive ?? true,
        hygieneRating: r.hygieneRating ?? 95, healthScore: r.healthScore ?? 95,
        description: r.description ?? "", minWeeklyDishes: r.minWeeklyDishes ?? 3, verified: r.verified ?? true,
        dineSafe: r.dineSafe ?? "unconditional", google: r.google ?? 4.5,
        reviews: r.reviews ?? 0, pickup: r.pickup ?? true, radius: r.radius ?? 6,
      });
    }
  }
  // dishes
  RAW_DISHES.forEach(([rid, title, price, type, badges, cal, protein], i) => {
    const id = `dsh_${rid}_${i}`;
    if (!db.meals.find((m) => m.id === id)) {
      db.meals.push({
        id, title, description: "", restaurantId: rid, price, type, calories: cal, proteinGrams: protein,
        carbsGrams: Math.round(cal * 0.1), fatGrams: Math.round((cal - protein * 4) / 9),
        badges, isActive: true,
      });
    }
  });
  // users + addresses
  RAW_USERS.forEach(([id, name, addr, postal, badges], i) => {
    if (!db.users.find((u) => u.id === id)) {
      db.users.push({ id, phone: `+1416${String(2000000 + i).padStart(7, "0")}`, fullName: name, dietaryBadges: badges, dropoffPreference: "CONCIERGE", createdAt: new Date().toISOString() });
      const unitMatch = addr.match(/#([^,]*)/);
      db.addresses.push({ id: `addr_${id}`, userId: id, street: addr.split(",")[0], unit: unitMatch ? unitMatch[1].trim() : undefined, city: "Toronto", province: "ON", postalCode: postal });
    }
  });
}
