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
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-red-900/20" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-zinc-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-zinc-800/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-10 group">
          <div className="h-8 w-2 bg-[#e41e26] rounded-full shadow-lg shadow-red-500/30 animate-pulse" />
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Our Products</h2>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
