const stats = [
  { value: "35+", label: "Hours of Content" },
  { value: "25+", label: "Expert Faculty" },
  { value: "$300K–$600K+", label: "Earning Potential" },
  { value: "Self-Paced", label: "Learning" },
  { value: "500+", label: "Pages of Curriculum" },
  { value: "6", label: "Core Modules" },
  { value: "12 Months", label: "of Live Virtual Events" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#EBE8E2] py-14 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-[#222222]">{stat.value}</div>
              <div className="text-xs text-[#4A4A4A] font-medium tracking-wide mt-1 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
