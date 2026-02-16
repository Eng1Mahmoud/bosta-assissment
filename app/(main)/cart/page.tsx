import { CartView } from "@/components/cart";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review and manage the items in your cart.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPage() {
  return (
    <>
      <div className="min-h-screen py-8 sm:py-12 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="h-8 w-2 bg-primary rounded-full shadow-lg shadow-primary/30 animate-pulse" />
              <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Your <span className="text-primary italic">Cart</span>
              </h1>
            </div>

            {/* All dynamic content handled by this client component */}
            <CartView />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
