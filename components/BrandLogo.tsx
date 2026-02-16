import Link from "next/link";
import { Package } from "lucide-react";

interface BrandLogoProps {
  showText?: boolean;
  className?: string;
}

export function BrandLogo({ showText = true, className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-1 sm:gap-2 group ${className}`}>
      <div className="bg-primary p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
        <Package className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      {showText && (
        <span className="text-xl sm:text-2xl font-black tracking-tighter text-foreground uppercase italic">
          Bosta<span className="text-primary">Shop</span>
        </span>
      )}
    </Link>
  );
}
