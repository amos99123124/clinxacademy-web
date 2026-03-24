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
              <a
                href="https://members.clinxacademy.com/non-clinical-physician-jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Send Me the Guide
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
