"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-[#1E4E9C] text-white text-center py-24 px-6 overflow-hidden perspective-1000">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.35,22.24,104.3,35.19,158,28.57C255.36,64.6,320,18.17,384,6.57c87.09-16.2,175.27,21.5,261,35.72C761.58,65.6,849.75,44.1,936,30.29c70.29-11.4,140.58-11.4,210.87,0V0Z" />
        </svg>
      </div>

      {/* FC-style Card Reveal */}
      <motion.div
        initial={{ rotateY: 180, opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ rotateY: 0, opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative z-10 w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
          Start Your Business the Smart Way
        </h2>

        <p className="mt-4 text-lg text-white/90">
          Your growth journey begins here. Contact us today for a free consultation and discover how we can help your business thrive in the UAE.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c49e2f] transition"
          >
            Contact Us
          </Link>

          <Link
            href="https://wa.me/971585678938"
            target="_blank"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.735 5.47 2.02 7.812L0 32l8.406-2.02A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z" />
            </svg>
            WhatsApp Us
          </Link>
        </div>
      </motion.div>

      {/* Floating WhatsApp Bubble */}
      <Link
        href="https://wa.me/971585678938"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.735 5.47 2.02 7.812L0 32l8.406-2.02A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z" />
        </svg>
      </Link>
    </section>
  );
}