"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";


export function CartItems() {
  const { cart, removeFromCart, updateQuantity } = useProductStore();

  return (
    <div className="space-y-3 sm:space-y-4">
      {cart.map((item) => {
        const total = item.price * item.quantity;
        return (
          <Card key={item.id} className="overflow-hidden border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-sm dark:shadow-zinc-900/20 hover:shadow-md dark:hover:shadow-zinc-900/30 transition-all cursor-pointer group">
            <CardContent className="p-3 sm:p-4 relative">
             
                {/* Product Image */}
                <div className="h-20 sm:h-24 w-20 sm:w-24 shrink-0 bg-white dark:bg-zinc-950/50 p-2 rounded-lg sm:rounded-xl border border-zinc-100 dark:border-zinc-800 relative mx-auto sm:mx-0 group-hover:shadow-lg transition-shadow">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-contain p-2"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 min-w-0 flex flex-col gap-2 pr-8 sm:pr-0">
                  {/* Title */}
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white line-clamp-2 group-hover:text-[#e41e26] dark:group-hover:text-red-500 transition-colors">{item.title}</h3>
                  
                  {/* Category */}
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize font-medium">{item.category}</p>
                  
                  {/* Price and Controls */}
                  <div className="flex flex-row items-center justify-between gap-2  mt-auto pt-1">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Price:</span>
                      <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-300">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-lg justify-center">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          updateQuantity(item.id, item.quantity - 1);
                        }}
                        className="bg-white dark:bg-zinc-700 p-1.5 rounded hover:text-[#e41e26] dark:hover:text-red-500 dark:text-zinc-300 transition-colors hover:scale-110 active:scale-95"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-zinc-900 dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          updateQuantity(item.id, item.quantity + 1);
                        }}
                        className="bg-white dark:bg-zinc-700 p-1.5 rounded hover:text-[#e41e26] dark:hover:text-red-500 dark:text-zinc-300 transition-colors hover:scale-110 active:scale-95"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    {/* Total Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Total:</span>
                      <span className="font-black text-lg sm:text-xl text-[#e41e26] dark:text-red-500">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
           
              
              {/* Delete Button - outside clickable link */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeFromCart(item.id)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 h-7 w-7 sm:h-8 sm:w-8 text-zinc-400 dark:text-zinc-500 hover:bg-red-500 hover:text-white dark:hover:bg-red-600/50 transition-all rounded-lg"
              >
                <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
