import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductState } from "../types/store";
import { Product } from "../types/product";

const applyFiltersAndSort = (
  products: Product[],
  category: string | null,
  sort: "price-asc" | "price-desc" | null
) => {
  let filtered = [...products];

  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
};

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      filteredProducts: [],
      cart: [],
      loading: false,
      error: null,
      sortBy: null,
      selectedCategory: null,
      currentPage: 1,
      itemsPerPage: 10,

      setProducts: (products) =>
        set((state) => ({
          products,
          filteredProducts: applyFiltersAndSort(products, state.selectedCategory, state.sortBy),
        })),

      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),

      setSortBy: (sort) =>
        set((state) => ({
          sortBy: sort,
          filteredProducts: applyFiltersAndSort(state.products, state.selectedCategory, sort),
          currentPage: 1,
        })),

      setCategory: (category) =>
        set((state) => ({
          selectedCategory: category,
          filteredProducts: applyFiltersAndSort(state.products, category, state.sortBy),
          currentPage: 1,
        })),

      setCurrentPage: (page) => set({ currentPage: page }),

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "bosta-shop-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }), // Only persist the cart
    }
  )
);
