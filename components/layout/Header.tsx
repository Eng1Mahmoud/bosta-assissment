"use client";
import { DesktopNav } from "./header/DesktopNav";
import { UserActions } from "./header/UserActions";
import { Logo } from "./header/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-xl dark:border-zinc-900 dark:bg-zinc-950/90 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-16 md:h-24">
        <Logo />
        <DesktopNav />
        <UserActions />
      </div>
    </header>
  );
}

