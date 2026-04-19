import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import PageLoader from "@/app/components/PageLoader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vericotte — Nigeria's Premier Audit, Tax & Advisory Firm",
  description:
    "Navigating Complexity, Innovating Tomorrow. World-class audit, tax, and advisory services from Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
