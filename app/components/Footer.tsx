const FOOTER_LINKS = {
  Services: [
    { label: "Audit & Assurance", href: "#services" },
    { label: "Tax Advisory", href: "#services" },
    { label: "Business Advisory", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Why Vericotte", href: "#why" },
    { label: "Testimonials", href: "#testimonials" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0C1C26]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Col 1 — Logo & tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <polygon
                  points="8,4 24,4 20,28 4,28"
                  fill="#0A9FBF"
                  opacity="0.8"
                />
                <polygon
                  points="12,4 28,4 24,28 8,28"
                  fill="#EA5D05"
                  opacity="0.7"
                />
              </svg>
              <span className="text-lg font-extrabold text-white">
                Vericotte<span className="text-orange">.</span>
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              Navigating Complexity,
              <br />
              Innovating Tomorrow.
            </p>
          </div>

          {/* Service links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors duration-200 hover:text-orange"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              <li>Lagos, Nigeria</li>
              <li>
                <a
                  href="mailto:info@vericotte.com"
                  className="transition-colors duration-200 hover:text-orange"
                >
                  info@vericotte.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2341234567890"
                  className="transition-colors duration-200 hover:text-orange"
                >
                  +234 (0) 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} Vericotte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
