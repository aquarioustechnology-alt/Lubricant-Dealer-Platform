"use client";

import { Smartphone, Layers, ClipboardList, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Smartphone,
        title: "OTP Login",
    },
    {
        icon: Layers,
        title: "Mapped Access",
    },
    {
        icon: ClipboardList,
        title: "Inventory Logs",
    },
    {
        icon: ShieldCheck,
        title: "Zone Visibility",
    }
];

export default function ProofStrip() {
    return (
        <section className="relative z-30 -mt-12 lg:-mt-16">
            <div className="max-w-7.5xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="bg-primary shadow-2xl flex flex-col lg:flex-row items-center py-8 lg:py-0 min-h-[120px] px-6 lg:px-16">
                    {/* Left Heading */}
                    <div className="pl-0 pr-2 lg:pr-3 py-4 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/40 flex items-center justify-center lg:justify-start">
                        <h2 className="text-white font-bold text-lg lg:text-xl leading-tight max-w-[420px] text-center lg:text-left">
                            Built for lubricant distribution workflows across India
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-4 items-center">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex flex-col md:flex-row items-center justify-center gap-2 px-3 py-6 lg:py-0 h-full",
                                    index !== features.length - 1 && "border-r border-white/40"
                                )}
                            >
                                <feature.icon className="w-6 h-6 text-white" />
                                <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-widest text-center">
                                    {feature.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
