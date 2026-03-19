const tracks = [
  {
    number: "01",
    title: "Business of Medicine",
    description:
      "Understand practice models, financial statements, revenue cycle, and how healthcare economics actually work from the inside.",
    tags: ["Practice Finance", "RCM", "Contracts"],
  },
  {
    number: "02",
    title: "Physician Entrepreneurship",
    description:
      "From side project to scalable company: ideation, entity structure, funding, operations, and building for exit.",
    tags: ["Startups", "MSO Models", "Funding"],
  },
  {
    number: "03",
    title: "Career & Negotiation Strategy",
    description:
      "Negotiate compensation with confidence. Understand compensation models, non-competes, employment agreements, and partnership tracks.",
    tags: ["Salary", "Non-Competes", "Partnership"],
  },
  {
    number: "04",
    title: "Wealth & Investment",
    description:
      "Build wealth intelligently as a high-income professional. Asset allocation, real estate, alternative investments, and tax strategy.",
    tags: ["Real Estate", "Investing", "Tax"],
  },
  {
    number: "05",
    title: "Leadership & Influence",
    description:
      "Lead teams, speak with authority, and build your brand as a physician. Clinical credibility plus business leadership.",
    tags: ["Leadership", "Brand", "Speaking"],
  },
  {
    number: "06",
    title: "MSO & Practice Ownership",
    description:
      "The structure behind physician-owned practices, management services organizations, and the corporate practice of medicine doctrine.",
    tags: ["MSO", "CPOM", "PC Ownership"],
  },
];

export default function ProgramOverview() {
  return (
    <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]" id="program">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">The Program</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-6">
            Six tracks. One integrated curriculum.
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            Each track is built by practicing physicians and leading experts — not
            generic business school content adapted for doctors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track) => (
            <div key={track.number} className="card bg-[#F5F3EF] p-8 flex flex-col">
              <div className="font-serif text-5xl text-[#D8D4CC] mb-5">{track.number}</div>
              <h3 className="font-serif text-xl text-[#222222] mb-3">{track.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 flex-1">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold tracking-wide uppercase text-[#4A7C59] border border-[#4A7C59] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://members.clinxacademy.com" className="btn-primary">
            View Full Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}
