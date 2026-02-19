"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4 fill-primary" />
                            <span>Next Generation Lubricant Solutions</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            Precision <span className="gradient-text">Performance</span> for Industrial Excellence
                        </h1>

                        <p className="text-lg text-muted mb-8 max-w-xl">
                            Empowering dealers with high-grade industrial lubricants, engineered for durability and peak efficiency. Join the platform that redefines lubricant distribution.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="btn-primary flex items-center gap-2">
                                Become a Dealer <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-6 py-3 rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-all">
                                Explore Products
                            </button>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6">
                            {[
                                { icon: ShieldCheck, label: "Certified Grade" },
                                { icon: Award, label: "Top Quality" },
                                { icon: Zap, label: "Fast Delivery" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <item.icon className="w-6 h-6 text-secondary" />
                                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white animate-float">
                            {/* Since I can't generate an image, I'll use a stylized div representing a product */}
                            <div className="aspect-[4/5] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 flex items-center justify-center p-12">
                                <div className="relative w-full h-full border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-24 h-40 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg shadow-2xl mb-8 relative">
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded" />
                                        <div className="absolute inset-x-2 bottom-4 top-10 border border-white/30 rounded flex items-center justify-center">
                                            <span className="text-white font-black text-2xl tracking-tighter">LP</span>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">ULTRA-DRIVE 5000</h3>
                                    <p className="text-blue-200 text-sm">Synthetic Industrial Lubricant</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
