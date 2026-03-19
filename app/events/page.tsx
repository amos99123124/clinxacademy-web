import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Events & Recordings — ClinX Academy",
  description: "ClinX Academy events — candid conversations with industry leaders, live Q&A sessions, and practical workshops.",
};

const events = [
  {
    title: "Becoming a 10x Physician",
    guest: "Guest: Dr. Raihan Faroqui",
    status: "Recording Available",
    date: "",
    membersOnly: false,
  },
  {
    title: "CMS CMMI ACCESS Program",
    guest: "Faculty: Alex Mohseni, MD; Amy Schiffman, MD",
    status: "",
    date: "December 5, 2025",
    membersOnly: false,
  },
  {
    title: "Office Hours with Dr. Alla Zilbering",
    guest: "Cigna Market Medical Executive",
    status: "Members Only",
    date: "September 2, 2025",
    membersOnly: true,
  },
  {
    title: "How to Build an App Using AI",
    guest: "Dr. Alex Mohseni",
    status: "Members Only",
    date: "August 26, 2025",
    membersOnly: true,
  },
  {
    title: "Office Hours with Dr. Martin Levine",
    guest: "Optum Care Pacific Northwest CMO",
    status: "Members Only",
    date: "July 30, 2025",
    membersOnly: true,
  },
  {
    title: "Physicians in Venture Capital",
    guest: "Guest: Arvin Grover",
    status: "Members Only",
    date: "June 11, 2025",
    membersOnly: true,
  },
  {
    title: "Open House Q&A",
    guest: "",
    status: "Members Only",
    date: "June 4, 2025",
    membersOnly: true,
  },
  {
    title: "Hiring Physician Leaders",
    guest: "",
    status: "Duration: 51:10",
    date: "May 21, 2025",
    membersOnly: false,
  },
];

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">Events</p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-4">
                Events &amp; Recordings
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
                ClinX Academy events — candid conversations with industry leaders, live Q&amp;A sessions, and practical workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/get-non-clinical-jobs-guide-pdf" className="btn-primary">
                  Get our Non-Clinical Resource Guide
                </a>
                <a
                  href="https://www.addevent.com/calendar/pw880860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Subscribe to the ClinX Calendar
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="card bg-[#F5F3EF] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-xl text-[#222222] mb-1">{event.title}</h2>
                    {event.guest && <p className="text-sm text-[#4A4A4A]">{event.guest}</p>}
                  </div>
                  <div className="flex flex-wrap gap-3 items-center flex-shrink-0">
                    {event.date && <span className="text-xs text-[#4A4A4A]">{event.date}</span>}
                    {event.status && (
                      <span
                        className="text-xs font-semibold tracking-wide uppercase px-3 py-1"
                        style={{
                          backgroundColor: event.membersOnly ? "#1C2331" : "#4A7C59",
                          color: "#F5F3EF",
                        }}
                      >
                        {event.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
