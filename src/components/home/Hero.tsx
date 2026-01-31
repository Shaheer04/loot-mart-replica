"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, MapPin, Check, ChevronDown } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Hero() {
    const { user, location, setLocation } = useApp();
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

    // Mock Locations
    const locations = ["Sector H-12, Islamabad", "Bahria Phase 8", "Sector F-10", "DHA Phase 2"];

    // Auto-open modal if no location is selected
    useEffect(() => {
        if (!location) {
            setIsLocationModalOpen(true);
        }
    }, [location]);

    return (
        <section className="flex flex-col items-center justify-center py-12 md:py-20 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                {/* Branding - Header Style Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <ShoppingBag size={36} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col leading-none text-left">
                        <span className="text-4xl font-extrabold tracking-tight text-secondary">Loot</span>
                        <span className="text-4xl font-extrabold tracking-tight text-secondary -mt-1">Mart</span>
                    </div>
                </div>

                {/* Content based on Auth State */}
                {user.role === 'authenticated' ? (
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-bold text-secondary">
                            Welcome, <span className="text-primary">{user.name}</span>!
                        </h1>

                        <div className="bg-white p-4 rounded-xl border shadow-sm inline-flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                            <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                <MapPin size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Current Location</div>
                                <div className="text-lg font-bold text-secondary">
                                    {location || "Select your area"}
                                </div>
                            </div>
                            <button
                                onClick={() => setIsLocationModalOpen(true)}
                                className="ml-4 text-xs font-semibold text-primary hover:underline px-2"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-secondary mb-4 max-w-lg mx-auto">
                            Your one-stop shop for convenient grocery delivery
                        </h1>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Select your area to get started
                        </p>

                        <button
                            onClick={() => setIsLocationModalOpen(true)}
                            className="group bg-white border-2 border-primary/10 hover:border-primary/30 rounded-full px-8 py-3 shadow-lg shadow-gray-100/50 text-secondary font-medium hover:bg-gray-50 hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                        >
                            <MapPin size={20} className="text-primary" />
                            <span className="text-lg">{location || "Select your area"}</span>
                            <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </button>
                    </>
                )}

            </motion.div>

            {/* Location Modal */}
            {isLocationModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold text-secondary">Select your area</h2>
                            <button onClick={() => setIsLocationModalOpen(false)} className="text-gray-400 hover:text-secondary">✕</button>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto">
                            {locations.map((loc) => (
                                <button
                                    key={loc}
                                    onClick={() => {
                                        setLocation(loc);
                                        setIsLocationModalOpen(false);
                                    }}
                                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-secondary border-b last:border-0 border-gray-100 group"
                                >
                                    <span className="flex items-center gap-4">
                                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-primary transition-colors flex-shrink-0">
                                            <MapPin size={16} />
                                        </div>
                                        <span className="font-medium">{loc}</span>
                                    </span>
                                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                        {location === loc && <Check size={20} className="text-primary" />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setIsLocationModalOpen(false)}></div>
                </div>
            )}
        </section>
    );
}
