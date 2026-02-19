"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
    {
        image: "/images/Hero Image 1.png",
        title: "Lubricant Dealer and Brand Portal for Live Inventory Visibility in India",
        subtitle: "DEALER helps lubricant dealers update stock once and keeps mapped brands informed in real time. Reduce stock calls, avoid confusion, and keep fulfilment updates clear with Ready and Dispatched status tracking.",
    },
    {
        image: "/images/Hero Image 2.png",
        title: "Digitalized Oil & Lubricant Distribution Network",
        subtitle: "One platform to manage all your mapped brands. Get verified onboarding and role-based visibility for your entire operational team.",
    },
    {
        image: "/images/Hero Image 3.png",
        title: "Scale Your Lubricant Business with Precision",
        subtitle: "Track inventory logs, action history, and fulfillment status in one unified dashboard. Designed for the modern Indian lubricant industry.",
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Zoom Effect */}
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt="Industrial Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
                    </motion.div>

                    {/* Content Container */}
                    <div className="relative h-full flex items-center pt-20">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl">
                                {/* Trust Line */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="flex flex-wrap gap-4 mb-8"
                                >
                                    {[
                                        "Verified onboarding",
                                        "Role-based visibility",
                                        "Inventory and action logs"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/80">
                                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Main Heading */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                {/* Sub Content */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium max-w-3xl"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="flex flex-wrap gap-5"
                                >
                                    <button className="btn-secondary group flex items-center gap-3 !px-8 !py-4 transition-all hover:bg-white hover:text-black">
                                        <span className="text-sm font-black uppercase tracking-widest text-inherit">Start Now</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all">
                                        See Dealer Benefits
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute right-10 bottom-10 z-20 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all group"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all group"
                >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-10 left-10 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setIsAutoPlaying(false); setCurrentSlide(i); }}
                        className={cn(
                            "h-1 transition-all duration-300 rounded-full",
                            currentSlide === i ? "w-10 bg-secondary" : "w-6 bg-white/20"
                        )}
                    />
                ))}
            </div>
        </section>
    );
}
