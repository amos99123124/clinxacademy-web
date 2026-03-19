"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What are non-clinical physician jobs?",
    a: "Non-clinical physician jobs are roles where doctors use their medical expertise outside of direct patient care. Examples include Medical Director, Chief Medical Officer, Friendly PC Owner, Startup Advisor, Expert Witness, and Health Plan Executive. These roles typically pay $200K–$600K+ and leverage clinical knowledge for business leadership.",
  },
  {
    q: "How is ClinX different from a healthcare MBA?",
    a: "A healthcare MBA takes 2-3 years, costs $50K-$120K, and teaches generic business theory. ClinX Academy is self-paced (12 weeks), costs a fraction of the price, and teaches the specific operational mechanics of US healthcare.",
  },
  {
    q: "What physician side gigs can I pursue after ClinX?",
    a: "Popular physician side gigs include Friendly PC ownership (5-10 hrs/wk, $150K-$500K+), fractional Medical Director roles, startup advisory positions, expert witness work, and health plan consulting.",
  },
  {
    q: "Is ClinX Academy self-paced?",
    a: "Yes. ClinX is 100% self-paced with instant lifetime access. Watch 35+ hours of lectures on your schedule, attend optional monthly live virtual events, and complete the final exam when ready.",
  },
  {
    q: "Who should join ClinX Academy?",
    a: "ClinX is designed for physicians (MDs/DOs), NPs, and PAs who want to understand the business side of healthcare. Whether you're exploring non-clinical careers, want physician side gigs, or simply want to be a stronger leader, the program provides operational fluency.",
  },
  {
    q: "What's included in the membership?",
    a: "Your membership includes: 35+ hours of video curriculum, curated deal flow (Medical Director, PC, advisory roles), private WhatsApp community, 12 months of live virtual events, two 1-on-1 coaching sessions with the founder, the ClinX Healthcare Executive Certificate, the Member Registry talent directory, and a bonus hard-skills suite.",
  },
  {
    q: "What's the return on investment?",
    a: "Members have gone from bedside clinician to startup Medical Director in as little as 2 weeks. The program costs a fraction of a single month's salary increase from landing a Medical Director or CMO role paying $200K-$600K+. One PC deal or advisory engagement can return 10-50x the investment.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F3EF] py-24 border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#D8D4CC]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-6"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span className="font-serif text-lg text-[#222222] leading-snug">{faq.q}</span>
                <span className="text-[#B8860B] font-bold text-xl flex-shrink-0 mt-0.5">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="pb-6 text-[#4A4A4A] text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
