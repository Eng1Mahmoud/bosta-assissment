"use client";
import { DesktopNav } from "./header/DesktopNav";
import { UserActions } from "./header/UserActions";
import { Logo } from "./header/Logo";
import { MobileMenu } from "./header/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/70 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/80 shadow-sm dark:shadow-zinc-950/50 transition-all duration-300">
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

