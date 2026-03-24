import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C2331] border-t border-white border-opacity-10 pt-16 pb-10">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Program */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Program</p>
            <div className="flex flex-col gap-2">
              <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Join Now</a>
              <a href="/#membership" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Curriculum Overview</a>
              <a href="https://members.clinxacademy.com/take-our-quiz" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Take the Quiz</a>
              <Link href="/physician-executive-training" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Physician Executive Training</Link>
              <Link href="/medical-director-course" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Medical Director Course</Link>
              <Link href="/medicare-advantage-training" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Medicare Advantage Training</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Resources</p>
            <div className="flex flex-col gap-2">
              <a href="https://blog.clinxacademy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Blog</a>
              <Link href="/events" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Events</Link>
              <a href="https://www.addevent.com/calendar/pw880860" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Calendar of Events</a>
              <a href="https://members.clinxacademy.com/medicare-cheat-sheet" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Medicare Cheat Sheet</a>
              <a href="https://members.clinxacademy.com/get-non-clinical-jobs-guide-pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Non-Clinical Job Resource Guide</a>
              <a href="https://members.clinxacademy.com/weekly-job-feed" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Weekly Job Feed</a>
              <a href="https://members.clinxacademy.com/opt-in-62b208c8-492a-41c5-9385-890082b9c7ec" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">10x Clinician Field Guide</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">About</Link>
              <Link href="/contact" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Contact Us</Link>
              <a href="https://members.clinxacademy.com/affiliate_users/sign_up" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Affiliate Sign Up</a>
              <a href="https://members.clinxacademy.com/affiliate_users/sign_in" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Affiliate Login</a>
              <Link href="/terms-of-service" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Terms &amp; Privacy</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Social</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/clinx-academy" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="mailto:info@clinxacademy.com" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">info@clinxacademy.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="ClinX Academy"
            width={140}
            height={40}
            className="h-9 w-auto object-contain brightness-0 invert opacity-60"
            unoptimized
          />
          <p className="text-xs text-[#EBE8E2] opacity-40">
            &copy; 2026 ClinX Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
