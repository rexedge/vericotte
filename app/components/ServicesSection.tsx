"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const SERVICES = [
  {
    num: "01",
    title: "Audit & Assurance",
    description:
      "Rigorous, independent audits that meet international standards and provide stakeholder confidence. We go beyond compliance — delivering insight-led assurance that strengthens governance.",
  },
  {
    num: "02",
    title: "Tax Advisory",
    description:
      "Proactive tax strategy, compliance, and planning under Nigerian law. From structuring to dispute resolution, we help you navigate the tax landscape with precision.",
  },
  {
    num: "03",
    title: "Business Advisory",
    description:
      "Strategic guidance on structure, growth, risk, and performance. We partner with leadership to solve complex problems and unlock new value.",
  },
];

export default function ServicesSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="bg-off-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
            Three Core Pillars of Excellence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/60">
            Focused expertise in the disciplines that matter most to Nigerian
            businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal-stagger grid gap-px bg-charcoal/15 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="reveal group relative bg-white px-8 py-10 transition-all duration-300 hover:bg-off-white hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
            >
              {/* Orange top border on hover */}
              <div className="absolute left-0 top-0 h-0.75 w-0 bg-orange transition-all duration-500 group-hover:w-full" />

              <span className="mb-4 block text-5xl font-extrabold text-navy/10">
                {service.num}
              </span>
              <h3 className="mb-3 text-lg font-bold text-navy">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
