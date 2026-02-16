"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategorySelectProps {
  categories: string[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  variant?: "form" | "filter";
}

export function CategorySelect({
  categories,
  value,
  onValueChange,
  placeholder = "Select category",
  name,
  className = "",
  variant = "form"
}: CategorySelectProps) {
  const baseClasses = variant === "form"
    ? "h-12 sm:h-14 bg-background/60 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 text-base transition-all shadow-sm"
    : "w-full sm:w-45 h-10 border-border rounded-xl bg-muted/50";

  return (
    <Select name={name} value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`${baseClasses} ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border bg-popover shadow-xl">
        {variant === "filter" && (
          <SelectItem value="all" className="py-3 cursor-pointer focus:bg-primary/10 focus:text-primary transition-colors">
            All Categories
          </SelectItem>
        )}
        {categories.map((cat) => (
          <SelectItem
            key={cat}
            value={cat}
            className="capitalize py-3 cursor-pointer focus:bg-primary/10 focus:text-primary transition-colors"
          >
            {cat}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}