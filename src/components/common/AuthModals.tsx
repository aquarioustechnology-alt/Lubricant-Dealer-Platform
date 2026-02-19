"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, User, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
    const [step, setStep] = useState(1); // 1: Phone Input, 2: OTP Input
    const [phone, setPhone] = useState("");

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[450px] bg-white shadow-2xl overflow-hidden border border-slate-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="mb-10 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 text-primary mb-6">
                                    <Smartphone className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Portal Login</h2>
                                <p className="text-slate-500 font-medium text-sm">Welcome back. Enter your registered mobile number to receive an OTP.</p>
                            </div>

                            {/* Form */}
                            <div className="space-y-6">
                                {step === 1 ? (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Mobile Number</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <span className="text-slate-400 text-sm font-bold">+91</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter 10 digit number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 py-3.5 pl-14 pr-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary transition-all rounded-none"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full btn-fill-primary py-4 group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-[12px] tracking-widest">
                                                GET OTP <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Verification Code</label>
                                            <div className="flex gap-2 justify-between">
                                                {[1, 2, 3, 4, 5, 6].map(i => (
                                                    <input
                                                        key={i}
                                                        type="text"
                                                        maxLength={1}
                                                        className="w-11 h-12 text-center bg-slate-50 border border-slate-200 text-lg font-bold text-slate-900 focus:outline-none focus:border-primary transition-all rounded-none"
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-[11px] text-slate-400 font-bold">Didn't receive it?</span>
                                                <button className="text-[11px] text-primary font-bold hover:underline uppercase tracking-wider">Resend OTP</button>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full btn-fill-secondary py-4 group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-[12px] tracking-widest">
                                                VERIFY & LOGIN <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="w-full py-2 text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
                                        >
                                            Change Number
                                        </button>
                                    </div>
                                )}
                            </div>

                            <p className="mt-10 text-center text-[11px] text-slate-400 font-medium">
                                By logging in, you agree to our <a href="#" className="text-slate-600 hover:underline">Terms of Service</a> and <a href="#" className="text-slate-600 hover:underline">Privacy Policy</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export const SignUpModal = ({ isOpen, onClose }: ModalProps) => {
    const [accountType, setAccountType] = useState<"dealer" | "brand">("dealer");

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[500px] bg-white shadow-2xl overflow-hidden border border-slate-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="mb-8 text-center">
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Create Workspace</h2>
                                <p className="text-slate-500 font-medium text-sm">Join the largest lubricant distribution network in India.</p>
                            </div>

                            {/* Account Type Selector */}
                            <div className="flex border border-slate-100 mb-8 overflow-hidden">
                                <button
                                    onClick={() => setAccountType("dealer")}
                                    className={cn(
                                        "flex-1 py-3 text-[11px] font-bold uppercase tracking-widest transition-all",
                                        accountType === "dealer" ? "bg-primary text-white" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                    )}
                                >
                                    Individual Dealer
                                </button>
                                <button
                                    onClick={() => setAccountType("brand")}
                                    className={cn(
                                        "flex-1 py-3 text-[11px] font-bold uppercase tracking-widest transition-all",
                                        accountType === "brand" ? "bg-primary text-white" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                    )}
                                >
                                    Lubricant Brand
                                </button>
                            </div>

                            {/* Form */}
                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Full Name / Entity Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-slate-50 border border-slate-200 py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Official Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="w-full bg-slate-50 border border-slate-200 py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Mobile Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="10 digit number"
                                            className="w-full bg-slate-50 border border-slate-200 py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                    </div>
                                </div>

                                <button
                                    className="w-full btn-fill-secondary py-4 mt-4 group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-[12px] tracking-widest">
                                        REQUEST ACCESS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>

                            <p className="mt-8 text-center text-[10px] text-slate-400 font-medium">
                                Already have an account? <button onClick={onClose} className="text-primary font-bold hover:underline">Sign In Instead</button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
