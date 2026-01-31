"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { User, USERS, Product } from "@/lib/data";

interface AppContextType {
    user: User;
    setUser: (user: User) => void;
    toggleUser: () => void;
    toggleWishlist: (productId: string) => void;
    location: string | null;
    setLocation: (loc: string) => void;
    headerTitle: string | null;
    setHeaderTitle: (title: string | null) => void;

    // Cart
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, delta: number) => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    cartTotal: number;
}

export interface CartItem extends Product {
    quantity: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(USERS.guest);
    const [location, setLocation] = useState<string | null>(null);
    const [headerTitle, setHeaderTitle] = useState<string | null>(null);

    const toggleUser = () => {
        setUser(prev => prev.role === 'guest' ? USERS.auth : USERS.guest);
    };

    const toggleWishlist = (productId: string) => {
        if (user.role === 'guest') {
            // Using confirm as a simple modal alternative that is more visible than alert sometimes, 
            // or just alert is fine but adding log for debugging.
            alert("🔒 Please switch to Authenticated user to use Wishlist!");
            return;
        }

        setUser(prev => {
            const isLiked = prev.wishlist.includes(productId);
            return {
                ...prev,
                wishlist: isLiked
                    ? prev.wishlist.filter(id => id !== productId)
                    : [...prev.wishlist, productId]
            };
        });
    };

    // Cart Logic
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true); // Open slider on add
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(0, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <AppContext.Provider value={{
            user, setUser, toggleUser, toggleWishlist,
            location, setLocation, headerTitle, setHeaderTitle,
            cart, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
