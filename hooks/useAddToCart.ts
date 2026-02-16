"use client";

import { useProductStore } from "@/stores/useProductStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/types/product";

export function useAddToCart() {
  const addToCart = useProductStore((state) => state.addToCart);
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      router.push(`/login?callback=${pathname}`);
      return;
    }

    addToCart(product);
    toast.success(`${product.title.substring(0, 20)}... added to cart`);
  };

  return { handleAddToCart };
}
