import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import PromoBanner from "@/components/home/PromoBanner";
import StoreList from "@/components/home/StoreList";

export default function Home() {
  return (
    <main className="min-h-screen container pb-20">
      <Hero />
      <Features />
      <PromoBanner />
      <StoreList />
    </main>
  );
}
