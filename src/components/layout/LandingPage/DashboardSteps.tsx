"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Box,
    Bell,
    CheckSquare,
    Truck,
    MessageSquare,
    BarChart3,
    MapPin,
    Calendar,
    ArrowRight,
    Search,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type Step = {
    title: string;
    icon: React.ElementType;
};

type TabType = "Dealers" | "Brands";

// --- Mock Data ---
const dealerSteps: Step[] = [
    { title: "Update inventory for multiple brands", icon: Box },
    { title: "View low stock alerts", icon: Bell },
    { title: "Receive assignments and take action", icon: CheckSquare },
    { title: "Mark Ready / Dispatched", icon: Truck },
    { title: "Open brand chat groups", icon: MessageSquare },
];

const brandSteps: Step[] = [
    { title: "View dealer-wise brand inventory", icon: Box },
    { title: "Track zone distribution", icon: MapPin },
    { title: "Check fulfilment updates", icon: CheckSquare },
    { title: "View forecasting drilldowns", icon: BarChart3 },
    { title: "Post announcements to mapped dealers", icon: MessageSquare },
];

// --- Sub-components (Dashboard Snippets - Restored to Premium Rounded Style) ---

const DealerDashboardSnippet = () => (
    <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col font-sans">
        <div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-[10px] font-bold">LD</div>
                <span className="text-xs font-bold text-slate-800 tracking-tight">Dealer Portal</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-32 h-6 bg-slate-100 rounded-md border border-slate-200 flex items-center px-2 gap-2 text-slate-400">
                    <Search className="w-3 h-3" />
                    <div className="w-16 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <User className="w-3 h-3 text-slate-500" />
                </div>
            </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            <div className="w-12 border-r border-slate-200 bg-white flex flex-col items-center py-4 gap-6 shrink-0 text-slate-400">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <Box className="w-5 h-5" />
                <Bell className="w-5 h-5" />
                <MessageSquare className="w-5 h-5" />
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden bg-[#F8FAFC]">
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm text-slate-800">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Stock</div>
                        <div className="text-lg font-black italic">1,240</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Low</div>
                        <div className="text-lg font-black italic text-brand-red">04</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Pending</div>
                        <div className="text-lg font-black italic text-secondary">08</div>
                    </div>
                </div>

                <div className="bg-white flex-1 rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <span className="text-xs font-bold text-slate-700">Recent Assignments</span>
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2">
                        {[1, 2].map(i => (
                            <div key={i} className="h-10 border border-slate-100 rounded-md bg-white flex items-center px-3 justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center"><Box className="w-3 h-3 text-slate-400" /></div>
                                    <div className="w-20 h-2 bg-slate-200 rounded-full" />
                                </div>
                                <div className="w-12 h-5 bg-primary text-white font-bold text-[8px] flex items-center justify-center rounded uppercase tracking-wider">Order</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const BrandDashboardSnippet = () => (
    <div className="w-full h-full bg-[#0F172A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-sans">
        <div className="h-12 border-b border-white/5 bg-[#0F172A] flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-red rounded flex items-center justify-center text-white text-[10px] font-bold italic uppercase">B</div>
                <span className="text-xs font-bold text-white tracking-tight">Brand Console</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <Bell className="w-3 h-3 text-white/50" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <User className="w-3 h-3" />
                </div>
            </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            <div className="w-12 border-r border-white/5 bg-[#0F172A]/80 flex flex-col items-center py-4 gap-6 shrink-0 text-white/30">
                <BarChart3 className="w-5 h-5 text-brand-red" />
                <MapPin className="w-5 h-5" />
                <Calendar className="w-5 h-5" />
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden bg-[#020617]">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                    <div>
                        <div className="text-[9px] text-white/40 font-bold uppercase mb-1">North-West Zone</div>
                        <div className="text-xl font-black text-white italic tracking-tighter">94.2% Fulfilment</div>
                    </div>
                </div>

                <div className="flex-1 flex gap-3">
                    <div className="flex-[2] bg-white/5 border border-white/10 rounded-lg p-3 relative overflow-hidden">
                        <div className="flex items-end gap-1.5 h-16 mt-2">
                            {[40, 70, 45, 90, 60, 85].map((h, i) => (
                                <div key={i} className="flex-1 bg-brand-red/30 border-t border-brand-red rounded-t-sm" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Section ---

export default function DashboardSteps() {
    const [activeTab, setActiveTab] = useState<TabType>("Dealers");
    const [activeStep, setActiveStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const steps = activeTab === "Dealers" ? dealerSteps : brandSteps;

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % steps.length);
            }, 3500);
            return () => clearInterval(timer);
        }
    }, [isHovered, steps.length, activeTab]);

    return (
        <section className="py-[106px] bg-primary text-white overflow-hidden relative">
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-10 h-[3px] bg-white" />
                            <span className="text-white font-bold uppercase tracking-[0.25em] text-[12px]">
                                PORTAL PREVIEW
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white max-w-4xl mx-auto">
                            Screens That Match the Real Work – <br className="hidden md:block" />
                            Inventory, Assignments, Insights
                        </h2>
                        <p className="text-white text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                            This is what users see after login, designed for daily use, not for decoration
                        </p>
                    </motion.div>
                </div>

                {/* Tabs - Hard Edged Industrial */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#001D3D]/50 p-0 flex border border-white/20">
                        {(["Dealers", "Brands"] as TabType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setActiveStep(0); }}
                                className={cn(
                                    "px-12 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all",
                                    activeTab === tab
                                        ? "bg-secondary text-white"
                                        : "text-white/60 hover:text-white"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Dashboard Visual (Premium Style) */}
                    <div className="lg:col-span-12 xl:col-span-8 flex flex-col items-center">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full aspect-[4/3] md:aspect-[16/10] max-w-4xl"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="w-full h-full relative z-10 transition-transform duration-500 hover:scale-[1.01]">
                                {activeTab === "Dealers" ? <DealerDashboardSnippet /> : <BrandDashboardSnippet />}
                            </div>
                            <div className="absolute -inset-4 bg-black/20 blur-2xl -z-10 rounded-[30px] translate-y-8" />
                        </motion.div>

                        <div className="mt-16">
                            <button className="btn-fill-secondary">
                                <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-3">
                                    Open Dashboard <ArrowRight className="w-5 h-5" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Step Indicators - Reverted to Premium Rounded Style as requested */}
                    <div className="lg:col-span-12 xl:col-span-4 flex flex-col pt-10">
                        <div className="space-y-4 relative">
                            {/* Vertical Dotted Line */}
                            <div className="absolute left-[34px] top-6 bottom-6 w-[2px] border-l-2 border-dotted border-white/10 z-0" />

                            {steps.map((step, idx) => {
                                const isActive = activeStep === idx;
                                return (
                                    <motion.div
                                        key={idx}
                                        onClick={() => setActiveStep(idx)}
                                        className={cn(
                                            "relative z-10 group cursor-pointer flex items-center gap-6 p-4 rounded-xl transition-all duration-500",
                                            isActive ? "bg-white/10 border border-white/10" : "opacity-40 hover:opacity-60"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg border transition-all duration-500",
                                            isActive
                                                ? "bg-secondary border-secondary text-white shadow-[0_0_20px_rgba(224,141,39,0.5)]"
                                                : "bg-[#001D3D]/50 border-white/10 text-white/40"
                                        )}>
                                            <step.icon className="w-6 h-6" />
                                        </div>

                                        <div className="flex flex-col">
                                            <div className={cn(
                                                "text-xs font-black uppercase tracking-widest mb-1 transition-colors duration-500",
                                                isActive ? "text-secondary" : "text-white/30"
                                            )}>
                                                Module 0{idx + 1}
                                            </div>
                                            <div className={cn(
                                                "text-md font-bold leading-tight transition-all duration-500",
                                                isActive ? "text-white" : "text-white/50"
                                            )}>
                                                {step.title}
                                            </div>
                                        </div>

                                        {/* Activity Indicator Bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeBar"
                                                className="absolute right-0 top-0 bottom-0 w-1 bg-secondary rounded-r-xl"
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
