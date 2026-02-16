"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityControl({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityControlProps) {
  return (
    <div className="flex items-center gap-1.5 bg-muted p-1 rounded-xl w-auto">
      <button
        onClick={(e) => {
          e.preventDefault();
          onDecrement();
        }}
        className="bg-card p-1.5 rounded hover:text-primary transition-colors hover:scale-110 active:scale-95"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="text-sm font-bold w-6 text-center text-foreground">
        {quantity}
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          onIncrement();
        }}
        className="bg-card p-1.5 rounded hover:text-primary transition-colors hover:scale-110 active:scale-95"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
