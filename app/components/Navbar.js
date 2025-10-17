"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname()

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm font-poppins">
            {/* Tilted Dual-Line Sweep */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {/* Main Gold Line */}
                <div
                    className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] rotate-[25deg]"
                    style={{
                        backgroundImage:
                            "linear-gradient(120deg, transparent 40%, rgb(207 187 16) 50%, transparent 60%)",
                        animation: "shineSweep 4s ease-in-out infinite",
                    }}
                />
                {/* Ghost Trail Line */}
                <div
                    className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] rotate-[25deg]"
                    style={{
                        backgroundImage:
                            "linear-gradient(120deg, transparent 40%, rgb(200 190 140) 50%, transparent 60%)",
                        animation: "ghostSweep 4s ease-in-out infinite",
                        animationDelay: "0.5s",
                    }}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="/SmartWay.png"
                        alt="Smart Way Consultancy Logo"
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 text-[#2B2B2B] font-medium text-[15px]">
                    {[
                        { label: "Home", href: "/" },
                        { label: "About Us", href: "/about" },
                        { label: "Services", href: "/services" },
                        { label: "Contact", href: "/contact" },
                    ].map(({ label, href }, idx) => {
                        const isActive = pathname === href;
                        return (
                            <Link key={idx} href={href} className="relative group">
                                <span
                                    className={`transition ${isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
                                        }`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#1E4E9C] focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-out animate-slideDown">
                    <div className="flex flex-col items-center justify-center space-y-4 py-6 text-[#2B2B2B] font-medium text-[16px]">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }, idx) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={idx}
                                    href={href}
                                    className={`transition ${isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )} */}

            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-40 animate-[fadeIn_0.4s_ease-out]">
                    <div className="grid grid-cols-2 gap-4 px-6 py-6 text-[#2B2B2B] font-medium text-[15px]">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }, idx) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={idx}
                                    href={href}
                                    className={`text-center py-2 rounded-lg transition ${isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>

    );
};

export default Navbar;