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
    ArrowRight,
    Search,
    Plus,
    Filter,
    MoreHorizontal,
    Send,
    TrendingUp,
    ChevronDown,
    Download
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

// --- High-Fidelity UI Components ---

const MiniChart = ({ color = "bg-primary" }: { color?: string }) => (
    <div className="flex items-end gap-[2px] h-6">
        {[40, 70, 45, 90, 60, 85, 50, 75, 40].map((h, i) => (
            <div key={i} className={cn("w-[3px] rounded-full opacity-60", color)} style={{ height: `${h}%` }} />
        ))}
    </div>
);

const UserGroup = () => (
    <div className="flex -space-x-1.5">
        {[1, 2, 3].map(i => (
            <div key={i} className="w-5 h-5 rounded-full border border-white bg-slate-200" />
        ))}
        <div className="w-5 h-5 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[7px] font-bold text-slate-500">+2</div>
    </div>
);

// --- Sub-components (High-Fidelity Dashboard Snippets) ---

const DealerDashboardSnippet = ({ activeStep }: { activeStep: number }) => {
    return (
        <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
            {/* Top Navigation Bar - Premium Slim */}
            <div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4">
                    <Image src="/images/Logo.png" alt="Logo" width={90} height={24} className="object-contain transition-transform duration-300 hover:scale-110" />
                    <div className="h-5 w-[1px] bg-slate-200" />
                    <span className="text-[11px] font-medium text-slate-500 tracking-tight whitespace-nowrap overflow-hidden">
                        Dealer Portal / <span className="text-slate-900 font-semibold">{dealerSteps[activeStep]?.title}</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-40 h-8 bg-slate-50 border border-slate-200 flex items-center px-2.5 gap-2 rounded">
                        <Search className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[10px] text-slate-400">Search stocks...</span>
                    </div>
                    <div className="w-7 h-7 rounded-sm border border-slate-200 flex items-center justify-center relative bg-white">
                        <Bell className="w-3.5 h-3.5 text-slate-600" />
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-white" />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Fixed Sidebar - Compact */}
                <div className="w-14 border-r border-slate-100 bg-[#FBFBFE] flex flex-col items-center py-5 gap-7 shrink-0">
                    <LayoutDashboard className="w-4.5 h-4.5 text-slate-300" />
                    <Box className={cn("w-4.5 h-4.5", activeStep === 0 ? "text-primary" : "text-slate-300")} />
                    <Bell className={cn("w-4.5 h-4.5", activeStep === 1 ? "text-primary" : "text-slate-300")} />
                    <CheckSquare className={cn("w-4.5 h-4.5", activeStep === 2 ? "text-primary" : "text-slate-300")} />
                    <Truck className={cn("w-4.5 h-4.5", activeStep === 3 ? "text-primary" : "text-slate-300")} />
                    <MessageSquare className={cn("w-4.5 h-4.5", activeStep === 4 ? "text-primary" : "text-slate-300")} />
                    <div className="mt-auto pb-4">
                        <div className="w-7 h-7 rounded bg-slate-200" />
                    </div>
                </div>

                {/* Content Viewer based on Step */}
                <div className="flex-1 p-5 flex flex-col gap-5 overflow-hidden bg-[#F8F9FD]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1 flex flex-col gap-5"
                        >
                            {activeStep === 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-bold text-slate-900 leading-none">Inventory Listing</h3>
                                            <span className="text-[9px] bg-slate-200 px-1.5 py-0.5 rounded font-bold text-slate-600 uppercase">124 SKUs</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="bg-white border border-slate-200 text-slate-700 text-[9px] font-bold px-2.5 py-1.5 rounded flex items-center gap-1.5"><Download className="w-3 h-3" /> Export</button>
                                            <button className="bg-primary text-white text-[9px] font-bold px-3 py-1.5 rounded flex items-center gap-1.5"><Plus className="w-3 h-3" /> Add Item</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[
                                            { label: "Total Inventory", value: "8,420 Ltr", trend: "+12%", color: "text-primary" },
                                            { label: "Active Brands", value: "14", trend: "Stable", color: "text-slate-900" },
                                            { label: "Low Stock Items", value: "08", trend: "-2", color: "text-brand-red" },
                                            { label: "Upcoming Orders", value: "04", trend: "Next 48h", color: "text-secondary" }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white p-3 border border-slate-100 shadow-sm flex flex-col justify-between h-16 rounded-none">
                                                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className={cn("text-sm font-bold leading-none", stat.color)}>{stat.value}</div>
                                                    <div className="text-[8px] font-bold opacity-60">{stat.trend}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white flex-1 border border-slate-200 overflow-hidden flex flex-col rounded-none shadow-sm">
                                        <div className="h-9 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/80">
                                            <div className="flex gap-4">
                                                <span className="text-[9px] font-bold text-primary uppercase border-b border-primary pb-3 mt-3">All Items</span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase pb-3 mt-3">In Stock</span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase pb-3 mt-3">Low Stock</span>
                                            </div>
                                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="flex-1 overflow-auto">
                                            <table className="w-full text-left">
                                                <thead className="sticky top-0 bg-white border-b border-slate-50">
                                                    <tr className="text-[9px] font-bold text-slate-400 uppercase">
                                                        <th className="px-4 py-2.5">Brand</th>
                                                        <th className="px-4 py-2.5">Product Name</th>
                                                        <th className="px-4 py-2.5">SKU ID</th>
                                                        <th className="px-4 py-2.5">Stock level</th>
                                                        <th className="px-4 py-2.5 text-right">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {[
                                                        { brand: "Shell Advance", prop: "4T Ultra 10W-40", sku: "SH-AX-4421", stock: "140 Ltr", status: "In Stock" },
                                                        { brand: "Castrol Power1", prop: "Cruise 15W-50", sku: "CA-PW-1120", stock: "12 Ltr", status: "Low" },
                                                        { brand: "Mobil 1", prop: "Super 3000 5W-30", sku: "MB-S3-9908", stock: "440 Ltr", status: "In Stock" },
                                                        { brand: "Valvoline", prop: "Champ 4T Nitro", sku: "VV-CH-3321", stock: "02 Ltr", status: "Critical" },
                                                        { brand: "Shell Helix", prop: "HX8 Synthetic", sku: "SH-HX-8820", stock: "88 Ltr", status: "In Stock" }
                                                    ].map((item, i) => (
                                                        <tr key={i} className="text-[11px] text-slate-700 hover:bg-slate-50 transition-colors">
                                                            <td className="px-4 py-2.5 font-bold">{item.brand}</td>
                                                            <td className="px-4 py-2.5 font-medium">{item.prop}</td>
                                                            <td className="px-4 py-2.5 font-mono text-[9px] opacity-60">{item.sku}</td>
                                                            <td className="px-4 py-2.5 font-bold">{item.stock}</td>
                                                            <td className="px-4 py-2.5 text-right">
                                                                <span className={cn(
                                                                    "text-[8px] font-bold uppercase px-1.5 py-0.5 rounded",
                                                                    item.status === "Low" ? "bg-amber-100 text-amber-700" :
                                                                        item.status === "Critical" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"
                                                                )}>{item.status}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-brand-red/10 rounded flex items-center justify-center">
                                            <Bell className="w-3.5 h-3.5 text-brand-red" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">Low Stock Intelligence</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 space-y-3">
                                            {[
                                                { name: "Mobil Super 3000 (Delhi Depot)", stock: "12 Unit", min: "50", severity: "High" },
                                                { name: "Castrol Magnatec Pro", stock: "08 Unit", min: "30", severity: "Medium" },
                                                { name: "Shell Helix Ultra 5L", stock: "02 Unit", min: "20", severity: "High" }
                                            ].map((alert, i) => (
                                                <div key={i} className="bg-white p-4 border border-slate-200 shadow-sm flex items-center justify-between rounded-none">
                                                    <div className="flex gap-4 items-center">
                                                        <div className={cn("w-1 h-8 rounded-full", alert.severity === "High" ? "bg-brand-red" : "bg-amber-400")} />
                                                        <div>
                                                            <div className="text-[11px] font-bold text-slate-900 mb-0.5">{alert.name}</div>
                                                            <div className="text-[9px] text-slate-500 font-medium tracking-tight">Current: <span className="text-brand-red font-bold">{alert.stock}</span> • Threshold: {alert.min} Unit</div>
                                                        </div>
                                                    </div>
                                                    <button className="bg-primary text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase">Restock</button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col justify-between rounded-none">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Replenishment Score</div>
                                            <div className="flex-1 flex items-center justify-center">
                                                <div className="relative w-20 h-20 rounded-full border-[6px] border-slate-100 flex items-center justify-center">
                                                    <div className="absolute inset-[-6px] rounded-full border-[6px] border-secondary border-r-transparent border-b-transparent transform rotate-45" />
                                                    <div className="text-center">
                                                        <div className="text-sm font-bold text-slate-900 leading-none">74%</div>
                                                        <div className="text-[7px] text-slate-400 font-bold uppercase">Optimal</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[9px] text-slate-500 text-center mt-2">Score improved by +8% since yesterday</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 p-4 rounded-none">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Stock Utilization Trend</div>
                                        <div className="flex-1 flex items-end justify-between h-32 px-4 border-b border-l border-slate-100 relative pt-4">
                                            <div className="absolute left-2 top-0 text-[8px] font-bold text-slate-300">UNITS</div>
                                            {[30, 45, 60, 40, 80, 50, 95, 60, 40, 70, 55, 30].map((h, i) => (
                                                <div key={i} className="flex-1 mx-0.5 bg-primary/10 border-t-2 border-primary group relative" style={{ height: `${h}%` }}>
                                                    <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-[7px] font-bold text-slate-300">W{i + 1}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 2 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">Assignment Workflow</h3>
                                        <div className="flex gap-2 text-[9px] font-bold text-slate-500">
                                            <span className="text-slate-900 border-b border-primary">Active</span>
                                            <span>Completed</span>
                                            <span>Deferred</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 flex-1 gap-4">
                                        {["To Accept", "Processing", "Awaiting QC"].map((col, i) => (
                                            <div key={i} className="bg-slate-50 border border-slate-100 p-3 flex flex-col gap-3 rounded-none">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{col}</span>
                                                    <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">{3 - i}</div>
                                                </div>
                                                {[1, 2].map(j => (
                                                    <div key={j} className="bg-white border border-slate-200 p-3 shadow-sm flex flex-col gap-2 rounded-none">
                                                        <div className="flex justify-between items-start">
                                                            <div className="text-[10px] font-bold text-slate-900">Task #[4421-0{j}]</div>
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-[9px] text-slate-700 font-medium leading-tight">Allocation of Shell Advance 4T (6 Boxes) for North Hub</div>
                                                            <div className="text-[8px] text-slate-400">Target ETA: Today, 4:00 PM</div>
                                                        </div>
                                                        <div className="flex justify-between items-center pt-1 border-t border-slate-50">
                                                            <UserGroup />
                                                            <button className="text-[9px] font-bold text-primary uppercase">Details</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {activeStep === 3 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">Logistics & Fulfilment</h3>
                                        <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                            <TrendingUp className="w-3 h-3" /> Live Tracking Active
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: "TNT-008122", brand: "Castrol Pro", destiny: "Noida Sector 62", time: "Dispatched", eta: "14:15", status: "In-Transit" },
                                            { id: "TNT-008134", brand: "Shell Helix", destiny: "Gurgaon Hub", time: "Packing", eta: "16:40", status: "Ready" }
                                        ].map((ship, i) => (
                                            <div key={i} className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col gap-3 rounded-none">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <div className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">ID: {ship.id}</div>
                                                        <div className="text-[11px] font-bold text-slate-900">{ship.brand} SKU Consignment</div>
                                                    </div>
                                                    <span className={cn("text-[8px] font-bold uppercase px-2 py-0.5", ship.status === "Ready" ? "bg-secondary text-white" : "bg-primary text-white")}>{ship.status}</span>
                                                </div>
                                                <div className="relative h-1 bg-slate-100 rounded-full mt-1">
                                                    <div className={cn("absolute inset-y-0 left-0 rounded-full", ship.status === "Ready" ? "w-[40%] bg-secondary" : "w-[75%] bg-primary")} />
                                                    <Truck className={cn("absolute w-4 h-4 text-primary top-[-6px] transition-all", ship.status === "Ready" ? "left-[35%] text-secondary" : "left-[70%] text-primary")} />
                                                </div>
                                                <div className="flex justify-between text-[9px] font-medium text-slate-500">
                                                    <span>Depot</span>
                                                    <span>{ship.destiny}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 p-4 relative overflow-hidden rounded-none">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Network Logistics Heatmap</div>
                                        <div className="absolute inset-0 top-10 opacity-30 bg-[radial-gradient(circle_at_40%_50%,#0066B2_10%,transparent_50%),radial-gradient(circle_at_70%_30%,#CC1513_15%,transparent_60%)]" />
                                        <div className="relative border border-slate-100 rounded bg-slate-50/50 h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <MapPin className="w-8 h-8 text-primary mx-auto mb-2 opacity-50" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Supply Map</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 4 && (
                                <div className="flex flex-1 flex-col bg-white border border-slate-200 rounded-none overflow-hidden font-sans">
                                    <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xs uppercase tracking-tighter shadow-sm">CZ</div>
                                            <div>
                                                <span className="text-xs font-bold text-slate-800 leading-none block mb-0.5">Castrol Zonal Connect</span>
                                                <span className="text-[9px] text-emerald-500 font-bold flex items-center gap-1 uppercase"><div className="w-1 h-1 bg-emerald-500 rounded-full" /> 14 Online</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400"><Search className="w-3 h-3" /></div>
                                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-5 space-y-5 overflow-y-auto bg-slate-50/30">
                                        <div className="text-center">
                                            <span className="text-[9px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-400 font-bold uppercase tracking-wider">Today, August 14</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0" />
                                            <div className="bg-white p-3 rounded-none border border-slate-200 max-w-[75%] text-[11px] text-slate-700 shadow-sm leading-relaxed relative">
                                                Attention North Zone: Please finalize your Shell Advance SKU updates by 6:00 PM today. Audit follows.
                                                <div className="text-[7px] font-bold text-slate-400 uppercase mt-1.5 text-right">09:44 AM</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center text-white text-[9px] font-bold border border-white shadow-sm">YOU</div>
                                            <div className="bg-primary p-3 rounded-none text-[11px] text-white max-w-[75%] shadow-sm leading-relaxed relative">
                                                All 14 SKUs updated. Log submitted and inventory verified.
                                                <div className="text-[7px] font-bold text-white/50 uppercase mt-1.5 text-right">10:12 AM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3.5 border-t border-slate-100 bg-white flex gap-3">
                                        <div className="p-2 border border-slate-200 rounded text-slate-400"><Plus className="w-4 h-4" /></div>
                                        <div className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2 rounded-none text-[11px] text-slate-500 flex items-center">Type your message...</div>
                                        <button className="px-4 py-2 bg-primary text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">Send <Send className="w-3 h-3" /></button>
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
        <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
            {/* Top Navigation Bar - Premium Slim White Theme */}
            <div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4">
                    <Image src="/images/Logo.png" alt="Logo" width={90} height={24} className="object-contain transition-transform duration-300 hover:scale-110" />
                    <div className="h-5 w-[1px] bg-slate-200" />
                    <span className="text-[11px] font-medium text-slate-500 tracking-tight uppercase whitespace-nowrap">Brand Console / <span className="text-slate-900 font-bold">{brandSteps[activeStep]?.title}</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest leading-none">System Status: Optimal</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Side Navigation - White Theme */}
                <div className="w-14 border-r border-slate-100 bg-[#FBFBFE] flex flex-col items-center py-6 gap-7 shrink-0">
                    <Box className={cn("w-4.5 h-4.5", activeStep === 0 ? "text-primary" : "text-slate-300")} />
                    <MapPin className={cn("w-4.5 h-4.5", activeStep === 1 ? "text-primary" : "text-slate-300")} />
                    <CheckSquare className={cn("w-4.5 h-4.5", activeStep === 2 ? "text-primary" : "text-slate-300")} />
                    <BarChart3 className={cn("w-4.5 h-4.5", activeStep === 3 ? "text-primary" : "text-slate-300")} />
                    <MessageSquare className={cn("w-4.5 h-4.5", activeStep === 4 ? "text-primary" : "text-slate-300")} />
                    <div className="mt-auto pb-4">
                        <div className="w-7 h-7 bg-slate-100 rounded border border-slate-200" />
                    </div>
                </div>

                {/* Content Viewer based on Step */}
                <div className="flex-1 p-5 flex flex-col gap-5 overflow-hidden bg-[#F8F9FD]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1 flex flex-col gap-5"
                        >
                            {activeStep === 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-bold text-slate-900 leading-none">Network Inventory Matrix</h3>
                                            <span className="text-[8px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded uppercase">88 Registered Dealers</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="bg-white border border-slate-200 text-slate-600 text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1.5"><Filter className="w-3 h-3" /> All Zones</button>
                                            <button className="bg-primary text-white text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1.5"><Download className="w-3 h-3" /> Export Report</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[
                                            { label: "Channel Stock", val: "442.2k Ltr", trend: "+8.4%" },
                                            { label: "Fill Rate Avg", val: "94.2%", trend: "Stable" },
                                            { label: "Out of Stock Points", val: "12 Sites", trend: "High Risk" },
                                            { label: "Sync Latency", val: "14ms", trend: "Low" }
                                        ].map((s, i) => (
                                            <div key={i} className="bg-white p-3 border border-slate-200 rounded-none flex flex-col justify-between h-16 shadow-sm">
                                                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{s.label}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className="text-[13px] font-bold text-slate-900 leading-none">{s.val}</div>
                                                    <div className={cn("text-[7px] font-bold uppercase", s.trend.includes("+") || s.trend === "Stable" || s.trend === "Low" ? "text-emerald-600" : "text-brand-red")}>{s.trend}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-none flex flex-col overflow-hidden shadow-sm">
                                        <div className="h-9 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                            <div className="flex gap-4">
                                                <span className="text-[9px] font-bold text-primary uppercase border-b border-primary pb-3.5 mt-3.5">Dealer List</span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase pb-3.5 mt-3.5">Flagged Outlets</span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase pb-3.5 mt-3.5">High Performance</span>
                                            </div>
                                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="flex-1 overflow-auto">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="text-[8px] font-bold text-slate-400 uppercase border-b border-slate-50 bg-slate-50/50">
                                                        <th className="px-4 py-2">Entity Name</th>
                                                        <th className="px-4 py-2">Primary Zone</th>
                                                        <th className="px-4 py-2">Stock Coverage</th>
                                                        <th className="px-4 py-2">Available Vol.</th>
                                                        <th className="px-4 py-2 text-right">Health Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {[
                                                        { name: "Shree Balaji Oils", zone: "New Delhi (North)", coverage: "100%", vol: "14.2k Ltr", status: "Healthy" },
                                                        { name: "Metro Lubricants", zone: "Ghaziabad (North)", coverage: "84%", vol: "0.8k Ltr", status: "Critical" },
                                                        { name: "Vikas Automobiles", zone: "Noida (North)", coverage: "92%", vol: "8.4k Ltr", status: "Low Stock" },
                                                        { name: "Capital Spares", zone: "Dwarka (West)", coverage: "100%", vol: "11.1k Ltr", status: "Healthy" },
                                                        { name: "Royal Traders", zone: "Gurgaon (West)", coverage: "98%", vol: "14.5k Ltr", status: "Healthy" }
                                                    ].map((d, i) => (
                                                        <tr key={i} className="text-[10px] text-slate-600 hover:bg-slate-50 transition-colors">
                                                            <td className="px-4 py-2.5 font-bold text-slate-900">{d.name}</td>
                                                            <td className="px-4 py-2.5 font-medium">{d.zone}</td>
                                                            <td className="px-4 py-2.5 font-mono text-[9px] opacity-70">{d.coverage}</td>
                                                            <td className="px-4 py-2.5 font-bold">{d.vol}</td>
                                                            <td className="px-4 py-2.5 text-right">
                                                                <span className={cn(
                                                                    "text-[7px] font-bold uppercase px-1.5 py-0.5 rounded",
                                                                    d.status === "Healthy" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                                                        d.status === "Low Stock" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-red-50 text-red-600 border border-red-100"
                                                                )}>{d.status}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">Spatial Zonal Intelligence</h3>
                                        <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                                            <span>Active Depots: 14</span>
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span>Scanning Radius: 50km</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        {["North Hub", "Central", "South Hub", "Regional"].map(z => (
                                            <div key={z} className="bg-white border border-slate-200 p-3 rounded-none flex flex-col items-center gap-1 shadow-sm">
                                                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{z}</div>
                                                <div className="text-sm font-bold text-slate-900">44.2k Ltr</div>
                                                <div className="w-full h-1 bg-slate-50 rounded-full mt-1 overflow-hidden">
                                                    <div className="h-full bg-primary w-[75%]" />
                                                </div>
                                                <div className="text-[7px] text-emerald-600 font-bold uppercase">Optimal</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-none relative overflow-hidden flex flex-col shadow-sm">
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#0066B2_1px,_transparent_1px)] bg-[size:16px_16px]" />
                                        <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest shadow-lg">Network Overlay Active</div>
                                        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-[200px] h-[200px] rounded-full bg-primary/5 border border-primary/10 animate-pulse" />
                                            </div>
                                            <MapPin className="w-10 h-10 text-primary mb-4" />
                                            <div className="text-center max-w-[280px]">
                                                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-2 leading-none">Global Supply Heatmap</div>
                                                <div className="text-[9px] text-slate-500 font-medium leading-relaxed">Visualizing live distribution flow. Currently tracking 422 nodes across North and West zones with zero packet loss.</div>
                                            </div>
                                        </div>
                                        <div className="h-10 border-t border-slate-100 bg-slate-50 px-4 flex items-center justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                                            <div className="flex gap-4">
                                                <span>Active Streams: 12</span>
                                                <span>Data Latency: 4ms</span>
                                            </div>
                                            <span className="text-emerald-600 flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Zonal Link Stabilized</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 2 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">SLA & Fulfilment Performance</h3>
                                        <div className="text-[8px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 uppercase tracking-widest">Global Health: 98.2%</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white border border-slate-200 rounded-none p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-10"><TrendingUp className="w-8 h-8 text-primary" /></div>
                                            <div className="text-2xl font-bold text-primary leading-none mb-1">94.2%</div>
                                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Consignment Fulfilment Rate</div>
                                            <div className="w-full h-1 bg-slate-100 rounded-full mt-3 overflow-hidden">
                                                <div className="h-full bg-primary w-[94.2%]" />
                                            </div>
                                        </div>
                                        <div className="bg-white border border-slate-200 rounded-none p-4 flex flex-col justify-between shadow-sm">
                                            <div className="text-2xl font-bold text-slate-900 leading-none mb-1">0.14h</div>
                                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Average Response Latency (ARL)</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="text-[7px] text-white bg-emerald-500 px-1 py-0.5 rounded font-bold uppercase">-12% Vs Prev</div>
                                                <span className="text-[8px] text-slate-400 font-medium">Out-performing regional benchmark</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-none flex flex-col shadow-sm">
                                        <div className="p-3 border-b border-slate-100 bg-slate-50 text-[9px] font-bold text-slate-400 uppercase tracking-widest flex justify-between items-center">
                                            <span>Granular Logistics Accuracy</span>
                                            <MiniChart color="bg-primary" />
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col justify-center gap-6">
                                            {[
                                                { label: "Inventory Reporting Precision", val: 99.1, desc: "Across 88 mapped dealer outlets" },
                                                { label: "On-Time Dispatch Compliance", val: 84.4, desc: "High traffic delays in North Zone" },
                                                { label: "Resource Allocation Efficiency", val: 91.8, desc: "Optimal vehicle utilization metrics" }
                                            ].map((m, i) => (
                                                <div key={i} className="space-y-1.5">
                                                    <div className="flex justify-between items-end">
                                                        <div className="flex flex-col">
                                                            <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wide">{m.label}</span>
                                                            <span className="text-[7px] text-slate-400 font-medium">{m.desc}</span>
                                                        </div>
                                                        <span className="text-[11px] font-bold text-slate-900">{m.val}%</span>
                                                    </div>
                                                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className={cn("h-full transition-all duration-1000", m.val > 90 ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${m.val}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 3 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-900 leading-none">Demand Forecasting Module</h3>
                                        <div className="flex gap-2">
                                            <span className="text-[8px] px-1.5 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 font-bold uppercase rounded">Q3 Projection Mode</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white border border-slate-200 p-4 rounded-none flex flex-col justify-between shadow-sm">
                                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-3">Projected Market Uptake</div>
                                            <div className="text-3xl font-bold text-primary leading-none">+14.2%</div>
                                            <div className="text-[8px] text-emerald-600 font-bold uppercase mt-2 tracking-tight">Signal Confidence: High [P=0.94]</div>
                                        </div>
                                        <div className="bg-white border border-slate-200 p-4 rounded-none flex flex-col justify-between shadow-sm">
                                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-3">Supply Constraint Index</div>
                                            <div className="text-3xl font-bold text-brand-red leading-none">0.08</div>
                                            <div className="text-[8px] text-slate-400 font-bold uppercase mt-2 tracking-tight">Risk Resilient Network Zone</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-none p-5 flex flex-col relative overflow-hidden shadow-sm">
                                        <div className="absolute top-4 right-4"><MiniChart color="bg-secondary" /></div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase mb-8 tracking-widest border-l-2 border-primary pl-3">Probabilistic Multi-Month Trend</div>
                                        <div className="flex-1 flex items-end justify-between px-4 pb-2 border-l border-b border-slate-100 relative bg-slate-50/30">
                                            <div className="absolute top-[-25px] left-0 text-[7px] font-bold text-slate-300 uppercase tracking-widest">Projected Vol (Metric k Ltr)</div>
                                            {[40, 60, 45, 90, 70, 85, 100, 75, 55, 80, 70, 95].map((h, i) => (
                                                <div key={i} className="flex-1 mx-0.5 bg-primary/10 border-t border-primary relative group hover:bg-primary/20 transition-all" style={{ height: `${h}%` }}>
                                                    <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-primary px-1.5 py-0.5 rounded text-[8px] font-bold text-white shadow-lg">+{h}% Market</div>
                                                    <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 text-[7px] font-bold text-slate-300 uppercase">M{i + 1}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeStep === 4 && (
                                <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-none overflow-hidden shadow-sm">
                                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-none bg-primary flex items-center justify-center text-white font-bold text-xs shadow-sm">B</div>
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-900 leading-none">Network Broadcast Center</h3>
                                                <div className="text-[8px] text-emerald-600 font-bold uppercase mt-1 tracking-widest">Signal Integrity High</div>
                                            </div>
                                        </div>
                                        <UserGroup />
                                    </div>
                                    <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-white">
                                        <div className="space-y-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block ml-0.5">Define Distribution Scope</label>
                                                <div className="w-full bg-slate-50 border border-slate-200 p-3 rounded-none text-[11px] text-slate-900 flex justify-between items-center group cursor-pointer hover:border-primary/30 transition-all">
                                                    Delhi NCR Zone - All Mapped Outlets [88]
                                                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary/50" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block ml-0.5">Announcement Content (Draft)</label>
                                                <div className="w-full bg-white border border-slate-200 border-dashed rounded-none min-h-[140px] p-4 text-[11px] text-slate-400 leading-relaxed group hover:border-primary transition-all">
                                                    Official Supply Chain Notification: Scheduled inventory reconciliation is mandated for all North Hub dealers for the Q3 market shift. Please ensure SKU compliance by COB Friday...
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button className="flex-1 py-3.5 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]">Broadcast Command</button>
                                            <button className="w-14 py-3.5 bg-slate-50 text-slate-400 border border-slate-200 flex items-center justify-center rounded-none hover:bg-slate-100 transition-all"><Search className="w-4 h-4" /></button>
                                        </div>
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
            }, 6000);
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
                                    "px-12 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-all",
                                    activeTab === tab
                                        ? "bg-secondary text-white shadow-xl font-semibold"
                                        : "text-white/60 hover:text-white font-medium"
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
