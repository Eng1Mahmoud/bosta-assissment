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
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[220px] rounded-2xl bg-popover border-border mt-2 shadow-lg">
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild className="cursor-pointer hover:bg-muted rounded-lg mx-1">
                <Link href={link.href} className="w-full py-2 px-3 text-sm font-semibold text-popover-foreground">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}
