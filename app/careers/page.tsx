import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { ROLES, DEPT_ACCENT, TYPE_ACCENT } from "@/app/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a remarkable career at Vericotte. We're looking for bold, curious professionals ready to shape Nigeria's business future.",
};

const PERKS = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 3L2 9l10 6 10-6-10-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 15l10 6 10-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Accelerated Growth",
    body: "Work directly with senior partners on complex, multi-million-naira engagements from day one — no waiting to be relevant.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2 12h4M18 12h4M12 2v4M12 18v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Global Network",
    body: "Join a firm with an alumni network spanning Big-4 and global corporations across four continents — and grow your own network from the start.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M9 3H5a2 2 0 00-2 2v4M9 3h6M9 3v18m6-18H19a2 2 0 012 2v4M15 3v18M3 9h18M3 15h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Innovation First",
    body: "We bring technology into the core of every engagement — offering you the chance to work at the intersection of advisory and digital transformation.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Real Impact",
    body: "Help Nigerian businesses navigate complexity at a pivotal moment in the economy. Your work matters — to clients, to sectors, to the country.",
  },
];
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_120%,rgba(234,93,5,0.18)_0%,transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(10,159,191,0.15)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange">
              Join Our Firm
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Shape Nigeria&apos;s
              <br />
              Business Future.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">
              We&apos;re building a professional services firm that actually
              moves the needle — for clients and for the professionals who serve
              them. Come build it with us.
            </p>
            <a
              href="#open-roles"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-orange px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105"
            >
              See Open Roles
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            Why Vericotte
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-4xl">
            More than a job.
            <br />
            <span className="text-navy/30">A career that counts.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="group rounded-2xl border border-navy/8 bg-white p-7 shadow-sm shadow-navy/5 hover:shadow-lg hover:shadow-navy/8 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                {perk.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-navy">
                {perk.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/60">
                {perk.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="open-roles" className="bg-white py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
                Open Positions
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                {ROLES.length} roles available
              </h2>
            </div>
            <p className="text-sm text-charcoal/50 sm:text-right">
              Lagos, Nigeria &mdash; all roles
            </p>
          </div>

          <div className="space-y-4">
            {ROLES.map((role) => {
              const deptAccent = DEPT_ACCENT[role.department] ?? {
                bg: "bg-navy/8",
                text: "text-navy",
                border: "border-navy/15",
              };
              const typeAccent =
                TYPE_ACCENT[role.type] ?? "bg-navy/8 text-navy";

              return (
                <div
                  key={role.id}
                  className="group rounded-2xl border border-navy/8 bg-off-white p-6 transition-all duration-300 hover:border-orange/20 hover:bg-white hover:shadow-md hover:shadow-orange/5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
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
                      <h3 className="text-lg font-bold text-navy">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                        {role.description}
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2">
                        {role.requirements.map((req) => (
                          <li
                            key={req}
                            className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy/60"
                          >
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="shrink-0 sm:mt-1 flex flex-col gap-2 items-end">
                      <Link
                        href={`/careers/${role.id}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-teal"
                      >
                        View Details →
                      </Link>
                      <a
                        href={`mailto:careers@vericotte.com?subject=Application: ${role.title}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-orange/30 bg-orange/5 px-5 py-2.5 text-sm font-bold text-orange transition-all duration-200 hover:bg-orange hover:text-white hover:border-orange"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Direct Application CTA ── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            Don&apos;t See Your Role?
          </p>
          <h2 className="text-3xl font-extrabold text-white">
            Send us your CV anyway.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
            We&apos;re always open to conversations with exceptional talent. If
            you&apos;re passionate about professional services in Africa,
            let&apos;s talk.
          </p>
          <a
            href="mailto:careers@vericotte.com"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-orange px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            careers@vericotte.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
