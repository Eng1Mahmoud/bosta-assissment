import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Header />
    </Suspense>
      <main className="min-h-[calc(100vh-200px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
