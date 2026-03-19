import Image from "next/image";

const footerLinks = [
  { label: "Program", href: "#program" },
  { label: "Faculty", href: "#faculty" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "CME", href: "https://members.clinxacademy.com/cme" },
  { label: "Login", href: "https://members.clinxacademy.com/login" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2331] border-t border-white border-opacity-10 pt-16 pb-10">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <div>
            <Image
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/hl_3rqwVJ_WzqSKlUH4iONGHGA/settings_images/OP3OqGFoSFi1eKIVe99S_logo.png"
              alt="ClinX Academy"
              width={130}
              height={38}
              className="h-8 w-auto object-contain brightness-0 invert"
              unoptimized
            />
            <p className="text-[#EBE8E2] opacity-50 text-sm mt-3 max-w-xs leading-relaxed">
              Business and career education for physicians who want more.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#EBE8E2] opacity-60 hover:opacity-100 hover:text-[#C45C3E] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EBE8E2] opacity-40">
            &copy; 2025 ClinX Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://members.clinxacademy.com/privacy"
              className="text-xs text-[#EBE8E2] opacity-40 hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
            <a
              href="https://members.clinxacademy.com/terms"
              className="text-xs text-[#EBE8E2] opacity-40 hover:opacity-70 transition-opacity"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
