"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (title: string) => {
        setOpenMenu(openMenu === title ? null : title);
    };

    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { name: "Features", href: "#features" },
                { name: "Dealer Benefits", href: "#dealer-benefits" },
                { name: "Brand Benefits", href: "#brand-benefits" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "FAQ", href: "#faqs" },
                { name: "Contact", href: "#contact" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Network Map", href: "#" },
            ]
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-[#0066B2] to-[#0B2D71] text-white pt-24 pb-8 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <Image
                            src="/images/New White based logo.png"
                            alt="Lubricant Dealer Platform"
                            width={220}
                            height={60}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-white text-sm leading-relaxed max-w-sm">
                            The unified hub for lubricant brands and dealers to manage visibility, stock updates, and fulfillment in real-time without the chaos.
                        </p>

                        {/* Login & Sign Up Buttons */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="btn-outline-white rounded-none">
                                Login
                            </a>
                            <a href="#" className="btn-fill-secondary rounded-none">
                                Sign Up
                            </a>
                        </div>

                        {/* Social Icons - Rectangular */}
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center hover:bg-primary transition-all duration-300 text-white group">
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links - Accordion on Mobile/Tablet */}
                    {footerLinks.map((group, i) => (
                        <div key={i} className="lg:col-span-2 border-b border-white/10 lg:border-none pb-4 lg:pb-0">
                            <button
                                onClick={() => toggleMenu(group.title)}
                                className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none pb-2 lg:pb-0"
                            >
                                <h4 className="text-[16px] font-semibold mb-0 lg:mb-8 text-white relative inline-block">
                                    {group.title}
                                    <span className="hidden lg:block absolute -bottom-2 left-0 w-8 h-[2px] bg-white opacity-40" />
                                </h4>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-white lg:hidden transition-transform duration-300",
                                        openMenu === group.title ? "rotate-180" : ""
                                    )}
                                />
                            </button>

                            <div className={cn(
                                "lg:block overflow-hidden transition-all duration-300",
                                openMenu === group.title ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:max-h-[500px] lg:opacity-100 lg:mt-0"
                            )}>
                                <ul className="space-y-4">
                                    {group.links.map((link, j) => (
                                        <li key={j}>
                                            <a href={link.href} className="text-white/80 hover:text-white text-[14px] font-medium transition-all flex items-center group relative w-fit">
                                                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                                                    {link.name}
                                                </span>
                                                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:translate-x-2 opacity-50" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div className="lg:col-span-4 mt-4 lg:mt-0">
                        <h4 className="text-[16px] font-semibold mb-6 lg:mb-8 text-white pb-2 lg:pb-0 border-b border-white/10 lg:border-none relative inline-block">
                            Get In Touch
                            <span className="hidden lg:block absolute -bottom-2 left-0 w-8 h-[2px] bg-white opacity-40" />
                        </h4>
                        <div className="space-y-4 pt-2 lg:pt-0">
                            <div className="flex gap-4 group cursor-pointer border border-transparent hover:border-white/10 p-2 -ml-2 transition-all">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-none group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shrink-0">
                                    <Phone className="w-5 h-5 text-secondary group-hover:text-white" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                                    <p className="text-white font-medium">+91 1800 123 4567</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group cursor-pointer border border-transparent hover:border-white/10 p-2 -ml-2 transition-all">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-none group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shrink-0">
                                    <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em] mb-1">Email Us</p>
                                    <p className="text-white font-medium">info@lubeplatform.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-white text-[13px] font-normal text-center md:text-left">
                        © {new Date().getFullYear()} Lubricant Dealer Platform. All rights reserved.
                    </p>

                    <div className="flex justify-center text-center md:text-right">
                        <p className="text-white text-[13px] font-normal">
                            This website do contains some A.I. Generated images
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
