const faculty = [
  {
    name: "Alex Mohseni, MD",
    title: "Founder, ClinX Academy",
    bio: "Physician entrepreneur and founder of multiple healthcare ventures. Alex teaches the MSO-PC model, practice ownership, and physician entrepreneurship from real-world experience.",
    initials: "AM",
  },
  {
    name: "Faculty Member",
    title: "Expert in Physician Wealth Strategy",
    bio: "A leading voice on physician financial planning, wealth accumulation, and investment strategy for high-income medical professionals.",
    initials: "FP",
  },
  {
    name: "Faculty Member",
    title: "Healthcare Contracts & Negotiation",
    bio: "Specialized in employment agreement review, non-compete analysis, and compensation negotiation for physicians at all career stages.",
    initials: "HC",
  },
  {
    name: "Faculty Member",
    title: "Physician Startup Advisor",
    bio: "Serial entrepreneur with multiple physician-founded exits. Teaches entity structure, funding strategy, and scaling healthcare businesses.",
    initials: "SA",
  },
  {
    name: "Faculty Member",
    title: "Real Estate & Alternative Investments",
    bio: "Guides physicians through real estate syndications, passive income strategy, and portfolio construction beyond traditional markets.",
    initials: "RI",
  },
  {
    name: "Faculty Member",
    title: "Healthcare Policy & Leadership",
    bio: "Former CMO and health system executive. Teaches physician leadership, organizational influence, and navigating corporate medicine.",
    initials: "HL",
  },
];

export default function Faculty() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]" id="faculty">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Faculty</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-6">
            Learn from physicians who have done it.
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            Every instructor at ClinX Academy has built something — a practice, a
            company, a portfolio, or a career worth replicating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <div key={i} className="card bg-[#F5F3EF] p-8 flex flex-col">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-[#EBE8E2] border border-[#D8D4CC] flex items-center justify-center mb-6">
                <span className="font-serif text-xl text-[#4A4A4A]">{member.initials}</span>
              </div>
              <h3 className="font-serif text-xl text-[#222222] mb-1">{member.name}</h3>
              <p className="text-[#B8860B] text-xs font-semibold tracking-wide uppercase mb-4">
                {member.title}
              </p>
              <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
