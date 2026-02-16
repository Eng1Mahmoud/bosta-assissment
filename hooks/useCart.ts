import { useProductStore } from "@/stores/useProductStore";

export const useCartTotal = () =>
  useProductStore((state) =>
    state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  );

export const useCartCount = () =>
  useProductStore((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0),
  );
