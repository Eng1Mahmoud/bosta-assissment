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
      <Card className="border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl text-white rounded-3xl p-6 sticky top-24 shadow-2xl shadow-zinc-900/50 dark:border-zinc-800/50">
        <h3 className="text-xl font-bold mb-6 text-white">Order Summary</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-zinc-400">
            <span>Subtotal</span>
            <span className="text-zinc-200 font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Shipping</span>
            <span className="text-emerald-400 font-bold">Free</span>
          </div>
          <div className="h-px bg-zinc-800/50 my-4" />
          <div className="flex justify-between text-xl font-black">
            <span>Total</span>
            <span className="text-[#e41e26] dark:text-red-500">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-[#e41e26] to-[#c31a21] hover:from-[#c31a21] hover:to-[#a9161c] text-white font-bold py-6 rounded-2xl transition-all h-auto shadow-lg shadow-red-500/30">
          Checkout Now
        </Button>
        
        <Link href="/products" className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </Card>

      {cart.length > 0 && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearCart}
          className="mt-4 w-full text-zinc-500 dark:text-zinc-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-600/50 hover:border-red-500 dark:hover:border-red-600 transition-colors rounded-xl font-bold dark:border-zinc-700"
        >
          Clear Cart
        </Button>
      )}
    </div>
  );
}
