"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export function CartItems() {
  const { cart, removeFromCart, updateQuantity } = useProductStore();

  return (
    <div className="space-y-4">
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
  );
}
