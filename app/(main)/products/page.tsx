import ProductList from "@/components/products/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our wide range of products.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-zinc-100/30 rounded-full blur-3xl dark:bg-zinc-800/20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-2 bg-gradient-to-b from-[#e41e26] to-[#c31a21] rounded-full shadow-lg shadow-red-500/30" />
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white">Our Products</h2>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
