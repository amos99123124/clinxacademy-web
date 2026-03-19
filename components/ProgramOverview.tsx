const modules = [
  {
    number: "Module 01",
    title: "Advanced Medicare Strategy",
    topics: [
      "Medicare Advantage Bids, Benchmarks & Rebates",
      "Risk Adjustment & HCC Coding Deep-Dive",
      "Star Ratings, Quality Metrics & Bonus Payments",
      "Medicare Parts A–D Program Architecture",
      "Medicaid, Dual Eligibles & D-SNP Strategy",
    ],
  },
  {
    number: "Module 02",
    title: "The Business of Risk",
    topics: [
      "Full-Risk vs. Shared-Risk Capitation Models",
      "Delegated Risk Arrangements & IPA Structures",
      "ACOs, MSSP & Shared Savings Programs",
      "Value-Based Contract Negotiation",
      "Medical Loss Ratio & P&L Accountability",
    ],
  },
  {
    number: "Module 03",
    title: "Revenue Cycle Mastery",
    topics: [
      "Coding Systems: CPT, ICD-10, HCPCS",
      "Clinical Documentation Improvement (CDI)",
      "Denials Management & Appeals Strategy",
      "Revenue Cycle KPIs & Benchmarking",
      "Payer Audits & Compliance Risk",
    ],
  },
  {
    number: "Module 04",
    title: "Credentialing & Operations",
    topics: [
      "Provider Enrollment & PECOS Registration",
      "Payer Credentialing Workflows",
      "Fee Schedule Negotiation & Payment Flows",
      "Utilization Management & Prior Auth",
    ],
  },
  {
    number: "Module 05",
    title: "Corporate Practice & Law",
    topics: [
      "CPOM Laws & MSO-PC Structures",
      "Stark, Anti-Kickback & Safe Harbors",
      "Friendly PC Formation & Compliance",
      "Healthcare M&A & PE Transaction Structures",
      "Employment Contracts & Restrictive Covenants",
    ],
  },
  {
    number: "Module 06",
    title: "Innovation & Growth",
    topics: [
      "AI/ML Applications in Clinical Operations",
      "Remote Patient Monitoring (RPM/RTM)",
      "Telehealth Strategy & Reimbursement",
      "Health-Tech Startup Advisory Playbook",
    ],
  },
];

export default function ProgramOverview() {
  return (
    <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]" id="program">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">The Curriculum</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-6">
            6 Core Modules
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            35+ hours of operational fluency. Built by executives who have actually run health plans, practices, and startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div key={mod.number} className="card bg-[#F5F3EF] p-8 flex flex-col">
              <div className="text-xs font-bold tracking-widest uppercase text-[#B8860B] mb-3">{mod.number}</div>
              <h3 className="font-serif text-xl text-[#222222] mb-4">{mod.title}</h3>
              <ul className="flex flex-col gap-2 flex-1">
                {mod.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-[#4A4A4A]">
                    <span className="text-[#4A7C59] mt-0.5 flex-shrink-0">&#10003;</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
