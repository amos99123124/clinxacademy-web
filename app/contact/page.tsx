import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — ClinX Academy",
  description: "Get in touch with ClinX Academy.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Get in Touch</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
                Have questions? We&apos;d love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="card bg-[#F5F3EF] p-8">
                  <p className="font-semibold text-[#222222] mb-1">Email</p>
                  <a href="mailto:info@clinxacademy.com" className="text-[#C45C3E] hover:underline">
                    info@clinxacademy.com
                  </a>
                </div>

                <div className="card bg-[#F5F3EF] p-8">
                  <p className="font-semibold text-[#222222] mb-3">Schedule a Call</p>
                  <p className="text-[#4A4A4A] text-sm mb-4">
                    Book a 1-on-1 call with Alex or the team to discuss ClinX, your career goals, or any questions.
                  </p>
                  <a
                    href="https://calendly.com/alex-clinx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
