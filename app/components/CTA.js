"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSlides = 2;

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-gradient-to-br from-[#1E4E9C] to-[#163B7A] text-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {[0, 1].map((idx) => {
          const start = idx / totalSlides;
          const end = (idx + 1) / totalSlides;

          const y = useTransform(
            scrollYProgress,
            [start, start + 0.2, end - 0.2, end],
            ["40px", "0px", "0px", "-40px"]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.2, end - 0.2, end],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={idx}
              style={{ y, opacity }}
              className="absolute w-[80%] max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-center"
            >
              {idx === 0 ? (
                <>
                  <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent animate-shimmer">
                    Ready to Build Something Remarkable?
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-white/90">
                    Smart Way is your launchpad to success in the UAE. Let’s turn your ambition into action.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Let’s Talk Strategy
                  </h3>
                  <p className="text-base sm:text-lg text-white/80 mb-6">
                    Get a free consultation and discover how we can elevate your business.
                  </p>
                  <div className="flex justify-center items-center gap-4 flex-wrap">
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
                </>
              )}
            </motion.div>
          );
        })}
      </div>

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