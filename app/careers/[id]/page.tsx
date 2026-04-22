import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ROLES, DEPT_ACCENT, TYPE_ACCENT } from "@/app/lib/careers";

export function generateStaticParams() {
  return ROLES.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const role = ROLES.find((r) => r.id === id);
  if (!role) return {};
  return {
    title: role.title,
    description: `${role.department} · ${role.type} · ${role.location}. ${role.description}`,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const role = ROLES.find((r) => r.id === id);
  if (!role) notFound();

  const deptAccent = DEPT_ACCENT[role.department] ?? {
    bg: "bg-navy/8",
    text: "text-navy",
    border: "border-navy/15",
  };
  const typeAccent = TYPE_ACCENT[role.type] ?? "bg-navy/8 text-navy";

  const otherRoles = ROLES.filter((r) => r.id !== role.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_120%,rgba(234,93,5,0.18)_0%,transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(10,159,191,0.15)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-white/45">
            <Link
              href="/careers"
              className="hover:text-white transition-colors"
            >
              Careers
            </Link>
            <span>/</span>
            <span className="text-white/70">{role.department}</span>
          </nav>

          {/* Badges */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${deptAccent.bg} ${deptAccent.text} ${deptAccent.border}`}
            >
              {role.department}
            </span>
            <span
              className={`rounded-full px-3 py-0.5 text-[10px] font-semibold ${typeAccent}`}
            >
              {role.type}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
            {role.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/50">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            {role.location}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* ── Left: Details ── */}
          <div className="lg:col-span-2 space-y-10">
            {/* About the Role */}
            <div>
              <h2 className="mb-4 text-xl font-extrabold text-navy">
                About the Role
              </h2>
              <p className="text-base leading-relaxed text-charcoal/75">
                {role.description}
              </p>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="mb-4 text-xl font-extrabold text-navy">
                What We&apos;re Looking For
              </h2>
              <ul className="space-y-3">
                {role.requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-sm text-charcoal/75"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <svg
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Life at Vericotte */}
            <div className="rounded-2xl border border-navy/8 bg-white p-8">
              <h2 className="mb-3 text-xl font-extrabold text-navy">
                Life at Vericotte
              </h2>
              <p className="text-sm leading-relaxed text-charcoal/65">
                Vericotte is a next-generation professional services firm
                redefining audit, tax, advisory, and technology consulting in
                Nigeria and across West Africa. We combine deep technical
                expertise with genuine client partnership — and we invest in the
                people who make that possible. You&apos;ll work alongside
                specialists who care about getting things right, in an
                environment where your growth is taken seriously.
              </p>
            </div>
          </div>

          {/* ── Right: Apply Card ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm shadow-navy/5">
              <h3 className="mb-1 text-lg font-extrabold text-navy">
                {role.title}
              </h3>
              <div className="mt-3 space-y-2 text-sm text-charcoal/60">
                <p>
                  <span className="font-semibold text-navy">Department:</span>{" "}
                  {role.department}
                </p>
                <p>
                  <span className="font-semibold text-navy">Type:</span>{" "}
                  {role.type}
                </p>
                <p>
                  <span className="font-semibold text-navy">Location:</span>{" "}
                  {role.location}
                </p>
              </div>
              <div className="mt-6 border-t border-navy/8 pt-6">
                <a
                  href={`mailto:careers@vericotte.com?subject=Application: ${role.title}`}
                  className="block w-full rounded-lg bg-orange py-3.5 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-[1.02]"
                >
                  Apply for this Role
                </a>
                <p className="mt-3 text-center text-[11px] text-charcoal/40">
                  Sends to careers@vericotte.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Other Open Roles ── */}
      {otherRoles.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
              Explore More
            </p>
            <h2 className="mb-10 text-2xl font-extrabold tracking-tight text-navy">
              Other Open Roles
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherRoles.map((other) => {
                const oDept = DEPT_ACCENT[other.department] ?? {
                  bg: "bg-navy/8",
                  text: "text-navy",
                  border: "border-navy/15",
                };
                const oType = TYPE_ACCENT[other.type] ?? "bg-navy/8 text-navy";
                return (
                  <Link
                    key={other.id}
                    href={`/careers/${other.id}`}
                    className="group block rounded-2xl border border-navy/8 bg-off-white p-6 transition-all duration-300 hover:border-orange/20 hover:bg-white hover:shadow-md hover:shadow-orange/5 hover:-translate-y-0.5"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${oDept.bg} ${oDept.text} ${oDept.border}`}
                      >
                        {other.department}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold ${oType}`}
                      >
                        {other.type}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy group-hover:text-orange transition-colors">
                      {other.title}
                    </h3>
                    <p className="mt-1 text-xs text-charcoal/50">
                      {other.location}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                      View Details →
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
