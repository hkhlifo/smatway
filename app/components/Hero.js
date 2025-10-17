"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "6px"]);

    return (
        <section ref={ref} className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden">
            {/* Background Video */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                style={{ scale, filter: blur }}
                className="absolute top-0 left-0 w-full md:mt-9 h-full md:object-cover object-fill z-0"
            >
                <source src="/bg-video/smartway1.mp4" type="video/mp4" />
            </motion.video>

            {/* Glass Panel */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-10 max-w-2xl shadow-xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-semibold text-white bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent animate-shimmer"
                >
                    Building Better Future Together
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-4 text-lg text-white/80"
                >
                    Smart Way Consultancy — UAE’s Premium Business Partner
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <Link
                        href="/contact"
                        className="mt-6 inline-block bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c49e2f] transition shadow-md hover:shadow-lg"
                    >
                        Get Free Consultation
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}