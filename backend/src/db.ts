// ============================================================================
// In-memory data layer that mirrors the Prisma schema (Section 3).
// In production this is replaced by the generated Prisma Client + PostgreSQL.
// Kept as a single source of truth so the whole demo runs without a DB server.
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
  users: [],
  addresses: [],
  subscriptions: [],
  meals: [],
  orders: [],
  packing: {},
  courier: {},
};

export const seedMeals: Meal[] = [
  {
    id: "meal_shawarma_1",
    title: "Grilled Chicken Shawarma Bowl",
    description: "Tandoor-grilled chicken, roasted veg, garlic tahini, basmati rice.",
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
export function ordersFor(userId: string) {
  return db.orders
    .filter((o) => o.userId === userId)
    .sort((a, b) => (a.deliveryDate < b.deliveryDate ? -1 : 1));
}
