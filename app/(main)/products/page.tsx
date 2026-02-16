import ProductList from "@/components/products/ProductList";

export default function ProductsPage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-2 bg-[#e41e26] rounded-full" />
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white">Our Products</h2>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
