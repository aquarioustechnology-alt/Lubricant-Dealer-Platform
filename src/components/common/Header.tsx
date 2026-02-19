"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        { name: "Products", href: "#" },
        { name: "Dealers", href: "#" },
        { name: "Services", href: "#" },
        { name: "Compliance", href: "#" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/Logo.png"
                        alt="Lubricant Dealer Platform Logo"
                        width={180}
                        height={50}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-slate-600 hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Login
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900"
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
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-slate-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr />
                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">
                                Login
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
