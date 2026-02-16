"use client";
import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="text-muted-foreground">
          {error?.message || "An unexpected error occurred."}
        </p>

        <div className="space-y-3 pt-6">
          <button
            onClick={reset}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl transition-all active:scale-95"
          >
            <RotateCcw className="inline h-5 w-5 mr-2" />
            Try Again
          </button>

          <Link
            href="/products"
            className="block h-14 bg-muted hover:bg-muted/80 text-foreground font-bold rounded-2xl transition-all active:scale-95 pt-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
