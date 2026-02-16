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
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <CreateProductForm />
    </div>
  );
}
