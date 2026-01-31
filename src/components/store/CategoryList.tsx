import { CATEGORIES } from "@/lib/data";

interface CategoryListProps {
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryList({ selected, onSelect }: CategoryListProps) {
    return (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selected === cat
                            ? "bg-secondary text-white"
                            : "bg-gray-100 text-secondary hover:bg-gray-200"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
