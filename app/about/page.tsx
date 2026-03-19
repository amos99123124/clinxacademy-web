import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — ClinX Academy",
  description: "The story behind ClinX Academy and its founder, Dr. Alex Mohseni.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Our Story</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-12">
                Our Story
              </h1>
              <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
                <p>
                  I&apos;m Dr. Alex Mohseni. Over the last few years, a steady stream of physicians and other clinicians have reached out with the same question: &ldquo;How do I take my career into the next stage?&rdquo;
                </p>
                <p>
                  I attempted to help peers understand healthcare as a business and operating system, but struggled to find comprehensive, practical knowledge in one location. Even healthcare MBA programs often lack the day-to-day operational mechanics needed for executive roles.
                </p>
                <p>
                  Optum&apos;s physician executive training program — Sequoia — was transformative for me. It was structured, real-world training rather than theoretical instruction.
                </p>
                <p>
                  ClinX Academy is my attempt to make that kind of learning more accessible.
                </p>
                <p>
                  I assembled over 20 accomplished faculty to compile hard-won knowledge, insights and experience into a single program — with community alongside education. Peers you can learn alongside, and mentors you can lean on.
                </p>
                <p>
                  If ClinX helps someone move faster, avoid avoidable mistakes, and find a role they&apos;re genuinely excited to show up for, it will have done its job.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
                  href="https://www.linkedin.com/company/clinx-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="/contact"
                  className="btn-ghost"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
