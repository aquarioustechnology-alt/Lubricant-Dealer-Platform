"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { LoginModal, SignUpModal } from "../../common/AuthModals";

const slides = [
    {
        image: "/images/hero-image-1.png",
        title: "Lubricant Dealer & Brand Portal for Live Inventory Visibility",
        subtitle: "Update stock once to keep mapped brands informed in real-time. Track fulfilment status instantly and eliminate manual follow-ups.",
    },
    {
        image: "/images/hero-image-2.png",
        title: "Digitalized Oil & Lubricant Distribution Network",
        subtitle: "One platform to manage all your mapped brands. Get verified onboarding and role-based visibility for your entire operational team.",
    },
    {
        image: "/images/hero-image-3.png",
        title: "Scale Your Lubricant Business with Precision",
        subtitle: "Track inventory logs, action history, and fulfillment status in one unified dashboard. Designed for the modern Indian lubricant industry.",
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Reduced speed (from 6000 to 8000)
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
        <section id="hero" className="relative min-h-[600px] h-[90vh] lg:h-[90vh] w-full overflow-hidden bg-slate-900 border-b border-slate-100/10">
            {/* Subtle top gradient for header visibility */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />

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
                        transition={{ duration: 8, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt="Industrial Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" /> {/* Slightly reduced overlay from 45 to 40 */}
                    </motion.div>

                    {/* Content Container - Matching Header container */}
                    <div className="relative h-full flex items-center pt-16 lg:pt-20">
                        <div className="max-w-7.5xl mx-auto px-6 md:px-12 lg:px-16 w-full">
                            <div className="max-w-4xl">
                                {/* Trust Line */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="flex flex-wrap gap-4 mb-6"
                                >
                                    {[
                                        "Verified onboarding",
                                        "Role-based visibility",
                                        "Inventory and action logs"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/95">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                                            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em]">{text}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Main Heading */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.15]"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                {/* Sub Content */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-sm md:text-base text-white/90 mb-8 leading-relaxed font-normal max-w-3xl"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <button
                                        onClick={() => setSignUpOpen(true)}
                                        className="btn-fill-secondary"
                                    >
                                        <span className="relative z-10 flex items-center gap-3 font-semibold">
                                            Start Now <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => setLoginOpen(true)}
                                        className="btn-outline-white"
                                    >
                                        <span className="relative z-10 font-semibold">Portal Login</span>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Modals */}
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
            <SignUpModal isOpen={signUpOpen} onClose={() => setSignUpOpen(false)} />

            {/* Slider Controls - Square Sharp Edges */}
            <div className="absolute right-6 sm:right-10 bottom-10 z-30 flex gap-2">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all rounded-none"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all rounded-none"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>



            {/* Container Alignment helper class (optional but kept for structure) */}
            <div className="container mx-auto px-6 h-0 opacity-0 pointer-events-none" />
        </section>
    );
}
