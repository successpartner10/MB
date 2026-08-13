"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import {
  getDashboard,
  getMeals,
  getRestaurants,
  post,
  chooseRestaurant,
  chooseMixed,
  type DashboardPayload,
  type Meal,
  type Restaurant,
} from "@/lib/api";

const USER_ID = "usr_99812";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function timeLeft(cutoffIso: string) {
  const cutoff = new Date(cutoffIso).getTime();
  const diff = Math.max(0, cutoff - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  return `${days} Day${days === 1 ? "" : "s"} ${hours} Hour${hours === 1 ? "" : "s"}`;
}

const TIER_LABEL: Record<string, string> = {
  MEALS_4: "4 meals",
  MEALS_6: "6 meals",
  MEALS_8: "8 meals",
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [swapOpen, setSwapOpen] = useState<number | null>(null);
  const [kitchenFilter, setKitchenFilter] = useState<string>("all");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [chooseOpen, setChooseOpen] = useState(false);

  async function refresh() {
    const d = await getDashboard(USER_ID);
    setData(d);
    return d;
  }

  useEffect(() => {
    (async () => {
      try {
        const [d, m, r] = await Promise.all([refresh(), getMeals(), getRestaurants()]);
        setData(d);
        setMeals(m.filter((x) => x.isActive));
        setRestaurants(r.filter((x) => x.isActive));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function pickKitchen(restaurantId: string) {
    await chooseRestaurant(USER_ID, restaurantId);
    flash("✓ Your whole weekly box is now from this kitchen.");
    setChooseOpen(false);
    await refresh();
  }
  async function backToMixed() {
    await chooseMixed(USER_ID);
    flash("✓ Your box is now curated variety across kitchens.");
    setChooseOpen(false);
    await refresh();
  }

  function flash(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  async function skipWeek() {
    if (!data?.order) return;
    await post("/api/v1/subscription/skip", { orderId: data.order.id });
    flash("✓ Week skipped — no charge.");
    await refresh();
  }

  async function addMeal() {
    if (!data?.order) return;
    const r = await post("/api/v1/subscription/add-meal", {
      orderId: data.order.id,
      mealId: meals[0]?.id,
    });
    flash(`✓ Added meal. New total $${r.totalAmount.toFixed(2)}.`);
    await refresh();
  }

  async function changeAddress() {
    const street = prompt("New street address:", "100 King St W");
    if (!street) return;
    await post("/api/v1/subscription/change-address", {
      userId: USER_ID,
      street,
      unit: "Unit 2001",
      postalCode: "M5X 1A9",
    });
    flash("✓ Address updated.");
    await refresh();
  }

  async function doSwap(slotIndex: number, mealId: string) {
    if (!data?.order) return;
    await post("/api/v1/subscription/swap", {
      orderId: data.order.id,
      slotIndex,
      mealId,
    });
    setSwapOpen(null);
    flash("✓ Meal swapped.");
    await refresh();
  }

  const cutoffLeft = useMemo(
    () => (data?.order ? timeLeft(data.order.cutoffAt) : ""),
    [data?.order]
  );

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-slate-400">Loading dashboard…</div>;
  }
  if (!data) {
    return <div className="grid min-h-screen place-items-center text-red-500">Dashboard failed to load.</div>;
  }

  const { order, subscription, address, user } = data;
  const planCount = TIER_LABEL[subscription?.planTier ?? "MEALS_6"] ?? "6 meals";
  const perMeal = subscription?.perMeal ?? 13;
  const total = order?.totalAmount ?? 0;

  // unique kitchens across this week's meals (for the "prepared by" filter)
  const kitchens = useMemo(() => {
    const set = new Map<string, string>();
    (order?.items ?? []).forEach((it) => {
      if (it.restaurantId && it.restaurantName) set.set(it.restaurantId, it.restaurantName);
    });
    return [...set.entries()].map(([id, name]) => ({ id, name }));
  }, [order]);

  const visibleItems = kitchenFilter === "all"
    ? order?.items ?? []
    : (order?.items ?? []).filter((it) => it.restaurantId === kitchenFilter);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-600 text-white text-xs font-black">MB</span>
            <span className="font-extrabold tracking-tight">Minimal Bites</span>
          </div>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">👤 {user.fullName.split(" ")[0]}</Link>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div className="fixed inset-x-0 top-16 z-30 mx-auto w-max rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      <main className="space-y-4 px-5 pt-4">
        {/* Next delivery */}
        <section className="card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Next Delivery</div>
          <div className="mt-1 text-lg font-extrabold">
            {fmtDate(order?.deliveryDate ?? "")} · {subscription?.window}
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
            📍 {address?.street}
            {address?.unit ? `, ${address.unit}` : ""} ({user.dropoffPreference.replace("_", " ")} drop-off)
          </div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
            ⏳ Edit cutoff: {cutoffLeft} left
          </div>
        </section>

        {/* Your kitchen — trust + full-week commitment */}
        <section className="card p-4">
          {subscription?.boxMode === "SINGLE_RESTAURANT" && subscription.preferredRestaurant ? (
            <>
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Your Kitchen (all meals from one kitchen)
                </div>
                <button onClick={backToMixed} className="btn btn-ghost !px-2.5 !py-1 text-xs">
                  Switch to variety
                </button>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-brand-700 font-black">
                  {subscription.preferredRestaurant.name[0]}
                </span>
                <div>
                  <div className="font-bold">{subscription.preferredRestaurant.name}</div>
                  <div className="text-xs text-slate-500">
                    {subscription.preferredRestaurant.neighborhood} · full-week box committed
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                All {planCount} are prepared by this kitchen. They know you're committed for the full
                week, so every delivery is a complete, predictable order.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Your Kitchen
                </div>
                <button onClick={() => setChooseOpen((v) => !v)} className="btn btn-ghost !px-2.5 !py-1 text-xs">
                  {chooseOpen ? "Cancel" : "🍴 Choose a kitchen"}
                </button>
              </div>
              <p className="mt-1.5 text-sm text-slate-600">
                Currently <b>curated variety</b> — meals from several kitchens, each labeled.
              </p>
              {chooseOpen && (
                <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
                  <div className="text-xs font-semibold text-slate-400">
                    Commit your whole weekly box to one kitchen for full transparency & predictable delivery:
                  </div>
                  {restaurants.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => pickKitchen(r.id)}
                      className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 text-left hover:border-brand-500"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-brand-700 font-black">
                        {r.name[0]}
                      </span>
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-xs text-slate-500">{r.cuisine} · {r.neighborhood}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        {/* Meals */}
        <section>
          <div className="flex items-center justify-between px-1">
            <h2 className="font-bold text-slate-700">Your {planCount} this week</h2>
            <span className="text-sm font-extrabold text-brand-600">${total.toFixed(2)} all-inclusive</span>
          </div>

          {/* "Prepared by" kitchen filter — still one box & one bill */}
          {kitchens.length > 1 && (
            <div className="mt-2 flex flex-wrap gap-1.5 px-1">
              <button
                onClick={() => setKitchenFilter("all")}
                className={`chip ${kitchenFilter === "all" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
              >
                All kitchens
              </button>
              {kitchens.map((k) => (
                <button
                  key={k.id}
                  onClick={() => setKitchenFilter(k.id)}
                  className={`chip ${kitchenFilter === k.id ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
                >
                  {k.name}
                </button>
              ))}
            </div>
          )}

          <div className="mt-2 space-y-2">
            {visibleItems.map((item, idx) => (
              <div key={idx} className="card p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                        {idx + 1}
                      </span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    {item.restaurantName && (
                      <div className="mt-0.5 pl-7 text-[11px] font-medium text-slate-400">
                        prepared by {item.restaurantName}
                      </div>
                    )}
                    <div className="mt-1.5 flex flex-wrap gap-1.5 pl-7">
                      {item.badges.map((b) => <Badge key={b} label={b} />)}
                      <span className="chip bg-slate-100 text-slate-600">
                        {item.calories} Cal / {item.proteinGrams}g protein
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSwapOpen(swapOpen === item.slot ? null : item.slot)}
                    className="btn btn-ghost !px-2.5 !py-1 text-xs"
                  >
                    🔄 Swap
                  </button>
                </div>
                {swapOpen === item.slot && (
                  <div className="mt-3 border-t border-slate-100 pt-2">
                    <div className="mb-1.5 text-xs font-semibold text-slate-400">Choose a replacement:</div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {meals.slice(0, 6).map((m) => (
                        <button
                          key={m.id}
                          disabled={m.id === item.mealId}
                          onClick={() => doSwap(item.slot - 1, m.id)}
                          className="rounded-lg border border-slate-200 px-2 py-1.5 text-left text-xs font-medium text-slate-700 hover:border-brand-500 disabled:opacity-40"
                        >
                          {m.title}
                          {m.restaurantName && (
                            <span className="block text-[10px] text-slate-400">by {m.restaurantName}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section className="grid grid-cols-3 gap-2">
          <button onClick={skipWeek} className="btn btn-ghost flex-col !gap-1 !py-3 text-xs">
            <span className="text-xl">⏸</span>Skip Next Week
          </button>
          <button onClick={changeAddress} className="btn btn-ghost flex-col !gap-1 !py-3 text-xs">
            <span className="text-xl">📍</span>Change Address
          </button>
          <button onClick={addMeal} className="btn btn-ghost flex-col !gap-1 !py-3 text-xs">
            <span className="text-xl">➕</span>Add Meal
          </button>
        </section>

        {/* Billing */}
        <section className="card p-4 text-sm">
          <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400">Billing summary</h3>
          <div className="mt-2 space-y-1.5 text-slate-600">
            <div className="flex justify-between">
              <span>{order?.items.length ?? 0} meals × ${perMeal.toFixed(2)}/ea</span>
              <span className="font-semibold text-slate-800">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery, service fees & taxes</span>
              <span className="font-bold text-brand-600">INCLUDED ($0.00)</span>
            </div>
          </div>
          <div className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
            Auto-charging ${total.toFixed(2)} on {fmtDate(order?.cutoffAt ?? "")} at 11:59 PM.
          </div>
        </section>
      </main>

      {/* Bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-md grid-cols-3 py-2 text-center text-xs font-medium text-slate-500">
          <Link href="/dashboard" className="py-1 text-brand-600">🍽️ This Week</Link>
          <button className="py-1">📅 Schedule</button>
          <button className="py-1">⚙️ Settings</button>
        </div>
      </nav>
    </div>
  );
}
