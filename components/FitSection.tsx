const forYou = [
  "You're a physician (MD/DO), NP, or PA",
  "You want to understand how the business of healthcare really works",
  "You're exploring non-clinical physician jobs or leadership roles",
  "You want physician side gigs like PC ownership or startup advisory",
  "You want to earn $200K–$600K+ beyond clinical practice",
  "You're willing to invest in learning business fluency",
  "You want a real network — not just a certificate",
];

const notForYou = [
  "You're looking for a scheme that requires no work",
  "You think a certificate alone will change your career",
  "You aren't interested in understanding business",
  "You expect overnight results without effort",
  "You think clinical excellence alone is enough in today's market",
];

export default function FitSection() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Is This For You?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Be Honest With Yourself.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-[#F5F3EF] p-8">
            <h3 className="font-serif text-2xl text-[#4A7C59] mb-6">This is for you if…</h3>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                  <span className="text-[#4A7C59] mt-0.5 flex-shrink-0 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-[#F5F3EF] p-8">
            <h3 className="font-serif text-2xl text-[#C45C3E] mb-6">This is NOT for you if…</h3>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                  <span className="text-[#C45C3E] mt-0.5 flex-shrink-0 font-bold">&#10005;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
