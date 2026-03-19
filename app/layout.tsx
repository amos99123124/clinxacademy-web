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
  title: "ClinX Academy — Physician Business & Career Education",
  description:
    "ClinX Academy equips physicians with the business, entrepreneurship, and career skills that medical school never taught. CME-eligible courses, expert faculty, and a community of driven clinicians.",
  keywords: [
    "physician business education",
    "doctor entrepreneurship",
    "CME courses",
    "physician career development",
    "medical business training",
    "ClinX Academy",
  ],
  openGraph: {
    title: "ClinX Academy — Physician Business & Career Education",
    description:
      "ClinX Academy equips physicians with the business, entrepreneurship, and career skills that medical school never taught.",
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
    title: "ClinX Academy — Physician Business & Career Education",
    description:
      "Equipping physicians with business skills that medical school never taught.",
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
