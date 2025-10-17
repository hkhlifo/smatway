"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    return (
        <section className="py-16 px-6 bg-white max-w-3xl mx-auto">
            <form className="space-y-6">
                {["name", "email", "message"].map((field) => (
                    <div key={field} className="relative">
                        <input
                            type={field === "message" ? "textarea" : "text"}
                            name={field}
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#1E4E9C] bg-white text-sm"
                            value={form[field]}
                            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        />
                        <label
                            htmlFor={field}
                            className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
                        >
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c49e2f] transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}