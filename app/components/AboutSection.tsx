"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const DIRECTION_CARDS = [
  {
    title: "Our Vision",
    text: "To be the leading audit, tax, and advisory firm in Nigeria — trusted for excellence, innovation, and integrity.",
  },
  {
    title: "Our Mission",
    text: "To deliver excellence in audit, tax, and advisory services with precision and personal commitment to every client.",
  },
  {
    title: "Our Promise",
    text: "Navigating complexity with you — always. We stand beside our clients through every challenge and opportunity.",
  },
];

export default function AboutSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left — Dark teal panel */}
        <div className="bg-teal px-8 py-20 lg:px-16 lg:py-28">
          <div className="reveal mx-auto max-w-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                Who We Are
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white lg:text-4xl">
              A New Powerhouse in Audit, Tax &amp; Advisory
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-white/65">
              Vericotte was established with a singular purpose — to bring
              rigorous international standards, deep sector expertise, and
              genuine innovation to Nigeria&rsquo;s professional services
              landscape.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-white/65">
              We serve businesses of every scale, from ambitious start-ups to
              established conglomerates, providing audit, tax, and advisory
              services that create measurable value and lasting confidence.
            </p>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-[1.03]"
            >
              Learn More
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right — Off-white panel */}
        <div className="bg-off-white px-8 py-20 lg:px-16 lg:py-28">
          <div className="reveal mx-auto max-w-lg">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Our Direction
            </span>
            <h3 className="mb-8 mt-2 text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
              Purpose-Driven.
              <br />
              Results-Oriented.
            </h3>

            <div className="reveal-stagger space-y-5">
              {DIRECTION_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="reveal rounded-lg border-l-4 border-orange bg-white px-6 py-5 shadow-sm"
                >
                  <h4 className="mb-1.5 text-sm font-bold text-navy">
                    {card.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-charcoal/70">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
