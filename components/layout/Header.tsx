"use client";
import { DesktopNav } from "@/components/layout/header/DesktopNav";
import { UserActions } from "@/components/layout/header/UserActions";
import { Logo } from "@/components/layout/header/Logo";
import { MobileMenu } from "@/components/layout/header/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/70 backdrop-blur-xl shadow-sm transition-all duration-300 rounded-bl-3xl rounded-br-3xl">
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-6 h-14 sm:h-16 md:h-24">
        <Logo />
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="flex items-center gap-2">
          <UserActions />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
