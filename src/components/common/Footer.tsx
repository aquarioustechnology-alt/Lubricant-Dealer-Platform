"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Globe, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
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
        <footer className="bg-[#001D3D] text-white pt-24 pb-8 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7.5xl [@media(min-width:1600px)]:max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <Image
                            src="/images/New White based logo.png"
                            alt="Lubricant Dealer Platform"
                            width={220}
                            height={60}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            The unified hub for lubricant brands and dealers to manage visibility, stock updates, and fulfillment in real-time without the chaos.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Globe].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {footerLinks.map((group, i) => (
                        <div key={i} className="lg:col-span-2">
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link.href} className="text-slate-400 hover:text-white text-[13px] font-medium transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">
                            Get In Touch
                        </h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-none group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <Phone className="w-5 h-5 text-secondary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                                    <p className="text-white font-medium">+91 1800 123 4567</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-none group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Email Us</p>
                                    <p className="text-white font-medium">info@lubeplatform.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[13px] font-medium">
                        © {new Date().getFullYear()} Lubricant Dealer Platform. All rights reserved.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-500 hover:text-white text-[13px] font-medium transition-colors">Privacy</a>
                            <a href="#" className="text-slate-500 hover:text-white text-[13px] font-medium transition-colors">Terms</a>
                        </div>
                        <p className="text-slate-500 text-[13px] font-medium md:border-l md:border-white/10 md:pl-8 italic">
                            This website do contains some A.I. Generated images
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
