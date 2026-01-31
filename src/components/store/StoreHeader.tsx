import { Star, Clock, Info } from "lucide-react";
import { Store } from "@/lib/data";

interface StoreHeaderProps {
    store: Store;
}

export default function StoreHeader({ store }: StoreHeaderProps) {
    return (
        <div className="bg-white border-b relative md:sticky md:top-16 z-40 shadow-sm">
            <div className="container py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className={`h-16 w-16 rounded-xl border flex items-center justify-center text-2xl font-bold bg-gray-50 text-secondary`}>
                        {store.name.substring(0, 1)}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-secondary">{store.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                                <Star size={14} className="text-orange-400 fill-orange-400" />
                                <span className="font-medium text-secondary">4.8</span>
                                <span>(500+)</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>Mart</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-muted-foreground text-xs uppercase font-bold">Delivery Time</span>
                        <span className="font-medium text-secondary flex items-center gap-1">
                            <Clock size={14} /> {store.deliveryTime}
                        </span>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-muted-foreground text-xs uppercase font-bold">Delivery Fee</span>
                        <span className="font-medium text-green-600">
                            Rs. {store.deliveryFee}
                        </span>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-muted-foreground text-xs uppercase font-bold">Min Order</span>
                        <span className="font-medium text-secondary">
                            Rs. {store.minOrder}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
