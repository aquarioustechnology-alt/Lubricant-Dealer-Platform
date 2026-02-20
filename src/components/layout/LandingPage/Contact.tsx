"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Select from "react-select";
import { cn } from "@/lib/utils";

// Custom styles for React-Select to match theme
const customSelectStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: 'white',
        borderColor: state.isFocused ? '#001D3D' : '#e2e8f0',
        borderRadius: '0',
        padding: '6px 4px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#001D3D'
        }
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected ? '#001D3D' : state.isFocused ? '#f1f5f9' : 'white',
        color: state.isSelected ? 'white' : '#1e293b',
        fontSize: '14px',
        fontWeight: '500',
        '&:active': {
            backgroundColor: '#001D3D'
        }
    }),
    placeholder: (base: any) => ({
        ...base,
        color: '#94a3b8'
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#1e293b'
    })
};

const businessTypeOptions = [
    { value: "Dealer / Distributor", label: "Dealer / Distributor" },
    { value: "Brand / Manufacturer", label: "Brand / Manufacturer" },
    { value: "Other", label: "Other" }
];

const helpOptions = [
    { value: "Request Access / Onboarding", label: "Request Access / Onboarding" },
    { value: "Login Issue", label: "Login Issue" },
    { value: "Inventory / Stock Update", label: "Inventory / Stock Update" },
    { value: "Assignment Status (Ready / Dispatched)", label: "Assignment Status (Ready / Dispatched)" },
    { value: "Other", label: "Other" }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        mobile: "",
        email: "",
        message: ""
    });

    const [businessType, setBusinessType] = useState<any>(null);
    const [helpCategory, setHelpCategory] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <section className="bg-[#F8FAFC] overflow-x-hidden relative" id="contact">
            <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-24">

                    {/* Left Side: Image Side with Info Overlay */}
                    {/* The relative container drives mobile height but yields to `stretch` on desktop  */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[auto] rounded-none overflow-hidden lg:overflow-visible shadow-2xl lg:shadow-none">

                        {/* The exact blue background mimicking the inspiration */}
                        {/* Uses negative margin to bleed to the edge. Gradients to create the top-left dark triangle. */}
                        <div
                            className="absolute top-0 bottom-0 right-4 lg:right-12 z-0 w-[200vw] hidden md:block"
                            style={{ background: "linear-gradient(145deg, #001D3D 0%, #001D3D 15%, #0066B2 15%, #0066B2 100%)" }}
                        />

                        {/* On mobile, use a simpler background to preserve the look without breaking layout */}
                        <div className="absolute inset-0 bg-[#0066B2] z-0 block md:hidden" />

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            // Absolute fully fills the precise matched height requested from the right column
                            className="absolute inset-0 z-10 overflow-hidden group lg:shadow-2xl"
                        >
                            <Image
                                src="/images/hero-image-1.png"
                                alt="Contact Hub"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Contact Info Overlay - Premium Glass Effect */}
                            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-8 text-white shadow-2xl">
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-4 md:gap-5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-white/20 flex items-center justify-center bg-white/10 shrink-0">
                                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em] mb-0.5 md:mb-1">Direct Line</p>
                                            <p className="text-white font-medium text-base md:text-lg leading-none">+91 1800 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 md:gap-5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-white/20 flex items-center justify-center bg-white/10 shrink-0">
                                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em] mb-0.5 md:mb-1">Email Us</p>
                                            <p className="text-white font-medium text-base md:text-lg leading-none">info@lubeplatform.in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 md:gap-5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-white/20 flex items-center justify-center bg-white/10 shrink-0">
                                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em] mb-0.5 md:mb-1">Operating Hours</p>
                                            <p className="text-white font-medium text-base md:text-lg leading-none">Mon - Sat: 10AM - 7PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Compact Form Area */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center pb-8 lg:pb-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-[3px] bg-brand-red" />
                                <span className="text-brand-red font-semibold uppercase tracking-[0.25em] text-[12px]">
                                    Contact Us
                                </span>
                            </div>

                            <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-medium text-[#001D3D] mb-10 leading-[1.1] tracking-tight">
                                Ready to Digitally Transform Your Distribution?
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Business Type</label>
                                        <Select
                                            required
                                            options={businessTypeOptions}
                                            styles={customSelectStyles}
                                            placeholder="Select Type"
                                            value={businessType}
                                            onChange={setBusinessType}
                                        />
                                    </div>
                                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Company (Optional)</label>
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium"
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Mobile Number</label>
                                        <div className="relative flex">
                                            <div className="flex items-center gap-2 px-3 bg-slate-50 border border-r-0 border-slate-200 shrink-0">
                                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-auto" />
                                                <span className="text-[12px] font-semibold text-slate-600">+91</span>
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Number"
                                                className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium"
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                        <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">How can we help?</label>
                                    <Select
                                        required
                                        options={helpOptions}
                                        styles={customSelectStyles}
                                        placeholder="Select Category"
                                        value={helpCategory}
                                        onChange={setHelpCategory}
                                    />
                                </div>

                                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                    <label className="text-[10px] font-bold text-black uppercase tracking-widest pl-1">Message</label>
                                    <textarea
                                        required
                                        rows={3}
                                        placeholder="Briefly describe your needs..."
                                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-primary focus:outline-none transition-all text-[14px] font-medium resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="btn-fill-primary w-full py-4 mt-2 group disabled:opacity-70 transition-all active:scale-[0.98]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3 font-bold tracking-[0.2em] text-[11px] uppercase">
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
