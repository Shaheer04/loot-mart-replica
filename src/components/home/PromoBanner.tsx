import { Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PromoBanner() {
    return (
        <section className="py-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#FDF8F0] border border-orange-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 z-10">
                    <div className="h-16 w-16 rounded-full bg-orange-400 flex items-center justify-center text-white shadow-lg shrink-0">
                        <Truck size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-secondary">Get Free Delivery on Your Orders! 🎉</h3>
                        <p className="text-muted-foreground mt-1">Sign up now and enjoy free delivery from all available stores</p>
                    </div>
                </div>

                <div className="z-10">
                    <Button className="bg-[#FFC72C] hover:bg-[#E6B225] text-secondary font-bold px-8 shadow-sm">
                        Sign up with Google
                    </Button>
                </div>

                {/* Decorative background circle */}
                <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
