"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        // The type annotation ": WheelEvent" is removed for JavaScript
        const handleWheel = (e) => {
            if (e.deltaY === 0) return;
            // Prevent default vertical scroll
            e.preventDefault();
            // Scroll horizontally based on vertical wheel input
            el.scrollBy({ left: e.deltaY, behavior: "smooth" });
        };

        // Adding a non-passive listener to allow preventDefault
        el.addEventListener("wheel", handleWheel, { passive: false });

        // Cleanup function
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <main
            ref={scrollRef}
            className="bg-white text-[#2B2B2B] font-poppins overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex h-screen w-screen scrollbar-hide"
        >
            {/* Hero Section */}
            <section className="snap-start shrink-0 w-screen h-full relative overflow-hidden">
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/ad-images/img5.png"
                        alt="Smart Way City"
                        className="w-full h-full object-fill md:object-cover scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-white/10" />
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(120deg, transparent 40%, rgba(207,187,16,0.15) 50%, transparent 60%)",
                            animation: "shineSweep 6s ease-in-out infinite",
                        }}
                    />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
                >
                    <img
                        src="/SmartWay.png"
                        alt="Smart Way Logo"
                        className=" h-24 mb-6 animate-pulse"
                    />
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
                        Smart Way Consultancy
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-[#D4AF37] font-medium tracking-wide">
                        Building Better Future Together
                    </p>
                    {/* Mobile Swipe Hint */}
                    <div className=" absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="text-sm text-[#fff] font-medium px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-[#D4AF37]/40 shadow-md animate-pulse transition-transform duration-700 ease-in-out hover:translate-x-1">
                            Swipe to explore →
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Who We Are Section */}
            <section className="snap-start shrink-0 w-screen h-full relative flex flex-col-reverse md:flex-row items-center justify-center px-2 pt-15 gap-4 sm:pt-0 bg-gradient-to-br from-white to-[#F9F9F9]">
                {/* Image Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-full overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0"
                >
                    <img
                        src="/ad-images/img3.png"
                        alt="Smart Way Team"
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </motion.div>

                {/* Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 w-full md:w-1/2 p-6 sm:p-8 bg-white/80 backdrop-blur-md border border-[#eaeaea] rounded-2xl shadow-xl"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E4E9C] mb-4 relative">
                        <span className="inline-block bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
                            Who We Are ?
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#2B2B2B]/80 leading-relaxed">
                        Smart Way Consultancy is a UAE-based firm offering Business Setup,
                        Visa Processing, Accounting, and IT Solutions. <br /><br />
                        We're not just about completing procedures — we're about creating
                        smooth, compliant, and stress-free experiences. <br /><br />
                        Our team blends deep market knowledge with modern tech to deliver
                        fast, reliable results.
                    </p>
                </motion.div>
            </section>

            {/* Achievements & Reach Section */}
            <section className="snap-start shrink-0 w-screen h-full relative flex flex-col items-center justify-center px-6 pt-20 sm:pt-0 bg-black text-white">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/ad-images/img7.png"
                        alt="Smart Way Achievements"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-white/10" />
                    <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-[#D4AF37]/10 via-white to-transparent blur-2xl opacity-30" />
                </div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 mb-6 sm:mb-10 text-center"
                >
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] to-[#1E4E9C] bg-clip-text text-transparent">
                        Our Achievements & Reach
                    </h2>
                    <p className="mt-2 text-xs sm:text-base text-white/80">
                        Trusted by thousands. Driven by results. Built for impact.
                    </p>
                </motion.div>

                {/* Stat Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl"
                >
                    {[
                        ["500+", "Businesses Established"],
                        ["1,000+", "Visa Processes Completed"],
                        ["24/7", "Client Assistance"],
                        ["100%", "Client Satisfaction"],
                    ].map(([stat, label], i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="bg-white/70 backdrop-blur-md border border-[#eaeaea] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center text-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 w-full h-full bg-gradient-radial from-[#D4AF37]/20 to-transparent blur-xl opacity-30" />
                                <p className="text-2xl sm:text-4xl font-bold text-[#000] z-10 relative">{stat}</p>
                            </div>
                            <p className="text-xs sm:text-sm text-[#2B2B2B]/80 mt-2">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="snap-start shrink-0 w-screen h-full relative flex flex-col items-center justify-center px-6 pt-20 sm:pt-10 bg-gradient-to-br from-white to-[#F9F9F9]">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-[#1E4E9C]/10 blur-2xl opacity-20" />
                </div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 mb-4 sm:mb-8 text-center"
                >
                    <h2 className="text-xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] to-[#1E4E9C] bg-clip-text text-transparent animate-pulse">
                        Our Mission & Vision
                    </h2>
                    <p className="mt-2 text-[11px] sm:text-sm text-[#2B2B2B]/70">
                        Purpose-driven. Future-focused. Built to inspire.
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-8 w-full max-w-6xl"
                >
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 bg-white/80 backdrop-blur-md border border-[#eaeaea] rounded-2xl p-3 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 text-center"
                    >
                        <div className="flex justify-center mb-3">
                            <img
                                src="/icons/mission.gif"
                                alt="Mission Icon"
                                className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#1E4E9C] mb-2">Our Mission</h3>
                        <p className="text-[11px] sm:text-sm text-[#2B2B2B]/80 leading-relaxed">
                            To simplify and accelerate business growth in the UAE by delivering
                            efficient, transparent, and customized consultancy services that
                            empower individuals and organizations.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="w-[2px] h-40 bg-gradient-to-b from-[#D4AF37] to-[#1E4E9C] animate-pulse rounded-full" />
                        <div className="w-2 h-2 mt-2 bg-[#D4AF37] rounded-full animate-bounce" />
                    </div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 bg-white/80 backdrop-blur-md border border-[#eaeaea] rounded-2xl p-3 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 text-center"
                    >
                        <div className="flex justify-center mb-3">
                            <img
                                src="/icons/vision.gif"
                                alt="Vision Icon"
                                className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#1E4E9C] mb-2">Our Vision</h3>
                        <p className="text-[11px] sm:text-sm text-[#2B2B2B]/80 leading-relaxed">
                            To become the UAE’s most trusted and preferred consultancy firm,
                            setting the benchmark for innovation, professionalism, and client
                            satisfaction in every service we provide.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Our Values */}
            <section className="snap-start shrink-0 w-screen min-h-screen relative flex flex-col items-center justify-center px-6 pt-24 sm:pt-10 bg-gradient-to-br from-white to-[#F9F9F9]">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-[#1E4E9C]/10 blur-2xl opacity-20" />
                </div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 mb-6 sm:mb-10 text-center"
                >
                    <h2 className="text-xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] to-[#1E4E9C] bg-clip-text text-transparent animate-pulse">
                        Our Values — The Principles That Define Us
                    </h2>
                    <div className="mt-2 w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#1E4E9C] rounded-full mx-auto animate-pulse" />
                    <p className="mt-2 text-[11px] sm:text-sm text-[#2B2B2B]/70">
                        What we believe. How we deliver. Why it matters.
                    </p>
                </motion.div>

                {/* Values Grid with Divider */}
                <div className="relative z-10 w-full max-w-6xl">
                    {/* Divider Line */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-[2px] bg-gradient-to-b from-[#D4AF37] to-[#1E4E9C] opacity-40 animate-pulse rounded-full" />
                    <div className="hidden lg:block absolute top-0 bottom-0 left-2/3 w-[2px] bg-gradient-to-b from-[#D4AF37] to-[#1E4E9C] opacity-40 animate-pulse rounded-full" />

                    {/* Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    >
                        {[
                            [
                                "Excellence Through Service",
                                "Every client interaction is guided by precision, care, and consistency for the best possible results.",
                            ],
                            [
                                "Innovation & Technology",
                                "We adopt modern IT tools, digital documentation, and secure systems to deliver fast, accurate, and tech-driven support.",
                            ],
                            [
                                "Trust & Integrity",
                                "Our foundation is built on honesty, transparency, and delivering exactly what we promise.",
                            ],
                            [
                                "Customer Centric Approach",
                                "Each solution is tailored to meet the unique needs of our clients whether individuals or businesses.",
                            ],
                            [
                                "Speed & Reliability",
                                "We value your time and ensure that every process from visa approval to tax filing is handled promptly and efficiently.",
                            ],
                        ].map(([title, desc], i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="bg-white/80 backdrop-blur-md border border-[#eaeaea] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
                            >
                                <h3 className="text-sm sm:text-base font-semibold text-[#1E4E9C] mb-2">
                                    {title}
                                </h3>
                                <p className="text-[11px] sm:text-sm text-[#2B2B2B]/80 leading-relaxed">
                                    {desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Scoped Animations */}

            <style jsx>{`
                @keyframes pulseGlow {
                    0%,
                    100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.5;
                    }
                }

                @keyframes shineSweep {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    50% {
                        transform: translateX(0%);
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `}</style>
        </main>
    );
}