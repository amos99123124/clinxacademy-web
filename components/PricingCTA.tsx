export default function PricingCTA() {
  return (
    <section className="bg-[#1C2331] py-24" id="pricing">
      <div className="container-width">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6" style={{ color: "#B8860B" }}>
            Membership
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F3EF] leading-tight mb-6">
            Join ClinX Academy
          </h2>
          <p className="text-[#EBE8E2] text-lg leading-relaxed mb-10 opacity-80">
            Full access to every track, every module, all faculty, the physician
            community, and CME credit. One membership. No surprises.
          </p>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            {/* Monthly */}
            <div className="border border-[#D8D4CC] border-opacity-30 p-8 bg-white bg-opacity-5">
              <p className="text-xs font-bold tracking-widest uppercase text-[#B8860B] mb-4">
                Monthly
              </p>
              <div className="font-serif text-5xl text-[#F5F3EF] mb-2">
                $197
                <span className="text-xl font-sans font-normal text-[#EBE8E2] opacity-60">
                  /mo
                </span>
              </div>
              <p className="text-sm text-[#EBE8E2] opacity-60 mb-8">Cancel anytime</p>
              <ul className="space-y-3 mb-8">
                {[
                  "All 6 curriculum tracks",
                  "Live monthly faculty sessions",
                  "Physician community access",
                  "CME credit documentation",
                  "New content monthly",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#EBE8E2]">
                    <span className="text-[#4A7C59]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://members.clinxacademy.com" className="btn-ghost-light w-full text-center block">
                Get Started
              </a>
            </div>

            {/* Annual */}
            <div className="border border-[#C45C3E] p-8 bg-[#C45C3E] bg-opacity-10 relative">
              <div className="absolute top-0 right-0 bg-[#C45C3E] px-3 py-1">
                <span className="text-xs font-bold tracking-wide uppercase text-[#F5F3EF]">
                  Best Value
                </span>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#B8860B] mb-4">
                Annual
              </p>
              <div className="font-serif text-5xl text-[#F5F3EF] mb-2">
                $1,497
                <span className="text-xl font-sans font-normal text-[#EBE8E2] opacity-60">
                  /yr
                </span>
              </div>
              <p className="text-sm text-[#EBE8E2] opacity-60 mb-8">Save $867 vs monthly</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Monthly",
                  "Priority faculty access",
                  "Annual strategy session",
                  "VIP community tier",
                  "Early access to new tracks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#EBE8E2]">
                    <span className="text-[#4A7C59]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://members.clinxacademy.com" className="btn-primary w-full text-center block">
                Join Annual
              </a>
            </div>
          </div>

          <p className="text-sm text-[#EBE8E2] opacity-50">
            Questions?{" "}
            <a
              href="https://calendly.com/clinxacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C45C3E] transition-colors"
            >
              Schedule a call with Alex
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
