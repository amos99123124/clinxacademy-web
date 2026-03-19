const problems = [
  {
    icon: "01",
    title: "CME as Box-Checking",
    body:
      "Traditional CME keeps you current on clinical guidelines — but does nothing to prepare you for the business realities of medicine in 2024.",
  },
  {
    icon: "02",
    title: "No Business Curriculum",
    body:
      "Medical school teaches disease. It does not teach contracts, negotiations, equity, or how to evaluate an opportunity. You learned that the hard way.",
  },
  {
    icon: "03",
    title: "Isolated Decision-Making",
    body:
      "Most physicians make major career and financial decisions without a peer community or trusted advisors who understand the physician context.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]" id="about">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-6">
            Why traditional CME{" "}
            <em className="italic">isn&#39;t enough</em>
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            The clinical skills that made you a physician will not, on their own, help
            you build the career — and life — you actually want. ClinX Academy fills
            the gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((item) => (
            <div key={item.icon} className="card bg-[#F5F3EF] p-8">
              <div className="font-serif text-4xl text-[#D8D4CC] mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl text-[#222222] mb-3">{item.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Solution callout */}
        <div className="bg-[#EBE8E2] border border-[#D8D4CC] p-10 md:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">The Solution</p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#222222] mb-5">
              Education designed for the physician who refuses to be just a doctor
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed">
              ClinX Academy delivers structured, expert-led education on physician
              entrepreneurship, practice ownership, investment strategy, negotiation,
              and more — all with CME credit and built around your schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
