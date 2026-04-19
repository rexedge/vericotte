"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export default function CTABanner() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="cta" ref={ref} className="bg-orange">
      <div className="reveal mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 text-center md:flex-row md:justify-between md:text-left lg:px-8 lg:py-20">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-extrabold text-white lg:text-3xl">
            Ready to Navigate Complexity Together?
          </h2>
          <p className="mt-2 text-sm text-white/75">
            Let&rsquo;s discuss how Vericotte can elevate your business.
          </p>
        </div>

        {/* CTA */}
        <a
          href="mailto:info@vericotte.com"
          className="shrink-0 rounded-md bg-navy px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-dark-navy hover:scale-[1.03]"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
