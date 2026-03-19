const rows = [
  { feature: "Time Commitment", mba: "2–3 years", clinx: "Self-paced (12 weeks of content)" },
  { feature: "Cost", mba: "$50K–$120K", clinx: "Fraction of the cost" },
  { feature: "Content", mba: "Generic business theory", clinx: "Healthcare-specific operational fluency" },
  { feature: "Faculty", mba: "Academics", clinx: "Active CMOs, Medical Directors, Healthcare Attorneys" },
  { feature: "Network", mba: "Classmates", clinx: "Executive physician inner circle + curated deal flow" },
  { feature: "Outcome", mba: "A degree on the wall", clinx: "Roles, deals, and revenue" },
];

export default function ComparisonTable() {
  return (
    <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Why ClinX</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Not an MBA. A Masterclass in Healthcare Reality.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #D8D4CC" }}>
                <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A4A4A", width: "25%" }}></th>
                <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A4A4A" }}>Healthcare MBA</th>
                <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8860B" }}>ClinX Academy</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#F5F3EF" : "#EBE8E2", borderBottom: "1px solid #D8D4CC" }}>
                  <td style={{ padding: "1rem", fontSize: "0.875rem", fontWeight: 600, color: "#222222" }}>{row.feature}</td>
                  <td style={{ padding: "1rem", fontSize: "0.875rem", color: "#4A4A4A" }}>{row.mba}</td>
                  <td style={{ padding: "1rem", fontSize: "0.875rem", color: "#222222", fontWeight: 500 }}>{row.clinx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
