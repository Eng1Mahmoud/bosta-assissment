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
      toast.success("Product created successfully!");
      router.push("/products");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/products">
          <Button variant="ghost" className="mb-4 sm:mb-8 gap-2 -ml-2 text-zinc-500 hover:bg-[#e41e26] hover:text-white transition-colors rounded-xl">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <Card className="border-zinc-200 shadow-xl rounded-[2rem] overflow-hidden dark:border-zinc-800">
          <CardHeader className="bg-white border-b border-zinc-100 p-6 sm:p-8 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 rounded-2xl dark:bg-red-950/30 shrink-0">
                <PackagePlus className="h-6 w-6 text-[#e41e26]" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl font-extrabold text-zinc-900">Add Product</CardTitle>
                <CardDescription className="text-xs sm:text-sm">List a new item in the marketplace</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <form action={formAction} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Product Title</label>
                <Input
                  name="title"
                  placeholder="e.g. Modern Wireless Headphones"
                  className="h-12 sm:h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl px-4 text-base"
                />
                {state?.fieldErrors?.title && (
                  <p className="text-xs text-red-500 font-medium ml-1">{state.fieldErrors.title[0]}</p>
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
                    className="h-12 sm:h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl px-4 text-base"
                  />
                  {state?.fieldErrors?.price && (
                    <p className="text-xs text-red-500 font-medium ml-1">{state.fieldErrors.price[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Category</label>
                  <Select name="category">
                    <SelectTrigger className="h-12 sm:h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl px-4 text-base">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="capitalize py-3">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state?.fieldErrors?.category && (
                    <p className="text-xs text-red-500 font-medium ml-1">{state.fieldErrors.category[0]}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Image URL</label>
                <Input
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="h-12 sm:h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl px-4 text-base"
                />
                {state?.fieldErrors?.image && (
                  <p className="text-xs text-red-500 font-medium ml-1">{state.fieldErrors.image[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Description</label>
                <Textarea
                  name="description"
                  placeholder="Describe your product in detail..."
                  className="min-h-32 sm:min-h-40 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl px-4 py-3 text-base resize-none"
                />
                {state?.fieldErrors?.description && (
                  <p className="text-xs text-red-500 font-medium ml-1">{state.fieldErrors.description[0]}</p>
                )}
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-14 sm:h-16 bg-[#e41e26] hover:bg-[#c31a21] text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all"
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
