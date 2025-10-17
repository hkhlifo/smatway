"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Services spotlight",
    description: "Smart Way turns your business vision into reality — with seamless company formation, strategic licensing, and legal precision tailored to UAE success.",
    gif: "/icons/services.gif",
  },
  {
    title: "Business Setup",
    description: "Company formation, licensing, and legal structuring tailored to UAE regulations.",
    gif: "/icons/business.gif",
  },
  {
    title: "Visa & Immigration",
    description: "End-to-end visa processing for employees, investors, and dependents.",
    gif: "/icons/visa.gif",
  },
  {
    title: "Accounting & Compliance",
    description: "VAT registration, bookkeeping, and financial reporting with precision.",
    gif: "/icons/accounting.gif",
  },
  {
    title: "IT & Branding Solutions",
    description: "Web development, digital branding, and tech support to elevate your presence.",
    gif: "/icons/it.gif",
  },
];

export default function ServicesHighlight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] md:h-[200vh] bg-gradient-to-br from-white to-[#F9F9F9]"
    >
      {/* Sticky viewport */}
      <div className="sticky md:top-30 top-0 h-screen flex items-center justify-center overflow-hidden">
        {services.map((service, idx) => {
          const start = idx / services.length;
          const end = (idx + 1) / services.length;

          // Card slides in from left, stays, then exits right
          const x = useTransform(
            scrollYProgress,
            [start, start + 0.12, end - 0.12, end],
            ["-100%", "0%", "0%", "100%"]
          );

          // Opacity: fully visible in center, fade only on exit
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.12, end - 0.12, end],
            [0, 1, 1, 0]
          );

          // Scale effect for active card
          const scale = useTransform(
            scrollYProgress,
            [start, start + 0.12, end - 0.12, end],
            [0.95, 1, 1, 0.95]
          );

          // zIndex: active card is above others
          const zIndex = useTransform(
            scrollYProgress,
            [start, start + 0.12, end - 0.12, end],
            [0, 10, 10, 0]
          );

          return (
            <motion.div
              key={idx}
              style={{ x, opacity, scale, zIndex }}
              className="absolute w-[70%] max-w-2xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center will-change-transform"
            >
              <div className="mb-6">
                <img
                  src={service.gif}
                  alt={service.title + " icon"}
                  className="mx-auto"
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1E4E9C] mb-4">
                {service.title}
              </h3>
              <p className="text-base text-[#2B2B2B]">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}