import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClinX Academy | Non-Clinical Physician Jobs, Physician Side Gigs & Executive Careers for Clinicians",
  description:
    "The executive accelerator for physicians, NPs & PAs seeking non-clinical careers. 35+ hours of content, 25+ expert faculty, $300K–$600K+ earning potential.",
  keywords: [
    "non-clinical physician jobs",
    "physician side gigs",
    "medical director",
    "chief medical officer",
    "physician career",
    "ClinX Academy",
    "healthcare executive",
    "friendly PC owner",
  ],
  openGraph: {
    title: "ClinX Academy | Non-Clinical Physician Jobs & Executive Careers",
    description:
      "The executive accelerator for physicians, NPs & PAs seeking non-clinical careers. 35+ hours of content, 25+ expert faculty.",
    url: "https://clinxacademy.com",
    siteName: "ClinX Academy",
    type: "website",
    images: [
      {
        url: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/hl_3rqwVJ_WzqSKlUH4iONGHGA/settings_images/OP3OqGFoSFi1eKIVe99S_logo.png",
        width: 1200,
        height: 630,
        alt: "ClinX Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinX Academy | Non-Clinical Physician Jobs & Executive Careers",
    description:
      "The executive accelerator for physicians, NPs & PAs seeking non-clinical careers.",
  },
  metadataBase: new URL("https://clinxacademy.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
