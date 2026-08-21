// Thin typed client for the Minimal Bites API. All requests hit relative
// /api/* paths, which the Next dev server proxies to Express (port 4000).

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  neighborhood: string;
  postalPrefixes: string[];
  isActive: boolean;
  hygieneRating?: number;
  healthScore?: number;
  verified?: boolean;
  description?: string;
  minWeeklyDishes?: number;
  menuCount?: number;
}

export interface DashboardMeal {
  slot: number;
  mealId?: string;
  title?: string;
  restaurantId?: string;
  restaurantName?: string;
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
    boxMode: string;
    preferredRestaurant: {
      id: string;
      name: string;
      neighborhood: string;
      hygieneRating?: number;
      healthScore?: number;
      verified?: boolean;
    } | null;
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
  restaurantId: string;
  restaurantName?: string;
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
  restaurantId?: string;
  restaurantName?: string;
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
  restaurantId: string | null;
  restaurantName: string;
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

export async function getRestaurants(): Promise<Restaurant[]> {
  const r = await fetch(`/api/v1/restaurants`);
  const j = await r.json();
  return j.restaurants;
}

export interface Commitment {
  restaurantId: string;
  restaurantName: string;
  committedCustomers: number;
  committedMeals: number;
  weeklyPortions: number;
  deliveryWindow: string;
}

export async function getCommitment(restaurantId: string): Promise<Commitment> {
  const r = await fetch(`/api/v1/restaurants/${restaurantId}/commitment`);
  if (!r.ok) throw new Error("Failed to load commitment");
  return r.json();
}

export async function getProductionMatrix(
  date?: string,
  restaurantId?: string
): Promise<ProductionMatrix> {
  const params = new URLSearchParams();
  if (date) params.set("date", date);
  if (restaurantId) params.set("restaurantId", restaurantId);
  const qs = params.toString();
  const r = await fetch(`/api/v1/kitchen/production-matrix${qs ? `?${qs}` : ""}`);
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

export async function chooseRestaurant(userId: string, restaurantId: string) {
  return post("/api/v1/subscription/choose-restaurant", { userId, restaurantId });
}
export async function chooseMixed(userId: string) {
  return post("/api/v1/subscription/choose-mixed", { userId });
}

// ---- v6 content / auction / gives ----
export async function getContent() {
  const r = await fetch("/api/v1/content");
  return r.json();
}
export async function getAuctions() {
  const r = await fetch("/api/v1/auctions");
  return r.json();
}
export async function getGives(q?: string) {
  const r = await fetch(`/api/v1/gives${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  return r.json();
}
export async function placeBid(restaurantId: string, slot: string, day: string, amount: number) {
  return post("/api/v1/auctions/bid", { restaurantId, slot, day, amount });
}

// ---- v14 payments (Stripe) ----
export interface PaymentIntent {
  clientSecret: string;
  paymentId: string;
  demo?: boolean;
}
export async function createPaymentIntent(amountCents: number, orderId?: string, customerId?: string) {
  const r = await fetch("/api/v1/payments/intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amountCents, orderId, customerId }),
  });
  const j = await r.json();
  return j as { status: string; clientSecret: string; paymentId: string; demo?: boolean };
}

// ---- v14 delivery (OrderOut / Uber Direct best-price) ----
export interface DeliveryQuote {
  provider: "UBER_DIRECT" | "DOORDASH_DRIVE" | "ORDEROUT";
  priceCents: number;
  etaMin: number;
  providerRef?: string;
}
export interface DeliveryItem { qty: number; name: string; }
export async function quoteDelivery(pickupAddress: string, dropoffAddress: string, pickupPostal: string, dropoffPostal: string, items: DeliveryItem[], scheduledAt?: string) {
  const r = await fetch("/api/v1/delivery/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pickupAddress, dropoffAddress, pickupPostal, dropoffPostal, items, scheduledAt }),
  });
  const j = await r.json();
  return j as { status: string; quote: DeliveryQuote };
}
export async function createDelivery(provider: string, pickupAddress: string, dropoffAddress: string, pickupPostal: string, dropoffPostal: string, items: DeliveryItem[]) {
  return post("/api/v1/delivery/create", { provider, pickupAddress, dropoffAddress, pickupPostal, dropoffPostal, items });
}
