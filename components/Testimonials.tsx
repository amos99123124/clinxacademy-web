const testimonials = [
  {
    quote: "Bedside to startup medical director in 2 weeks. Exposed to opportunities for fractional CMO, friendly PC. Single best ROI since medical school.",
    author: "Adam J. Bonder, MD MBA",
    title: "Startup Medical Director",
  },
  {
    quote: "The ceiling has been removed. I'm comfortable and confident I can achieve work-life balance without sacrificing income. Alex and Reza immediately took me under their wing.",
    author: "Adam Silver, MD MHA FACC",
    title: "Cardiologist & Healthcare Executive",
  },
  {
    quote: "Alex has been instrumental in helping me develop my non-clinical career as a friendly PC owner, collaborating physician and startup advisor. It's totally doable if you're willing to learn.",
    author: "Donna Baldwin, DO",
    title: "PC Owner & Fractional CMO",
  },
  {
    quote: "ClinX delivers exactly what today's physician executives need — a practical, high-yield curriculum that bridges the gap between clinical expertise and healthcare leadership.",
    author: "Jennifer Bepple, MD",
    title: "CMO @ AllaiHealth",
  },
  {
    quote: "ClinX has been incredible. The depth of teaching, especially in Medicare and leadership, has been invaluable. Alex makes everything simple, clear, and immediately useful.",
    author: "Takashi Nakamura, MD",
    title: "AIR CEO/Co-founder",
  },
  {
    quote: "ClinX offers something no one in the market does — need-to-know materials and community for physician entrepreneurs and healthcare innovators.",
    author: "Rose Wang",
    title: "Founder & CEO @ 1104 Health",
  },
  {
    quote: "ClinX Academy's course provides an in-depth look at everything behind the scenes that a clinician should understand about healthcare.",
    author: "Zhen Chan, MD MBA",
    title: "Founder/CEO @ Grapevyne",
  },
  {
    quote: "The ClinX training is concise, detailed, actionable, and has added tremendous value to my healthcare administration and leadership training.",
    author: "Christopher Cannell, DMSc, MPAS, PA-C, DFAAPA",
    title: "Healthcare Executive",
  },
  {
    quote: "I wish I had access to the ClinX Academy content at the beginning of my journey from clinical work to running a startup.",
    author: "Phil Mitchell, MD, M.S.",
    title: "Former CMO @ DispatchHealth",
  },
  {
    quote: "Alex is the original 50-state licensed physician — a true pioneer deeply seasoned with Corporate Practice of Medicine (CPOM) regulations.",
    author: "Jaye Noel, MD",
    title: "Physician Executive",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Physicians Who Made the Shift</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Results that speak for themselves.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card bg-[#F5F3EF] p-8">
              <div className="font-serif text-4xl text-[#D8D4CC] mb-4 leading-none">&ldquo;</div>
              <blockquote className="font-serif text-lg text-[#222222] leading-relaxed mb-6 italic">
                {t.quote}
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-[#222222]">{t.author}</p>
                <p className="text-xs text-[#4A4A4A] tracking-wide mt-1">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
