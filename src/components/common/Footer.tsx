"use client";

import { Droplets } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-white border-t">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Droplets className="text-white w-5 h-5 opacity-20" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-slate-900">
                        LUBE<span className="text-primary">PLATFORM</span>
                    </span>
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
