import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RolesGrid from "@/components/RolesGrid";
import ProblemSolution from "@/components/ProblemSolution";

export const metadata: Metadata = {
  title: "Non-Clinical Physician Jobs: Your Roadmap to Medical Director, CMO & Beyond — ClinX Academy",
  description: "Explore non-clinical physician careers including Medical Director, CMO, Friendly PC Owner, and Startup Advisor roles paying $200K–$600K+.",
};

export default function NonClinicalPhysicianJobsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Non-Clinical Careers</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-6">
                Non-Clinical Physician Jobs: Your Roadmap to Medical Director, CMO &amp; Beyond
              </h1>
              <p className="text-[#4A4A4A] text-xl leading-relaxed">
                The highest-paid non-clinical physician roles aren&apos;t found on job boards. They come through networks, deal flow, and operational fluency. ClinX Academy gives you all three.
              </p>
            </div>
          </div>
        </section>

        <RolesGrid />
        <ProblemSolution />

        <section className="bg-[#EBE8E2] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center">
              <p className="eyebrow mb-4">The Program</p>
              <h2 className="font-serif text-4xl text-[#222222] leading-tight mb-8">
                35+ Hours of Education from 25+ Physician Executives
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
                <div className="card bg-[#F5F3EF] p-6">
                  <p className="font-serif text-lg text-[#222222] mb-2">35+ Hours of Education</p>
                  <p className="text-sm text-[#4A4A4A]">From 25+ physician executives, CMOs, and healthcare attorneys.</p>
                </div>
                <div className="card bg-[#F5F3EF] p-6">
                  <p className="font-serif text-lg text-[#222222] mb-2">Curated Deal Flow</p>
                  <p className="text-sm text-[#4A4A4A]">Medical Director, PC ownership, and advisory opportunities.</p>
                </div>
                <div className="card bg-[#F5F3EF] p-6">
                  <p className="font-serif text-lg text-[#222222] mb-2">Private Community</p>
                  <p className="text-sm text-[#4A4A4A]">A vetted WhatsApp group of executives and alumni.</p>
                </div>
              </div>
              <a
                href="/get-non-clinical-jobs-guide-pdf"
                className="btn-primary"
              >
                Get the Free Playbook
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
