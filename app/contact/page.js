"use client";

import { motion } from 'framer-motion'
import React from 'react'

const contact = () => {
    return (
        <div>
            <section className="snap-start shrink-0 w-screen min-h-screen relative flex items-center justify-center px-6 pt-24 sm:pt-10 bg-gradient-to-br from-[#F9F9F9] to-white">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-[#1E4E9C]/10 blur-2xl opacity-20" />
                </div>

                {/* Contact Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md border border-[#eaeaea] rounded-2xl p-6 sm:p-10 shadow-xl"
                >
                    {/* Left: Info & CTA */}
                    <div className="flex flex-col justify-center gap-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
                                Need Any of These Services?
                            </h2>
                            <p className="mt-2 text-sm text-[#2B2B2B]/70">
                                Let our professionals handle the details while you focus on growing your business.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-[#2B2B2B]/80 font-medium">📞 Phone</p>
                            <p className="text-sm text-[#1E4E9C] font-semibold mt-1">+971 585617888</p>
                        </div>

                        <div>
                            <p className="text-sm text-[#2B2B2B]/80 font-medium">📧 Email</p>
                            <a
                                href="mailto:info@smartwayc.com"
                                className="inline-block mt-1 text-sm text-[#D4AF37] hover:underline"
                            >
                                info@smartwayc.com
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="https://wa.me/971585617888"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1E4E9C] to-[#D4AF37] text-white font-medium shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.02]"
                            >
                                💬 WhatsApp Us
                            </a>
                            <a
                                href="mailto:info@smartwayc.com"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-600 to-yellow-400 text-white font-medium shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.02]"
                            >
                                📧 Send Email
                            </a>
                        </div>
                    </div>

                    {/* Right: Optional Form */}
                    <form className="flex flex-col justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-gray-600 to-yellow-400 text-white font-medium shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.02]"
                        >
                            🚀 Send Message
                        </button>
                    </form>
                </motion.div>
            </section>
        </div>
    )
}

export default contact
