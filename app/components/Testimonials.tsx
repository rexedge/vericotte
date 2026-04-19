"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Vericotte transformed our tax approach completely. Their proactive counsel saved us millions and gave us a strategic edge.",
    name: "Adaeze Nwosu",
    role: "CFO, Zenith Manufacturing",
    initials: "AN",
  },
  {
    quote:
      "The rigour and professionalism of their audit team is unmatched. They delivered on time, every time — with insight that went far beyond compliance.",
    name: "Olumide Adeyemi",
    role: "Managing Director, Lighthouse Group",
    initials: "OA",
  },
  {
    quote:
      "From our first meeting, it was clear Vericotte operates at a different level. Transparent, responsive, and genuinely invested in our success.",
    name: "Fatima Bello",
    role: "Founder & CEO, Harmattan Fintech",
    initials: "FB",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-off-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
            Trusted by Leading Businesses
          </h2>
        </div>

        {/* Cards */}
        <div className="reveal-stagger grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal relative rounded-lg bg-white px-8 py-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-navy/5"
            >
              {/* Orange top accent */}
              <div className="absolute left-0 top-0 h-0.75 w-12 rounded-tr-full bg-orange" />

              {/* Quote mark */}
              <span className="mb-4 block text-3xl leading-none text-orange/25">
                &ldquo;
              </span>

              <p className="mb-8 text-sm leading-relaxed text-charcoal/70">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
