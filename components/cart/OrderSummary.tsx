"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function OrderSummary() {
  const { cart, clearCart } = useProductStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="lg:col-span-1">
      <Card className="border-none bg-zinc-900 text-white rounded-3xl p-6 sticky top-24">
        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-zinc-400">
            <span>Subtotal</span>
            <span className="text-white">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Shipping</span>
            <span className="text-green-400 font-bold">Free</span>
          </div>
          <div className="h-px bg-zinc-800 my-4" />
          <div className="flex justify-between text-xl font-black">
            <span>Total</span>
            <span className="text-[#e41e26]">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full bg-[#e41e26] hover:bg-white hover:text-black text-white font-bold py-6 rounded-2xl transition-all h-auto">
          Checkout Now
        </Button>
        
        <Link href="/products" className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </Card>

      {cart.length > 0 && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearCart}
          className="mt-4 w-full text-zinc-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors rounded-xl font-bold"
        >
          Clear Cart
        </Button>
      )}
    </div>
  );
}
