import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6 md:mb-8 scale-100 md:scale-110">
          <div className="bg-[#e41e26] p-2 rounded-lg text-white">
            <Package className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
            Bosta<span className="text-[#e41e26]">Shop</span>
          </span>
        </div>
        <p className="text-zinc-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
          Powered by Bosta Logistics
        </p>
        <div className="h-1 w-10 md:w-12 bg-zinc-100 mb-6 md:mb-8 dark:bg-zinc-900" />
        <p className="text-zinc-400 text-[10px] md:text-xs font-medium px-4">
          &copy; 2026 Bosta Assessment Store. Made with ❤️ by Mahmoud Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
