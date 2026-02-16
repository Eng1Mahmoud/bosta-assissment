"use client";
import { useEffect, useState } from "react";
import { useProductStore } from "@/stores/useProductStore";
import ProductCard from "./ProductCard";
import { getProductsAction, getCategoriesAction } from "@/actions/productActions";
import { Button } from "@/components/ui/button";
import { ProductFilters } from "./ProductFilters";
import { ProductPagination } from "./ProductPagination";
import { ProductSkeleton } from "./ProductSkeleton";
import { EmptyProducts } from "./EmptyProducts";

export default function ProductList() {
  const {
    filteredProducts,
    loading,
    error,
    currentPage,
    itemsPerPage,
    setProducts,
    setLoading,
    setError,
  } = useProductStore();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadInitialData() {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        getProductsAction(),
        getCategoriesAction(),
      ]);

      if (productsRes.error) {
        setError(productsRes.error);
      } else if (productsRes.data) {
        setProducts(productsRes.data);
      }

      if (categoriesRes.data) {
        setCategories(categoriesRes.data);
      }
      setLoading(false);
    }
    loadInitialData();
  }, [setProducts, setLoading, setError]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-destructive font-medium text-lg">⚠️ {error}</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <ProductFilters categories={categories} />

      {loading && <ProductSkeleton />}
      {!loading && filteredProducts.length === 0 && <EmptyProducts />}
      {!loading && filteredProducts.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <ProductPagination totalProducts={filteredProducts.length} />
        </>
      )}
    </div>
  );
}