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

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  neighborhood: string;
  postalPrefixes: string[]; // delivery zones this kitchen serves
  isActive: boolean;
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
  stripeSubscriptionId?: string;
  currentPeriodEnd: string;
}

export interface Meal {
  id: string;
  title: string;
  description: string;
  restaurantId: string; // which partner kitchen prepares it
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
export const seedRestaurants: Restaurant[] = [
  {
    id: "rest_oak_ash",
    name: "Oak & Ash Kitchen",
    cuisine: "Grill & bowls",
    neighborhood: "Downtown / Bay",
    postalPrefixes: ["M5J", "M5K"],
    isActive: true,
  },
  {
    id: "rest_sweet_basil",
    name: "Sweet Basil",
    cuisine: "Mediterranean & veg",
    neighborhood: "Harbourfront",
    postalPrefixes: ["M5V", "M5J"],
    isActive: true,
  },
  {
    id: "rest_kobu",
    name: "Kobu Noodle & Rice",
    cuisine: "Asian bowls",
    neighborhood: "Financial District",
    postalPrefixes: ["M5K", "M5H"],
    isActive: true,
  },
];

export const seedMeals: Meal[] = [
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
export function ordersFor(userId: string) {
  return db.orders
    .filter((o) => o.userId === userId)
    .sort((a, b) => (a.deliveryDate < b.deliveryDate ? -1 : 1));
}
