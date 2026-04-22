"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  ARTICLES,
  CATEGORIES,
  CATEGORY_COLORS,
  type Category,
} from "@/app/lib/insights";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const featured = ARTICLES.find((a) => a.featured)!;
  const gridArticles = ARTICLES.filter((a) => !a.featured).filter(
    (a) => activeCategory === "All" || a.category === activeCategory,
  );

  // If a filter is active that excludes the featured article's category, show it in grid too
  const showFeatured =
    activeCategory === "All" || activeCategory === featured.category;

  const allFiltered =
    activeCategory === "All"
      ? ARTICLES.filter((a) => !a.featured)
      : ARTICLES.filter(
          (a) => a.category === activeCategory && !a.featured,
        ).concat(featured.category === activeCategory ? [featured] : []);

  const displayGrid = activeCategory === "All" ? gridArticles : allFiltered;

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      {/* ── Page Header ── */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(10,159,191,0.18)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(234,93,5,0.12)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange">
                Knowledge & Perspectives
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl">
                Insights &amp;
                <br />
                <span className="text-white/30">Publications.</span>
              </h1>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/45 sm:text-right">
              Expert analysis on tax, audit, advisory, and technology — through
              a Nigerian business lens.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      {showFeatured && (
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">
            Featured
          </p>
          <Link
            href={`/insights/${featured.slug}`}
            className="group relative overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-navy/20 transition-all duration-500 hover:shadow-navy/30 block"
          >
            <div className="grid lg:grid-cols-5">
              {/* Image */}
              <div className="relative h-64 overflow-hidden lg:col-span-3 lg:h-auto lg:min-h-105">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-navy/60 lg:block hidden" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
                <span
                  className={`mb-4 inline-block self-start rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${CATEGORY_COLORS[featured.category]}`}
                >
                  {featured.category}
                </span>
                <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-white lg:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs font-bold text-white">
                      {featured.author}
                    </p>
                    <p className="text-[10px] text-white/40">
                      {featured.authorTitle}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-[11px] text-white/35">
                      {featured.date}
                    </span>
                    <span className="text-[11px] text-orange">
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Category Filter + Grid ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-navy/10 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-navy text-white"
                  : "bg-white border border-navy/10 text-charcoal/50 hover:border-navy/25 hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
          {activeCategory !== "All" && (
            <span className="ml-2 self-center text-xs text-charcoal/40">
              {displayGrid.length} article{displayGrid.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Article Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {displayGrid.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm shadow-navy/5 hover:shadow-xl hover:shadow-navy/10 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-navy/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/25 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${CATEGORY_COLORS[article.category]}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-3 text-[11px] text-charcoal/40">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-charcoal/20" />
                  <span className="text-orange font-semibold">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-snug text-navy group-hover:text-orange transition-colors duration-200 flex-1">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/55 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-navy/8 pt-4">
                  <div>
                    <p className="text-xs font-bold text-navy">
                      {article.author}
                    </p>
                    <p className="text-[10px] text-charcoal/40">
                      {article.authorTitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {displayGrid.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-charcoal/40 text-sm">
              No articles in this category yet. Check back soon.
            </p>
          </div>
        )}
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            Stay Informed
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Get insights in your inbox.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/45">
            Subscribe to the Vericotte Intelligence Brief — our periodic roundup
            of tax, regulatory, and business intelligence for Nigerian
            executives.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-lg border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-orange focus:bg-white/15 transition-all duration-200 sm:w-72"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-white/25">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
