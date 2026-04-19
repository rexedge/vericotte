"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-off-white pt-24">
      {/* radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(12,79,96,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Left column — text */}
        <div className="flex-1 space-y-7">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/5 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              Audit · Tax · Advisory
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/40">
            Navigating Complexity, Innovating Tomorrow
          </p>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Nigeria&rsquo;s <span className="text-orange">Premier</span>
            <br />
            Audit, Tax &amp;
            <br />
            Advisory Firm
          </h1>

          {/* Body */}
          <p className="max-w-lg text-base leading-relaxed text-charcoal/70">
            Delivering world-class audit, tax, and advisory services with
            precision, innovation, and deep local expertise — built for the
            businesses shaping Nigeria&rsquo;s future.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-md bg-orange px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-[1.03]"
            >
              Our Services
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-7 py-3.5 text-sm font-bold text-navy transition-all duration-200 hover:border-navy/40 hover:bg-navy/5"
            >
              Corporate Profile
            </a>
          </div>
        </div>

        {/* Right column — Metrics card */}
        <MetricsCard />
      </div>
    </section>
  );
}

function MetricsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px)");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      setTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      );
    };

    const handleLeave = () =>
      setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="w-full max-w-md rounded-2xl border border-navy/10 bg-navy p-8 shadow-2xl shadow-navy/15 lg:max-w-sm"
    >
      {/* Metric 1 */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Assets Managed
        </p>
        <div className="mt-1 flex items-baseline gap-3">
          <span className="text-3xl font-extrabold text-white">₦40B+</span>
          <span className="text-sm font-semibold text-orange">▲ 12.4% YoY</span>
        </div>
      </div>

      {/* Metric 2 */}
      <div className="mb-6 border-t border-white/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Client Retention
        </p>
        <div className="mt-1 flex items-baseline gap-3">
          <span className="text-3xl font-extrabold text-white">98%</span>
          <span className="text-sm text-white/50">Consistent excellence</span>
        </div>
      </div>

      {/* Service pills */}
      <div className="mb-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
        {["AUDIT", "TAX", "ADVISORY"].map((s) => (
          <span
            key={s}
            className="rounded-full border border-orange/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-orange"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Contact strip */}
      <div className="border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/35">
        Lagos, Nigeria · vericotte.com · info@vericotte.com
      </div>
    </div>
  );
}
