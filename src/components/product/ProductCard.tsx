import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Product } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { toggleWishlist, user, addToCart } = useApp();
    const isWishlisted = user.role === 'authenticated' && user.wishlist.includes(product.id);

    return (
        <div className="group flex flex-col rounded-xl border bg-white p-3 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 h-full relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50 mb-3">
                {/* Heart Icon for Auth Users */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                    }}
                    className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform"
                >
                    <Heart size={16} className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} />
                </button>

                <div className="flex h-full w-full items-center justify-center text-gray-300">
                    <img src={product.image} alt={product.name} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="text-sm font-semibold text-secondary line-clamp-2 leading-tight mb-2 flex-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground line-through decoration-red-400">Rs. {product.price + 50}</span>
                        <span className="text-sm font-bold text-secondary">Rs. {product.price}</span>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(product)}
                        className="h-8 w-8 flex items-center justify-center rounded-lg bg-gray-100 text-secondary hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
                    >
                        <Plus size={18} strokeWidth={2.5} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
