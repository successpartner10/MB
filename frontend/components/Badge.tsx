const COLORS: Record<string, string> = {
  HIGH_PROTEIN: "bg-rose-100 text-rose-700",
  GLUTEN_FREE: "bg-amber-100 text-amber-700",
  VEGETARIAN: "bg-emerald-100 text-emerald-700",
  VEGAN: "bg-lime-100 text-lime-700",
  KETO: "bg-violet-100 text-violet-700",
  BALANCED: "bg-sky-100 text-sky-700",
  STANDARD: "bg-slate-100 text-slate-600",
};

export default function Badge({ label }: { label: string }) {
  const key = label.toUpperCase().replace(/[\s-]/g, "_");
  const cls = COLORS[key] ?? COLORS.STANDARD;
  return <span className={`chip ${cls}`}>{label}</span>;
}
