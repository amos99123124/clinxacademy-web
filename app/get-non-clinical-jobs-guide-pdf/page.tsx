import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Non-Clinical Physician Jobs Resource Guide — ClinX Academy",
  description: "Get our favorite resource guide for finding non-clinical physician jobs and side gigs.",
};

export default function NonClinicalJobsGuidePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-xl mx-auto text-center">
              <p className="eyebrow mb-4">Free Resource</p>
              <h1 className="font-serif text-5xl text-[#222222] leading-tight mb-6">
                Get Our Favorite Non-Clinical Gig Resource Guide
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
                We&apos;ll email you a PDF with our favorite places to find non-clinical gigs.
              </p>

              <div className="card bg-[#F5F3EF] p-10 text-left">
                <form
                  action="https://www.clinxacademy.com/non-clinical-physician-jobs"
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
                    Send Me the Guide
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
