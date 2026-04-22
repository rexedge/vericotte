"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    // Minimum display time for branding impact, then exit
    const minDisplay = setTimeout(() => {
      setPhase("exiting");
    }, 1800);

    // Remove from DOM after exit animation completes
    const cleanup = setTimeout(() => {
      setPhase("done");
    }, 2500);

    return () => {
      clearTimeout(minDisplay);
      clearTimeout(cleanup);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-navy transition-opacity duration-700 ${
        phase === "exiting" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(12,79,96,0.4)_0%,transparent_70%)] pointer-events-none" />

      {/* Logo mark + wordmark */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Logo */}
        <div className="loader-logo-wrap">
          <Image
            src="/logo.png"
            alt="Vericotte"
            width={56}
            height={56}
            className="loader-logo"
            priority
          />
        </div>

        {/* Wordmark */}
        <div className="loader-wordmark">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Vericotte<span className="text-orange">.</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="loader-progress h-full rounded-full bg-linear-to-r from-orange via-warm-orange to-amber" />
        </div>

        {/* Tagline */}
        <p className="loader-tagline mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
          Navigating Complexity
        </p>
      </div>
    </div>
  );
}
