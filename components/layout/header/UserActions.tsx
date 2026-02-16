"use client";
import { useAuthStore } from "@/stores/useAuthStore";
import { useCartCount } from "@/hooks/useCart";
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
  const cartCount = useCartCount();
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
            className="h-10 w-10 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/0 transition-colors group cursor-pointer"
          >
            <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-[10px] font-black border-2 border-card animate-in zoom-in">
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
                className="relative h-10 w-10 rounded-full p-0 border-2 border-border hover:border-red-500 hover:bg-red-500/10 transition-all overflow-hidden group cursor-pointer"
              >
                <Avatar className="h-full w-full rounded-full transition-transform duration-300 group-hover:scale-110">
                  <AvatarFallback className="bg-primary/10 text-primary font-black text-xs">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60 sm:w-72 mt-2 rounded-[1.5rem] p-2 shadow-2xl border-border bg-popover"
              align="end"
            >
              <DropdownMenuLabel className="font-normal p-3 bg-muted/50 rounded-2xl mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-xs shadow-lg shadow-primary/20">
                    {user.username.substring(0, 1).toUpperCase()}
                  </div>
                  <div className="flex flex-col space-y-0.5 min-w-0">
                    <p className="text-xs sm:text-sm font-black leading-none text-foreground capitalize truncate">
                      {user.displayName || user.username}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
                      Premium Member
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mx-2 my-1 bg-border" />
              <DropdownMenuItem
                asChild
                className="rounded-xl p-2 sm:p-3 focus:bg-primary/10 focus:text-primary cursor-pointer font-bold gap-2 sm:gap-3 transition-colors active:scale-95 text-sm"
              >
                <Link href="/cart" className="flex items-center gap-2 sm:gap-3">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">My Cart</span>
                  <span className="sm:hidden">Cart</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="mx-2 my-1 bg-border" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="rounded-xl p-2 sm:p-3 focus:bg-destructive/10 focus:text-destructive cursor-pointer font-black gap-2 sm:gap-3 text-destructive transition-all hover:pl-4 text-sm"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
                <span className="sm:hidden">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            asChild
            className="hidden lg:flex bg-red-500 hover:bg-red-600 text-white font-black rounded-lg h-10 px-4 shadow-lg shadow-red-500/25 transition-all active:scale-95 text-sm"
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
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-lg h-10 px-4 sm:px-6 shadow-lg shadow-primary/10 transition-all active:scale-95 text-xs sm:text-sm"
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
