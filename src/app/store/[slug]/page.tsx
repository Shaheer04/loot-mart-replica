import { notFound } from "next/navigation";
import { STORES, PRODUCTS } from "@/lib/data";
import StorePageClient from "@/components/store/StorePageClient";

// Correct type definition for Next.js 15+ App Router params
interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function StorePage({ params }: PageProps) {
    const { slug } = await params;

    const store = STORES.find((s) => s.slug === slug);

    if (!store) {
        notFound();
    }

    // Filter products belonging to this store
    const storeProducts = PRODUCTS.filter((p) => p.storeId === store.id);

    return <StorePageClient store={store} products={storeProducts} />;
}

// Generate static params for all stores
export async function generateStaticParams() {
    return STORES.map((store) => ({
        slug: store.slug,
    }));
}
