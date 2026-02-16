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
    <div className="group relative z-0 flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Clickable Card Overlay */}
      <Link
        href={`/products/${product.id}`}
        className="absolute inset-0 z-10 block"
        aria-label={`View details for ${product.title}`}
      >
        <span className="sr-only">View details for {product.title}</span>
      </Link>

      {/* Image Section */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted p-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1 space-y-2">
          <h3
            className="line-clamp-2 text-base font-bold text-foreground transition-colors group-hover:text-primary"
            title={product.title}
          >
            {product.title}
          </h3>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <Badge
              variant="secondary"
              className="bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground hover:bg-muted/80"
            >
              {product.category}
            </Badge>
            {product.rating && (
              <div className="flex items-center gap-1 text-xs font-bold text-foreground">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span>{product.rating.rate}</span>
                <span className="text-muted-foreground font-normal">
                  ({product.rating.count})
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-medium">
              Price
            </span>
            <span className="text-xl font-black text-foreground">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Actions - Properly positioned above the card link */}
        <div className="mt-4 grid grid-cols-2 gap-2 relative z-20">
          <Button
            variant="outline"
            size="sm"
            className="w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-border bg-transparent font-bold text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border"
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
            className="w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
