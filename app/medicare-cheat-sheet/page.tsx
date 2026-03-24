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
              <a
                href="https://members.clinxacademy.com/medicare-cheat-sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get the Free Cheat Sheet
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
