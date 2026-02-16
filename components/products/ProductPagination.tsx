import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProductStore } from "@/stores/useProductStore";

interface ProductPaginationProps {
  totalProducts: number;
}

export function ProductPagination({ totalProducts }: ProductPaginationProps) {
  const { currentPage, itemsPerPage, setCurrentPage } = useProductStore();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

  const shouldShowPageButton = (pageNum: number) => {
    if (totalPages <= 5) return true;
    if (pageNum === 1 || pageNum === totalPages) return true;
    return Math.abs(currentPage - pageNum) <= 1;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-6 mt-8 gap-4">
      <p className="text-sm text-muted-foreground order-2 sm:order-1 text-center sm:text-left">
        Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
        <span className="font-semibold">{endIndex}</span> of{" "}
        <span className="font-semibold">{totalProducts}</span> entries
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
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            if (!shouldShowPageButton(pageNum)) return null;

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                className={`h-9 w-9 rounded-lg ${
                  currentPage === pageNum ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}
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
  );
}
