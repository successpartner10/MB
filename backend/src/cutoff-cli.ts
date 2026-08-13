// ============================================================================
// Manual cutoff run:  npm run cutoff
// Lets you see the Cutoff Automation Engine fire on demand without waiting for
// Sunday. Seeds, then processes the cutoff and prints the production matrix.
// ============================================================================

import { seedAll } from "./seed.js";
import { processCutoff } from "./services/cutoff.js";
import { db, findMeal } from "./db.js";

seedAll();

console.log("\n>>> Running Cutoff Automation Engine (simulated Sunday 11:59 PM EST)");
const result = processCutoff();

console.log("\n=== CUTOFF RESULT ===");
console.log(result);

console.log("\n=== PRODUCTION MATRIX AFTER CUTOFF ===");
const counts: Record<string, number> = {};
for (const o of db.orders) {
  if (o.status === "SKIPPED") continue;
  for (const it of o.items) counts[it.mealId] = (counts[it.mealId] ?? 0) + it.quantity;
}
for (const [mealId, qty] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(qty).padStart(4)}x  ${findMeal(mealId)?.title}`);
}
