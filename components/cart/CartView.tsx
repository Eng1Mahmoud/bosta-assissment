"use client";

import { useProductStore } from "@/stores/useProductStore";
import { EmptyCart } from "./EmptyCart";
import { CartItems } from "./CartItems";
import { OrderSummary } from "./OrderSummary";

export function CartView() {
  const cart = useProductStore((state) => state.cart);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <div className="lg:col-span-2">
        <CartItems />
      </div>
      <OrderSummary />
    </div>
  );
}
