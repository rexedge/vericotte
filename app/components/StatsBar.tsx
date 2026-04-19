"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

const STATS = [
  { end: 15, suffix: "+", label: "Years of Excellence" },
  { end: 200, suffix: "+", label: "Clients Served" },
  { end: 40, prefix: "₦", suffix: "B+", label: "Assets Managed" },
  { end: 98, suffix: "%", label: "Retention Rate" },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 bg-orange">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:divide-x md:divide-white/25 lg:px-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  end,
  prefix = "",
  suffix = "",
  label,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp(end, 2000, prefix, suffix);

  return (
    <div className="flex flex-col items-center text-center">
      <span
        ref={ref}
        className="text-3xl font-extrabold text-white md:text-4xl"
      >
        {display}
      </span>
      <span className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
        {label}
      </span>
    </div>
  );
}
