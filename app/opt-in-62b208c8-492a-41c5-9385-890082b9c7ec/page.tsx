import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
                <form
                  action="https://www.clinxacademy.com/opt-in-62b208c8-492a-41c5-9385-890082b9c7ec"
                  method="GET"
                  className="space-y-4"
                >
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
                    Send Me the Field Guide
                  </button>
                  <p className="text-xs text-[#4A4A4A] text-center opacity-70">
                    We won&apos;t send spam. Unsubscribe at any time.
                  </p>
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
