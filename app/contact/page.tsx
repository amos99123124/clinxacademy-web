import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalendlyWidget from "@/components/CalendlyWidget";

export const metadata: Metadata = {
  title: "Schedule a Discovery Call — ClinX Academy",
  description: "Book a 15-minute discovery call with Alex Mohseni, MD to discuss ClinX Academy and your path to healthcare leadership.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-12 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mb-8">
              <p className="eyebrow mb-3">Talk to Alex</p>
              <h1 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-4">
                Schedule a Discovery Call
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-3">
                15 minutes with Alex Mohseni, MD — discuss the program, your goals, and whether ClinX is the right fit.
              </p>
              <p className="text-sm text-[#4A4A4A]">
                Prefer email?{" "}
                <a href="mailto:info@clinxacademy.com" className="text-[#C45C3E] hover:underline font-medium">
                  info@clinxacademy.com
                </a>
              </p>
            </div>
            <CalendlyWidget url="https://calendly.com/mohseni/clinx-discovery-call" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
