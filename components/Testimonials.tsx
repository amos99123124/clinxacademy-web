const testimonials = [
  {
    quote:
      "ClinX Academy gave me the framework to finally launch my MSO. I had the clinical skills. What I was missing was the business architecture — and Alex laid it out clearly.",
    author: "Physician, Internal Medicine",
    location: "Chicago, IL",
  },
  {
    quote:
      "I negotiated a 40% higher compensation package after going through the negotiation module. I would have left $300k on the table without this education.",
    author: "Hospitalist, Anesthesiology",
    location: "Houston, TX",
  },
  {
    quote:
      "The CME credit is almost secondary. The real value is learning to think about your career like a business owner, not just a clinician. That mindset shift is worth everything.",
    author: "Emergency Medicine Physician",
    location: "Philadelphia, PA",
  },
  {
    quote:
      "I spent years wondering why no one taught us this in residency. ClinX Academy is the education system medicine desperately needs.",
    author: "Orthopedic Surgeon",
    location: "Atlanta, GA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">What Physicians Say</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Results that speak for themselves.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card bg-[#F5F3EF] p-10">
              <div className="font-serif text-4xl text-[#D8D4CC] mb-6 leading-none">&ldquo;</div>
              <blockquote className="font-serif text-xl md:text-2xl text-[#222222] leading-relaxed mb-8 italic">
                {t.quote}
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-[#222222]">{t.author}</p>
                <p className="text-xs text-[#4A4A4A] tracking-wide mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
