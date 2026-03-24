import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Friendly PC Owner: What Physicians Need to Know Before Signing — ClinX Academy",
  description:
    "Thinking about becoming a Friendly PC owner? ClinX Academy teaches physicians the business, operations, compliance, and legal structures behind PC ownership — so you can participate with confidence.",
};

const whatYouNeed = [
  {
    title: "Corporate Practice of Medicine Law",
    description:
      "Most states prohibit non-physicians from owning medical practices. The Friendly PC model is the legal workaround — but it comes with real obligations. You need to understand what you're signing, what you're liable for, and what the management company can and cannot do.",
  },
  {
    title: "MSO / PC Structure & Agreements",
    description:
      "A Management Services Organization (MSO) handles operations, billing, staffing, and technology. You, as the PC owner, hold the clinical license and nominal ownership. Understanding how the MSO-PC agreement is structured — and where your interests need protection — is non-negotiable.",
  },
  {
    title: "Operations & Revenue Cycle",
    description:
      "As a PC owner, you have nominal responsibility for the practice. You need to understand how revenue flows: coding, billing, payor contracts, denial management, and collections. If something goes wrong with compliance or billing, your name is on it.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Stark Law, Anti-Kickback Statute, HIPAA, state licensure, and credentialing requirements all apply to you as the physician owner. ClinX teaches you the compliance framework you need to participate in these structures safely and knowledgeably.",
  },
  {
    title: "Payor Contracts & Credentialing",
    description:
      "PC owners are often required to credential with payers and sign participation agreements. Understanding what you're agreeing to — fee schedules, exclusivity clauses, termination provisions — is part of the business literacy this role demands.",
  },
  {
    title: "Value-Based Care & Equity Upside",
    description:
      "The most sophisticated PC ownership arrangements include equity participation, shared savings, and value-based care bonuses. Understanding how these economics work is what separates physicians who build wealth from those who simply lend their license.",
  },
];

const faqs = [
  {
    q: "What is a Friendly PC owner?",
    a: "A Friendly PC (Professional Corporation) owner is a licensed physician who nominally owns a medical practice entity that is operationally managed by a Management Services Organization (MSO). The structure exists to comply with corporate practice of medicine laws, which prohibit non-physicians from owning medical practices in most states. The physician holds ownership on paper while the MSO handles operations, hiring, billing, and administration.",
  },
  {
    q: "Is being a Friendly PC owner risky?",
    a: "It can be — if you don't understand what you're signing. Physicians who enter these arrangements without business literacy are exposed to compliance risks, liability exposure, and unfavorable contract terms. ClinX Academy specifically prepares physicians to evaluate these arrangements critically, ask the right questions, and negotiate protections.",
  },
  {
    q: "How much can a Friendly PC owner earn?",
    a: "Compensation varies significantly based on the scope of the arrangement, the organization, and the physician's role. Arrangements that include operational oversight, quality leadership, or equity participation can generate $150K–$500K+ annually. The more business fluency you bring to the negotiation, the better the terms you can command.",
  },
  {
    q: "Do I need an MBA to become a Friendly PC owner?",
    a: "No — but you need the equivalent business literacy. You need to understand how MSO-PC structures work, how revenue cycle functions, what payor contracts say, and how compliance frameworks apply. That is exactly what ClinX Academy teaches.",
  },
  {
    q: "Is ClinX Academy specific to Friendly PC ownership?",
    a: "ClinX Academy covers the full business of healthcare — Medicare Advantage, risk contracting, revenue cycle, MSO/PC structures, compliance, and health tech. PC ownership is one of the most important use cases, but the curriculum prepares you for any executive or ownership role in healthcare.",
  },
];

export default function FriendlyPCOwnerPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Friendly PC Ownership</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-6">
                Before You Sign as a Friendly PC Owner, Understand What You&apos;re Getting Into
              </h1>
              <p className="text-[#4A4A4A] text-xl leading-relaxed mb-8">
                PC ownership can be a powerful path to income, equity, and executive involvement in healthcare. It can also expose you to compliance risk and unfavorable terms if you don&apos;t understand the business. ClinX Academy teaches you everything you need to know before you sign — and how to build real value once you do.
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

        {/* What it is */}
        <section className="bg-[#1C2331] py-20 border-b border-[#2D3548]">
          <div className="container-width">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
                The Reality
              </p>
              <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight mb-8">
                Most physicians who become PC owners don&apos;t fully understand the structure they&apos;re entering.
              </h2>
              <p className="text-[#EBE8E2] opacity-70 text-lg leading-relaxed mb-6">
                The Friendly PC model is legal, widely used, and can be financially rewarding. But it is not a passive arrangement. As the physician owner of record, your name and license are attached to the entity. You are nominally responsible for clinical operations. You sign the payor contracts. You are the named party in state licensure.
              </p>
              <p className="text-[#EBE8E2] opacity-70 text-lg leading-relaxed">
                Physicians who understand the business — how MSO agreements are structured, how revenue cycle works, what compliance requires, how equity participation is negotiated — get better deals, take on smarter arrangements, and build real wealth. Physicians who don&apos;t are exposed.
              </p>
            </div>
          </div>
        </section>

        {/* What you need to know */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">What ClinX Teaches</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                The Business Knowledge Every PC Owner Needs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {whatYouNeed.map((item) => (
                <div key={item.title} className="card bg-white p-8">
                  <h3 className="font-serif text-xl text-[#222222] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The earning potential */}
        <section className="bg-white py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">The Opportunity</p>
                <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-6">
                  Done Right, PC Ownership Can Be One of the Most Rewarding Roles Available to Physicians Outside of Clinical Practice
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
                  PC ownership is a real role with real responsibilities — and real upside for physicians who take it seriously. Compensation varies significantly based on the scope of your engagement, the type of organization, and whether you negotiate for equity and value-based care participation.
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed">
                  The difference between outcomes is almost entirely a function of business literacy. Physicians who understand the structure negotiate better terms, take on smarter arrangements, and build greater long-term value. ClinX Academy is designed to give you that literacy.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "PC ownership with clinical oversight responsibilities", range: "$50K–$150K/yr" },
                  { label: "PC with operational leadership role", range: "$100K–$250K/yr" },
                  { label: "PC with equity + value-based care participation", range: "$200K–$500K+/yr" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#F5F3EF] rounded-xl p-6 flex justify-between items-center gap-4">
                    <p className="text-[#4A4A4A] text-sm">{item.label}</p>
                    <p className="font-serif text-lg text-[#1C2331] font-semibold whitespace-nowrap">{item.range}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight">
                Friendly PC Ownership FAQ
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
        <section className="bg-[#1C2331] py-24">
          <div className="container-width text-center">
            <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
              Get Prepared
            </p>
            <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight mb-6">
              ClinX Academy: The Training Program for Physicians Who Want to Own and Operate, Not Just Practice
            </h2>
            <p className="text-[#EBE8E2] opacity-70 text-xl mb-10 max-w-2xl mx-auto">
              35+ hours of curriculum covering MSO/PC structures, compliance, revenue cycle, payor contracting, Medicare Advantage, and value-based care — taught by physicians who have done it.
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
