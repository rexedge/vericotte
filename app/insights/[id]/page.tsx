import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ARTICLES, CATEGORY_COLORS } from "@/app/lib/insights";
import SubscribeForm from "@/app/components/SubscribeForm";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ id: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.slug === id);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, width: 800, height: 450 }],
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.slug === id);
  if (!article) notFound();

  const categoryColor =
    CATEGORY_COLORS[article.category] ?? "bg-navy/8 text-navy border-navy/15";
  const related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      {/* ── Hero Image ── */}
      <div className="relative h-[420px] w-full overflow-hidden lg:h-[550px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/40 to-transparent" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-white/55">
              <Link
                href="/insights"
                className="hover:text-white transition-colors"
              >
                Insights
              </Link>
              <span>/</span>
              <span className="text-white/80">{article.category}</span>
            </nav>

            {/* Category badge */}
            <span
              className={`mb-4 inline-block rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryColor}`}
            >
              {article.category}
            </span>

            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Author row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-navy/8 pb-8 text-sm text-charcoal/60">
          <span className="font-semibold text-navy">{article.author}</span>
          <span>{article.authorTitle}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Lead paragraph */}
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          {article.excerpt}
        </p>

        {/* Subscribe CTA */}
        <div className="mt-12 rounded-2xl bg-navy px-8 py-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            Vericotte Intelligence Brief
          </p>
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">
            Get the full analysis.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/55">
            Subscribe to the Vericotte Intelligence Brief for deep dives,
            regulatory updates, and strategic commentary — delivered to your
            inbox.
          </p>
          <SubscribeForm
            formClassName="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
              Related
            </p>
            <h2 className="mb-10 text-2xl font-extrabold tracking-tight text-navy">
              More on {article.category}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => {
                const relColor =
                  CATEGORY_COLORS[rel.category] ??
                  "bg-navy/8 text-navy border-navy/15";
                return (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-navy/8 bg-off-white transition-all duration-300 hover:shadow-lg hover:shadow-navy/8 hover:-translate-y-0.5"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${relColor}`}
                      >
                        {rel.category}
                      </span>
                      <h3 className="text-sm font-bold leading-snug text-navy group-hover:text-orange transition-colors">
                        {rel.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-charcoal/50">
                        {rel.date} · {rel.readTime}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            Stay Informed
          </p>
          <h2 className="text-3xl font-extrabold text-white">
            Intelligence for decision-makers.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
            Receive Vericotte&apos;s latest insights on tax, audit, advisory,
            and technology — directly in your inbox.
          </p>
          <SubscribeForm
            formClassName="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            inputClassName="flex-1 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20"
            buttonClassName="rounded-lg bg-orange px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105"
            placeholder="Your work email"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
