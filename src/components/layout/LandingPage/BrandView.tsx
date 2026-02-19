"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { LoginModal } from "../../common/AuthModals";

const benefits = [
    {
        title: "See your products across mapped dealers",
        desc: "Get a clear view of availability dealer-wise and zone-wise."
    },
    {
        title: "Plan supply smarter",
        desc: "Use visibility and movement signals to reduce stock-outs."
    },
    {
        title: "Track fulfilment updates",
        desc: "Dealers update assignment status so the brand team stays aligned."
    }
];

export default function BrandView() {
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <section id="brand-benefits" className="py-[90px] lg:py-[106px] bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
                    {/* Right Content Side */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Branding Badge */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-[3px] bg-brand-red" />
                                <span className="text-brand-red font-bold uppercase tracking-[0.25em] text-[12px]">
                                    Solutions for Brands
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-[#001D3D] mb-6 leading-[1.1] tracking-tight">
                                Brands Get Visibility Without Micromanaging Dealers.
                            </h2>

                            <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-normal">
                                Dealer helps brands see where stock is available, which zones are active, and how fulfilment is progressing, without manual reporting.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-6 mb-10">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-slate-900 leading-tight mb-1">{item.title}</h4>
                                            <p className="text-slate-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setLoginOpen(true)}
                                    className="btn-fill-primary"
                                >
                                    <span className="relative z-10 flex items-center gap-3 font-semibold">
                                        Brand Login <ArrowRight className="w-5 h-5" />
                                    </span>
                                </button>
                                <button className="btn-fill-secondary">
                                    <span className="relative z-10 font-semibold">Talk to Us</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Left Image Side */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative pt-4 pl-4" // Padding to make room for offset box
                        >
                            {/* Decorative Orange Box - Size matches image, offset to top-left */}
                            <div className="absolute top-0 left-0 right-4 bottom-4 bg-secondary z-0" />

                            {/* Main Image Container */}
                            <div className="relative aspect-[4/3] shadow-2xl overflow-hidden group z-10 bg-slate-100">
                                <Image
                                    src="/images/Hero Image 3.png"
                                    alt="Brand Visibility"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Floating Red Badge (Positioned on the Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -right-4 lg:-right-10 bottom-10 lg:bottom-16 w-48 md:w-56 bg-brand-red p-6 md:p-8 text-white z-20 shadow-2xl"
                            >
                                <div className="absolute -left-3 bottom-0 w-0 h-0 border-t-[12px] border-t-transparent border-r-[12px] border-r-brand-red" />

                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <div className="mb-4">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold leading-tight uppercase tracking-wide">
                                        Verified Network Visibility
                                    </h4>
                                    <div className="w-10 h-1 bg-white/40 mt-4" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
        </section>
    );
}
