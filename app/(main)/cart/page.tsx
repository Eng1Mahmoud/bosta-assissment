"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { cart, removeFromCart, updateQuantity, clearCart } = useProductStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-zinc-50 dark:bg-zinc-950 py-12 min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-[#e41e26] animate-spin" />
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
              Your <span className="text-[#e41e26]">Cart</span>
            </h1>
            {cart.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearCart}
                className="text-zinc-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors rounded-xl font-bold"
              >
                Clear Cart
              </Button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="bg-zinc-100 p-6 rounded-full mb-6">
                <ShoppingBag className="h-12 w-12 text-zinc-400" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Your cart is empty</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8">Looks like you haven&apos;t added anything yet.</p>
              <Button asChild className="bg-[#e41e26] hover:bg-[#c41a21] text-white font-bold rounded-xl px-8">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 rounded-2xl">
                    <CardContent className="p-4 flex gap-4">
                      <div className="h-24 w-24 shrink-0 bg-white p-2 rounded-xl border border-zinc-100 relative">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-zinc-900 dark:text-white line-clamp-1 pr-4">{item.title}</h3>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 text-zinc-400 hover:bg-red-500 hover:text-white transition-all rounded-lg -mt-1 -mr-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <p className="text-xs text-zinc-500 mb-3 capitalize">{item.category}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-black text-[#e41e26]">${item.price.toFixed(2)}</span>
                          
                          <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-white dark:bg-zinc-700 p-1 rounded hover:text-[#e41e26] transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-white dark:bg-zinc-700 p-1 rounded hover:text-[#e41e26] transition-colors"
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
