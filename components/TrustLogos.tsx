const orgs = [
  "Humana",
  "Optum",
  "Oscar Health",
  "DaVita",
  "Teladoc",
  "Sound Physicians",
  "MemorialCare",
  "Orrick",
];

export default function TrustLogos() {
  return (
    <section className="bg-[#F5F3EF] py-12 border-b border-[#D8D4CC]">
      <div className="container-width">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-[#4A4A4A] opacity-50 mb-8">
          Faculty from organizations including
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {orgs.map((org) => (
            <span
              key={org}
              className="text-sm font-semibold tracking-wide text-[#4A4A4A] opacity-50"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
