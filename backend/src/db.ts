// ============================================================================
// In-memory data layer that mirrors the Prisma schema (Section 3).
// In production this is replaced by the generated Prisma Client + PostgreSQL.
//
// MULTI-RESTAURANT MODEL:
//  - The subscriber gets ONE curated box, ONE order, ONE delivery.
//  - Meals inside that box are prepared by DIFFERENT partner restaurants.
//  - Each partner kitchen sees ONLY its own consolidated production sheet.
// ============================================================================

import type { PlanTier, TierPrice } from "./lib/pricing.js";

export type DeliveryDay =
  | "SUNDAY_AM"
  | "SUNDAY_PM"
  | "TUESDAY_AM"
  | "TUESDAY_PM";
export type DropoffPreference = "CONCIERGE" | "UNIT_DOOR" | "FRONT_PORCH";
export type OrderStatus =
  | "SCHEDULED"
  | "PREPARING"
  | "PACKED"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "SKIPPED";

/** How a subscriber's weekly box is built. */
export type BoxMode = "SINGLE_RESTAURANT" | "MIXED";

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  neighborhood: string;
  postalPrefixes: string[]; // delivery zones this kitchen serves
  isActive: boolean;
  // ---- trust profile ----
  hygieneRating: number; // e.g. 4.8 / 5
  healthScore: number; // 0-100 (Toronto DineSafe-equivalent proxy)
  description: string;
  /** Minimum distinct weekly dishes a kitchen must offer to serve a box plan.
   *  A kitchen must have >= this many active menu items to be eligible. */
  minWeeklyDishes: number;
  verified: boolean;
  // ---- v5 trust / fulfillment ----
  dineSafe: "unconditional" | "conditional"; // live inspection status
  google: number; // Google rating (>=3.5 floor)
  reviews: number; // Google review count
  pickup: boolean; // offers pickup option
  radius: number; // delivery radius km
}

export interface Address {
  id: string;
  userId: string;
  street: string;
  unit?: string;
  city: string;
  province: string;
  postalCode: string;
  buzzerCode?: string;
  instructions?: string;
}

export interface User {
  id: string;
  phone: string;
  email?: string;
  fullName: string;
  stripeCustomerId?: string;
  dietaryBadges: string[];
  dropoffPreference: DropoffPreference;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planTier: PlanTier;
  deliveryDay: DeliveryDay;
  isPaused: boolean;
  /** How the box is built: all meals from one kitchen, or curated variety. */
  boxMode: BoxMode;
  /** Required when boxMode === SINGLE_RESTAURANT. */
  preferredRestaurantId?: string;
  /** v5: weekly | biweekly | monthly */
  cadence: "weekly" | "biweekly" | "monthly";
  stripeSubscriptionId?: string;
  currentPeriodEnd: string;
}

export interface Meal {
  id: string;
  title: string;
  description: string;
  restaurantId: string; // which partner kitchen prepares it
  price: number; // all-inclusive per-meal price CAD
  type: "veg" | "nonveg";
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  badges: string[];
  isActive: boolean;
}

export interface OrderItem {
  id: string;
  mealId: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  deliveryDate: string;
  status: OrderStatus;
  totalAmount: number;
  items: OrderItem[];
  cutoffAt: string;
}

interface DB {
  restaurants: Restaurant[];
  users: User[];
  addresses: Address[];
  subscriptions: Subscription[];
  meals: Meal[];
  orders: Order[];
  // kitchen batch packing state: mealId -> packed count for the current date
  packing: Record<string, number>;
  // per-route courier state for the current date
  courier: Record<string, number>;
}

export const db: DB = {
  restaurants: [],
  users: [],
  addresses: [],
  subscriptions: [],
  meals: [],
  orders: [],
  packing: {},
  courier: {},
};

