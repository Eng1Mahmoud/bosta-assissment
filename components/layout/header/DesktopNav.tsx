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
    <nav className="hidden md:flex items-center gap-1 bg-muted/50 p-1.5 rounded-2xl">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href}>
            <span
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
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
