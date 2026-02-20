"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Globe } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { LoginModal, SignUpModal } from "./AuthModals";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Dealer Benefits", href: "#dealer-benefits" },
        { name: "Brand Benefits", href: "#brand-benefits" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "FAQ", href: "#faqs" },
        { name: "Contact", href: "#" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            {/* Top Bar - Brand Blue Background */}
            <div className={cn(
                "hidden xl:block bg-primary text-white py-2 px-6 transition-all duration-300",
                scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto opacity-100"
            )}>
                <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center text-[11px] font-semibold tracking-widest">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5" />
                            <span>+91 1800 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                            <Mail className="w-3.5 h-3.5" />
                            <span>info@lubeplatform.in</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Kolkata, India</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Facebook className="w-3.5 h-3.5 cursor-pointer hover:opacity-70 transition-opacity" />
                        <Twitter className="w-3.5 h-3.5 cursor-pointer hover:opacity-70 transition-opacity" />
                        <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:opacity-70 transition-opacity" />
                        <Globe className="w-3.5 h-3.5 cursor-pointer hover:opacity-70 transition-opacity" />
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav
                className={cn(
                    "transition-all duration-300 py-4",
                    scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
                )}
            >
                <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                        <Image
                            src={scrolled ? "/images/Logo.png" : "/images/New White based logo.png"}
                            alt="Lubricant Dealer Platform Logo"
                            width={180}
                            height={50}
                            className="h-11 w-auto object-contain transition-all duration-300"
                            priority
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden xl:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[12px] font-semibold uppercase tracking-widest transition-colors",
                                    scrolled ? "text-[#000000] hover:text-primary" : "text-white/95 hover:text-white"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-3 ml-4">
                            {/* Login Button */}
                            <button
                                onClick={() => setLoginOpen(true)}
                                className={cn(
                                    "relative overflow-hidden inline-flex items-center justify-center px-6 py-2 font-semibold uppercase tracking-widest text-[11px] transition-all duration-500 z-10 border",
                                    scrolled
                                        ? "text-primary border-primary bg-white hover:text-white btn-nav-scroll-login"
                                        : "text-white border-white bg-transparent hover:text-black btn-nav-hero-login"
                                )}
                            >
                                <span className="relative z-20">Login</span>
                                <div className={cn(
                                    "absolute top-0 left-0 w-0 h-full transition-all duration-500 -z-10",
                                    scrolled ? "bg-primary" : "bg-white"
                                )} style={{ width: '0%', transition: 'width 0.5s ease' }} id="login-bg" />
                            </button>

                            {/* Sign Up Button */}
                            <button
                                onClick={() => setSignUpOpen(true)}
                                className={cn(
                                    "relative overflow-hidden inline-flex items-center justify-center px-6 py-2 font-semibold uppercase tracking-widest text-[11px] transition-all duration-500 z-10 border border-secondary bg-secondary text-white",
                                    "hover:text-secondary group"
                                )}
                            >
                                <span className="relative z-20">Sign Up</span>
                                <div className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 -z-10 group-hover:w-full" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "xl:hidden p-2 -mr-2",
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
                            className="xl:hidden bg-white border-b overflow-hidden shadow-2xl rounded-b-2xl absolute top-full left-0 right-0"
                        >
                            <div className="flex flex-col p-8 gap-5">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-semibold text-slate-900 uppercase tracking-widest hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <hr className="border-slate-100" />
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => { setLoginOpen(true); setMobileMenuOpen(false); }}
                                        className="bg-primary text-white py-3 font-semibold text-[11px] uppercase tracking-widest"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => { setSignUpOpen(true); setMobileMenuOpen(false); }}
                                        className="bg-secondary text-white py-3 font-semibold text-[11px] uppercase tracking-widest"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Modals */}
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
            <SignUpModal isOpen={signUpOpen} onClose={() => setSignUpOpen(false)} />


            <style jsx>{`
                button:hover #login-bg { width: 100% !important; }
                .btn-nav-hero-login:hover { color: #000 !important; }
                .btn-nav-scroll-login:hover { color: #fff !important; }
            `}</style>
        </header>
    );
}
