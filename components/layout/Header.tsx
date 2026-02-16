"use client";
import { useProductStore } from "@/stores/useProductStore";
import { ShoppingCart, Plus, Package, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { LogOut, User as LogIn } from "lucide-react";
import { logoutAction } from "@/actions/authActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const cart = useProductStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    logout();
    await logoutAction();
    router.push("/login");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-xl dark:border-zinc-900 dark:bg-zinc-950/90 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-16 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 sm:gap-2 group">
          <div className="bg-[#e41e26] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl text-white shadow-lg shadow-red-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
            <Package className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
            Bosta<span className="text-[#e41e26]">Shop</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1.5 rounded-2xl dark:bg-zinc-900/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {user && (
            <Link href="/cart" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl text-zinc-600 hover:text-[#e41e26] hover:bg-red-50 transition-colors group"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center p-0 bg-[#e41e26] text-white text-[10px] sm:text-[11px] font-black border-2 border-white dark:border-zinc-950 animate-in zoom-in">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full p-0 border-2 border-zinc-100 dark:border-zinc-800 hover:border-[#e41e26] transition-all overflow-hidden group cursor-pointer"
                  >
                    <Avatar className="h-full w-full rounded-full transition-transform duration-300 group-hover:scale-110">
                      <AvatarFallback className="bg-red-50 text-[#e41e26] font-black text-xs sm:text-sm">
                        {user.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-64 mt-2 rounded-[1.5rem] p-2 shadow-2xl border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800"
                  align="end"
                >
                  <DropdownMenuLabel className="font-normal p-3 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl mb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#e41e26] flex items-center justify-center text-white font-black text-xs shadow-lg shadow-red-500/20">
                        {user.username.substring(0, 1).toUpperCase()}
                      </div>
                      <div className="flex flex-col space-y-0.5">
                        <p className="text-sm font-black leading-none text-zinc-900 dark:text-white capitalize truncate w-32">
                          {user.displayName || user.username}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                          Premium Member
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="mx-2 my-1 bg-zinc-100 dark:bg-zinc-800" />
                  <DropdownMenuItem
                    asChild
                    className="rounded-xl p-3 focus:bg-red-50 focus:text-[#e41e26] dark:focus:bg-red-950/20 cursor-pointer font-bold gap-3 transition-colors active:scale-95"
                  >
                    <Link href="/cart" className="flex items-center gap-3">
                      <ShoppingCart className="h-4 w-4" />
                      <span>My Cart</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="mx-2 my-1 bg-zinc-100 dark:bg-zinc-800" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="rounded-xl p-3 focus:bg-red-50 focus:text-[#e41e26] dark:focus:bg-red-950/20 cursor-pointer font-black gap-3 text-red-500 transition-all hover:pl-4"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                asChild
                className="hidden sm:flex bg-zinc-900 hover:bg-[#e41e26] text-white font-black rounded-lg sm:rounded-xl h-10 sm:h-12 px-3 sm:px-6 shadow-lg shadow-zinc-500/10 transition-all active:scale-95 text-xs sm:text-base"
              >
                <Link
                  href="/products/create"
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Add Product</span>
                </Link>
              </Button>
            </div>
          ) : (
            <Button
              asChild
              className="bg-[#e41e26] hover:bg-[#c31a21] text-white font-black rounded-lg sm:rounded-xl h-10 sm:h-12 px-4 sm:px-8 shadow-lg shadow-red-500/10 transition-all active:scale-95 text-xs sm:text-base"
            >
              <Link href="/login" className="flex items-center gap-2">
                <LogIn className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Login</span>
              </Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
