import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medical Director Course: How Physicians Land $200K–$400K+ Leadership Roles — ClinX Academy",
  description:
    "ClinX Academy prepares physicians for Medical Director roles — the responsibilities, qualifications, contracts, compensation, and business skills required to compete and succeed.",
};

const steps = [
  {
    number: "01",
    title: "Understand the Role",
    description:
      "Medical Directors oversee clinical quality, utilization management, physician relations, and compliance. Learn what the job actually entails — and how it varies across payers, health systems, MSOs, and startups.",
  },
  {
    number: "02",
    title: "Build Business Fluency",
    description:
      "You need to speak the language of operations: PMPM, capitation, prior authorization, risk adjustment, HEDIS, Stars. ClinX teaches you the financial and operational framework of the organizations you want to lead.",
  },
  {
    number: "03",
    title: "Position Your Credentials",
    description:
      "Most Medical Director searches happen through professional networks, not job boards. Learn how to position your clinical experience as executive value — and build the relationships that lead to opportunities.",
  },
  {
    number: "04",
    title: "Negotiate Your Contract",
    description:
      "Medical Director agreements have unique structures — part-time vs. full-time, equity, RVU targets, restrictive covenants. Know what to ask for and what to watch out for.",
  },
];

const faqs = [
  {
    q: "Do I need an MBA to become a Medical Director?",
    a: "No. An MBA or MHA is helpful for certain roles but not required. What matters more is demonstrating business fluency — understanding how the organization makes money, manages risk, and measures quality. ClinX Academy teaches you that fluency directly.",
  },
  {
    q: "How long does it take to become a Medical Director?",
    a: "It varies by specialty and setting. Clinicians with relevant experience who develop the right business vocabulary and network can land their first Medical Director role in 6–18 months. Some ClinX members have done it faster.",
  },
  {
    q: "What does a Medical Director earn?",
    a: "Compensation varies significantly by setting. Part-time Medical Director roles at payers or MSOs typically pay $150K–$250K. Full-time CMO roles at health systems or large insurers can reach $400K–$600K+. Equity positions in early-stage health companies can exceed that.",
  },
  {
    q: "Can NPs and PAs become Medical Directors?",
    a: "Yes — particularly in outpatient, behavioral health, telehealth, and MSO settings. The role title and scope vary, but the business skills and positioning strategy are the same. ClinX Academy is built for physicians, NPs, and PAs alike.",
  },
  {
    q: "Is this training accredited?",
    a: "ClinX Academy is executive education, not a licensed certification program. The curriculum is taught by practicing physician executives, CMOs, healthcare attorneys, and operators. The value is practical fluency and network, not a credential.",
  },
];

export default function MedicalDirectorCoursePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Medical Director Course</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-6">
                How Physicians Become Medical Directors
              </h1>
              <p className="text-[#4A4A4A] text-xl leading-relaxed mb-8">
                Medical Director is the most accessible executive role for clinicians — and one of the most lucrative. ClinX Academy teaches you the business skills, positioning strategy, and contract knowledge to get there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://members.clinxacademy.com/store" className="btn-primary">
                  Enroll in ClinX Academy
                </a>
                <a href="/contact" className="btn-secondary">
                  Talk to Alex Mohseni, MD
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#1C2331] py-12 border-b border-[#2D3548]">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: "$150K–$400K+", label: "Typical compensation range" },
                { stat: "25+", label: "Expert faculty instructors" },
                { stat: "35+", label: "Hours of curriculum" },
                { stat: "MD / NP / PA", label: "All clinician types welcome" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-3xl text-[#F5F3EF] mb-1">{item.stat}</p>
                  <p className="text-xs text-[#EBE8E2] opacity-60 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 steps */}
        <section className="bg-white py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">The Path</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                Four Things That Actually Move the Needle
              </h2>
            </div>
            <div className="space-y-8 max-w-3xl mx-auto">
              {steps.map((s) => (
                <div key={s.number} className="flex gap-8 items-start">
                  <div className="font-serif text-5xl text-[#D8D4CC] leading-none flex-shrink-0 w-16">
                    {s.number}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#222222] mb-2">{s.title}</h3>
                    <p className="text-[#4A4A4A] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What ClinX teaches */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">What You&apos;ll Learn</p>
                <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-8">
                  The Business Curriculum Behind Every Medical Director Role
                </h2>
                <ul className="space-y-5">
                  {[
                    "Medicare Advantage economics: how MA plans make money and where physicians fit",
                    "Risk adjustment and HCC coding: the engine behind value-based compensation",
                    "Utilization management: prior auth, UM protocols, and clinical criteria",
                    "HEDIS, Stars, and quality metrics that drive payer performance",
                    "MSO/PC structures: how physician management organizations are built",
                    "Contract negotiation: what to look for in a Medical Director agreement",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[#4A4A4A]">
                      <span className="text-[#C45C3E] font-bold mt-1 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="card bg-white p-8">
                  <p className="font-serif text-xl text-[#222222] mb-2">Live Office Hours</p>
                  <p className="text-sm text-[#4A4A4A]">
                    Monthly sessions with Alex Mohseni, MD — ask questions, review your specific situation, and get feedback on your positioning strategy.
                  </p>
                </div>
                <div className="card bg-white p-8">
                  <p className="font-serif text-xl text-[#222222] mb-2">Expert Faculty</p>
                  <p className="text-sm text-[#4A4A4A]">
                    25+ physician executives, CMOs, healthcare attorneys, and operators teaching from real experience — not theory.
                  </p>
                </div>
                <div className="card bg-white p-8">
                  <p className="font-serif text-xl text-[#222222] mb-2">Deal Flow & Community</p>
                  <p className="text-sm text-[#4A4A4A]">
                    Access to a vetted community of physician executives and a curated feed of Medical Director, advisory, and ownership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                Medical Director Career FAQ
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-[#D8D4CC] pb-8">
                  <h3 className="font-serif text-xl text-[#222222] mb-3">{faq.q}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EBE8E2] py-24">
          <div className="container-width text-center">
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
              Your Medical Director Career Starts Here
            </h2>
            <p className="text-[#4A4A4A] text-xl mb-10 max-w-xl mx-auto">
              Join physicians, NPs, and PAs who are learning the business of healthcare and moving into the roles they&apos;ve been working toward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://members.clinxacademy.com/store" className="btn-primary">
                Enroll in ClinX Academy
              </a>
              <a href="/contact" className="btn-secondary">
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
