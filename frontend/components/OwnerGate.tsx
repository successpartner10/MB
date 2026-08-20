"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** Client-side gate for owner-only pages. In production this is enforced server-side
 *  by a real auth provider; here it's a lightweight localStorage demo gate. */
export default function OwnerGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pass, setPass] = useState("");

  useEffect(() => {
    setAuthed(localStorage.getItem("scd_owner") === "1");
    setChecked(true);
  }, []);

  function submit() {
    if (pass === "supperclub") {
      localStorage.setItem("scd_owner", "1");
      setAuthed(true);
    } else {
      alert("Incorrect password.");
    }
  }

  if (!checked) return null;

  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-500 text-2xl font-black text-slate-900">🔒</div>
        <h1 className="mt-4 text-2xl font-black">Restaurant Owner Sign-in</h1>
        <p className="mt-2 text-sm text-slate-500">The auction, fleet, kitchen & payout tools are for restaurant owners only.</p>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          placeholder="Enter owner password"
          className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-center"
        />
        <button onClick={submit} className="btn btn-primary mt-3 w-full">Sign in</button>
        <p className="mt-3 text-xs text-slate-400">Demo password: <code>supperclub</code></p>
        <Link href="/" className="btn btn-ghost mt-3 text-sm">← Back to eaters</Link>
      </div>
    );
  }
  return <>{children}</>;
}
