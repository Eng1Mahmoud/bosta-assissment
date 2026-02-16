"use client";

import { useProductStore } from "@/stores/useProductStore";
import { ShoppingBag } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export function EmptyCart() {
  const { cart } = useProductStore();

  if (cart.length > 0) return null;

  return (
    <EmptyState
      icon={ShoppingBag}
      title="Your cart is empty"
      description="Looks like you haven't added anything yet."
      actionLabel="Start Shopping"
      actionHref="/products"
    />
  );
}
