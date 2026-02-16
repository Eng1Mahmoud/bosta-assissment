import { useProductStore } from "@/stores/useProductStore";
import { CategorySelect } from "@/components/category-select";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Filter,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

interface ProductFiltersProps {
  categories: string[];
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const { sortBy, selectedCategory, setSortBy, setCategory } =
    useProductStore();

  const toggleSort = () => {
    if (sortBy === "price-asc") setSortBy("price-desc");
    else if (sortBy === "price-desc") setSortBy(null);
    else setSortBy("price-asc");
  };

  const getSortIcon = () => {
    if (sortBy === "price-asc") return <ArrowUp className="h-4 w-4" />;
    if (sortBy === "price-desc") return <ArrowDown className="h-4 w-4" />;
    return <ArrowUpDown className="h-4 w-4" />;
  };

  const isSorted = !!sortBy;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-card p-3 sm:p-4 rounded-2xl border border-border shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 flex-1 sm:flex-none">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            <CategorySelect
              categories={categories}
              value={selectedCategory || "all"}
              onValueChange={(val) => setCategory(val === "all" ? null : val)}
              placeholder="All Categories"
              variant="filter"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleSort}
            className={`h-10 w-12 sm:w-auto sm:gap-2 border-border rounded-xl px-0 sm:px-4 shrink-0 transition-all ${
              isSorted
                ? "bg-primary/10 text-primary border-primary/20"
                : "bg-muted/50"
            }`}
          >
            {getSortIcon()}
            <span className="hidden sm:inline">Price</span>
          </Button>
        </div>
      </div>

      <Link href="/products/create" className="w-full sm:w-auto">
        <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-11 sm:h-10 px-6 rounded-xl font-bold shadow-md shadow-primary/20 transition-all active:scale-95">
          <PlusCircle className="h-5 w-5 sm:h-4 sm:w-4" />
          Add New Product
        </Button>
      </Link>
    </div>
  );
}
