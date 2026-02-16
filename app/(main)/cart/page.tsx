import { CartContent } from "@/components/cart/CartContent";
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
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-8 sm:py-12 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/10" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-200/20 rounded-full blur-3xl dark:bg-zinc-800/20" />
        </div>

        <div className="container mx-auto px-3 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                Your <span className="text-[#e41e26]">Cart</span>
              </h1>
            </div>

            {/* All dynamic content handled by this client component */}
            <CartContent />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
