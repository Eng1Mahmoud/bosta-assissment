"use client";
import { useActionState, useEffect, useState } from "react";
import { createProductAction, getCategoriesAction } from "@/actions/productActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, PackagePlus, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ActionState } from "@/types/action";
import { Product } from "@/types/product";

const initialState: ActionState<Product> = {};

export default function CreateProductForm() {
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>([]);
  const [state, formAction, isPending] = useActionState(createProductAction, initialState);

  useEffect(() => {
    async function loadCategories() {
      const res = await getCategoriesAction();
      if (res.data) setCategories(res.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (state?.success) {
      toast.success("Product Created", {
        description: "Your product has been successfully added to the store.",
      });
      router.push("/products");
    } else if (state?.error) {
      toast.error("Operation Failed", {
        description: state.error,
      });
    }
  }, [state, router]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/products">
          <Button variant="ghost" className="mb-4 sm:mb-8 gap-2 -ml-2 text-zinc-500 hover:bg-red-50 hover:text-[#e41e26] transition-all rounded-xl dark:text-zinc-400 dark:hover:bg-red-950/30 dark:hover:text-[#e41e26]">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <Card className="border-zinc-200 shadow-xl rounded-[2rem] overflow-hidden dark:bg-zinc-900/40 dark:border-zinc-800 transition-all hover:shadow-2xl dark:hover:shadow-zinc-900/50 dark:hover:border-zinc-700 backdrop-blur-xl">
          <CardHeader className="bg-white/80 border-b border-zinc-100 p-6 sm:p-8 dark:bg-zinc-950/50 dark:border-zinc-800/50 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 rounded-2xl dark:bg-red-950/20 shrink-0 border border-red-100 dark:border-red-900/30 shadow-inner">
                <PackagePlus className="h-6 w-6 text-[#e41e26] dark:text-red-500" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Add Product</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">List a new item in the marketplace</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm">
            <form action={formAction} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Product Title</label>
                <Input
                  name="title"
                  placeholder="e.g. Modern Wireless Headphones"
                  className="h-12 sm:h-14 bg-white/60 border-zinc-200 focus:border-[#e41e26] focus:ring-2 focus:ring-[#e41e26]/10 rounded-xl px-4 text-base dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-red-500/50 dark:focus:ring-red-500/20 transition-all shadow-sm"
                />
                {state?.fieldErrors?.title && (
                  <p className="text-xs text-red-500 font-medium ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.title[0]}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Price ($)</label>
                  <Input
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="h-12 sm:h-14 bg-white/60 border-zinc-200 focus:border-[#e41e26] focus:ring-2 focus:ring-[#e41e26]/10 rounded-xl px-4 text-base dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-red-500/50 dark:focus:ring-red-500/20 transition-all shadow-sm"
                  />
                  {state?.fieldErrors?.price && (
                    <p className="text-xs text-red-500 font-medium ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.price[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Category</label>
                  <Select name="category">
                    <SelectTrigger className="h-12 sm:h-14 bg-white/60 border-zinc-200 focus:border-[#e41e26] focus:ring-2 focus:ring-[#e41e26]/10 rounded-xl px-4 text-base dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500/50 dark:focus:ring-red-500/20 transition-all shadow-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 shadow-xl">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="capitalize py-3 cursor-pointer focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950/20 dark:focus:text-red-400 dark:text-zinc-300 transition-colors">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state?.fieldErrors?.category && (
                    <p className="text-xs text-red-500 font-medium ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.category[0]}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Image URL</label>
                <Input
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="h-12 sm:h-14 bg-white/60 border-zinc-200 focus:border-[#e41e26] focus:ring-2 focus:ring-[#e41e26]/10 rounded-xl px-4 text-base dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-red-500/50 dark:focus:ring-red-500/20 transition-all shadow-sm"
                />
                {state?.fieldErrors?.image && (
                  <p className="text-xs text-red-500 font-medium ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.image[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Description</label>
                <Textarea
                  name="description"
                  placeholder="Describe your product in detail..."
                  className="min-h-32 sm:min-h-40 bg-white/60 border-zinc-200 focus:border-[#e41e26] focus:ring-2 focus:ring-[#e41e26]/10 rounded-xl px-4 py-3 text-base resize-none dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-red-500/50 dark:focus:ring-red-500/20 transition-all shadow-sm"
                />
                {state?.fieldErrors?.description && (
                  <p className="text-xs text-red-500 font-medium ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.description[0]}</p>
                )}
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-14 sm:h-16 bg-gradient-to-r from-[#e41e26] to-[#c31a21] hover:from-[#c31a21] hover:to-[#a9161c] text-white text-lg font-bold rounded-2xl shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all dark:shadow-red-900/30 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Publish Product"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
