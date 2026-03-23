export default function Hero() {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-36 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">The Executive Accelerator for Physicians, NPs &amp; PAs Seeking Non-Clinical Careers</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#222222] mb-8">
            Medicine Has Changed.{" "}
            <em className="text-[#C45C3E] font-serif italic">Have You?</em>
          </h1>
          <p className="text-[#4A4A4A] text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl font-light">
            AI, private equity, and Medicare Advantage are reshaping healthcare. The clinicians who understand the business side are earning $300K–$600K+. The ones who don&apos;t are being left behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.clinxacademy.com/opt-in-62b208c8-492a-41c5-9385-890082b9c7ec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Get the Free Field Guide
            </a>
            <a
              href="https://www.clinxacademy.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Decorative rule */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#D8D4CC]" />
          <span className="text-[#B8860B] text-xs font-semibold tracking-widest uppercase">Est. 2025</span>
          <div className="h-px flex-1 bg-[#D8D4CC]" />
        </div>
      </div>
    </section>
  );
}
