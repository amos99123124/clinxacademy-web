import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Physician Executive Training: Business of Healthcare for Doctors — ClinX Academy",
  description:
    "ClinX Academy trains physicians, NPs, and PAs in the business skills needed for executive roles — Medicare Advantage, risk contracting, MSO/PC structures, revenue cycle, and healthcare leadership.",
};

const modules = [
  {
    title: "Medicare Advantage Economics",
    description:
      "How MA plans work, risk adjustment (RAF scores, HCC coding), Stars ratings, capitation, and what drives physician compensation in value-based models.",
  },
  {
    title: "Risk Contracting & Value-Based Care",
    description:
      "Capitation, PMPM, shared savings, full-risk vs. partial-risk arrangements. How to read and negotiate a risk contract.",
  },
  {
    title: "MSO / PC Ownership Structures",
    description:
      "How management services organizations and professional corporations are structured, how physicians gain equity, and how the DSO/MSO model works in practice.",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "Coding, billing, prior authorization, denial management, and AR optimization — from a leadership and P&L perspective.",
  },
  {
    title: "Health Technology & Digital Health",
    description:
      "How health tech companies are structured, funded, and where physician executives add the most value as advisors, operators, and board members.",
  },
  {
    title: "Physician Leadership & Finance",
    description:
      "Financial statement literacy, budgeting, contract negotiation, organizational strategy, and how to communicate as an executive.",
  },
];

const roles = [
  { title: "Medical Director", range: "$150K–$400K+" },
  { title: "Chief Medical Officer", range: "$300K–$600K+" },
  { title: "VP Medical Affairs", range: "$250K–$450K+" },
  { title: "Friendly PC Owner", range: "$200K–$500K+" },
  { title: "Health Tech Advisor", range: "$50K–$200K+" },
  { title: "ACO / VBC Executive", range: "$200K–$400K+" },
];

export default function PhysicianExecutiveTrainingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Physician Executive Training</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-6">
                The Business Education Medical School Never Taught You
              </h1>
              <p className="text-[#4A4A4A] text-xl leading-relaxed mb-8">
                ClinX Academy teaches physicians, NPs, and PAs how healthcare actually works as a business — so you can compete for Medical Director, CMO, and executive roles that pay $200K–$600K+.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://members.clinxacademy.com/store" className="btn-primary">
                  Enroll in ClinX Academy
                </a>
                <a href="/contact" className="btn-secondary">
                  Schedule a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-white py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The Gap</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
                You spent a decade learning medicine. Nobody taught you how the business works.
              </h2>
              <div className="space-y-4 text-[#4A4A4A] text-lg leading-relaxed">
                <p>
                  Physicians are among the most educated professionals in the world — and among the least equipped for the executive roles that control healthcare. Risk contracts, capitation models, MSO structures, HCC coding, MA economics — these are the fluency requirements for leadership. They are not taught in medical school, residency, or fellowship.
                </p>
                <p>
                  The result: clinicians with decades of expertise get passed over for executive roles in favor of MBAs who have never seen a patient. ClinX Academy fixes that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Curriculum</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                35+ Hours Across 6 Core Business Domains
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m) => (
                <div key={m.title} className="card bg-white p-8">
                  <h3 className="font-serif text-xl text-[#222222] mb-3">{m.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="bg-[#1C2331] py-24 border-b border-[#2D3548]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
                Career Outcomes
              </p>
              <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight">
                The Roles ClinX Members Pursue
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((r) => (
                <div
                  key={r.title}
                  className="border border-[#2D3548] rounded-lg p-8 text-center"
                >
                  <p className="font-serif text-xl text-[#F5F3EF] mb-2">{r.title}</p>
                  <p className="text-[#C45C3E] font-semibold text-sm">{r.range}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-white py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">Who It&apos;s For</p>
                <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
                  Built for Clinicians. Not MBAs.
                </h2>
                <ul className="space-y-4 text-[#4A4A4A] text-lg">
                  {[
                    "Physicians (MD/DO) who want to move into executive or leadership roles",
                    "Nurse Practitioners and Physician Assistants pursuing medical director or administrative roles",
                    "Practicing clinicians who want to diversify income through non-clinical work",
                    "Residents and fellows who want to understand the business before they sign their first contract",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#C45C3E] font-bold mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F5F3EF] rounded-2xl p-10">
                <p className="font-serif text-2xl text-[#222222] mb-4 leading-snug">
                  &ldquo;ClinX gave me the vocabulary and the framework to walk into executive conversations with confidence. I landed a Medical Director role within 6 months.&rdquo;
                </p>
                <p className="text-[#4A4A4A] text-sm font-semibold">— ClinX Academy Member, MD</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EBE8E2] py-24">
          <div className="container-width text-center">
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
              Ready to Learn the Business of Healthcare?
            </h2>
            <p className="text-[#4A4A4A] text-xl mb-10 max-w-xl mx-auto">
              35+ hours of curriculum. 25+ expert faculty. Live office hours with Alex Mohseni, MD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://members.clinxacademy.com/store" className="btn-primary">
                Enroll Now
              </a>
              <a href="/contact" className="btn-secondary">
                Schedule a Call with Alex
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
