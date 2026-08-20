"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAuctions, placeBid } from "@/lib/api";

export default function AuctionPage() {
  const [data, setData] = useState<any>(null);
  const [restaurantId, setRestaurantId] = useState("rest_indian");
  const [msg, setMsg] = useState("");

  async function load() { setData(await getAuctions()); }
  useEffect(() => { load(); }, []);

  async function bid(slot: string, day: string) {
    const amount = 50;
    const r = await placeBid(restaurantId, slot, day, amount);
    setMsg(r.message || r.code || "Bid placed");
    load();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="font-extrabold tracking-tight">Supper Club Direct — Content Auctions</div>
        <Link href="/payouts" className="btn btn-ghost text-sm">💸 Payouts</Link>
      </header>

      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <span className="text-sm font-bold text-slate-700">Bidding as:</span>
        <select value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} className="rounded-lg border border-slate-200 px-2 py-1 text-sm font-semibold">
          <option value="rest_indian">Indian Desire</option>
          <option value="rest_oak_ash">Oak & Ash Kitchen</option>
          <option value="rest_seoul">Seoul Food Co.</option>
          <option value="rest_sweet_basil">Sweet Basil</option>
        </select>
      </div>

      <div className="mt-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <b>Fairness rule:</b> One slot per restaurant per week. You can bid for any upcoming day, but can only WIN one slot this week.
      </div>
      {msg && <div className="mt-3 rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">{msg}</div>}

      {(data?.slots ?? []).map((s: any) => (
        <section key={s.slot} className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">{s.slot}</h3>
            <span className="text-xs text-slate-400">starting bid ${s.startingBid}</span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {s.days.slice(0, 7).map((d: any) => (
              <div key={d.day} className="rounded-xl border border-slate-100 p-3">
                <div className="text-xs font-bold text-slate-400">{d.day}</div>
                <div className="mt-1 text-lg font-black text-teal-700">${d.topBid}</div>
                <div className="text-xs text-slate-500">{d.bidCount} bids · leader: {d.leader}</div>
                <button onClick={() => bid(s.slot, d.day)} className="btn btn-ghost mt-2 !py-1 text-xs">Bid $50</button>
              </div>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-4 text-xs text-slate-400">Bids close weekly (Mon–Wed). Winner supplies the hero image / dish+recipe / chef story for the next day. Transparent — all bids visible.</p>
    </div>
  );
}
