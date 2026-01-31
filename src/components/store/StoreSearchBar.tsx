import { Search } from "lucide-react";

interface StoreSearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function StoreSearchBar({ value, onChange }: StoreSearchBarProps) {
    return (
        <div className="mb-6">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search for products... (e.g. Milk, Bread)"
                    className="h-12 w-full rounded-full border bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground mr-1">Popular:</span>
                {['Tea', 'Bread', 'Nuggets', 'Red Bull'].map(tag => (
                    <button
                        key={tag}
                        onClick={() => onChange(tag)}
                        className="text-xs bg-gray-100 text-secondary px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
