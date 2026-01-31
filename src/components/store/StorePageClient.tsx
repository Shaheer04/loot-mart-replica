"use client";

import { useEffect, useState } from "react";
import { Store, Product } from "@/lib/data";
import StoreHeader from "./StoreHeader";
import StoreSearchBar from "./StoreSearchBar";
import CategoryList from "./CategoryList";
import FeaturedProducts from "./FeaturedProducts";
import ProductGrid from "../product/ProductGrid";
import { useApp } from "@/context/AppContext";

interface StorePageClientProps {
    store: Store;
    products: Product[];
}

export default function StorePageClient({ store, products }: StorePageClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { setHeaderTitle } = useApp();

    useEffect(() => {
        setHeaderTitle(store.name);
        return () => setHeaderTitle(null);
    }, [store.name, setHeaderTitle]);

    // Filter products based on search and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50/30">
            <StoreHeader store={store} />

            <div className="container py-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border mb-8">
                    <StoreSearchBar value={searchQuery} onChange={setSearchQuery} />
                    <CategoryList selected={selectedCategory} onSelect={setSelectedCategory} />
                </div>

                {/* Only show featured if no search is active AND Category is All */}
                {searchQuery === "" && selectedCategory === "All" && (
                    <FeaturedProducts products={products.filter(p => p.isPopular)} />
                )}

                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
}
