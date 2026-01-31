"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/lib/data";
import ProductCard from "../product/ProductCard";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

interface FeaturedProductsProps {
    products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    if (products.length === 0) return null;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Zap className="text-primary fill-primary" />
                    <h2 className="text-xl font-bold text-secondary">Popular Picks</h2>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => scroll('right')} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[160px] md:min-w-[200px] snap-start">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
