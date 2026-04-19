"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const FEATURES = [
  {
    title: "Certified Professionals",
    description:
      "ICAN-licensed, FIRS-compliant experts delivering audit, tax, and advisory services to the highest professional standards.",
  },
  {
    title: "Technology-Driven",
    description:
      "Modern reporting tools and real-time visibility — we leverage technology to deliver faster, smarter results.",
  },
  {
    title: "Sector Specialists",
    description:
      "Deep expertise across fintech, real estate, manufacturing, NGOs, and more — tailored insight for your industry.",
  },
  {
    title: "Proactive Counsel",
    description:
      "We identify risks before they surface and opportunities before they pass, keeping you ahead at every turn.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear deliverables, honest fees, no hidden charges. Every engagement begins with full transparency.",
  },
  {
    title: "Youthful Vigour, Proven Expertise",
    description:
      "The hunger to outperform, backed by decades of combined experience across Nigeria's professional landscape.",
  },
];

export default function WhyVericotte() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="why"
      ref={ref}
      className="relative overflow-hidden bg-navy px-6 py-24 noise lg:px-8 lg:py-32"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(12,79,96,0.4)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Why Choose Vericotte
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white lg:text-4xl">
            Built Different. Built Better.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="reveal group glass rounded-xl px-7 py-8 transition-all duration-300 hover:border-orange/40 hover:shadow-[0_0_30px_rgba(234,93,5,0.12)]"
            >
              {/* Orange dot */}
              <div className="mb-4 h-2.5 w-2.5 rounded-full bg-orange transition-transform duration-300 group-hover:scale-150" />

              <h3 className="mb-2 text-base font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
