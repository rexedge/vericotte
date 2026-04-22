"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HOME_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why" },
];

const PAGE_LINKS = [
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allLinks = [...HOME_LINKS, ...PAGE_LINKS];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/logo.png" alt="Vericotte" width={32} height={32} />
          <span className="text-xl font-extrabold tracking-tight text-white">
            Vericotte
            <span className="text-orange">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {allLinks.map((link) => {
            const isActive =
              link.href !== "/" &&
              !link.href.startsWith("/#") &&
              pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 hover:text-orange ${
                  isActive ? "text-orange" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/#cta"
          className="hidden rounded-md bg-orange px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105 md:inline-block"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 md:hidden">
          {allLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#cta"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-md bg-orange px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
