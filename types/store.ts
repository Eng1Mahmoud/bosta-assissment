import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  loading: boolean;
  error: string | null;
  sortBy: "price-asc" | "price-desc" | null;
  selectedCategory: string | null;
  currentPage: number;
  itemsPerPage: number;

  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSortBy: (sort: "price-asc" | "price-desc" | null) => void;
  setCategory: (category: string | null) => void;
  setCurrentPage: (page: number) => void;

  // Cart Actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}
