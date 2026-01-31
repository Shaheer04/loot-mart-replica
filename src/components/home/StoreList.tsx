"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { STORES } from "@/lib/data";

export default function StoreList() {
    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-secondary">All Stores</h2>
                <p className="text-muted-foreground mt-2">Browse all available stores</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {STORES.map((store) => (
                    <Link
                        key={store.id}
                        href={`/store/${store.slug}`}
                        className="group relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 ${store.id === '1' ? 'bg-green-400' : 'bg-blue-400'}`} />

                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{store.name}</h3>
                                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                    <StoreIcon className="w-4 h-4" />
                                    <span>Mart</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                <div className="text-xs font-bold text-blue-600 uppercase mb-1">Store Hours</div>
                                <div className="flex items-center gap-1.5 text-secondary font-medium text-sm">
                                    <Clock size={14} className="text-blue-600" />
                                    {store.deliveryTime}
                                </div>
                            </div>
                            <div className="bg-purple-50/50 p-3 rounded-lg border border-purple-100">
                                <div className="text-xs font-bold text-purple-600 uppercase mb-1">Delivery Hours</div>
                                <div className="flex items-center gap-1.5 text-secondary font-medium text-sm">
                                    <Clock size={14} className="text-purple-600" />
                                    {store.deliveryTime}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs font-bold text-gray-500 uppercase mb-1">Delivery Fee</div>
                                <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                                    <span className="text-green-600">$</span>
                                    Rs. {store.deliveryFee}
                                </div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                <div className="text-xs font-bold text-green-600 uppercase mb-1">Free Delivery</div>
                                <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                                    <span className="text-green-600">🎁</span>
                                    Rs. {store.minOrder}+
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin size={14} />
                                <span>Delivers to Bahria Phase 8</span>
                            </div>
                            <ArrowRight size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

function StoreIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2 0 0 1 16 12a2.7 2 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2 0 0 1 12 12a2.7 2 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2 0 0 1 8 12a2.7 2 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
    )
}