// ---- partner restaurants ----
// (The full 15-restaurant v5 catalog lives in catalog.ts via seedCatalog().
//  These 3 seed restaurants keep the original demo/Aria flow working.)
export const seedRestaurants: Restaurant[] = [
  {
    id: "rest_oak_ash",
    name: "Oak & Ash Kitchen",
    cuisine: "American grill",
    neighborhood: "Downtown / Bay",
    postalPrefixes: ["M5J", "M5K"],
    isActive: true,
    hygieneRating: 4.8,
    healthScore: 100,
    description: "Wood-fire grill and protein-forward bowls. Verified by Toronto DineSafe.",
    minWeeklyDishes: 3,
    verified: true,
    dineSafe: "unconditional",
    google: 4.8,
    reviews: 1284,
    pickup: true,
    radius: 6,
  },
  {
    id: "rest_sweet_basil",
    name: "Sweet Basil",
    cuisine: "Mediterranean",
    neighborhood: "Harbourfront",
    postalPrefixes: ["M5V", "M5J"],
    isActive: true,
    hygieneRating: 4.7,
    healthScore: 98,
    description: "Mediterranean and plant-forward plates. DineSafe pass (98).",
    minWeeklyDishes: 3,
    verified: true,
    dineSafe: "unconditional",
    google: 4.7,
    reviews: 863,
    pickup: true,
    radius: 6,
  },
  {
    id: "rest_kobu",
    name: "Kobu Noodle & Rice",
    cuisine: "Japanese",
    neighborhood: "Financial District",
    postalPrefixes: ["M5K", "M5H"],
    isActive: true,
    hygieneRating: 4.6,
    healthScore: 91,
    description: "Noodle and rice bowls. NOTE: currently Conditional DineSafe pass.",
    minWeeklyDishes: 3,
    verified: true,
    dineSafe: "conditional",
    google: 4.6,
    reviews: 702,
    pickup: true,
    radius: 5,
  },
];

