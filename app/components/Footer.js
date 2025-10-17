"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E4E9C] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
        {/* Logo + Tagline */}
        <div>
          <img src="/logo.png" alt="Smart Way Consultancy Logo" className="h-12 mx-auto sm:mx-0 mb-2" />
          <p className="text-sm text-white/80 italic">Building Better Future Together</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
            <li><Link href="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">+971 585678938</p>
          <p className="text-sm">info@smartwayae.com</p>
          <p className="text-sm">Dubai, United Arab Emirates</p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <Link href="https://linkedin.com" target="_blank">
              <svg className="w-5 h-5 fill-white hover:fill-[#D4AF37] transition" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8.5h-5V17c0-2.4-.1-5.5-3.3-5.5-3.3 0-3.8 2.6-3.8 5.3v7.2h-5V8z"/>
              </svg>
            </Link>
            <Link href="https://wa.me/971585678938" target="_blank">
              <svg className="w-5 h-5 fill-white hover:fill-[#D4AF37] transition" viewBox="0 0 32 32">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.735 5.47 2.02 7.812L0 32l8.406-2.02A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z" />
              </svg>
            </Link>
            <Link href="mailto:info@smartwayae.com">
              <svg className="w-5 h-5 fill-white hover:fill-[#D4AF37] transition" viewBox="0 0 24 24">
                <path d="M12 13.065L.015 6.015A1.5 1.5 0 011.5 4.5h21a1.5 1.5 0 011.485 1.515L12 13.065zM0 8.25v11.25A1.5 1.5 0 001.5 21h21a1.5 1.5 0 001.5-1.5V8.25l-12 7.5-12-7.5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-white/60">
        © 2025 Smart Way Consultancy. All Rights Reserved.
      </div>
    </footer>
  );
}