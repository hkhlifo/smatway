"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

const services = [
    {
        title: "Businessman Services",
        description:
            "Visa processing, Emirates ID, insurance, attestation, and more — everything you need to launch and manage your business in the UAE.",
        icon: "/icons/business.gif",
        link: "/services/business",
        bg: "from-[#F9F9F9] to-[#EAEAEA]",
        png: "/services/Business_setup.png",
        tagline: "Launch with confidence. Scale with ease.",
    },
    {
        title: "IT Services",
        description:
            "Website development, hosting, email setup, and ongoing tech support to keep your business connected and secure.",
        icon: "/icons/it.gif",
        link: "/services/it",
        bg: "from-[#EAEAEA] to-[#F9F9F9]",
        png: "/services/It&tech.png",
        tagline: "Empower your business with smart tech.",
    },
    {
        title: "Accounting & Taxation",
        description:
            "Bookkeeping, VAT registration, and corporate tax compliance — all handled with precision and transparency.",
        icon: "/icons/accounting.gif",
        link: "/services/accounting",
        bg: "from-[#F9F9F9] to-[#EAEAEA]",
        png: "/services/Accounting.png",
        tagline: "Stay compliant. Stay confident.",
    },
];

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const transforms = services.map((_, idx) => {
        const start = idx / services.length;
        const end = (idx + 1) / services.length;

        return {
            y: useTransform(scrollYProgress, [start, end], ["100%", "0%"]),
            opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            scale: useTransform(scrollYProgress, [start, end], [0.95, 1]),
            zIndex: useTransform(scrollYProgress, [start, end], [0, 10]),
        };
    });

    return (
        <section className="relative bg-gradient-to-br from-white to-[#F9F9F9]">
            {/* Cinematic Intro */}
            <div className="w-full px-6 py-10 mt-30 mb-[-200px] text-center max-w-6xl mx-auto relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] mb-6">
                        Comprehensive Business Solutions
                    </h2>
                    <p className="text-[#2B2B2B]/80 text-lg sm:text-xl mb-4 leading-relaxed">
                        At Smart Way Consultancy, we offer a complete range of professional services designed to make your business journey in the UAE smooth, compliant, and successful.
                    </p>
                    <p className="text-[#2B2B2B]/80 text-lg sm:text-xl mb-4 leading-relaxed">
                        Whether you're an entrepreneur launching a new company, a family settling in, or an established business upgrading your IT or accounting systems — we've got you covered.
                    </p>
                    <p className="text-[#1E4E9C] text-lg sm:text-xl font-semibold">
                        Start your business the Smart Way — Contact us today for expert guidance!
                    </p>
                </motion.div>

                {/* Ambient SVG Accents */}
                {/* Top Right */}
                <svg viewBox="0 0 200 200" className="absolute top-[-40px] right-[-40px] w-48 h-48 opacity-20 animate-pulse">
                    <path fill="#D4AF37" d="M40,-60C60,-40,80,-20,70,0C60,20,40,40,20,60C0,80,-20,80,-40,60C-60,40,-80,20,-70,0C-60,-20,-40,-40,-20,-60C0,-80,20,-80,40,-60Z" transform="translate(100 100)" />
                </svg>

                {/* Bottom Left */}
                <svg viewBox="0 0 200 200" className="absolute bottom-[-30px] left-[-30px] w-32 h-32 opacity-10 animate-pulse">
                    <path fill="#D4AF37" d="M50,-50C65,-35,75,-15,70,5C65,25,45,45,25,60C5,75,-15,75,-35,60C-55,45,-75,25,-70,5C-65,-15,-45,-35,-25,-50C-5,-65,15,-65,35,-50Z" transform="translate(100 100)" />
                </svg>

                {/* Mid Left */}
                <svg viewBox="0 0 200 200" className="absolute top-[20%] left-[10%] w-24 h-24 opacity-10 animate-pulse">
                    <path fill="#D4AF37" d="M60,-50C75,-30,85,-10,80,10C75,30,55,50,35,65C15,80,-5,80,-25,65C-45,50,-65,30,-60,10C-55,-10,-35,-30,-15,-50C5,-70,25,-70,45,-50Z" transform="translate(100 100)" />
                </svg>

                {/* Bottom Right — Large */}
                <svg viewBox="0 0 200 200" className="absolute bottom-[-60px] right-[-60px] w-64 h-64 opacity-20 animate-pulse">
                    <path fill="#1E4E9C" d="M70,-50C85,-30,95,-10,90,10C85,30,65,50,45,65C25,80,5,80,-15,65C-35,50,-55,30,-50,10C-45,-10,-25,-30,-5,-50C15,-70,35,-70,55,-50Z" transform="translate(100 100)" />
                </svg>

                {/* Bottom Right — Medium */}
                <svg viewBox="0 0 200 200" className="absolute top-[10%] left-[5%] w-36 h-36 opacity-10 animate-pulse">
                    <path fill="#1E4E9C" d="M55,-65C70,-50,80,-30,75,-10C70,10,50,30,30,45C10,60,-10,60,-30,45C-50,30,-70,10,-65,-10C-60,-30,-40,-50,-20,-65C0,-80,20,-80,40,-65Z" transform="translate(100 100)" />
                </svg>

                {/* Scroll Cue Divider */}
                <div className="mt-10 flex flex-col items-center justify-center gap-3 text-[#1E4E9C]/80">
                    {/* Arrow Pulse */}
                    <div className="relative w-10 h-10 animate-bounce">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#1E4E9C]/30 blur-md scale-110 opacity-50"></div>
                        <div className="relative z-10 text-3xl font-bold text-[#1E4E9C] drop-shadow-sm">↓</div>
                    </div>

                    {/* Label */}
                    <p className="text-base sm:text-lg font-semibold tracking-wide bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
                        Scroll to explore services
                    </p>

                    {/* Divider Line */}
                    <div className="w-24 h-[2px] bg-gradient-to-r from-[#1E4E9C]/40 via-[#D4AF37]/60 to-[#1E4E9C]/40 rounded-full animate-pulse" />
                </div>

            </div>
            {/* Scroll-Reveal Cards */}
            <div ref={containerRef} className="relative h-[150vh] md:h-[200vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            style={transforms[idx]}
                            className={`absolute w-[90vw] sm:w-[70vw] h-[85vh] sm:h-[70vh] bg-gradient-to-br ${service.bg} backdrop-blur-md border border-[#eaeaea] rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between will-change-transform`}
                        >
                            {/* Svgs */}
                            <svg viewBox="0 0 200 200" className="absolute bottom-[-30px] left-[-30px] w-32 h-32 opacity-10 animate-pulse z-0">
                                <path fill="#D4AF37" d="M50,-60C65,-45,75,-25,70,-10C65,5,45,15,30,30C15,45,-5,65,-25,60C-45,55,-65,35,-70,10C-75,-15,-65,-45,-45,-60C-25,-75,5,-75,30,-70C55,-65,65,-45,50,-60Z" transform="translate(100 100)" />
                            </svg>
                            <svg viewBox="0 0 200 200" className="absolute top-[-20px] right-[-20px] w-24 h-24 opacity-10 animate-pulse z-0">
                                <path fill="#1E4E9C" d="M60,-60C75,-45,85,-25,80,-5C75,15,55,35,35,50C15,65,-5,65,-25,50C-45,35,-65,15,-60,-5C-55,-25,-35,-45,-15,-60C5,-75,25,-75,45,-60Z" transform="translate(100 100)" />
                            </svg>
                            {/* Centered SVGs */}
                            <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20 animate-pulse z-0">
                                <path fill="#D4AF37" d="M55,-65C70,-50,80,-30,75,-10C70,10,50,30,30,45C10,60,-10,60,-30,45C-50,30,-70,10,-65,-10C-60,-30,-40,-50,-20,-65C0,-80,20,-80,40,-65Z" transform="translate(100 100)" />
                            </svg>
                            <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10 animate-pulse z-0">
                                <path fill="#1E4E9C" d="M45,-55C60,-40,70,-20,65,0C60,20,40,40,20,55C0,70,-20,70,-40,55C-60,40,-70,20,-65,0C-60,-20,-40,-40,-20,-55C0,-70,20,-70,45,-55Z" transform="translate(100 100)" />
                            </svg>

                            {/* Left Side */}
                            <div className="flex flex-col justify-between h-full w-full sm:w-[50%] sm:pr-6 text-center sm:text-left">
                                {/* GIF */}
                                <div className="mx-auto mb-6 flex items-center justify-center rounded-xl border border-[#eaeaea] bg-white/60 backdrop-blur-sm p-3 shadow-sm sm:p-4 sm:shadow-md">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={64}
                                        height={64}
                                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-semibold text-[#1E4E9C] mb-2 sm:mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#2B2B2B] mb-2">
                                        {service.description}
                                    </p>
                                </div>
                                <p className="text-sm italic text-[#1E4E9C]/80">{service.tagline}</p>
                            </div>

                            {/* Right Side */}
                            <div className="w-full sm:w-[50%] h-full flex items-center justify-center mt-4 sm:mt-0 overflow-hidden rounded-[40px]">
                                <motion.img
                                    src={service.png}
                                    alt={`${service.title} visual`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full object-cover"
                                />
                                {/* CTA */}
                                <Link
                                    href={service.link}
                                    className="absolute bottom-4 sm:bottom-6 left-1/2 sm:left-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] text-white font-medium shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.02] z-10"
                                >
                                    Explore
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </section >
    );
}