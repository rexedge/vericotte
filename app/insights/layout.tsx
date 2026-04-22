import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Publications",
  description:
    "Expert analysis on tax, audit, advisory, and technology — through a Nigerian business lens.",
  openGraph: {
    title: "Insights & Publications | Vericotte",
    description:
      "Expert analysis on tax, audit, advisory, and technology — through a Nigerian business lens.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