// Legacy 18 meals (price/type are filled by seed.ts via SEED_PRICE defaults).
export const seedMeals: Omit<Meal, "price" | "type">[] = [
  {
    id: "meal_shawarma_1",
    title: "Grilled Chicken Shawarma Bowl",
    description: "Tandoor-grilled chicken, roasted veg, garlic tahini, basmati rice.",
    restaurantId: "rest_oak_ash",
    calories: 580,
    proteinGrams: 48,
    carbsGrams: 54,
    fatGrams: 16,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_salmon_2",
    title: "Lemon Herb Atlantic Salmon",
    description: "BC-farmed salmon, lemon herb butter, charred greens, farro.",
    restaurantId: "rest_sweet_basil",
    calories: 520,
    proteinGrams: 42,
    carbsGrams: 30,
    fatGrams: 24,
    badges: ["GLUTEN_FREE"],
    isActive: true,
  },
  {
    id: "meal_teriyaki_3",
    title: "Beef Teriyaki & Jasmine Rice",
    description: "Glazed strip loin, tender broccoli, fragrant jasmine rice.",
    restaurantId: "rest_kobu",
    calories: 610,
    proteinGrams: 40,
    carbsGrams: 66,
    fatGrams: 18,
    badges: ["BALANCED"],
    isActive: true,
  },
  {
    id: "meal_falafel_4",
    title: "Mediterranean Falafel Plate",
    description: "Crispy chickpea falafel, tzatziki, tabbouleh, warm pita.",
    restaurantId: "rest_sweet_basil",
    calories: 480,
    proteinGrams: 18,
    carbsGrams: 52,
    fatGrams: 22,
    badges: ["VEGETARIAN"],
    isActive: true,
  },
  {
    id: "meal_steak_5",
    title: "Chili Lime Steak & Sweet Potato",
    description: "Flank steak, chili-lime glaze, roasted sweet potato, slaw.",
    restaurantId: "rest_oak_ash",
    calories: 640,
    proteinGrams: 52,
    carbsGrams: 44,
    fatGrams: 26,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_padthai_6",
    title: "Shrimp Pad Thai",
    description: "Rice noodles, tiger shrimp, tamarind sauce, crushed peanuts.",
    restaurantId: "rest_kobu",
    calories: 590,
    proteinGrams: 33,
    carbsGrams: 72,
    fatGrams: 18,
    badges: ["GLUTEN_FREE"],
    isActive: true,
  },
  {
    id: "meal_caesar_7",
    title: "Roasted Chicken Caesar Bowl",
    description: "Crispy chicken, romaine, parmesan, sourdough croutons.",
    restaurantId: "rest_sweet_basil",
    calories: 540,
    proteinGrams: 44,
    carbsGrams: 38,
    fatGrams: 24,
    badges: ["BALANCED"],
    isActive: true,
  },
  {
    id: "meal_chili_8",
    title: "Turkey Chili & Brown Rice",
    description: "Slow-cooked turkey chili, cheddar, brown rice, pickled jalapeno.",
    restaurantId: "rest_oak_ash",
    calories: 470,
    proteinGrams: 36,
    carbsGrams: 48,
    fatGrams: 12,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_brisket_9",
    title: "Smoked Brisket Mac Bowl",
    description: "Slow-smoked brisket, creamy mac, charred corn, BBQ glaze.",
    restaurantId: "rest_oak_ash",
    calories: 620,
    proteinGrams: 46,
    carbsGrams: 58,
    fatGrams: 22,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_harissa_10",
    title: "Harissa Chicken & Quinoa",
    description: "Harissa-roasted chicken, fluffy quinoa, roasted carrots, tahini.",
    restaurantId: "rest_oak_ash",
    calories: 560,
    proteinGrams: 45,
    carbsGrams: 46,
    fatGrams: 18,
    badges: ["HIGH_PROTEIN", "GLUTEN_FREE"],
    isActive: true,
  },
  {
    id: "meal_skewer_11",
    title: "Miso-Glazed Chicken Skewers",
    description: "Charred chicken skewers, miso glaze, sesame slaw, jasmine rice.",
    restaurantId: "rest_oak_ash",
    calories: 540,
    proteinGrams: 43,
    carbsGrams: 44,
    fatGrams: 16,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_kofte_12",
    title: "Turkish Kofte & Bulgur",
    description: "Herb-spiced kofte, cracked bulgur, yogurt-tahini, cucumber salad.",
    restaurantId: "rest_sweet_basil",
    calories: 520,
    proteinGrams: 38,
    carbsGrams: 46,
    fatGrams: 20,
    badges: ["GLUTEN_FREE"],
    isActive: true,
  },
  {
    id: "meal_halloumi_13",
    title: "Grilled Halloumi & Greens",
    description: "Seared halloumi, roasted squash, farro, lemon-herb vinaigrette.",
    restaurantId: "rest_sweet_basil",
    calories: 490,
    proteinGrams: 24,
    carbsGrams: 42,
    fatGrams: 24,
    badges: ["VEGETARIAN"],
    isActive: true,
  },
  {
    id: "meal_zaatar_14",
    title: "Za'atar Chicken & Couscous",
    description: "Za'atar-crusted chicken, pearl couscous, minted tomato salad.",
    restaurantId: "rest_sweet_basil",
    calories: 550,
    proteinGrams: 41,
    carbsGrams: 50,
    fatGrams: 18,
    badges: ["BALANCED"],
    isActive: true,
  },
  {
    id: "meal_tunapoke_15",
    title: "Spicy Tuna Poke Bowl",
    description: "Ahi tuna, spicy mayo, sushi rice, avocado, pickled ginger.",
    restaurantId: "rest_kobu",
    calories: 510,
    proteinGrams: 38,
    carbsGrams: 52,
    fatGrams: 16,
    badges: ["HIGH_PROTEIN"],
    isActive: true,
  },
  {
    id: "meal_kungpao_16",
    title: "Kung Pao Chicken Bowl",
    description: "Wok-fried chicken, roasted peanuts, bell pepper, jasmine rice.",
    restaurantId: "rest_kobu",
    calories: 600,
    proteinGrams: 42,
    carbsGrams: 58,
    fatGrams: 20,
    badges: ["BALANCED"],
    isActive: true,
  },
  {
    id: "meal_yakisoba_17",
    title: "Veggie Yakisoba",
    description: "Stir-fried noodles, cabbage, carrot, scallion, yakisoba sauce.",
    restaurantId: "rest_kobu",
    calories: 470,
    proteinGrams: 20,
    carbsGrams: 70,
    fatGrams: 14,
    badges: ["VEGETARIAN"],
    isActive: true,
  },
  {
    id: "meal_teriyakitofu_18",
    title: "Teriyaki Tofu & Rice",
    description: "Crispy tofu, teriyaki glaze, steamed greens, brown rice.",
    restaurantId: "rest_kobu",
    calories: 450,
    proteinGrams: 26,
    carbsGrams: 54,
    fatGrams: 14,
    badges: ["VEGETARIAN", "GLUTEN_FREE"],
    isActive: true,
  },
];

