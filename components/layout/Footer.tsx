import { BrandLogo } from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-card py-12 md:py-16 border-t border-border relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="mb-6 md:mb-8 scale-100 md:scale-110">
          <BrandLogo />
        </div>
        <p className="text-muted-foreground text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
          Powered by Bosta Logistics
        </p>
        <div className="h-1 w-10 md:w-12 bg-border mb-6 md:mb-8 rounded-full" />
        <p className="text-muted-foreground text-[10px] md:text-xs font-medium px-4">
          &copy; 2026 Bosta Assessment Store. Made with ❤️ by Mahmoud Mohamed.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
