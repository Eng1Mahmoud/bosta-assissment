import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Experience the fastest and most reliable e-commerce shopping in Egypt with BostaShop.",
};

export default function Home() {
  return (
    <div className="selection:bg-primary/10 selection:text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8 md:pt-24 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-10 border border-primary/20 shadow-sm">
              <Zap className="h-4 w-4 fill-current" />
              Leading E-commerce Logistics in Egypt
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-foreground mb-6 md:mb-10 leading-tight md:leading-[0.9]">
              Shop with <br />
              <span className="text-primary italic">Confidence.</span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10 md:mb-14 font-medium">
              Unlock a world of quality products delivered through Egypt&apos;s most reliable logistics network. Experience the Bosta speed today.
            </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-black bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/40 gap-3 transition-all hover:scale-105 active:scale-95 group">
                  Browse Catalog
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/products/create" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-black border-2 border-border rounded-2xl md:rounded-3xl hover:bg-muted hover:!text-black dark:hover:!text-white transition-all hover:scale-105 active:scale-95">
                  Join as Seller
                </Button>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="mt-10 pt-10 border-t border-border w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-foreground mb-1 font-mono">2M+</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Active Users</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-foreground mb-1 font-mono">15M+</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Deliveries</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-foreground mb-1 font-mono">5k+</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Premium Sellers</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-foreground mb-1 font-mono">24h</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Avg Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/50 py-10 md:py-32 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why Shop at Bosta?</h2>
            <p className="text-muted-foreground font-medium">We bridge the gap between excellence and convenience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Verified",
                desc: "Every seller on our platform passes a strict quality assessment to ensure you get what you pay for."
              },
              {
                icon: Zap,
                title: "Next-Day Arrival",
                desc: "Powered by Bosta's native delivery network. Most of our urban orders arrive within 24 hours."
              },
              {
                icon: Globe,
                title: "Nationwide Coverage",
                desc: "From Cairo to Aswan, our delivery routes cover every inch of Egypt with live tracking."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 md:p-10 bg-card rounded-[2rem] md:rounded-[2.5rem] border border-border shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 md:py-32">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black opacity-5 rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-6xl font-black text-primary-foreground mb-4 md:mb-6 leading-tight">
                  Ready to upgrade <br className="hidden md:block" /> your lifestyle?
                </h2>
                <p className="text-primary-foreground/80 text-lg md:text-xl font-medium max-w-md mx-auto md:mx-0">
                  Join millions of satisfied customers across Egypt. Get the best items at the best prices.
                </p>
              </div>
              <Link href="/products" className="w-full md:w-auto">
                <Button size="lg" className="h-16 md:h-20 w-full md:w-auto px-10 md:px-12 bg-background text-primary hover:bg-muted text-lg md:text-2xl font-black rounded-2xl md:rounded-3xl shadow-xl transition-all hover:scale-105 active:scale-95">
                  Start Exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
