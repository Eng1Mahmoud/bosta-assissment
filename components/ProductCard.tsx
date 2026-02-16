"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import { useAddToCart } from "@/hooks/useAddToCart";

export default function ProductCard({ product }: { product: Product }) {
  const { handleAddToCart } = useAddToCart();

  return (
    <Card className="group overflow-hidden border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 flex flex-col h-full w-full max-w-87.5 sm:max-w-full mx-auto sm:mx-0">
      <CardHeader className="relative flex aspect-4/3 items-center justify-center p-3 sm:p-4 overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 bg-zinc-100/90 text-[9px] sm:text-[10px] text-zinc-900 border-none hover:bg-zinc-200 capitalize">
          {product.category}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 p-3 sm:p-4 space-y-1">
        <CardTitle className="line-clamp-1 text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#e41e26] transition-colors">
          {product.title}
        </CardTitle>
        <div className="flex items-center justify-between py-1">
          <span className="text-sm sm:text-base font-black text-[#e41e26]">
            ${product.price.toFixed(2)}
          </span>
          <Link href={`/products/${product.id}`}>
            <Button variant="ghost" size="sm" className="h-7 sm:h-8 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-[#e41e26] hover:bg-red-50 p-0 px-2">
              Details
              <Eye className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button 
          onClick={() => handleAddToCart(product)}
          className="w-full bg-zinc-900 hover:bg-[#e41e26] text-[10px] sm:text-xs font-bold gap-1 sm:gap-2 h-8 sm:h-9 rounded-lg transition-all"
        >
          <ShoppingCart className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="sm:inline">Add to Cart</span>
          <span className="inline sm:hidden">Add</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

