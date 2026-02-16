"use client";

import CreateProductForm from "@/components/CreateProductForm";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function CreateProductPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-zinc-50 dark:bg-zinc-950 py-12 min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-[#e41e26] animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <CreateProductForm />
    </div>
  );
}
