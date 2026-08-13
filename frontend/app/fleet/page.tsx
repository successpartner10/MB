"use client";

import Link from "next/link";

const FLEET = [
  { id: "ord-1001", customer: "Aria Chen", addr: "120 Bay St, #1402", rest: "Indian Desire", status: "out", courier: "Marcus", eta: "12 min", progress: 74 },
  { id: "ord-1002", customer: "Sam Torres", addr: "45 Front St E", rest: "Kobu", status: "out", courier: "Nadia", eta: "18 min", progress: 62 },
  { id: "ord-1003", customer: "Priya Nair", addr: "210 Queen St W", rest: "Sweet Basil", status: "packed", courier: "—", eta: "30 min", progress: 45 },
  { id: "ord-1004", customer: "Maya Liu", addr: "720 Yonge St", rest: "Seoul Food Co.", status: "out", courier: "Tom", eta: "22 min", progress: 58 },
  { id: "ord-1005", customer: "Jade Kim", addr: "612 Bloor St W", rest: "Bánh Mì Bro", status: "preparing", courier: "—", eta: "40 min", progress: 18 },
  { id: "ord-1006", customer: "Dev Patel", addr: "340 Dundas St W", rest: "Green Table", status: "out", courier: "Sofia", eta: "15 min", progress: 70 },
];

const STATUS: Record<string, { label: string; cls: string }> = {
  out: { label: "Out for delivery", cls: "bg-sky-100 text-sky-700" },
  packed: { label: "Packed", cls: "bg-emerald-100 text-emerald-700" },
  preparing: { label: "Preparing", cls: "bg-amber-100 text-amber-700" },
};

export default function FleetPage() {
  const outCount = FLEET.filter((f) => f.status === "out").length;
  return (
    <div className="mx-auto max-w-5xl px-5 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="font-extrabold tracking-tight">Supper Club Direct — Fleet Board</div>
        <Link href="/payouts" className="btn btn-ghost text-sm">💸 Payouts</Link>
      </header>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-sm font-bold text-slate-700">{outCount} orders out · {FLEET.length} active</span>
      </div>

      <section className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <div className="grid grid-cols-[70px_1.3fr_1fr_1fr_90px_70px_1fr] gap-3 border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
          <span>Order</span><span>Customer</span><span>Kitchen</span><span>Status</span><span>Courier</span><span>ETA</span><span>Progress</span>
        </div>
        {FLEET.map((o) => (
          <div key={o.id} className="grid grid-cols-[70px_1.3fr_1fr_1fr_90px_70px_1fr] gap-3 border-b border-slate-50 px-4 py-3 text-sm">
            <span className="font-bold text-slate-400">#{o.id}</span>
            <div><b>{o.customer}</b><div className="text-xs text-slate-400">{o.addr}</div></div>
            <span className="text-slate-600">{o.rest}</span>
            <span><span className={`chip ${STATUS[o.status]?.cls}`}>{STATUS[o.status]?.label}</span></span>
            <span>{o.courier}</span>
            <span>{o.eta}</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-teal-600" style={{ width: `${o.progress}%` }} /></div>
              <span className="text-xs text-slate-400">{o.progress}%</span>
            </div>
          </div>
        ))}
      </section>

      <p className="mt-4 text-xs text-slate-400">Fleet board — track every order out at once.</p>
    </div>
  );
}
