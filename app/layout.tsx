import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

export const metadata = {
  title: {
    default: "BostaShop ",
    template: "%s | BostaShop",
  },
  description: "A modern e-commerce application built with Next.js 16, React 19, and Tailwind CSS 4.",
  keywords: ["Next.js", "React", "Tailwind CSS", "E-Commerce", "Bosta"],
  authors: [{ name: "Bosta Assessment" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bosta-assissment.vercel.app/",
    siteName: "BostaShop",
    title: "BostaShop - Modern E-Commerce",
    description: "A modern e-commerce application built with Next.js 16, React 19, and Tailwind CSS 4.",
  },
  
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
        <ScrollToTop />
      </body>
    </html>
  );
}

