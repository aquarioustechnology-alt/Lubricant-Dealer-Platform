"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Globe } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Why DEALER", href: "#" },
        { name: "Dealer Benefits", href: "#" },
        { name: "Brand Benefits", href: "#" },
        { name: "Portal Preview", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Contact Us", href: "#" },
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            {/* Top Bar - Similar to Nortech */}
            <div className={cn(
                "hidden lg:block bg-[#1a1a1a] text-white py-2 px-6 transition-all duration-300",
                scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto opacity-100"
            )}>
                <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-secondary" />
                            <span>+91 1800 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <Mail className="w-3.5 h-3.5 text-secondary" />
                            <span>info@lubeplatform.in</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <MapPin className="w-3.5 h-3.5 text-secondary" />
                            <span>Kolkata, India</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-secondary transition-colors" />
                        <Twitter className="w-3.5 h-3.5 cursor-pointer hover:text-secondary transition-colors" />
                        <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:text-secondary transition-colors" />
                        <Globe className="w-3.5 h-3.5 cursor-pointer hover:text-secondary transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav
                className={cn(
                    "transition-all duration-300 px-6 py-4",
                    scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/Logo.png"
                            alt="Lubricant Dealer Platform Logo"
                            width={180}
                            height={50}
                            className={cn(
                                "h-11 w-auto object-contain transition-all duration-300",
                                !scrolled && "lg:brightness-0 lg:invert" // White logo on transparent hero
                            )}
                            priority
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[12px] font-extrabold uppercase tracking-widest transition-colors",
                                    scrolled ? "text-slate-800 hover:text-primary" : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-3 ml-4">
                            <button className={cn(
                                "text-[12px] font-extrabold uppercase tracking-widest px-4 py-2 transition-colors",
                                scrolled ? "text-primary border border-primary/20 rounded-lg hover:bg-primary/5" : "text-white hover:text-secondary"
                            )}>
                                Login
                            </button>
                            <button className="bg-secondary text-white px-6 py-2.5 rounded-lg font-extrabold text-[12px] uppercase tracking-widest shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "lg:hidden p-2",
                            scrolled ? "text-slate-900" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-b overflow-hidden shadow-2xl rounded-b-2xl absolute top-full left-0 right-0"
                        >
                            <div className="flex flex-col p-8 gap-5">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-extrabold text-slate-900 uppercase tracking-widest hover:text-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <hr className="border-slate-100" />
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="bg-slate-50 text-primary py-3 rounded-xl font-extrabold text-[12px] uppercase tracking-widest border border-slate-200">
                                        Login
                                    </button>
                                    <button className="bg-secondary text-white py-3 rounded-xl font-extrabold text-[12px] uppercase tracking-widest shadow-lg shadow-secondary/20">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
