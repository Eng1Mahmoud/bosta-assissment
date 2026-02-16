// Cache tags for revalidation
export const CACHE_TAGS = {
  products: "products",
  categories: "categories",
} as const;

// Default revalidation time in seconds
export const REVALIDATE_TIME = 3600; // 1 hour
