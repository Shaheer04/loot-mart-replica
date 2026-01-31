"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
    products: Product[];
}

const ITEMS_PER_PAGE = 20;

export default function ProductGrid({ products }: ProductGridProps) {
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // Reset when products prop changes (e.g. search filter)
    useEffect(() => {
        setPage(1);
        setDisplayedProducts(products.slice(0, ITEMS_PER_PAGE));
    }, [products]);

    // Load more logic
    const loadMore = useCallback(async () => {
        if (loading) return;
        if (displayedProducts.length >= products.length) return;

        setLoading(true);
        // Simulate network delay for UX
        await new Promise(resolve => setTimeout(resolve, 800));

        const nextPage = page + 1;
        const newProducts = products.slice(0, nextPage * ITEMS_PER_PAGE);

        setDisplayedProducts(newProducts);
        setPage(nextPage);
        setLoading(false);
    }, [loading, displayedProducts.length, products, page]);

    // Intersection Observer
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useCallback((node: HTMLDivElement) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && displayedProducts.length < products.length) {
                loadMore();
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, loadMore, displayedProducts.length, products.length]);

    return (
        <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {displayedProducts.map((product, index) => {
                    if (displayedProducts.length === index + 1) {
                        return (
                            <div ref={lastElementRef} key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        )
                    } else {
                        return <ProductCard key={product.id} product={product} />
                    }
                })}
            </div>

            {loading && (
                <div className="col-span-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex flex-col rounded-xl border bg-white p-3 h-full animate-pulse">
                            <div className="aspect-square w-full rounded-lg bg-gray-100 mb-3" />
                            <div className="h-4 w-3/4 bg-gray-100 rounded mb-2" />
                            <div className="h-3 w-1/2 bg-gray-100 rounded mt-auto" />
                        </div>
                    ))}
                </div>
            )}

            {products.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground">
                    No products found. Try a different search.
                </div>
            )}

            {!loading && displayedProducts.length >= products.length && products.length > 0 && (
                <div className="col-span-full py-8 text-center text-muted-foreground text-sm">
                    You've reached the end of the list.
                </div>
            )}
        </>
    );
}
