"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSummary() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate background gradient shift
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);
  const xImage = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient that intensifies */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#1E4E9C]/30"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-semibold text-[#1E4E9C] bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent">
            Empowering Business Growth in the UAE
          </h2>
          <p className="mt-6 text-lg text-[#2B2B2B] leading-relaxed">
            At <span className="font-semibold text-[#D4AF37]">Smart Way Consultancy</span>, we specialize in turning ideas into thriving businesses. From company formation to visa processing, accounting, and IT solutions—we guide you every step of the way with precision, care, and premium service.
          </p>

          {/* CTA with arrow that slides forward */}
          <motion.a
            href="/about"
            className="mt-6 inline-flex items-center text-[#D4AF37] font-medium relative overflow-hidden group"
            whileHover="hover" // 👈 hover state applied to the whole link
          >
            <span className="relative z-10">Discover More</span>
            <motion.span
              className="ml-2 inline-block"
              variants={{
                hover: { x: 25, opacity: 0, transition: { duration: 0.4 } },
              }}
              initial={{ x: 0, opacity: 1 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          style={{ x: xImage }}
          className="hidden md:block w-full h-[300px] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/ad-images/img2.png" // replace with your actual image path
            alt="Smart Way Consultancy team working together"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}