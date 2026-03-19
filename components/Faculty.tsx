const featuredFaculty = [
  {
    name: "Alex Mohseni, MD",
    title: "ClinX Founder | Ex-National Med Director @ Optum | VC Advisor",
    initials: "AM",
  },
  {
    name: "Reza Alavi, MD, MBA",
    title: "Co-founder @ Quintuple Aim | Ex-CMO @ ArtiMed & Optum",
    initials: "RA",
  },
];

const facultyGrid = [
  { name: "Amy Schiffman, MD, MHS", title: "CEO @ AgeTech DC" },
  { name: "Meredith Williams, MD, MBA", title: "VP @ Oscar Health" },
  { name: "Jeremy Sherer, JD, LLM", title: "Partner @ Orrick" },
  { name: "Stephen Smith, MD, CPE", title: "SVP/CMO @ U of MD Charles Regional" },
  { name: "Kyon Hood, MD", title: "President @ Teladoc Health Medical Group" },
  { name: "Arti Masturzo, MD, MBA", title: "CMO @ CCS" },
  { name: "Sanjay Iyer, MD", title: "National Med Director @ Sound Physicians" },
  { name: "Rupesh Nigam, MD, MBA", title: "COO @ Next Level Medical" },
  { name: "Donna Baldwin, DO", title: "Fractional CMO | 50-state PC Owner" },
  { name: "Alyssa Abo, MD, MBA", title: "VP of Clin Innovation @ DeepSight" },
  { name: "Emily Brodkin, JD, MPH", title: "Managing Associate @ Orrick" },
  { name: "Kevin Wheeler, MD", title: "CMO @ AmeriHealth Caritas DC" },
  { name: "Jennifer Bepple, MD, MMCi", title: "CMO @ AllaiHealth, Inc." },
  { name: "Owais Durrani, DO", title: "Advisory Board @ Acer" },
  { name: "Marc Gruner, DO, MBA", title: "Co-founder & CMO @ Limber Health" },
  { name: "Karen Marie Joswick, MHA", title: "Pres/CEO @ Benevolence Health" },
  { name: "Nathan Ruch, MD", title: "Physician @ Princeton Longevity" },
  { name: "Patrick O'Malley, MD", title: "Creator @ The Laceration Course" },
  { name: "Larry Brilliant, MD, MBA", title: "Regional Med Dir @ TeamHealth" },
  { name: "Mark Zeitzer, MD", title: "CMO @ NextCare" },
  { name: "Gautam Gulati, MD, MBA", title: "Founder @ The Well Home" },
  { name: "Alka Atal-Barrio, MD, MMM", title: "National Senior Medical Director @ Optum Health" },
  { name: "Christopher Cannell, DMSc, MPAS, PA-C", title: "Senior Clinical Leader" },
  { name: "Gregg Kimmer", title: "CEO @ Circadian Health" },
];

function initials(name: string) {
  return name.split(" ").filter(p => /^[A-Z]/.test(p)).slice(0, 2).map(p => p[0]).join("");
}

export default function Faculty() {
  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]" id="faculty">
      <div className="container-width">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Taught by Executives, Not Academics.</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-4">
            25+ Faculty Who&apos;ve Actually Done It.
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            No professors. No theorists. Every faculty member holds or has held an executive role at a major health system, payer, or health-tech company.
          </p>
        </div>

        {/* Featured Leadership */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featuredFaculty.map((member, i) => (
            <div key={i} className="card bg-[#EBE8E2] p-8 flex items-start gap-6">
              <div className="w-14 h-14 flex-shrink-0 bg-[#1C2331] flex items-center justify-center">
                <span className="font-serif text-lg text-[#F5F3EF]">{initials(member.name)}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#222222] mb-1">{member.name}</h3>
                <p className="text-[#B8860B] text-xs font-semibold tracking-wide uppercase leading-relaxed">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facultyGrid.map((member, i) => (
            <div key={i} className="card bg-[#F5F3EF] p-5 flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0 bg-[#EBE8E2] border border-[#D8D4CC] flex items-center justify-center">
                <span className="font-serif text-sm text-[#4A4A4A]">{initials(member.name)}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#222222] leading-tight">{member.name}</p>
                <p className="text-xs text-[#4A4A4A] mt-0.5 leading-snug">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
