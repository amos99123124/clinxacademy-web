import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Medicare Cheat Sheet — ClinX Academy",
  description: "Claim your FREE Medicare Cheat Sheet from ClinX Academy.",
};

export default function MedicareCheatSheetPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-xl mx-auto text-center">
              <p className="eyebrow mb-4">Free Resource</p>
              <h1 className="font-serif text-5xl text-[#222222] leading-tight mb-6">
                ClinX Medicare Cheat Sheet
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
                Claim your FREE Medicare Cheat Sheet from ClinX Academy. This one-page reference simplifies Medicare rules, coverage, and billing basics for physicians, APPs, healthcare administrators, and anyone working in care delivery or value-based care.
              </p>

              <div className="card bg-[#F5F3EF] p-10 text-left">
                <h2 className="font-serif text-2xl text-[#222222] mb-2">Claim yours now</h2>
                <p className="text-sm text-[#4A4A4A] mb-6">Get the free Medicare Cheat Sheet instantly!</p>

                <form
                  action="https://members.clinxacademy.com/medicare-cheat-sheet"
                  method="GET"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="degree" className="block text-sm font-semibold text-[#222222] mb-2">
                      Degree
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      style={{
                        width: "100%",
                        border: "1px solid #D8D4CC",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        color: "#222222",
                        backgroundColor: "#F5F3EF",
                        appearance: "auto",
                      }}
                    >
                      <option value="MD">MD</option>
                      <option value="DO">DO</option>
                      <option value="NP">NP</option>
                      <option value="PA">PA</option>
                      <option value="RN">RN</option>
                      <option value="PT">PT</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#222222] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      style={{
                        width: "100%",
                        border: "1px solid #D8D4CC",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        color: "#222222",
                        backgroundColor: "#F5F3EF",
                      }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Get the Free Cheat Sheet
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
