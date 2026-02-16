"use client";

import { useProductStore } from "@/stores/useProductStore";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function EmptyCart() {
  const { cart } = useProductStore();

  if (cart.length > 0) return null;

  return (
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
  );
}
