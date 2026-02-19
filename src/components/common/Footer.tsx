"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 bg-white border-t">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/Logo.png"
                        alt="Lubricant Dealer Platform Logo"
                        width={150}
                        height={40}
                        className="h-8 w-auto object-contain brightness-0 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
                    />
                </div>
                <p className="text-sm text-muted">© {new Date().getFullYear()} Lubricant Dealer Platform. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
