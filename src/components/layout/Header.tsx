"use client";

import Link from 'next/link';
import { MapPin, ShoppingBag, User as UserIcon, Check, ChevronDown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';




export default function Header() {
    const { user, toggleUser, headerTitle, cart, setIsCartOpen } = useApp();

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 md:h-16 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                                <ShoppingBag size={24} strokeWidth={2.5} />
                            </div>

                            {/* Desktop: Always show LootMart. Mobile: Show LootMart if no title active, otherwise show Title */}
                            <div className={`flex-col leading-tight ${headerTitle ? 'hidden md:flex' : 'flex'}`}>
                                <span className="text-xl font-bold tracking-tight text-secondary">Loot</span>
                                <span className="text-xl font-bold tracking-tight text-secondary -mt-1">Mart</span>
                            </div>

                            {headerTitle && (
                                <div className="md:hidden flex flex-col justify-center animate-in fade-in slide-in-from-left-2 duration-300">
                                    <span className="text-sm font-bold text-secondary leading-none line-clamp-1 max-w-[200px]">{headerTitle}</span>
                                </div>
                            )}
                        </Link>

                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={toggleUser} className="text-xs text-muted-foreground hidden sm:flex">
                            Switch to {user.role === 'guest' ? 'Auth' : 'Guest'}
                        </Button>

                        {user.role === 'authenticated' && (
                            <div className="relative">
                                <Button variant="ghost" size="icon" className="text-secondary">
                                    <Heart size={20} />
                                </Button>
                                {user.wishlist.length > 0 && (
                                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded-lg transition-colors">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-secondary font-bold text-sm border">
                                {user.role === 'guest' ? 'GU' : 'SH'}
                            </div>
                            <div className="hidden flex-col text-sm sm:flex">
                                <span className="font-medium text-secondary">{user.name}</span>
                            </div>
                            <ChevronDown size={16} className="text-gray-400" />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            <ShoppingBag size={22} strokeWidth={2.5} />
                            {user.wishlist.length >= 0 && ( /* Just reusing cart length here really */
                                cart.length > 0 && <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center border-2 border-white">{cart.length}</span>
                            )}
                        </Button>
                    </div>
                </div>
            </header>

        </>
    );
}
