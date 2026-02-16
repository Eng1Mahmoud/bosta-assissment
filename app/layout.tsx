import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Fake Store - Bosta Assessment",
  description: "A simple product management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-zinc-50 dark:bg-zinc-950">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

