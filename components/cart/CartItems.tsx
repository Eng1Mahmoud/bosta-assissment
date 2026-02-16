"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { QuantityControl } from "@/components/QuantityControl";


export function CartItems() {
  const { cart, removeFromCart, updateQuantity } = useProductStore();

  return (
    <div className="space-y-3 sm:space-y-4">
      {cart.map((item) => {
        const total = item.price * item.quantity;
        return (
          <Card key={item.id} className="overflow-hidden border-border bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <CardContent className="p-3 sm:p-4 relative">

                {/* Product Image */}
                <div className="h-20 sm:h-24 w-20 sm:w-24 shrink-0 bg-background p-2 rounded-lg sm:rounded-xl border border-border relative mx-auto sm:mx-0 group-hover:shadow-lg transition-shadow">
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
                  <h3 className="font-bold text-sm sm:text-base text-foreground line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>

                  {/* Category */}
                  <p className="text-xs text-muted-foreground capitalize font-medium">{item.category}</p>

                  {/* Price and Controls */}
                  <div className="flex flex-row items-center justify-between gap-2  mt-auto pt-1">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium">Price:</span>
                      <span className="font-bold text-sm sm:text-base text-foreground">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <QuantityControl
                      quantity={item.quantity}
                      onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
                      onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
                    />

                    {/* Total Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium">Total:</span>
                      <span className="font-black text-lg sm:text-xl text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>


              {/* Delete Button - outside clickable link */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-all rounded-lg"
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
