import { Zap, Truck, Store, ShoppingCart } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Same-Day",
        desc: "Fast delivery",
        color: "bg-blue-500", // Approximate for the blue icon
        textColor: "text-white",
    },
    {
        icon: Truck,
        title: "Free Delivery",
        desc: "On min orders",
        color: "bg-green-500",
        textColor: "text-white",
    },
    {
        icon: Store,
        title: "Multi-Store",
        desc: "All in one place",
        color: "bg-purple-500",
        textColor: "text-white",
    },
    {
        icon: ShoppingCart,
        title: "Easy Order",
        desc: "Quick checkout",
        color: "bg-orange-500",
        textColor: "text-white",
    },
];

export default function Features() {
    return (
        <section className="py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.color} ${feature.textColor}`}>
                            <feature.icon size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