export const uid = (prefix = "id") =>
  `${prefix}_${Math.random().toString(36).slice(2, 10)}`;

export function findMeal(id: string) {
  return db.meals.find((m) => m.id === id);
}
export function findUser(id: string) {
  return db.users.find((u) => u.id === id);
}
export function findAddress(userId: string) {
  return db.addresses.find((a) => a.userId === userId);
}
export function findSubscription(userId: string) {
  return db.subscriptions.find((s) => s.userId === userId);
}
export function findRestaurant(id: string) {
  return db.restaurants.find((r) => r.id === id);
}
export function restaurantForMeal(mealId: string) {
  const m = findMeal(mealId);
  return m ? findRestaurant(m.restaurantId) : undefined;
}

/** Count of a kitchen's active menu items (distinct dishes it can cook). */
export function activeMenuCount(restaurantId: string): number {
  return db.meals.filter((m) => m.isActive && m.restaurantId === restaurantId).length;
}

/** Trust summary surfaced to the subscriber when choosing a kitchen. */
export function restaurantTrustSummary(r: Restaurant) {
  return {
    id: r.id,
    name: r.name,
    cuisine: r.cuisine,
    neighborhood: r.neighborhood,
    hygieneRating: r.hygieneRating,
    healthScore: r.healthScore,
    verified: r.verified,
    description: r.description,
    minWeeklyDishes: r.minWeeklyDishes,
    menuCount: activeMenuCount(r.id),
    dineSafe: r.dineSafe ?? "unconditional",
    google: r.google ?? 4.5,
    reviews: r.reviews ?? 0,
    pickup: r.pickup ?? true,
    radius: r.radius ?? 6,
  };
}
export function ordersFor(userId: string) {
  return db.orders
    .filter((o) => o.userId === userId)
    .sort((a, b) => (a.deliveryDate < b.deliveryDate ? -1 : 1));
}

/**
 * Build a FULL box of exactly `count` meals.
 * - restaurantId given → only that kitchen's menu (restaurant-first mode).
 * - Ranked by dietary-badge match, then protein.
 * - If the eligible menu has fewer items than the box size, items cycle so the
 *   box is never partially empty (a subscriber always gets a complete week).
 */
export function selectBoxMeals(
  count: number,
  badges: string[],
  restaurantId?: string
): string[] {
  let menu = db.meals.filter((m) => m.isActive);
  if (restaurantId) menu = menu.filter((m) => m.restaurantId === restaurantId);
  if (menu.length === 0) return [];

  const scored = [...menu].sort((a, b) => {
    const sa = a.badges.filter((x) => badges.includes(x)).length;
    const sb = b.badges.filter((x) => badges.includes(x)).length;
    return sb - sa || b.proteinGrams - a.proteinGrams;
  });

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(scored[i % scored.length].id);
  }
  return result;
}
