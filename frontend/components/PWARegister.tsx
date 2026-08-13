"use client";

import { useEffect } from "react";

/** Registers the PWA service worker + refreshes if a new version is available. */
export default function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* SW unsupported or blocked in this context — app still works normally */
    });
  }, []);
  return null;
}
