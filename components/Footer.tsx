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
              <a href="https://www.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Join Now</a>
              <a href="/#program" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Curriculum Overview</a>
              <a href="https://www.clinxacademy.com/take-our-quiz" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Take the Quiz</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Resources</p>
            <div className="flex flex-col gap-2">
              <a href="https://blog.clinxacademy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Blog</a>
              <Link href="/events" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Events</Link>
              <a href="https://www.addevent.com/calendar/pw880860" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Calendar of Events</a>
              <Link href="/medicare-cheat-sheet" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Medicare Cheat Sheet</Link>
              <Link href="/get-non-clinical-jobs-guide-pdf" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Non-Clinical Job Resource Guide</Link>
              <Link href="/weekly-job-feed" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Weekly Job Feed</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#EBE8E2] mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">About</Link>
              <Link href="/contact" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Contact Us</Link>
              <a href="https://www.clinxacademy.com/affiliate_users/sign_up" target="_blank" rel="noopener noreferrer" className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 transition-opacity">Affiliate Sign Up</a>
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
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/hl_3rqwVJ_WzqSKlUH4iONGHGA/settings_images/OP3OqGFoSFi1eKIVe99S_logo.png"
            alt="ClinX Academy"
            width={100}
            height={30}
            className="h-7 w-auto object-contain brightness-0 invert opacity-50"
            unoptimized
          />
          <p className="text-xs text-[#EBE8E2] opacity-40">
            &copy; 2025 ClinX Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
