// ============================================================================
// Flat Tier Pricing Logic — Section 6 Rule 1
// All-inclusive. No delivery, service, or tax surcharges ever added.
// ============================================================================

export type PlanTier = "MEALS_4" | "MEALS_6" | "MEALS_8";

export interface TierPrice {
  tier: PlanTier;
  mealCount: number;
  perMealCAD: number;
  totalCAD: number;
}

export const TIER_PRICING: Record<PlanTier, TierPrice> = {
  MEALS_4: { tier: "MEALS_4", mealCount: 4, perMealCAD: 14.0, totalCAD: 56.0 },
  MEALS_6: { tier: "MEALS_6", mealCount: 6, perMealCAD: 13.0, totalCAD: 78.0 },
  MEALS_8: { tier: "MEALS_8", mealCount: 8, perMealCAD: 12.0, totalCAD: 96.0 },
};

export function priceForTier(tier: PlanTier): TierPrice {
  const p = TIER_PRICING[tier];
  if (!p) throw new Error(`Unknown plan tier: ${tier}`);
  return p;
}

/**
 * Weekly total for N meals at a given tier's per-meal rate.
 * Only used when a customer "adds a meal" beyond their plan baseline.
 */
export function priceForQuantity(tier: PlanTier, quantity: number): number {
  const perMeal = TIER_PRICING[tier].perMealCAD;
  return Math.round(perMeal * quantity * 100) / 100;
}

/**
 * Per-meal all-inclusive price used by the Build-Your-Box configurator.
 * Most meals are the standard $13 rate; budget meals are $12 and premium
 * proteins are $14. All-inclusive (delivery, fees, tax already included).
 */
export const MEAL_BASE_PRICE = 13;
export const MEAL_PRICES: Record<string, number> = {
  meal_shawarma_1: 13,
  meal_salmon_2: 14,
  meal_teriyaki_3: 13,
  meal_falafel_4: 12,
  meal_steak_5: 14,
  meal_padthai_6: 14,
  meal_caesar_7: 13,
  meal_chili_8: 12,
  meal_brisket_9: 14,
  meal_harissa_10: 13,
  meal_skewer_11: 13,
  meal_kofte_12: 13,
  meal_halloumi_13: 13,
  meal_zaatar_14: 13,
  meal_tunapoke_15: 14,
  meal_kungpao_16: 13,
  meal_yakisoba_17: 12,
  meal_teriyakitofu_18: 12,
};

export function mealPrice(mealId: string): number {
  return MEAL_PRICES[mealId] ?? MEAL_BASE_PRICE;
}

/** Veg vs non-veg classification for the configurator's category counters. */
export const VEG_MEALS: string[] = ["meal_falafel_4", "meal_halloumi_13", "meal_yakisoba_17", "meal_teriyakitofu_18"];

/**
 * Budget mode: given a weekly budget, pick the best-value box (maximize meal
 * count without exceeding budget — cheapest meals first), respecting optional
 * restaurant/area/diet filters.
 */
export function bestValueBox(
  meals: { id: string; price: number; proteinGrams: number }[],
  budgetCAD: number
): { mealId: string; price: number }[] {
  const sorted = [...meals].sort((a, b) => a.price - b.price || b.proteinGrams - a.proteinGrams);
  const picks: { mealId: string; price: number }[] = [];
  let spent = 0;
  for (const m of sorted) {
    if (spent + m.price <= budgetCAD) {
      picks.push({ mealId: m.id, price: m.price });
      spent += m.price;
    }
  }
  return picks;
}
