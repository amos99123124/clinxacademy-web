import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KajabiForm from "@/components/KajabiForm";

export const metadata: Metadata = {
  title: "The 10x Clinician Field Guide — ClinX Academy",
  description: "Get the free 10x Clinician Field Guide. Maps the healthcare business ecosystem so you can navigate it like an executive.",
};

export default function FieldGuideOptInPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-xl mx-auto text-center">
              <p className="eyebrow mb-4">Free Resource</p>
              <h1 className="font-serif text-5xl text-[#222222] leading-tight mb-6">
                Start your Non-Clinical Journey Here
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-4">
                Medical school satisfies clinical training, not business fluency. This field guide maps the healthcare business ecosystem — from Medicare Advantage basics to the investors reshaping care delivery — so you can start navigating it like an executive.
              </p>

              <div className="card bg-[#EBE8E2] p-8 mb-8 text-left">
                <h2 className="font-serif text-2xl text-[#222222] mb-2">The 10x Clinician Field Guide</h2>
                <p className="text-sm text-[#4A4A4A]">
                  The newsletters, communities, conferences, and key terms that physician leaders actually use — on one page.
                </p>
              </div>

              <div className="card bg-[#F5F3EF] p-10 text-left">
                <KajabiForm src="https://members.clinxacademy.com/forms/2149460320/embed.js" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
