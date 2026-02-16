import { CartContent } from "@/components/cart/CartContent";
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
    <div className="bg-zinc-50 dark:bg-zinc-950 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white">
              Your <span className="text-[#e41e26]">Cart</span>
            </h1>
          </div>

          {/* All dynamic content handled by this client component */}
          <CartContent />
        </div>
      </div>
    </div>
  );
}
