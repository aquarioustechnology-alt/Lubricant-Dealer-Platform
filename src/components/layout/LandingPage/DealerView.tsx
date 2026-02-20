"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        title: "Update stock once - stay sorted",
        desc: "No repeated calls, no repeated follow-ups."
    },
    {
        title: "Know what’s pending instantly",
        desc: "Assignments, acceptance, Ready/Dispatched in one view."
    },
    {
        title: "Avoid stock disputes",
        desc: "Logs keep your entries clean and trackable."
    }
];
import { LoginModal } from "../../common/AuthModals";

export default function DealerView() {
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <section id="dealer-benefits" className="py-[90px] lg:py-[106px] bg-white overflow-hidden">
            <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content Side */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Branding Badge */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-[3px] bg-brand-red" />
                                <span className="text-brand-red font-bold uppercase tracking-[0.25em] text-[12px]">
                                    Solutions for Dealers
                                </span>
                            </div>

                            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-medium text-[#001D3D] mb-6 leading-[1.1] tracking-tight">
                                Made for Dealers Who Handle Multiple Brands Daily
                            </h2>

                            <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-normal">
                                If you sell lubricants, your biggest daily work is inventory and fulfilment updates. Dealer keeps it simple and fast.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-6 mb-10">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg text-slate-900 leading-tight mb-1">{item.title}</h4>
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
                                        Dealer Login <ArrowRight className="w-5 h-5" />
                                    </span>
                                </button>
                                <button className="btn-fill-secondary">
                                    <span className="relative z-10 font-semibold">Contact Us</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image Side - Staggered Grid */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative grid grid-cols-2 gap-4 items-start"
                        >
                            {/* Left Image (Lower) */}
                            <div className="relative aspect-[3/4] self-end mt-16 md:mt-24 shadow-2xl overflow-hidden group">
                                <Image
                                    src="/images/hero-image-1.png"
                                    alt="Dealer Operations"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Right Image (Higher) */}
                            <div className="relative aspect-[3/4] shadow-2xl overflow-hidden group">
                                <Image
                                    src="/images/hero-image-3.png"
                                    alt="Detail view"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
        </section>
    );
}
