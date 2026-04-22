import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team behind Vericotte — seasoned professionals with global experience across audit, tax, advisory, and technology.",
};

const TEAM = [
  {
    name: "Oladimeji Lawal",
    credentials: "BSc · ACA · CBAP",
    title: "Managing Partner",
    department: "Audit & Assurance",
    image: "https://i.pravatar.cc/400?img=12",
    color: "from-navy to-teal",
    bio: "Nearly a decade of expertise spanning audit, technology consulting, and financial modelling. Formerly with PricewaterhouseCoopers, Kreston, and BerryDunn (New York). Serves clients across banking, oil & gas, manufacturing, and not-for-profit sectors.",
    credentials_detail: [
      "BSc Finance — University of Ilorin",
      "ACA (ICAN)",
      "Certified Business Analysis Professional (CBAP)",
      "Associate, NIM (Chartered)",
    ],
    locations: ["Lagos", "New York"],
  },
  {
    name: "Abdul-Matin Gbadegesin",
    credentials: "BSc · MSc · MBA",
    title: "Partner, Business Advisory",
    department: "Advisory",
    image: "https://i.pravatar.cc/400?img=15",
    color: "from-teal to-grad-teal",
    bio: "Strategist and Business Transformation Consultant with a track record across Technology, EPC, Finance, Logistics, and Oil & Gas. Extensive cross-border experience in Nigeria, Kenya, and Brazil.",
    credentials_detail: [
      "BSc Accounting",
      "MSc Management — University of Lagos",
      "MBA — National Open University of Nigeria",
      "CFI & University of Minnesota Certifications",
    ],
    locations: ["Lagos", "Nairobi", "São Paulo"],
  },
  {
    name: "Sheu Olatunji",
    credentials: "BSc · APICS-CSCP · PMP",
    title: "Partner, Technology Consulting",
    department: "Technology",
    image: "https://i.pravatar.cc/400?img=11",
    color: "from-navy to-dark-navy",
    bio: "Over two decades of digital transformation and enterprise architecture expertise. Career includes pivotal roles at Thermo Fisher Scientific, Amazon, Maersk, and Adecco Group across Nigeria and the United Kingdom.",
    credentials_detail: [
      "BSc Finance — University of Ilorin",
      "Certified Supply Chain Professional (APICS-CSCP)",
      "Project Management Professional (PMP)",
      "Certified Scrum Master · Scrum Product Owner",
    ],
    locations: ["Lagos", "London"],
  },
  {
    name: "Fatimah Lawal",
    credentials: "BSc · ACA",
    title: "Partner, Corporate Accounting & Advisory",
    department: "Accounting",
    image: "https://i.pravatar.cc/400?img=49",
    color: "from-teal to-navy",
    bio: "Leads the Corporate Accounting and Tax Services unit with relentless commitment to quality. Significant contributions across professional services, entertainment, hospitality, and real estate.",
    credentials_detail: ["BSc Finance — University of Ilorin", "ACA (ICAN)"],
    locations: ["Lagos"],
  },
  {
    name: "Adeoye Hafeez Abiola",
    credentials: "BSc · ACA · ITS",
    title: "Partner, Tax Compliance & Advisory",
    department: "Tax",
    image: "https://i.pravatar.cc/400?img=14",
    color: "from-grad-teal to-teal",
    bio: "Distinguished tax professional covering compliance, transfer pricing, and international taxation. Recognized specialist in multi-jurisdiction tax regimes across Nigeria, Kenya, Ghana, Zambia, and DRC.",
    credentials_detail: [
      "BSc Business Administration",
      "ACA (ICAN)",
      "International Tax Specialist (ITS)",
    ],
    locations: ["Lagos", "Nairobi", "Accra"],
  },
];

const DEPT_COLORS: Record<string, string> = {
  "Audit & Assurance": "bg-cyan/10 text-cyan border-cyan/20",
  Advisory: "bg-orange/10 text-orange border-orange/20",
  Technology: "bg-amber/10 text-amber border-amber/20",
  Accounting: "bg-teal/20 text-teal border-teal/30",
  Tax: "bg-warm-orange/10 text-warm-orange border-warm-orange/20",
};

export default function TeamPage() {
  return (
    <main className="bg-off-white min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_-10%,rgba(10,159,191,0.2)_0%,transparent_55%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange mb-4">
              The People Behind the Work
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Our Leadership
              <br />
              <span className="text-white/30">Team.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/55 max-w-lg">
              A diverse blend of local insight and global experience — united by
              a single commitment to your success.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-10">
            {[
              { value: "5", label: "Senior Partners" },
              { value: "20+", label: "Years Combined Experience" },
              { value: "4", label: "Countries of Practice" },
              { value: "Big-4", label: "Alumni Network" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-orange">{s.value}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-navy/8 shadow-sm shadow-navy/5 hover:shadow-xl hover:shadow-navy/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${member.color} opacity-90`}
                />
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover object-top mix-blend-overlay opacity-60"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3}
                />
                {/* Dept badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${DEPT_COLORS[member.department]}`}
                  >
                    {member.department}
                  </span>
                </div>
                {/* Location pills */}
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  {member.locations.map((loc) => (
                    <span
                      key={loc}
                      className="rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur-sm"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-extrabold tracking-tight text-navy">
                      {member.name}
                    </h2>
                    <p className="text-[11px] font-semibold text-charcoal/50 mt-0.5">
                      {member.credentials}
                    </p>
                  </div>
                </div>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.15em] text-orange">
                  {member.title}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-charcoal/65 flex-1">
                  {member.bio}
                </p>

                {/* Credentials list */}
                <div className="mt-5 border-t border-navy/8 pt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-charcoal/30">
                    Qualifications
                  </p>
                  <ul className="space-y-1">
                    {member.credentials_detail.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-[11px] text-charcoal/60"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-orange" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values stripe ── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange mb-3">
                Our Edge
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Diverse by design,
                <br />
                <span className="text-white/30">united by purpose.</span>
              </h2>
            </div>
            {[
              {
                title: "Global Alumni, Local Roots",
                body: "Our partners trained at Big-4 firms and global corporations across four continents — bringing world-class rigour to Nigerian business realities.",
              },
              {
                title: "Youthful Energy, Seasoned Judgement",
                body: "We combine the agility of a new-era firm with the depth of seasoned professionals who have navigated complex, high-stakes engagements.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l border-orange/30 pl-6">
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-off-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Want to be part of this team?
          </h2>
          <p className="mt-3 text-sm text-charcoal/60">
            We are always looking for exceptional professionals to join us.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105"
          >
            View Open Roles →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
