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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        <CreateProductForm />
      </div>
    </div>
  );
}
