const membershipItems = [
  {
    number: "01",
    title: "The Curriculum",
    subtitle: "35+ Hours of Operational Fluency",
    body: "Instant, lifetime access to deep-dive lectures bridging clinical practice and boardroom strategy.",
  },
  {
    number: "02",
    title: "The Deal Flow",
    subtitle: "Curated Non-Clinical Career & Gig Opportunities",
    body: "Access our internal list of high-value non-clinical physician jobs and clinician side gigs.",
  },
  {
    number: "03",
    title: "The Inner Circle",
    subtitle: "Private WhatsApp Community",
    body: "Bypass the gatekeepers. Join a vetted private WhatsApp group of faculty, investors, and alumni leadership.",
  },
  {
    number: "04",
    title: "Live Mentorship",
    subtitle: "12 Months of Monthly Virtual Events",
    body: "Join monthly live sessions with faculty for deep-dive topic discussion.",
  },
  {
    number: "05",
    title: "1-on-1 Executive Coaching",
    subtitle: "Two 30-Minute Sessions with Alex Mohseni",
    body: "Get personalized career guidance from ClinX founder Alex Mohseni, MD.",
  },
  {
    number: "06",
    title: "The Credential",
    subtitle: "ClinX Healthcare Executive Certificate",
    body: "Validate your expertise. Pass the final exam and earn the certificate.",
  },
  {
    number: "07",
    title: "ClinX Member Registry",
    subtitle: "Opt-In Executive Talent Directory",
    body: "Gain visibility with healthcare organizations seeking physician executives.",
  },
  {
    number: "08",
    title: "The Tactical Bonus",
    subtitle: "The 'Hard Skills' Suite",
    body: "Financial Fluency: P&L management, Pro Formas, & Modeling | Tools of the Trade: Excel/Sheets Mastery & AI Automation | Communication: Pitch Decks, Presentations, & Boardroom Skills",
  },
];

export default function PricingCTA() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]" id="membership">
      <div className="container-width">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Your ClinX Membership</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-4">
            Here&apos;s Exactly What You Get.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {membershipItems.map((item) => (
            <div key={item.number} className="card bg-[#F5F3EF] p-8 flex gap-5">
              <div className="text-xs font-bold tracking-widest text-[#D8D4CC] mt-1 flex-shrink-0">{item.number}</div>
              <div>
                <h3 className="font-serif text-xl text-[#222222] mb-1">{item.title}</h3>
                <p className="text-[#B8860B] text-xs font-semibold tracking-wide uppercase mb-3">{item.subtitle}</p>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary">
            See Pricing & Join Now
          </a>
          <p className="text-sm text-[#4A4A4A] mt-4">
            Questions?{" "}
            <a
              href="https://calendly.com/mohseni/clinx-discovery-call"
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
