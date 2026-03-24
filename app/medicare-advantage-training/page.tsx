import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medicare Advantage Training for Physicians: Risk, Revenue & the MA Playbook — ClinX Academy",
  description:
    "Learn how Medicare Advantage actually works — risk adjustment, HCC coding, Stars ratings, capitation, and MA economics — taught for physicians entering executive and leadership roles.",
};

const concepts = [
  {
    title: "How MA Plans Make Money",
    description:
      "Medicare Advantage plans receive a risk-adjusted premium from CMS for each enrollee. The higher the risk score (RAF), the higher the payment. Understanding this model is foundational to every executive conversation in MA.",
  },
  {
    title: "Risk Adjustment & HCC Coding",
    description:
      "Hierarchical Condition Categories (HCCs) determine how much CMS pays a plan per member. Accurate documentation drives revenue. Physician executives need to understand RAF scores, HCC mapping, and the relationship between documentation and payment.",
  },
  {
    title: "Stars Ratings & Quality Metrics",
    description:
      "CMS awards quality bonuses to MA plans based on Stars ratings. HEDIS measures, member satisfaction, and chronic disease management all feed into Stars. Leaders need to know how Stars affects the plan's financial performance.",
  },
  {
    title: "Capitation & PMPM Economics",
    description:
      "Most MA provider contracts involve capitation — a fixed per-member-per-month payment. Understanding how to manage clinical cost under a capitated model is the core competency of value-based care leadership.",
  },
  {
    title: "Shared Savings & Full-Risk Contracts",
    description:
      "From partial risk to global capitation — physician executives need to understand the risk spectrum, how shared savings arrangements are structured, and how to negotiate a contract that aligns incentives.",
  },
  {
    title: "Prior Authorization & Utilization Management",
    description:
      "MA plans manage cost through utilization management. Clinical leadership in MA means understanding PA criteria, UM protocols, appeals, and how to balance member care with plan economics.",
  },
];

export default function MedicareAdvantageTrainingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Medicare Advantage Training</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-6">
                Medicare Advantage: What Every Physician Executive Needs to Know
              </h1>
              <p className="text-[#4A4A4A] text-xl leading-relaxed mb-8">
                MA now covers more than half of all Medicare enrollees. Every major payer, health system, and MSO is built around MA economics. If you want to lead in healthcare, you need to understand this model deeply — not just clinically, but financially and operationally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://members.clinxacademy.com/store" className="btn-primary">
                  Enroll in ClinX Academy
                </a>
                <a href="/medicare-cheat-sheet" className="btn-secondary">
                  Get the Free Medicare Cheat Sheet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="bg-[#1C2331] py-20 border-b border-[#2D3548]">
          <div className="container-width">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
                Why This Matters
              </p>
              <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight mb-8">
                MA is the dominant business model in American healthcare — and most physicians can&apos;t explain how it works.
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { stat: "54%", label: "of Medicare enrollees now in MA plans" },
                  { stat: "$400B+", label: "in annual MA premiums paid by CMS" },
                  { stat: "#1", label: "topic in physician executive job interviews" },
                ].map((item) => (
                  <div key={item.label} className="border border-[#2D3548] rounded-lg p-8">
                    <p className="font-serif text-4xl text-[#F5F3EF] mb-2">{item.stat}</p>
                    <p className="text-sm text-[#EBE8E2] opacity-60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core concepts */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">What You&apos;ll Learn</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                The Core MA Concepts Taught in ClinX Academy
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {concepts.map((c) => (
                <div key={c.title} className="card bg-white p-8">
                  <h3 className="font-serif text-xl text-[#222222] mb-3">{c.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who teaches it */}
        <section className="bg-white py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">The Instructor</p>
                <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
                  Taught by Alex Mohseni, MD — and 25+ Physician Executives
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
                  ClinX Academy was built by Alex Mohseni, MD, to give clinicians the business education he wished he had. The MA curriculum is taught by physicians who have negotiated risk contracts, run MA-focused organizations, and sat at the table with payers.
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed">
                  This is not an academic course. It is operational knowledge from people who use it every day.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Risk adjustment strategy and HCC documentation improvement",
                  "MA plan operations: what the medical director actually does",
                  "Capitation modeling and cost of care management",
                  "Stars performance programs and HEDIS gap closure",
                  "MA contract negotiation from the physician side",
                  "How to read an MA plan's financial statements",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[#4A4A4A]">
                    <span className="text-[#C45C3E] font-bold flex-shrink-0">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="bg-[#EBE8E2] py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="eyebrow mb-4">Free Resources</p>
              <h2 className="font-serif text-3xl text-[#222222] leading-tight">
                Start Here Before You Enroll
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="/medicare-cheat-sheet" className="card bg-white p-8 block hover:shadow-md transition-shadow">
                <p className="font-serif text-xl text-[#222222] mb-2">Medicare Cheat Sheet</p>
                <p className="text-sm text-[#4A4A4A]">
                  Plain-language overview of Medicare program types, MA economics, and the payment structures every physician leader should know.
                </p>
                <p className="text-[#C45C3E] text-sm font-semibold mt-4">Download free →</p>
              </a>
              <a href="/get-non-clinical-jobs-guide-pdf" className="card bg-white p-8 block hover:shadow-md transition-shadow">
                <p className="font-serif text-xl text-[#222222] mb-2">Non-Clinical Jobs Guide</p>
                <p className="text-sm text-[#4A4A4A]">
                  Comprehensive guide to the executive roles where MA expertise is most valuable — Medical Director, CMO, VP of Medical Affairs, and beyond.
                </p>
                <p className="text-[#C45C3E] text-sm font-semibold mt-4">Download free →</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C2331] py-24">
          <div className="container-width text-center">
            <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
              Enroll Today
            </p>
            <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight mb-6">
              Learn Medicare Advantage from the Inside Out
            </h2>
            <p className="text-[#EBE8E2] opacity-70 text-xl mb-10 max-w-xl mx-auto">
              35+ hours of curriculum. 25+ expert faculty. The MA knowledge that opens executive doors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://members.clinxacademy.com/store" className="btn-primary">
                Enroll in ClinX Academy
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
