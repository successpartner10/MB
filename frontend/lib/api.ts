// Thin typed client for the Minimal Bites API. All requests hit relative
// /api/* paths, which the Next dev server proxies to Express (port 4000).

export interface DashboardMeal {
  slot: number;
  mealId?: string;
  title?: string;
  calories?: number;
  proteinGrams?: number;
  carbsGrams?: number;
  fatGrams?: number;
  badges: string[];
}

export interface DashboardPayload {
  userId: string;
  user: {
    fullName: string;
    phone: string;
    dietaryBadges: string[];
    dropoffPreference: string;
  };
  subscription: {
    id: string;
    planTier: string;
    deliveryDay: string;
    deliveryLabel: string;
    window: string;
    isPaused: boolean;
    perMeal: number;
  } | null;
  address: {
    street: string;
    unit?: string;
    city: string;
    province: string;
    postalCode: string;
  } | null;
  order: {
    id: string;
    deliveryDate: string;
    status: string;
    totalAmount: number;
    cutoffAt: string;
    items: DashboardMeal[];
  } | null;
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

export interface KitchenDish {
  mealId: string;
  title: string;
  calories?: number;
  badges: string[];
  totalQuantity: number;
  packedQuantity: number;
}

export interface KitchenRoute {
  postalPrefix: string;
  boxCount: number;
}

export interface ProductionMatrix {
  deliveryDate: string;
  totalMealsToCook: number;
  totalPacked: number;
  dishes: KitchenDish[];
  routes: KitchenRoute[];
  courier: Record<string, number>;
}

export async function getDashboard(userId: string): Promise<DashboardPayload> {
  const r = await fetch(`/api/v1/dashboard/${userId}`);
  if (!r.ok) throw new Error("Failed to load dashboard");
  return r.json();
}

export async function getMeals(): Promise<Meal[]> {
  const r = await fetch(`/api/v1/meals`);
  const j = await r.json();
  return j.meals;
}

export async function getProductionMatrix(date?: string): Promise<ProductionMatrix> {
  const q = date ? `?date=${date}` : "";
  const r = await fetch(`/api/v1/kitchen/production-matrix${q}`);
  if (!r.ok) throw new Error("Failed to load production matrix");
  return r.json();
}

export async function post(path: string, body: unknown) {
  const r = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return r.json();
}
