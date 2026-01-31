export interface Store {
  id: string;
  name: string;
  slug: string;
  minOrder: number;
  deliveryFee: number;
  deliveryTime: string;
  image: string;
  categories: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  storeId: string;
  isPopular?: boolean;
}

export interface User {
  id: string;
  name: string;
  role: 'guest' | 'authenticated';
  addresses: string[];
  wishlist: string[]; // Array of product IDs
}

export const STORES: Store[] = [
  {
    id: '1',
    name: 'Royal Cash & Carry',
    slug: 'royal-cash-carry',
    minOrder: 1000,
    deliveryFee: 100,
    deliveryTime: '9:00 AM - 11:59 PM',
    image: '/store-royal.png',
    categories: ['Grocery', 'Beverages', 'Bakery', 'Household', "K&N's", "Olper's", "Tapal"],
  },
  {
    id: '2',
    name: 'Hash Mart',
    slug: 'hash-mart',
    minOrder: 500,
    deliveryFee: 200,
    deliveryTime: 'All day',
    image: '/store-hash.png',
    categories: ['Grocery', 'Fruits', 'Vegetables', 'Snacks'],
  },
];

export const CATEGORIES = [
  'All',
  'Grocery',
  'Beverages',
  'Bakery',
  'Snacks',
  'Household',
  'Personal Care',
  "K&N's",
  "Olper's",
  "Tapal"
];

// Real data scraped from Loot Mart (Expanded with more generic real looking items)
const RAW_PRODUCTS = [
  {
    name: "K&N's Nuggets 270g",
    price: 505,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F5f7c9184-d033-4bb7-ab4a-15d00b69d61c.jpg&w=3840&q=75",
    category: "K&N's"
  },
  {
    name: "Tapal Tea Danedar 430g Zipper Pouch",
    price: 900,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2Fdfa55796-c8ea-4f53-a5bb-b4fc6df696f6.jpg&w=3840&q=75",
    category: "Tapal"
  },
  {
    name: "Red Bull Drink Can 250ml",
    price: 600,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2Fb8fd2d16-19b8-466c-8ec7-90673b406ca4.jpg&w=3840&q=75",
    category: "Beverages"
  },
  {
    name: "Dawn Bread Vitamin Enriched Bread Family Pack",
    price: 200,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2Fe13c916f-3f8e-462a-af4a-81c8ecd511c8.webp%3F&w=3840&q=75",
    category: "Bakery"
  },
  {
    name: "Olper's Cream 200ml",
    price: 240,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F60901960-2014-4f4d-b0eb-8f615f6947b2.jpg&w=3840&q=75",
    category: "Olper's"
  },
  {
    name: "Coca Cola Drink Can 250ml",
    price: 150,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F9f3b9c7a-5b1a-4c9f-8a0d-2b4e8f1c6d3e.jpg&w=3840&q=75",
    category: "Beverages"
  },
  {
    name: "Lays Masala 65g",
    price: 100,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F0a5015b6-6d60-4054-9988-518a28795551.jpg&w=3840&q=75", // Using a real lootmart image I have (recycling coca cola ID actually, wait, let's use the ones I scrape). I will just cycle the 6 good ones.
    category: "Snacks"
  },
  {
    name: "National Ketchup 500g",
    price: 450,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F5f7c9184-d033-4bb7-ab4a-15d00b69d61c.jpg&w=3840&q=75", // Reusing Nuggets as placeholder but cleaner than placehold.co
    category: "Grocery"
  },
  {
    name: "Nestle Water 1.5L",
    price: 120,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2Fb8fd2d16-19b8-466c-8ec7-90673b406ca4.jpg&w=3840&q=75", // Reusing Red Bull
    category: "Beverages"
  },
  {
    name: "Surf Excel 1kg",
    price: 850,
    image: "https://www.lootmart.com.pk/_next/image?url=https%3A%2F%2Fdpgultbqxxdttrjcatco.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Floot-mart-public%2F60901960-2014-4f4d-b0eb-8f615f6947b2.jpg&w=3840&q=75", // Reusing Olpers
    category: "Household"
  },
];

// Generate 100 products using the real data template mixed with variety
export const PRODUCTS: Product[] = Array.from({ length: 100 }).map((_, i) => {
  const storeId = i % 2 === 0 ? '1' : '2';
  const template = RAW_PRODUCTS[i % RAW_PRODUCTS.length];

  // Ensure we have different images for variety if possible, 
  // but for now we cycle the high quality ones to avoid 404s/placeholders

  return {
    id: `prod-${i}`,
    name: `${template.name} ${Math.ceil(i / 12) > 1 ? '(' + i + ')' : ''}`,
    price: template.price + (Math.floor(Math.random() * 50) - 25),
    image: template.image,
    category: template.category,
    storeId,
    // Featured logic: Make sure some items in BOTH stores are popular
    isPopular: (i % 20) < 5, // Top 5 items of every 20 are featured. (25% featured)
  };
});

export const USERS: { guest: User; auth: User } = {
  guest: {
    id: 'guest-1',
    name: 'Guest',
    role: 'guest',
    addresses: [],
    wishlist: [],
  },
  auth: {
    id: 'user-1',
    name: 'Shaheer',
    role: 'authenticated',
    addresses: ['Sector H-12, Islamabad', 'Bahria Phase 8'],
    wishlist: ['prod-0', 'prod-2'], // Pre-filled wishlist
  },
};
