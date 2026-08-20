"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import {
  getProductionMatrix,
  getRestaurants,
  getCommitment,
  post,
  type ProductionMatrix,
  type Restaurant,
  type Commitment,
} from "@/lib/api";

type DragKind = "dish" | "route";

export default function KitchenPage() {
  const [matrix, setMatrix] = useState<ProductionMatrix | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [commitment, setCommitment] = useState<Commitment | null>(null);
  const [restaurantId, setRestaurantId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [drag, setDrag] = useState<{ kind: DragKind; id: string } | null>(null);

  const load = useCallback(async () => {
    const m = await getProductionMatrix(undefined, restaurantId || undefined);
    setMatrix(m);
    if (restaurantId) {
      try {
        setCommitment(await getCommitment(restaurantId));
      } catch {
        setCommitment(null);
      }
    } else {
      setCommitment(null);
    }
    return m;
  }, [restaurantId]);

  useEffect(() => {
    (async () => {
      try {
        const rest = await getRestaurants();
        setRestaurants(rest.filter((r) => r.isActive));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    load().catch(() => {});
  }, [load]);

  // ---- Kanban drag & drop actions (all hit the real API) ----
  async function packRemaining(mealId: string) {
    const d = matrix?.dishes.find((x) => x.mealId === mealId);
    if (!d) return;
    const remaining = d.totalQuantity - d.packedQuantity;
    if (remaining > 0) await post("/api/v1/kitchen/pack", { mealId, qty: remaining });
    await load();
  }
  async function resetPacked(mealId: string) {
    const d = matrix?.dishes.find((x) => x.mealId === mealId);
    if (!d || d.packedQuantity === 0) return;
    await post("/api/v1/kitchen/pack", { mealId, qty: -d.packedQuantity });
    await load();
  }
  async function shipRoute(prefix: string) {
    const r = matrix?.routes.find((x) => x.postalPrefix === prefix);
    if (!r) return;
    await post("/api/v1/kitchen/ship", { postalPrefix: prefix, boxCount: r.boxCount });
    await load();
  }

  async function onDropLane(lane: string) {
    if (!drag) return;
    const { kind, id } = drag;
    setDrag(null);
    if (lane === "cooking") {
      // Packed -> In Cooking: reset
      if (kind === "dish") await resetPacked(id);
    } else if (lane === "packed") {
      // In Cooking -> Packed: pack remaining
      if (kind === "dish") await packRemaining(id);
    } else if (lane === "courier") {
      // Ready route -> Out With Courier: ship
      if (kind === "route") await shipRoute(id);
    }
  }

  async function packAll() {
    if (!matrix) return;
    for (const d of matrix.dishes) {
      const remaining = d.totalQuantity - d.packedQuantity;
      if (remaining > 0) await post("/api/v1/kitchen/pack", { mealId: d.mealId, qty: remaining });
    }
    await load();
  }

  function exportJSON() {
    if (!matrix) return;
    const blob = new Blob([JSON.stringify(matrix, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `production-matrix-${matrix.deliveryDate || "upcoming"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-slate-400">Loading production matrix…</div>;
  }
  if (!matrix) {
    return <div className="grid min-h-screen place-items-center text-red-500">Failed to load kitchen data.</div>;
  }

  const inCooking = matrix.dishes.filter((d) => d.packedQuantity < d.totalQuantity);
  const packed = matrix.dishes.filter((d) => d.packedQuantity > 0);
  const shippedRoutes = matrix.routes.filter((r) => (matrix.courier[r.postalPrefix] ?? 0) > 0);
  const readyRoutes = matrix.routes.filter((r) => (matrix.courier[r.postalPrefix] ?? 0) === 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-6">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white font-black">MB</span>
          <div>
            <div className="font-extrabold tracking-tight">Minimal Bites — Kitchen Partner Portal</div>
            <div className="text-xs text-slate-500">
              {matrix?.restaurantName ?? "Select a kitchen"} · {matrix?.restaurantId ? "kitchen view" : "all partner kitchens"}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/auction" className="btn btn-ghost text-sm">🎯 Auctions</Link>
          <Link href="/payouts" className="btn btn-ghost text-sm">💸 Payouts</Link>
          <Link href="/" className="btn btn-ghost text-sm">← Back</Link>
        </div>
      </header>

      {/* Your business — big numbered 3 steps */}
      <section className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { n: "1", t: "Set up", d: "Business profile, menu & delivery zones. Publish your hygiene score." },
          { n: "2", t: "Fulfill orders", d: "See committed weekly volume + one consolidated prep list. Batch-cook, not chaos." },
          { n: "3", t: "Get paid", d: "Automatic weekly payout (every Thursday) for every meal you confirmed & cooked." },
        ].map((s) => (
          <div key={s.n} className="card flex items-start gap-3 p-4">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand-600 text-2xl font-black text-white shadow-md shadow-brand-600/30">
              {s.n}
            </div>
            <div>
              <div className="font-bold">{s.t}</div>
              <div className="mt-0.5 text-xs leading-snug text-slate-500">{s.d}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Kitchen selector + filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <label className="btn btn-ghost text-sm !px-2">
          🏠 Kitchen
          <select
            value={restaurantId}
            onChange={(e) => setRestaurantId(e.target.value)}
            className="ml-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm font-semibold text-slate-800"
          >
            <option value="">All partner kitchens</option>
            {restaurants.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} · {r.neighborhood}
              </option>
            ))}
          </select>
        </label>
        <button className="btn btn-ghost text-sm">📅 Date: Tuesday, Aug 18 ▼</button>
        <button className="btn btn-ghost text-sm">🕐 Window: 5PM–7PM ▼</button>
        <button className="btn btn-ghost text-sm">🧮 View: Aggregated Prep List ▼</button>
      </div>
      {matrix?.restaurantId && (
        <p className="mt-2 text-xs text-slate-500">
          Showing production for <b>{matrix.restaurantName}</b> only — other partner kitchens' orders are hidden here.
        </p>
      )}

      {/* Full-week commitment signal — predictable, routable volume */}
      {commitment && (
        <section className="mt-3 grid gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:grid-cols-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">Committed customers</div>
            <div className="text-2xl font-black text-emerald-800">{commitment.committedCustomers}</div>
            <div className="text-xs text-emerald-600">signed up for a full week from you</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">Guaranteed weekly meals</div>
            <div className="text-2xl font-black text-emerald-800">{commitment.committedMeals}</div>
            <div className="text-xs text-emerald-600">predictable volume to plan & cook</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">Weekly portions (all orders)</div>
            <div className="text-2xl font-black text-emerald-800">{commitment.weeklyPortions}</div>
            <div className="text-xs text-emerald-600">{commitment.deliveryWindow} · full-week routing</div>
          </div>
        </section>
      )}

      {/* Production summary table */}
      <section className="mt-4 card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-4 py-3 text-white">
          <span className="font-bold">🏭 Production Summary</span>
          <span className="text-lg font-black text-emerald-300">{matrix.totalMealsToCook} MEALS TOTAL</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Meal dish name</th>
                <th className="px-4 py-2">Dietary badges</th>
                <th className="px-4 py-2">Packing status</th>
              </tr>
            </thead>
            <tbody>
              {matrix.dishes.map((d) => {
                const pct = d.totalQuantity ? Math.round((d.packedQuantity / d.totalQuantity) * 100) : 0;
                const state = pct >= 100 ? "DONE" : pct > 0 ? "PACKED" : "READY";
                return (
                  <tr key={d.mealId} className="border-b border-slate-50">
                    <td className="px-4 py-2.5 font-bold text-slate-800">{d.totalQuantity}x</td>
                    <td className="px-4 py-2.5 font-semibold">{d.title}</td>
                    <td className="px-4 py-2.5">
                      <div className="flex flex-wrap gap-1">
                        {(d.badges.length ? d.badges : ["STANDARD"]).map((b) => <Badge key={b} label={b} />)}
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full bg-brand-600" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-slate-500">
                          {d.packedQuantity}/{d.totalQuantity} {state}
                        </span>
                        <button onClick={() => window.print()} className="ml-2 text-xs text-brand-600 hover:underline">
                          🖨️ Print Labels
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Kanban with drag & drop */}
      <h2 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-400">
        Batch Packing & Courier Kanban — drag cards between lanes
      </h2>
      <div className="mt-2 grid gap-3 md:grid-cols-3">
        <KanbanLane
          title="🍳 In Cooking"
          tone="slate"
          count={inCooking.reduce((s, d) => s + (d.totalQuantity - d.packedQuantity), 0)}
          laneId="cooking"
          drag={drag}
          onDragStart={setDrag}
          onDrop={() => onDropLane("cooking")}
        >
          {inCooking.length === 0 && <p className="text-sm text-slate-300">Nothing cooking</p>}
          {inCooking.map((d) => (
            <DishCard
              key={d.mealId}
              title={d.title}
              qty={d.totalQuantity - d.packedQuantity}
              kind="dish"
              id={d.mealId}
              onDragStart={setDrag}
            />
          ))}
        </KanbanLane>

        <KanbanLane
          title="📦 Packed & Labeled"
          tone="brand"
          count={matrix.totalPacked}
          laneId="packed"
          drag={drag}
          onDragStart={setDrag}
          onDrop={() => onDropLane("packed")}
        >
          {packed.length === 0 && <p className="text-sm text-slate-300">Drop cooked meals here to pack</p>}
          {packed.map((d) => (
            <DishCard
              key={d.mealId}
              title={d.title}
              qty={d.packedQuantity}
              kind="dish"
              id={d.mealId}
              onDragStart={setDrag}
            />
          ))}
          {/* Ready routes sit here until shipped */}
          {readyRoutes.map((r) => (
            <RouteCard
              key={r.postalPrefix}
              prefix={r.postalPrefix}
              boxes={r.boxCount}
              onDragStart={setDrag}
            />
          ))}
        </KanbanLane>

        <KanbanLane
          title="🚚 Out With Courier"
          tone="sky"
          count={shippedRoutes.reduce((s, r) => s + (matrix.courier[r.postalPrefix] ?? 0), 0)}
          laneId="courier"
          drag={drag}
          onDragStart={setDrag}
          onDrop={() => onDropLane("courier")}
        >
          {shippedRoutes.length === 0 && <p className="text-sm text-slate-300">Drag a route here to ship it</p>}
          {shippedRoutes.map((r) => (
            <div key={r.postalPrefix} className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm">
              <span className="font-bold">Route {r.postalPrefix}</span> — {matrix.courier[r.postalPrefix]} boxes
              <span className="ml-1 text-xs text-sky-600">shipped</span>
            </div>
          ))}
        </KanbanLane>
      </div>

      {/* Batch controls */}
      <section className="mt-4 card p-4">
        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400">Batch controls</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => window.print()} className="btn btn-primary">🖨️ Print All Thermal Labels for Tuesday</button>
          <button onClick={packAll} className="btn btn-ghost">✅ Mark All Packed</button>
          <button onClick={() => readyRoutes.length && shipRoute(readyRoutes[0].postalPrefix)} className="btn btn-ghost">
            🚚 Ship Next Route
          </button>
          <button onClick={exportJSON} className="btn btn-ghost">📥 Export Dish Totals to Kitchen Display</button>
        </div>
        <p className="mt-2 text-xs text-slate-400">
          Tip: drag a dish from <b>In Cooking → Packed</b> to pack it, drag back to reset, and drag a route into{" "}
          <b>Out With Courier</b> to dispatch.
        </p>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Kanban lane wrapper
// ---------------------------------------------------------------------------
function KanbanLane({
  title,
  count,
  laneId,
  drag,
  onDragStart,
  onDrop,
  tone,
  children,
}: {
  title: string;
  count: number;
  laneId: string;
  drag: { kind: DragKind; id: string } | null;
  onDragStart: (d: { kind: DragKind; id: string } | null) => void;
  onDrop: () => void;
  tone: "slate" | "brand" | "sky";
  children: React.ReactNode;
}) {
  const badge =
    tone === "brand"
      ? "bg-brand-100 text-brand-700"
      : tone === "sky"
      ? "bg-sky-100 text-sky-700"
      : "bg-slate-100 text-slate-600";
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onDrop();
      }}
      onDragEnd={() => onDragStart(null)}
      className={`flex min-h-[180px] flex-col rounded-2xl border-2 p-3 transition ${
        drag ? "border-dashed border-brand-500 bg-brand-50/40" : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-bold text-sm">{title}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${badge}`}>{count}</span>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function DishCard({
  title,
  qty,
  kind,
  id,
  onDragStart,
}: {
  title: string;
  qty: number;
  kind: DragKind;
  id: string;
  onDragStart: (d: { kind: DragKind; id: string }) => void;
}) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "move";
        onDragStart({ kind, id });
      }}
      className="cursor-grab rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm active:cursor-grabbing"
    >
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-slate-500">{qty}x · drag to move</div>
    </div>
  );
}

function RouteCard({
  prefix,
  boxes,
  onDragStart,
}: {
  prefix: string;
  boxes: number;
  onDragStart: (d: { kind: DragKind; id: string }) => void;
}) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "move";
        onDragStart({ kind: "route", id: prefix });
      }}
      className="cursor-grab rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm shadow-sm"
    >
      <span className="font-bold">Route {prefix}</span> — {boxes} boxes
      <div className="text-xs text-amber-600">drag to ship →</div>
    </div>
  );
}
