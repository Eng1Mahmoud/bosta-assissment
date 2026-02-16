"use client";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useAddToCart } from "@/hooks/useAddToCart";

export default function AddToCartButton({ product }: { product: Product }) {
  const { handleAddToCart } = useAddToCart();

  return (
    <Button 
      onClick={() => handleAddToCart(product)}
      size="lg" 
      className="w-full md:w-auto bg-[#e41e26] hover:bg-[#c31a21] text-white h-14 px-12 text-lg rounded-xl gap-3"
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  );
}
