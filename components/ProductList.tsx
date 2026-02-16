"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/stores/useProductStore";
import ProductCard from "./ProductCard";
import { getProductsAction, getCategoriesAction } from "@/actions/productActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, PlusCircle, ArrowUpDown, ArrowUp, ArrowDown, Filter } from "lucide-react";
import Link from "next/link";

export default function ProductList() {
  const {
    filteredProducts,
    loading,
    error,
    sortBy,
    selectedCategory,
    currentPage,
    itemsPerPage,
    setProducts,
    setLoading,
    setError,
    setSortBy,
    setCategory,
    setCurrentPage,
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

  const toggleSort = () => {
    if (sortBy === "price-asc") setSortBy("price-desc");
    else if (sortBy === "price-desc") setSortBy(null);
    else setSortBy("price-asc");
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-3 sm:p-4 rounded-2xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-1 sm:flex-none">
              <Filter className="h-4 w-4 text-zinc-400 shrink-0" />
              <Select
                value={selectedCategory || "all"}
                onValueChange={(val) => setCategory(val === "all" ? null : val)}
              >
                <SelectTrigger className="w-full sm:w-45 h-10 border-zinc-200 rounded-xl bg-zinc-50/50 dark:bg-zinc-800/50">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="capitalize">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleSort}
              className={`h-10 w-12 sm:w-auto sm:gap-2 border-zinc-200 rounded-xl px-0 sm:px-4 shrink-0 transition-all ${
                sortBy ? "bg-red-50 text-[#e41e26] border-red-100" : "bg-zinc-50/50 dark:bg-zinc-800/50"
              }`}
            >
              {sortBy === "price-asc" ? (
                <ArrowUp className="h-4 w-4" />
              ) : sortBy === "price-desc" ? (
                <ArrowDown className="h-4 w-4" />
              ) : (
                <ArrowUpDown className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Price</span>
            </Button>
          </div>
        </div>

        <Link href="/products/create" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-[#e41e26] hover:bg-[#c31a21] text-white gap-2 h-11 sm:h-10 px-6 rounded-xl font-bold shadow-md shadow-red-200/50 transition-all active:scale-95">
            <PlusCircle className="h-5 w-5 sm:h-4 sm:w-4" />
            Add New Product
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : paginatedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
          <p className="text-zinc-500 font-medium">No products found.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 pt-6 mt-8 dark:border-zinc-800 gap-4">
            <p className="text-sm text-zinc-500 order-2 sm:order-1 text-center sm:text-left">
              Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
              <span className="font-semibold">
                {Math.min(startIndex + itemsPerPage, filteredProducts.length)}
              </span>{" "}
              of <span className="font-semibold">{filteredProducts.length}</span>{" "}
              entries
            </p>
            <div className="flex items-center gap-2 order-1 sm:order-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-9 px-3 rounded-lg"
              >
                <ChevronLeft className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
              <div className="flex items-center gap-1">
                {/* Limit page numbers on small screens */}
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    className={`h-9 w-9 rounded-lg ${
                      currentPage === i + 1 ? "bg-[#e41e26] hover:bg-[#c31a21]" : ""
                    } ${
                      // Logic to hide buttons on small screens if there are many pages
                      totalPages > 5 && Math.abs(currentPage - (i + 1)) > 1 && i !== 0 && i !== totalPages - 1
                        ? "hidden md:flex" 
                        : "flex"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-9 px-3 rounded-lg"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 sm:ml-1" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
