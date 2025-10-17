"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Services spotlight",
    description:
      "Smart Way turns your business vision into reality — with seamless company formation, strategic licensing, and legal precision tailored to UAE success.",
    gif: "/icons/services.gif",
  },
  {
    title: "Business Setup",
    description:
      "Company formation, licensing, and legal structuring tailored to UAE regulations.",
    gif: "/icons/business.gif",
  },
  {
    title: "Visa & Immigration",
    description:
      "End-to-end visa processing for employees, investors, and dependents.",
    gif: "/icons/visa.gif",
  },
  {
    title: "Accounting & Compliance",
    description:
      "VAT registration, bookkeeping, and financial reporting with precision.",
    gif: "/icons/accounting.gif",
  },
  {
    title: "IT & Branding Solutions",
    description:
      "Web development, digital branding, and tech support to elevate your presence.",
    gif: "/icons/it.gif",
  },
];

export default function ServicesHighlight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create transforms for each service position
  const service0Start = 0 / services.length;
  const service0End = 1 / services.length;
  const service1Start = 1 / services.length;
  const service1End = 2 / services.length;
  const service2Start = 2 / services.length;
  const service2End = 3 / services.length;
  const service3Start = 3 / services.length;
  const service3End = 4 / services.length;
  const service4Start = 4 / services.length;
  const service4End = 5 / services.length;

  // Service 0 transforms
  const service0X = useTransform(scrollYProgress, 
    [service0Start, service0Start + 0.12, service0End - 0.12, service0End],
    ["-100%", "0%", "0%", "100%"]
  );
  const service0Opacity = useTransform(scrollYProgress,
    [service0Start, service0Start + 0.12, service0End - 0.12, service0End],
    [0, 1, 1, 0]
  );
  const service0Scale = useTransform(scrollYProgress,
    [service0Start, service0Start + 0.12, service0End - 0.12, service0End],
    [0.95, 1, 1, 0.95]
  );
  const service0Z = useTransform(scrollYProgress,
    [service0Start, service0Start + 0.12, service0End - 0.12, service0End],
    [0, 10, 10, 0]
  );

  // Service 1 transforms
  const service1X = useTransform(scrollYProgress,
    [service1Start, service1Start + 0.12, service1End - 0.12, service1End],
    ["-100%", "0%", "0%", "100%"]
  );
  const service1Opacity = useTransform(scrollYProgress,
    [service1Start, service1Start + 0.12, service1End - 0.12, service1End],
    [0, 1, 1, 0]
  );
  const service1Scale = useTransform(scrollYProgress,
    [service1Start, service1Start + 0.12, service1End - 0.12, service1End],
    [0.95, 1, 1, 0.95]
  );
  const service1Z = useTransform(scrollYProgress,
    [service1Start, service1Start + 0.12, service1End - 0.12, service1End],
    [0, 10, 10, 0]
  );

  // Service 2 transforms
  const service2X = useTransform(scrollYProgress,
    [service2Start, service2Start + 0.12, service2End - 0.12, service2End],
    ["-100%", "0%", "0%", "100%"]
  );
  const service2Opacity = useTransform(scrollYProgress,
    [service2Start, service2Start + 0.12, service2End - 0.12, service2End],
    [0, 1, 1, 0]
  );
  const service2Scale = useTransform(scrollYProgress,
    [service2Start, service2Start + 0.12, service2End - 0.12, service2End],
    [0.95, 1, 1, 0.95]
  );
  const service2Z = useTransform(scrollYProgress,
    [service2Start, service2Start + 0.12, service2End - 0.12, service2End],
    [0, 10, 10, 0]
  );

  // Service 3 transforms
  const service3X = useTransform(scrollYProgress,
    [service3Start, service3Start + 0.12, service3End - 0.12, service3End],
    ["-100%", "0%", "0%", "100%"]
  );
  const service3Opacity = useTransform(scrollYProgress,
    [service3Start, service3Start + 0.12, service3End - 0.12, service3End],
    [0, 1, 1, 0]
  );
  const service3Scale = useTransform(scrollYProgress,
    [service3Start, service3Start + 0.12, service3End - 0.12, service3End],
    [0.95, 1, 1, 0.95]
  );
  const service3Z = useTransform(scrollYProgress,
    [service3Start, service3Start + 0.12, service3End - 0.12, service3End],
    [0, 10, 10, 0]
  );

  // Service 4 transforms
  const service4X = useTransform(scrollYProgress,
    [service4Start, service4Start + 0.12, service4End - 0.12, service4End],
    ["-100%", "0%", "0%", "100%"]
  );
  const service4Opacity = useTransform(scrollYProgress,
    [service4Start, service4Start + 0.12, service4End - 0.12, service4End],
    [0, 1, 1, 0]
  );
  const service4Scale = useTransform(scrollYProgress,
    [service4Start, service4Start + 0.12, service4End - 0.12, service4End],
    [0.95, 1, 1, 0.95]
  );
  const service4Z = useTransform(scrollYProgress,
    [service4Start, service4Start + 0.12, service4End - 0.12, service4End],
    [0, 10, 10, 0]
  );

  const transforms = [
    { x: service0X, opacity: service0Opacity, scale: service0Scale, zIndex: service0Z },
    { x: service1X, opacity: service1Opacity, scale: service1Scale, zIndex: service1Z },
    { x: service2X, opacity: service2Opacity, scale: service2Scale, zIndex: service2Z },
    { x: service3X, opacity: service3Opacity, scale: service3Scale, zIndex: service3Z },
    { x: service4X, opacity: service4Opacity, scale: service4Scale, zIndex: service4Z },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] md:h-[200vh] bg-gradient-to-br from-white to-[#F9F9F9]"
    >
      {/* Sticky viewport */}
      <div className="sticky md:top-30 top-0 h-screen flex items-center justify-center overflow-hidden">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            style={{
              x: transforms[idx].x,
              opacity: transforms[idx].opacity,
              scale: transforms[idx].scale,
              zIndex: transforms[idx].zIndex,
            }}
            className="absolute w-[70%] max-w-2xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center will-change-transform"
          >
            <div className="mb-6">
              {/* Replace <img> with Next.js <Image /> for optimization */}
              <Image
                src={service.gif}
                alt={`${service.title} icon`}
                width={80}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1E4E9C] mb-4">
              {service.title}
            </h3>
            <p className="text-base text-[#2B2B2B]">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}