export default function Hero() {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-36 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Physician Business Education</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#222222] mb-8">
            Medicine Has Changed.{" "}
            <em className="not-italic text-[#C45C3E] font-serif italic">Have You?</em>
          </h1>
          <p className="text-[#4A4A4A] text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl font-light">
            ClinX Academy is where physicians learn the business, entrepreneurship,
            and career strategy that medical school never taught — with CME credit,
            expert faculty, and a community of driven clinicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#program" className="btn-primary text-center">
              Explore the Program
            </a>
            <a href="https://calendly.com/clinxacademy" target="_blank" rel="noopener noreferrer" className="btn-ghost text-center">
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Decorative rule */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#D8D4CC]" />
          <span className="text-[#B8860B] text-xs font-semibold tracking-widest uppercase">Est. 2022</span>
          <div className="h-px flex-1 bg-[#D8D4CC]" />
        </div>
      </div>
    </section>
  );
}
