const gaps = [
  {
    icon: "01",
    title: "The Knowledge Gap",
    body: "You can diagnose a STEMI in seconds. But can you explain how Medicare Advantage risk adjustment works? Or why CPOM law determines who can own a medical practice? These aren't obscure topics — they're the daily operating language of every healthcare executive.",
  },
  {
    icon: "02",
    title: "The Access Gap",
    body: "The best Medical Director roles, PC deals, and advisory positions are never posted on job boards. They circulate through private networks. If you're not in the network, you don't even know these non-clinical physician jobs exist.",
  },
  {
    icon: "03",
    title: "The Confidence Gap",
    body: "You're an expert clinician. But when the conversation shifts to capitation models, payer contracting, or revenue cycle management, you feel like a first-year student again. That gap isn't a reflection of your intelligence — it's a reflection of your training.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Why Clinicians Get Stuck</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-6">
            Your Training Taught You Medicine. Not Medicare.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gaps.map((item) => (
            <div key={item.icon} className="card bg-[#F5F3EF] p-8">
              <div className="font-serif text-4xl text-[#D8D4CC] mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl text-[#222222] mb-3">{item.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
