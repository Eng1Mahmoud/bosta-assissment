"use client";

import { useProductStore } from "@/stores/useProductStore";
import { useCartTotal } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function OrderSummary() {
  const { cart, clearCart } = useProductStore();
  const total = useCartTotal();

  return (
    <div className="lg:col-span-1">
      <Card className="border-none bg-card/50 backdrop-blur-xl rounded-3xl p-6 sticky top-24 shadow-2xl dark:bg-card dark:border dark:border-border/50">
        <h3 className="text-xl font-bold mb-6">Order Summary</h3>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between opacity-60">
            <span>Subtotal</span>
            <span className="opacity-100 font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between opacity-60">
            <span>Shipping</span>
            <span className="text-emerald-400 font-bold opacity-100">Free</span>
          </div>
          <div className="h-px bg-border my-4" />
          <div className="flex justify-between text-xl font-black">
            <span>Total</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl transition-all h-auto shadow-lg shadow-primary/30">
          Checkout Now
        </Button>

        <Link href="/products" className="flex items-center justify-center gap-2 mt-6 text-sm opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        {cart.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearCart}
            className="mt-4 w-full text-muted-foreground hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors rounded-xl font-bold border-border"
          >
            Clear Cart
          </Button>
        )}
      </Card>
    </div>
  );
}
