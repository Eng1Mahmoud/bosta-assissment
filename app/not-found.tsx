import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Bosta",
  description: "The page you're looking for doesn't exist",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="text-6xl font-bold text-primary">404</div>
        <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <div className="space-y-3 pt-6">
          <Link
            href="/products"
            className="block h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl transition-all active:scale-95 pt-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
