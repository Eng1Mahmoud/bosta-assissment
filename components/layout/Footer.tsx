import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/5" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="flex items-center gap-2 mb-6 md:mb-8 scale-100 md:scale-110">
          <div className="bg-gradient-to-br from-[#e41e26] to-[#c31a21] p-2 rounded-lg text-white shadow-lg shadow-red-500/20">
            <Package className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
            Bosta<span className="text-[#e41e26]">Shop</span>
          </span>
        </div>
        <p className="text-zinc-400 dark:text-zinc-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
          Powered by Bosta Logistics
        </p>
        <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-zinc-100 to-zinc-200 mb-6 md:mb-8 dark:from-zinc-800 dark:to-zinc-900 rounded-full" />
        <p className="text-zinc-400 dark:text-zinc-500 text-[10px] md:text-xs font-medium px-4">
          &copy; 2026 Bosta Assessment Store. Made with ❤️ by Mahmoud Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
