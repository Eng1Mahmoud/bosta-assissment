import { ArrowRight, ShieldCheck, Zap, Globe,  } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-zinc-950 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 pb-20 md:pt-16 md:pb-32 dark:bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-red-900/20" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-zinc-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-zinc-800/20" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-zinc-900/20" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#e41e26] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-10 border border-red-100 shadow-sm dark:bg-red-950/30 dark:border-red-900">
              <Zap className="h-4 w-4 fill-current" />
              Leading E-commerce Logistics in Egypt
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6 md:mb-10 leading-tight md:leading-[0.9]">
              Shop with <br />
              <span className="text-[#e41e26] italic">Confidence.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl mb-10 md:mb-14 font-medium">
              Unlock a world of quality products delivered through Egypt&apos;s most reliable logistics network. Experience the Bosta speed today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-black bg-[#e41e26] hover:bg-[#c31a21] text-white rounded-2xl md:rounded-3xl shadow-2xl shadow-red-500/40 gap-3 transition-all hover:scale-105 active:scale-95 group">
                  Browse Catalog
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/products/create" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-black border-2 border-zinc-200 rounded-2xl md:rounded-3xl hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95">
                  Join as Seller
                </Button>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="mt-32 pt-20 border-t border-zinc-100 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 dark:border-zinc-900">
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-zinc-900 dark:text-white mb-1 font-mono">2M+</p>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Active Users</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-zinc-900 dark:text-white mb-1 font-mono">15M+</p>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Deliveries</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-zinc-900 dark:text-white mb-1 font-mono">5k+</p>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Premium Sellers</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="text-4xl font-black text-zinc-900 dark:text-white mb-1 font-mono">24h</p>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Avg Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative bg-zinc-50 dark:bg-zinc-900/50 py-16 md:py-32 border-y border-zinc-100 dark:border-zinc-800/50 overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/5" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-200/20 rounded-full blur-3xl dark:bg-zinc-800/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-zinc-900 dark:text-white">Why Shop at Bosta?</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">We bridge the gap between excellence and convenience.</p>
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
              <div key={i} className="group p-8 md:p-10 bg-white/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 dark:bg-zinc-900/40 dark:border-zinc-800 dark:backdrop-blur-xl dark:hover:shadow-zinc-900/50">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 dark:from-red-950/30 dark:to-red-950/20 shadow-inner dark:shadow-red-950/30">
                  <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-[#e41e26] dark:text-red-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-zinc-900 dark:text-white">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl dark:bg-red-500/5" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-200/10 rounded-full blur-3xl dark:bg-zinc-800/5" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-[#e41e26] to-[#c31a21] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-red-500/30 dark:shadow-red-900/50">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black opacity-5 rounded-full" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                  Ready to upgrade <br className="hidden md:block" /> your lifestyle?
                </h2>
                <p className="text-red-50 text-lg md:text-xl font-medium max-w-md opacity-90 mx-auto md:mx-0">
                  Join millions of satisfied customers across Egypt. Get the best items at the best prices.
                </p>
              </div>
              <Link href="/products" className="w-full md:w-auto">
                <Button size="lg" className="h-16 md:h-20 w-full md:w-auto px-10 md:px-12 bg-white hover:bg-zinc-100 text-[#e41e26] text-lg md:text-2xl font-black rounded-2xl md:rounded-3xl shadow-xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:hover:bg-zinc-200">
                  Start Exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

