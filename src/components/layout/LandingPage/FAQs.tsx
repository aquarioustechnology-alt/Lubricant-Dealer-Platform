"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Who can use Dealer?",
        answer: "Dealer is made for lubricant dealers/distributors and brands who want structured stock visibility and fulfilment coordination inside one platform."
    },
    {
        question: "How do I get a login?",
        answer: "Click Request Access and share your dealer/brand details. After verification and mapping, your login credentials are created and you can access the portal."
    },
    {
        question: "Can a dealer see all brands on the platform?",
        answer: "No. A dealer only sees brands they are mapped with and authorised to work with. This keeps data private and relevant."
    },
    {
        question: "How to login as a Brand?",
        answer: "Brands can login through the same portal using their corporate credentials. Once our team verifies your brand partnership, we create a specialized Brand Console where you can manage distribution nodes and view forecasting data."
    },
    {
        question: "Is my inventory data safe?",
        answer: "Yes. Access is controlled by role and mapping, and major actions like stock changes and assignment decisions are recorded with logs."
    },
    {
        question: "Is training provided for my staff?",
        answer: "Yes. We offer onboarding sessions for your inventory managers and sales teams to ensure they can use the dispatch and reporting features effectively from day one."
    },
    {
        question: "Can I export my stock reports?",
        answer: "Absolutely. All inventory lists and forecast data can be exported in standardized CSV or PDF formats for your offline audits and internal reviews."
    }
];

export default function FAQs() {
    // Make sure the first FAQ card is open by default
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-white overflow-hidden relative" id="faqs">
            {/* Background Texture Accents */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[3px] bg-brand-red" />
                                <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[12px]">FAQs</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                                Questions People Ask Before They Join
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-xl font-medium">
                                Everything you need to know about setting up your workspace and managing lubricant distribution.
                            </p>
                        </div>

                        <div className="space-y-8 bg-slate-50 p-10 border-l-[6px] border-primary relative overflow-hidden group">

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-5 group/item cursor-pointer">
                                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                                        <p className="text-slate-900 font-bold text-lg">+91 1800 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 group/item cursor-pointer">
                                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Support Email</p>
                                        <p className="text-slate-900 font-bold text-lg">info@lubeplatform.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 relative z-10">
                                <button className="btn-fill-primary w-full group py-4">
                                    <span className="relative z-10 flex items-center justify-center gap-3 font-bold tracking-widest text-[12px]">
                                        JOIN WITH US <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Accordion */}
                    <div className="lg:col-span-7 space-y-5">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "border transition-all duration-500 relative",
                                        isOpen
                                            ? "border-primary bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border-l-[4px]"
                                            : "border-slate-100 bg-white hover:border-slate-300 border-l-[1px]"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-8 py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className={cn(
                                            "text-lg font-bold tracking-tight transition-colors duration-300 pr-8",
                                            isOpen ? "text-primary" : "text-slate-900 group-hover:text-primary"
                                        )}>
                                            {faq.question}
                                        </span>
                                        <div className={cn(
                                            "w-10 h-10 shrink-0 flex items-center justify-center border transition-all duration-500",
                                            isOpen
                                                ? "bg-primary border-primary text-white rotate-180"
                                                : "border-primary/80 text-primary"
                                        )}>
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-8 pb-5">
                                                    <div className="h-[1px] w-full bg-slate-100 mb-4" />
                                                    <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
