import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Weekly Non-Clinical Physician Job Feed — ClinX Academy",
  description: "Get a curated list of the best non-clinical and hybrid physician roles delivered to your inbox each week.",
};

export default function WeeklyJobFeedPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-xl mx-auto text-center">
              <p className="eyebrow mb-4">Weekly Job Feed</p>
              <h1 className="font-serif text-5xl text-[#222222] leading-tight mb-6">
                The Best Roles Go Fast
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
                We scour the web so you don&apos;t have to. Get a curated list of the best non-clinical and hybrid physician roles delivered to your inbox each week.
              </p>
              <a
                href="https://members.clinxacademy.com/weekly-job-feed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Send Me The Jobs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
