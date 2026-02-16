"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CartContent() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useProductStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Empty state
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 sm:py-20 bg-white rounded-2xl sm:rounded-3xl border border-dashed border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 px-4 sm:px-6">
        <div className="bg-zinc-100 p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
          <ShoppingBag className="h-8 sm:h-12 w-8 sm:w-12 text-zinc-400" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 text-center">Your cart is empty</h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-6 sm:mb-8 text-center">Looks like you haven&apos;t added anything yet.</p>
        <Button asChild className="bg-[#e41e26] hover:bg-[#c41a21] text-white font-bold rounded-xl px-6 sm:px-8 text-sm sm:text-base">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-3 sm:space-y-4">
        {cart.map((item) => (
          <Card key={item.id} className="overflow-hidden border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/40 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:shadow-lg dark:hover:shadow-zinc-900/40 transition-all border shadow-sm">
            <CardContent className="p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="h-20 sm:h-24 w-20 sm:w-24 shrink-0 bg-white dark:bg-zinc-950/50 p-2 rounded-lg sm:rounded-xl border border-zinc-100 dark:border-zinc-800 relative mx-auto sm:mx-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white line-clamp-2 flex-1">{item.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="h-7 w-7 sm:h-8 sm:w-8 text-zinc-400 hover:bg-red-500 hover:text-white transition-all rounded-lg shrink-0"
                  >
                    <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 capitalize">{item.category}</p>

                <div className="flex flex-row items-center justify-between gap-4 mt-auto pt-2">
                  <span className="font-black text-lg sm:text-xl text-[#e41e26] dark:text-red-500">${item.price.toFixed(2)}</span>

                  <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-xl w-auto">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-white dark:bg-zinc-700 p-1.5 rounded hover:text-[#e41e26] dark:hover:text-red-500 dark:text-zinc-300 transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center text-zinc-900 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-white dark:bg-zinc-700 p-1.5 rounded hover:text-[#e41e26] dark:hover:text-red-500 dark:text-zinc-300 transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="border-none bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 sticky top-20 sm:top-24">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Order Summary</h3>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex justify-between text-xs sm:text-sm text-zinc-400">
              <span>Subtotal</span>
              <span className="text-white font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-zinc-400">
              <span>Shipping</span>
              <span className="text-green-400 font-bold">Free</span>
            </div>
            <div className="h-px bg-zinc-800 my-2 sm:my-4" />
            <div className="flex justify-between text-base sm:text-xl font-black">
              <span>Total</span>
              <span className="text-[#e41e26]">${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full bg-[#e41e26] hover:bg-white hover:text-black text-white font-bold py-3 sm:py-6 rounded-xl sm:rounded-2xl transition-all h-auto text-sm sm:text-base">
            Checkout Now
          </Button>

          <Link href="/products" className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1" />
            Continue Shopping
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={clearCart}
            className="w-full mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400 hover:text-white border-zinc-700 hover:bg-red-500 hover:border-red-500 transition-all rounded-lg sm:rounded-xl font-bold hover:scale-[1.02] active:scale-95"
          >
            Clear Cart
          </Button>
        </Card>
      </div>
    </div>
  );
}
