import CreateProductForm from "@/components/products/CreateProductForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Product",
  description: "Create a new product to add to the store inventory.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreateProductPage() {

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-200/10 rounded-full blur-3xl dark:bg-zinc-800/20" />
      </div>
      
      <div className="relative z-10">
        <CreateProductForm />
      </div>
    </div>
  );
}
