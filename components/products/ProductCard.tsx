
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { useAddToCart } from "@/hooks/useAddToCart";

export default function ProductCard({ product }: { product: Product }) {
  const { handleAddToCart } = useAddToCart();

  return (
    <div className="group relative z-0 flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      {/* Clickable Card Overlay */}
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10 block" aria-label={`View details for ${product.title}`}>
        <span className="sr-only">View details for {product.title}</span>
      </Link>
      
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1 space-y-2">
            <h3 className="line-clamp-2 text-sm font-bold leading-tight text-zinc-900 transition-colors group-hover:text-[#e41e26] dark:text-zinc-50" title={product.title}>
            {product.title}
            </h3>
            
            <p className="line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400">
                {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300">
                {product.category}
              </Badge>
              {product.rating && (
                <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>{product.rating.rate}</span>
                  <span className="text-zinc-400 font-normal ml-0.5">({product.rating.count})</span>
                </div>
              )}
            </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-end justify-between mb-3">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Price</span>
                    <span className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Actions - Properly positioned above the card link */}
            <div className="grid grid-cols-2 gap-2 relative z-20">
               <Button 
                variant="outline"
                size="sm"
                className="w-full h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border-zinc-200 bg-transparent font-bold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                asChild
              >
                 <Link href={`/products/${product.id}`}>
                  <Eye className="h-4 w-4" />
                  <span>Details</span>
                </Link>
              </Button>

              <Button 
                onClick={() => handleAddToCart(product)}
                size="sm"
                className="w-full h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-zinc-900 font-bold text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-[#e41e26] hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-[#e41e26] dark:hover:text-white"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add</span>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}


