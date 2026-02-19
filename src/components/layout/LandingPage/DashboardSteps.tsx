"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    User,
    Plus,
    Filter,
    MoreHorizontal,
    Send
} from "lucide-react";
import Image from "next/image";
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

// --- Sub-components (High-Fidelity Dashboard Snippets) ---

const DealerDashboardSnippet = ({ activeStep }: { activeStep: number }) => {
    return (
        <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
            {/* Top Navigation Bar */}
            <div className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-5 shrink-0">
                <div className="flex items-center gap-4">
                    <Image src="/images/Logo.png" alt="Logo" width={100} height={30} className="object-contain" />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <span className="text-sm font-semibold text-slate-800 tracking-tight">Dealer Portal</span>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-48 h-9 bg-slate-50 border border-slate-200 flex items-center px-3 gap-3 rounded-md">
                        <Search className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400">Search transactions...</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center relative">
                        <Bell className="w-4 h-4 text-slate-600" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red rounded-full border-2 border-white" />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Fixed Sidebar */}
                <div className="w-16 border-r border-slate-200 bg-white flex flex-col items-center py-6 gap-8 shrink-0">
                    <LayoutDashboard className={cn("w-5 h-5", activeStep === 0 ? "text-primary" : "text-slate-300")} />
                    <Box className={cn("w-5 h-5", activeStep === 0 ? "text-primary" : "text-slate-300")} />
                    <Bell className={cn("w-5 h-5", activeStep === 1 ? "text-primary" : "text-slate-300")} />
                    <CheckSquare className={cn("w-5 h-5", activeStep === 2 ? "text-primary" : "text-slate-300")} />
                    <MessageSquare className={cn("w-5 h-5", activeStep === 4 ? "text-primary" : "text-slate-300")} />
                </div>

                {/* Content Viewer based on Step */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden bg-[#F9FAFB]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col gap-6"
                        >
                            {activeStep === 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-slate-900 leading-none">Stock Inventory</h3>
                                        <button className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">Update Stock</button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {["Shell Advance", "Castrol Power1", "Mobil 1"].map((brand, i) => (
                                            <div key={i} className="bg-white p-4 border border-slate-200 shadow-sm rounded-lg">
                                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">{brand}</div>
                                                <div className="text-2xl font-bold text-slate-900 leading-none">1,240 <span className="text-xs font-medium text-slate-400 uppercase">Ltr</span></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white flex-1 border border-slate-200 rounded-lg shadow-sm">
                                        <div className="h-10 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50 rounded-t-lg">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase">Recent Movements</span>
                                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="p-4 space-y-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0 text-sm">
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-slate-800">4T Engine Oil 10W-40</span>
                                                        <span className="text-[10px] text-slate-500">Box ID: 44210</span>
                                                    </div>
                                                    <span className="font-bold text-primary">+120 Units</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-brand-red/10 rounded-md">
                                            <Bell className="w-5 h-5 text-brand-red" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-none">Stock Alerts</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { name: "Mobil Super 3000", stock: "12 Units", min: "50 Units", status: "Critical" },
                                            { name: "Castrol Magnatec", stock: "08 Units", min: "25 Units", status: "Low" },
                                            { name: "Shell Helix HX7", stock: "02 Units", min: "15 Units", status: "Critical" }
                                        ].map((alert, i) => (
                                            <div key={i} className="bg-white p-5 border-l-4 border-brand-red shadow-sm rounded-r-lg border border-slate-200 flex items-center justify-between">
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 mb-1">{alert.name}</div>
                                                    <div className="text-[11px] text-slate-500">Threshold: {alert.min} • <span className="text-brand-red font-bold uppercase">{alert.status}</span></div>
                                                </div>
                                                <button className="text-primary text-xs font-bold border border-primary px-4 py-2 rounded uppercase hover:bg-primary/5">Order Now</button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {activeStep === 2 && (
                                <>
                                    <h3 className="text-lg font-bold text-slate-900 leading-none mb-2">New Assignments</h3>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                                        <div className="grid grid-cols-4 bg-slate-50 p-4 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                            <span>Task ID</span>
                                            <span>Product</span>
                                            <span>Quantity</span>
                                            <span className="text-right">Action</span>
                                        </div>
                                        <div className="divide-y divide-slate-50">
                                            {[
                                                { id: "#ASG-99", prod: "Gear Oil 5L", qty: "20 Boxes" },
                                                { id: "#ASG-88", prod: "Brake Fluid", qty: "10 Boxes" },
                                                { id: "#ASG-77", prod: "Coolant 1L", qty: "15 Boxes" }
                                            ].map((task, i) => (
                                                <div key={i} className="grid grid-cols-4 p-4 text-sm items-center hover:bg-slate-50 transition-colors">
                                                    <span className="font-mono text-xs text-slate-500">{task.id}</span>
                                                    <span className="font-medium text-slate-800">{task.prod}</span>
                                                    <span className="text-slate-600">{task.qty}</span>
                                                    <div className="flex justify-end">
                                                        <button className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded uppercase">Accept</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 3 && (
                                <>
                                    <h3 className="text-lg font-bold text-slate-900 leading-none">Shipping & Dispatch</h3>
                                    <div className="grid gap-4">
                                        {[
                                            { label: "Pending for Ready", count: "14 Items", icon: Calendar, color: "bg-amber-500" },
                                            { label: "Dispatched (In Transit)", count: "08 Items", icon: Truck, color: "bg-blue-500" }
                                        ].map((cat, i) => (
                                            <div key={i} className="bg-white p-6 border border-slate-200 rounded-xl flex items-center gap-5">
                                                <div className={cn("p-4 rounded-xl text-white shadow-lg", cat.color)}>
                                                    <cat.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-slate-900">{cat.count}</div>
                                                    <div className="text-sm text-slate-500">{cat.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {activeStep === 4 && (
                                <div className="flex flex-1 flex-col bg-white border border-slate-200 rounded-lg overflow-hidden">
                                    <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">C</div>
                                            <span className="text-sm font-bold text-slate-800">Castrol Zonal Connect</span>
                                        </div>
                                        <Filter className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50/30">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0" />
                                            <div className="bg-white p-3 rounded-lg border border-slate-200 max-w-[80%] text-sm text-slate-700 shadow-sm">
                                                Update your inventory by evening for the North Zone audit.
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center text-white text-[10px] font-bold">YOU</div>
                                            <div className="bg-primary p-3 rounded-lg text-sm text-white max-w-[80%] shadow-sm">
                                                Done. All Mobil 1 SKUs updated.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-t border-slate-100 bg-white flex gap-3">
                                        <div className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-xs text-slate-400">Type a message...</div>
                                        <button className="p-2 bg-primary rounded-full text-white shadow-md"><Send className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const BrandDashboardSnippet = ({ activeStep }: { activeStep: number }) => {
    return (
        <div className="w-full h-full bg-[#0F172A] flex flex-col font-sans overflow-hidden">
            {/* Dark Top Nav */}
            <div className="h-14 border-b border-white/5 bg-[#0F172A] flex items-center justify-between px-5 shrink-0">
                <div className="flex items-center gap-4">
                    <Image src="/images/Logo.png" alt="Logo" width={100} height={30} className="object-contain brightness-0 invert" />
                    <div className="h-6 w-[1px] bg-white/10" />
                    <span className="text-sm font-semibold text-white tracking-tight">Brand Console</span>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F172A] bg-slate-800" />)}
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Fixed Dark Sidebar */}
                <div className="w-16 border-r border-white/5 bg-[#0F172A] flex flex-col items-center py-6 gap-8 shrink-0">
                    <BarChart3 className={cn("w-5 h-5", activeStep === 0 ? "text-brand-red" : "text-white/20")} />
                    <MapPin className={cn("w-5 h-5", activeStep === 1 ? "text-brand-red" : "text-white/20")} />
                    <Calendar className={cn("w-5 h-5", activeStep === 2 ? "text-brand-red" : "text-white/20")} />
                    <LayoutDashboard className={cn("w-5 h-5", activeStep === 3 ? "text-brand-red" : "text-white/20")} />
                </div>

                {/* Content Viewer based on Step */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden bg-[#020617]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col gap-6"
                        >
                            {activeStep === 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white leading-none tracking-tight">Dealer Inventory Overview</h3>
                                        <Filter className="w-4 h-4 text-white/40" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { zone: "North Zone", count: "48 Dealers", stock: "14.2k Ltr" },
                                            { zone: "South Zone", count: "32 Dealers", stock: "09.8k Ltr" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white/5 p-4 border border-white/10 rounded-xl">
                                                <div className="text-[10px] text-white/40 font-bold uppercase mb-2 tracking-widest">{item.zone}</div>
                                                <div className="text-xl font-bold text-white mb-1">{item.stock}</div>
                                                <div className="text-[11px] text-brand-red font-medium">{item.count} Active</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                                        <div className="text-[10px] text-white/40 font-bold uppercase mb-4 tracking-widest">Top Performance Dealers</div>
                                        <div className="space-y-3">
                                            {[1, 2].map(i => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-800" />
                                                        <span className="text-sm font-medium text-white">Shree Balaji Oils</span>
                                                    </div>
                                                    <span className="text-secondary font-bold text-xs italic">98% Fill</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <h3 className="text-lg font-bold text-white leading-none tracking-tight">Zone Distribution Map</h3>
                                    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
                                        <div className="relative text-center">
                                            <MapPin className="w-12 h-12 text-brand-red mx-auto mb-4" />
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Spatial Data Hub Active</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 2 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white leading-none">Global Fulfilment Tracker</h3>
                                        <span className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded-full font-bold uppercase tracking-wider">Live</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <div className="flex justify-between items-end mb-4">
                                            <div>
                                                <div className="text-md font-bold text-white mb-1 italic tracking-tight">94.2% Fulfilment Policy</div>
                                                <div className="text-[10px] text-white/40 uppercase font-bold">Month-to-Date Performance</div>
                                            </div>
                                            <div className="text-3xl font-black text-secondary italic leading-none">94.2%</div>
                                        </div>
                                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <div className="h-full bg-secondary w-[94.2%] transition-all duration-1000" />
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 3 && (
                                <>
                                    <h3 className="text-lg font-bold text-white leading-none">Forecasting Drilldowns</h3>
                                    <div className="flex-1 flex gap-4">
                                        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                                            <div className="text-[10px] text-white/40 font-bold uppercase mb-6">Future Demand Signal</div>
                                            <div className="flex-1 flex items-end gap-2 px-2 pb-2">
                                                {[30, 45, 60, 40, 80, 50, 95].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-brand-red/30 border-t border-brand-red" style={{ height: `${h}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-24 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-2 gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="text-[8px] text-white/40 font-bold mb-1">Q2</div>
                                                <div className="text-sm font-black text-secondary">+18%</div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-[8px] text-white/40 font-bold mb-1">Q3</div>
                                                <div className="text-sm font-black text-brand-red">-04%</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 4 && (
                                <div className="flex-1 flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden font-sans">
                                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-white">Broadcast Announcement</h3>
                                        <Plus className="w-4 h-4 text-white rotate-45" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest leading-none">Target Group</div>
                                        <div className="bg-white/5 p-3 border border-white/5 rounded-lg text-sm text-white mb-6">
                                            All Mapped Dealers (Delhi NCR Zone)
                                        </div>
                                        <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest leading-none">Content Area</div>
                                        <div className="bg-slate-900 border border-white/10 rounded-xl h-32 p-4 text-white/50 text-sm italic">
                                            Enter the official announcement content for supply chain updates...
                                        </div>
                                        <button className="mt-8 w-full py-4 bg-brand-red text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-red/90 transition-all shadow-lg">Push Notification</button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

// --- Main Section Component ---

export default function DashboardSteps() {
    const [activeTab, setActiveTab] = useState<TabType>("Dealers");
    const [activeStep, setActiveStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const steps = activeTab === "Dealers" ? dealerSteps : brandSteps;

    // Auto-cycle through steps
    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % steps.length);
            }, 4500); // Slower cycle for reading content
            return () => clearInterval(timer);
        }
    }, [isHovered, steps.length, activeTab]);

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setActiveStep(0);
    };

    return (
        <section className="py-[120px] bg-primary text-white overflow-hidden relative">
            {/* Visual Branded Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Fixed Header Style */}
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

                {/* Tab Navigator - Hard Edged Industrial */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#001D3D]/50 p-0 flex border border-white/20">
                        {(["Dealers", "Brands"] as TabType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={cn(
                                    "px-12 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all",
                                    activeTab === tab
                                        ? "bg-secondary text-white shadow-xl"
                                        : "text-white/60 hover:text-white"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Integration Grid - Alignment Fixed */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* Left Side: High-Fidelity Dashboard with Glass Border */}
                    <div className="lg:col-span-8 flex flex-col h-full">
                        <motion.div
                            key={activeTab}
                            className="relative w-full aspect-[16/10] bg-white/5 rounded-2xl p-2.5 shadow-[0_0_80px_rgba(0,0,0,0.3)] group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Glass Effect Double Border */}
                            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />

                            <div className="w-full h-full relative z-10 overflow-hidden shadow-2xl rounded-xl">
                                {activeTab === "Dealers" ? (
                                    <DealerDashboardSnippet activeStep={activeStep} />
                                ) : (
                                    <BrandDashboardSnippet activeStep={activeStep} />
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Step Indicators + Button - Perfectly Height Matched */}
                    <div className="lg:col-span-4 flex flex-col h-full justify-between py-2">
                        <div className="relative flex-1 flex flex-col justify-between mb-12">
                            {/* Vertical Dotted Line - Strictly constrained between first and last icon centers */}
                            <div className="absolute left-[36px] top-[38px] bottom-[38px] w-[1px] border-l border-dotted border-white/30 z-0" />

                            <div className="flex flex-col justify-between h-full relative z-10">
                                {steps.map((step, idx) => {
                                    const isActive = activeStep === idx;
                                    return (
                                        <motion.div
                                            key={idx}
                                            onClick={() => setActiveStep(idx)}
                                            initial={false}
                                            animate={{
                                                backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                                                borderColor: isActive ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)"
                                            }}
                                            className={cn(
                                                "relative group cursor-pointer flex items-center gap-5 p-4 rounded-none border transition-all duration-300",
                                                isActive ? "z-10 shadow-lg" : "opacity-90 hover:opacity-100"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-none border transition-all duration-500",
                                                isActive
                                                    ? "bg-secondary border-none text-white shadow-[0_0_25px_rgba(224,141,39,0.4)]"
                                                    : "bg-white/10 border-white/5 text-white/90"
                                            )}>
                                                <step.icon className="w-5 h-5" />
                                            </div>

                                            <div className="flex flex-col overflow-hidden">
                                                <div className={cn(
                                                    "text-sm font-bold uppercase tracking-wide leading-tight",
                                                    isActive ? "text-white" : "text-white/90"
                                                )}>
                                                    {step.title}
                                                </div>
                                            </div>

                                            {/* Status Accents */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeSideBar"
                                                    className="absolute right-0 top-0 bottom-0 w-1 bg-secondary"
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA moved to right column bottom */}
                        <div className="flex justify-start">
                            <button className="btn-fill-secondary">
                                <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-3">
                                    Open Dashboard <ArrowRight className="w-5 h-5" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
