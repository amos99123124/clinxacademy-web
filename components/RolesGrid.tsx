const roles = [
  {
    title: "Medical Director",
    salary: "$200K–$400K+",
    time: "Full-time or fractional",
    description: "Lead clinical operations at health plans, medical groups, and startups.",
  },
  {
    title: "Chief Medical Officer",
    salary: "$350K–$600K+",
    time: "Full-time",
    description: "The most senior clinical executive in the room.",
  },
  {
    title: "Friendly PC Owner",
    salary: "$150K–$500K+",
    time: "Part-time (5–10 hrs/wk)",
    description: "The highest-ROI physician side gig in medicine.",
  },
  {
    title: "Startup Advisor / Fractional CMO",
    salary: "$100K–$300K+",
    time: "Fractional (5–15 hrs/wk)",
    description: "Guide health-tech startups on clinical strategy and product design.",
  },
];

export default function RolesGrid() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Non-Clinical Careers</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Non-Clinical Careers &amp; Physician Side Gigs That Pay Like a Full-Time Job
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {roles.map((role) => (
            <div key={role.title} className="card bg-[#F5F3EF] p-8">
              <h3 className="font-serif text-2xl text-[#222222] mb-3">{role.title}</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="text-[#C45C3E] font-semibold text-sm">{role.salary}</span>
                <span className="text-[#4A4A4A] text-sm border-l border-[#D8D4CC] pl-4">{role.time}</span>
              </div>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
