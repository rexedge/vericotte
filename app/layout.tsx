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
  metadataBase: new URL("https://vericotte.com"),
  title: {
    default: "Vericotte — Audit, Tax & Advisory | Nigeria",
    template: "%s | Vericotte",
  },
  description:
    "Navigating Complexity, Innovating Tomorrow. World-class audit, tax, and advisory services from Lagos, Nigeria.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://vericotte.com",
    siteName: "Vericotte",
    title: "Vericotte — Audit, Tax & Advisory | Nigeria",
    description:
      "Navigating Complexity, Innovating Tomorrow. World-class audit, tax, and advisory services from Lagos, Nigeria.",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Vericotte — Professional Services Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vericotte — Audit, Tax & Advisory | Nigeria",
    description:
      "Navigating Complexity, Innovating Tomorrow. World-class audit, tax, and advisory services from Lagos, Nigeria.",
    images: ["/logo-full.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
