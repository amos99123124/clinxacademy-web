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
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinX Academy | Non-Clinical Physician Jobs & Executive Careers",
    description:
      "The executive accelerator for physicians, NPs & PAs seeking non-clinical careers.",
  },
  metadataBase: new URL("https://clinxacademy.com"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClinX Academy",
  url: "https://clinxacademy.com",
  logo: "https://clinxacademy.com/logo.png",
  foundingDate: "2025",
  description:
    "Executive education for physicians, NPs, and PAs — the business of healthcare taught by clinicians, for clinicians.",
  sameAs: ["https://www.linkedin.com/company/clinx-academy"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@clinxacademy.com",
    contactType: "customer service",
  },
  founder: {
    "@type": "Person",
    name: "Alex Mohseni",
    honorificSuffix: "MD",
    jobTitle: "Founder & Lead Instructor",
    url: "https://clinxacademy.com/about",
    knowsAbout: [
      "Medicare Advantage",
      "Value-based care",
      "Physician executive education",
      "Healthcare business strategy",
      "MSO/PC structures",
      "Risk contracting",
    ],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "ClinX Academy Executive Accelerator",
  description:
    "35+ hours of curriculum covering Medicare Advantage economics, risk contracting, MSO/PC ownership structures, revenue cycle management, value-based care, and health technology — designed for physicians, NPs, and PAs entering executive and leadership roles.",
  url: "https://clinxacademy.com",
  provider: {
    "@type": "Organization",
    name: "ClinX Academy",
    url: "https://clinxacademy.com",
  },
  instructor: {
    "@type": "Person",
    name: "Alex Mohseni",
    honorificSuffix: "MD",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "PT35H",
  },
  educationalLevel: "Professional",
  audience: {
    "@type": "Audience",
    audienceType: "Physicians, Nurse Practitioners, Physician Assistants",
  },
  about: [
    "Medicare Advantage",
    "Risk contracting",
    "Healthcare leadership",
    "Non-clinical physician careers",
    "Physician executive education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
