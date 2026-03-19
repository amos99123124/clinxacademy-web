const stats = [
  { value: "500+", label: "Physicians Trained" },
  { value: "20+", label: "Expert Faculty" },
  { value: "CME", label: "Credit Available" },
  { value: "50+", label: "Modules & Lessons" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#EBE8E2] py-14 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="eyebrow text-center md:text-left">
            Trusted by physicians across the country
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-10 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-[#222222]">{stat.value}</div>
                <div className="text-xs text-[#4A4A4A] font-medium tracking-wide mt-1 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
