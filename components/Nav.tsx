"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3EF] border-b border-[#D8D4CC]">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ClinX Academy"
              width={180}
              height={52}
              className="h-12 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="/#membership" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">Program</a>
            <a href="/#faculty" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">Faculty</a>
            <a href="https://calendly.com/mohseni/clinx-discovery-call" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">Schedule a Call</a>
            <Link href="/about" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">About</Link>
            <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">Pricing</a>
            <a href="https://clinx-cme.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors">CME</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://members.clinxacademy.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E] transition-colors px-2"
            >
              Login
            </a>
            <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#222222]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#F5F3EF] border-t border-[#D8D4CC] px-6 py-5 space-y-4">
          <a href="/#membership" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]" onClick={() => setMenuOpen(false)}>Program</a>
          <a href="/#faculty" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]" onClick={() => setMenuOpen(false)}>Faculty</a>
          <a href="https://calendly.com/mohseni/clinx-discovery-call" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]">Schedule a Call</a>
          <Link href="/about" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]">Pricing</a>
          <a href="https://clinx-cme.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-[#4A4A4A] hover:text-[#C45C3E]">CME</a>
          <div className="pt-3 border-t border-[#D8D4CC] flex flex-col gap-3">
            <a href="https://members.clinxacademy.com/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4A4A4A]">Login</a>
            <a href="https://members.clinxacademy.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-xs">Join Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
