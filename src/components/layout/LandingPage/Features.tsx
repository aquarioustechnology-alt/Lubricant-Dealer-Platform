"use client";

import { motion, Variants } from "framer-motion";
import {
    RefreshCcw,
    History,
    BellRing,
    Truck,
    MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: RefreshCcw,
        title: "Live Inventory Updates",
        desc: "Dealers update stock in minutes. Brands see the latest availability across mapped dealers — without chasing anyone.",
    },
    {
        icon: History,
        title: "Stock Movement History",
        desc: "Every stock change is recorded with logs. No confusion, no guessing, and no “who changed it?” arguments.",
    },
    {
        icon: BellRing,
        title: "Low Stock Alerts",
        desc: "Get notified before items run out so you can restock on time and avoid losing sales.",
    },
    {
        icon: Truck,
        title: "Order Fulfillment Tracking",
        desc: "Dealers accept/decline assignments and update status to Ready or Dispatched, keeping the entire fulfillment process transparent.",
    },
    {
        icon: MessageCircle,
        title: "Brand-wise Collaboration Chat",
        desc: "Brands and mapped dealers communicate inside the platform — announcements, updates, and clarity in one place.",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Features() {
    return (
        <section id="features" className="py-[106px] bg-[#F8FAFC] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        {/* Branding Badge */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-[3px] bg-brand-red" />
                            <span className="text-brand-red font-bold uppercase tracking-[0.25em] text-[12px]">
                                OUR CORE FEATURES
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#001D3D] max-w-4xl leading-[1.1] tracking-tight">
                            Everything Dealers and Brands Need - Without Extra Complexity
                        </h2>
                    </motion.div>
                </div>

                {/* Single Row Layout - 5 Columns */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-y-16 gap-x-10"
                >
                    {features.map((feature, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative flex flex-col items-center w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(20%-2rem)] xl:w-[calc(20%-2.5rem)] max-w-[280px] lg:max-w-none"
                            >
                                <div className={cn(
                                    "flex flex-col items-center w-full",
                                    isEven ? "flex-col-reverse" : "flex-col"
                                )}>
                                    {/* Card Body */}
                                    <div className={cn(
                                        "bg-white p-6 xl:p-8 relative w-full transition-all duration-500 transform group-hover:-translate-y-3 group-hover:bg-primary z-10 min-h-[280px] flex flex-col justify-center",
                                        "shadow-none border-[0.5px] border-primary/20 group-hover:border-primary",
                                        !isEven ? "mb-8 text-center" : "mt-8 text-center"
                                    )}>
                                        {/* Notch */}
                                        <div className={cn(
                                            "absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-primary/20 border-[0.5px] rotate-45 transition-all duration-500 group-hover:bg-primary group-hover:border-primary",
                                            !isEven ? "-bottom-3 border-t-0 border-l-0" : "-top-3 border-b-0 border-r-0"
                                        )} />

                                        <div className="mb-5 flex justify-center">
                                            <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-all duration-500" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-500 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[13px] xl:text-[14px] leading-relaxed text-slate-500 font-medium group-hover:text-white/90 transition-colors duration-500">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Number Circle - Default Brand Blue, White Text */}
                                    <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shadow-md transition-all duration-500 group-hover:bg-secondary group-hover:scale-110">
                                        0{index + 1}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
