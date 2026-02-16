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
      toast.error("Authentication Required", {
        description: "You must be logged in to add items to your cart.",
        action: {
          label: "Login Now",
          onClick: () => router.push(`/login?callback=${pathname}`),
        },
      });
      return;
    }

    addToCart(product);
    toast.success("Item Added", {
      description: `${product.title.substring(0, 30)}${product.title.length > 30 ? "..." : ""} has been added to your cart.`,
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return { handleAddToCart };
}
