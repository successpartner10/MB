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
