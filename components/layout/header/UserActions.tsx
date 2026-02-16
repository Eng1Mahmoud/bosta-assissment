"use client";
import { useProductStore } from "@/stores/useProductStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { logoutAction } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, Plus, LogOut, User as LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

export function UserActions() {
  const router = useRouter();
  const cart = useProductStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    logout();
    await logoutAction();
    router.push("/login");
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
      {/* Mobile order: Toggle, Cart, Avatar */}
      <ModeToggle />
      {/* cart icon - only show when user exists */}
      {user && (
        <Link href="/cart" className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-[#e41e26] dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors group cursor-pointer"
          >
            <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#e41e26] text-white text-[10px] font-black border-2 border-white dark:border-zinc-950 animate-in zoom-in">
                {cartCount}
              </Badge>
            )}
          </Button>
        </Link>
      )}

      {/* Avatar and user menu */}
      {user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full p-0 border-2 border-zinc-100 dark:border-zinc-800 hover:border-[#e41e26] transition-all overflow-hidden group cursor-pointer"
              >
                <Avatar className="h-full w-full rounded-full transition-transform duration-300 group-hover:scale-110">
                  <AvatarFallback className="bg-red-50 dark:bg-red-950/30 text-[#e41e26] font-black text-xs">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60 sm:w-72 mt-2 rounded-[1.5rem] p-2 shadow-2xl border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800"
              align="end"
            >
              <DropdownMenuLabel className="font-normal p-3 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#e41e26] flex items-center justify-center text-white font-black text-xs shadow-lg shadow-red-500/20">
                    {user.username.substring(0, 1).toUpperCase()}
                  </div>
                  <div className="flex flex-col space-y-0.5 min-w-0">
                    <p className="text-xs sm:text-sm font-black leading-none text-zinc-900 dark:text-white capitalize truncate">
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
                className="rounded-xl p-2 sm:p-3 focus:bg-red-50 focus:text-[#e41e26] dark:focus:bg-red-950/20 cursor-pointer font-bold gap-2 sm:gap-3 transition-colors active:scale-95 text-sm"
              >
                <Link href="/cart" className="flex items-center gap-2 sm:gap-3">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">My Cart</span>
                  <span className="sm:hidden">Cart</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="mx-2 my-1 bg-zinc-100 dark:bg-zinc-800" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="rounded-xl p-2 sm:p-3 focus:bg-red-50 focus:text-[#e41e26] dark:focus:bg-red-950/20 cursor-pointer font-black gap-2 sm:gap-3 text-red-500 transition-all hover:pl-4 text-sm"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
                <span className="sm:hidden">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            asChild
            className="hidden lg:flex bg-zinc-900 hover:bg-[#e41e26] text-white font-black rounded-lg h-10 px-4 shadow-lg shadow-zinc-500/10 transition-all active:scale-95 text-sm"
          >
            <Link
              href="/products/create"
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Product</span>
            </Link>
          </Button>
        </>
      ) : (
        <Button
          asChild
          className="bg-[#e41e26] hover:bg-[#c31a21] text-white font-black rounded-lg h-10 px-4 sm:px-6 shadow-lg shadow-red-500/10 transition-all active:scale-95 text-xs sm:text-sm"
        >
          <Link href="/login" className="flex items-center gap-1 sm:gap-2">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
            <span className="sm:hidden">Login</span>
          </Link>
        </Button>
      )}
    </div>
  )
}
