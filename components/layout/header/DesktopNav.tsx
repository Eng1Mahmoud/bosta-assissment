"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
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
  );
}
