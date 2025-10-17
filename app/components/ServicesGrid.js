"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        title: "Business Setup",
        description: "Company formation, trade licensing, renewals, and PRO services tailored to UAE regulations.",
        icon: "🏢",
        link: "/contact",
    },
    {
        title: "Visa Services",
        description: "Investor, partner, family, and employee visas with fast-track processing and compliance.",
        icon: "🛂",
        link: "/contact",
    },
    {
        title: "Accounting & Finance",
        description: "Bookkeeping, VAT registration, audits, and financial reporting with clarity and precision.",
        icon: "📊",
        link: "/contact",
    },
    {
        title: "IT & Tech Support",
        description: "Cloud setup, cybersecurity, website development, and digital transformation strategies.",
        icon: "💻",
        link: "/contact",
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className="bg-gradient-to-br from-[#F9F9F9] to-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                    >
                        <div className="text-3xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-[#1E4E9C]">{service.title}</h3>
                        <p className="mt-2 text-sm text-[#2B2B2B]">{service.description}</p>
                        <Link
                            href={service.link}
                            className="mt-4 inline-block text-[#D4AF37] font-medium hover:underline"
                        >
                            Get Started →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}