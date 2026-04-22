import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-off-white">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-40 text-center lg:px-8">
        {/* Large 404 */}
        <p className="select-none text-[10rem] font-extrabold leading-none tracking-tighter text-navy/8 lg:text-[16rem]">
          404
        </p>

        {/* Content overlay */}
        <div className="-mt-16 lg:-mt-24">
          <span className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange">
            Page Not Found
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy lg:text-5xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-charcoal/70">
            The link may be broken, the page may have moved, or you may have
            typed the address incorrectly.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-orange/30 transition-all duration-200 hover:bg-warm-orange hover:shadow-lg hover:shadow-orange/40 hover:-translate-y-0.5"
            >
              ← Go to Homepage
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-3.5 text-sm font-bold text-navy transition-all duration-200 hover:border-navy/40 hover:shadow-md hover:-translate-y-0.5"
            >
              Browse Insights
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal/50">
              Or try one of these
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Our Team", href: "/team" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-navy/15 bg-white px-4 py-1.5 text-sm font-medium text-navy/70 transition-colors duration-200 hover:border-navy/30 hover:text-navy"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
