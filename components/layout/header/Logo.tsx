import Link from "next/link";
import { Package } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 sm:gap-2 group">
      <div className="bg-[#e41e26] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl text-white shadow-lg shadow-red-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
        <Package className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <span className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
        Bosta<span className="text-[#e41e26]">Shop</span>
      </span>
    </Link>
  );
}
