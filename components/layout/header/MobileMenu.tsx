"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "./DesktopNav";

export function MobileMenu() {
  return (
    <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 dark:text-zinc-400 hover:text-[#e41e26] dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[220px] rounded-2xl dark:bg-zinc-900 dark:border-zinc-800 mt-2 shadow-lg">
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild className="cursor-pointer dark:hover:bg-zinc-800 rounded-lg mx-1">
                <Link href={link.href} className="w-full py-2 px-3 text-sm font-semibold dark:text-zinc-200 dark:hover:text-white">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}
