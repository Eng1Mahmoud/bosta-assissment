"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CategorySelect } from "@/components/category-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PackagePlus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { SubmitButton } from "@/components/SubmitButton";
import { FieldError } from "@/components/FieldError";
import { Button } from "@/components/ui/button";

export default function CreateProductForm() {
  const { categories, state, formAction, isPending } = useCreateProduct();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/products">
          <Button
            variant="ghost"
            className="mb-4 sm:mb-8 gap-2 -ml-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all rounded-xl"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <Card className="border-border shadow-xl rounded-[2rem] overflow-hidden bg-card transition-all hover:shadow-2xl backdrop-blur-xl">
          <CardHeader className="bg-card/80 border-b border-border p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl shrink-0 border border-primary/20 shadow-inner">
                <PackagePlus className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  Add Product
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground font-medium">
                  List a new item in the marketplace
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 bg-card/40 backdrop-blur-sm">
            <form action={formAction} className="space-y-5 sm:space-y-6">
              {/* Basic Information */}
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Product Title
                  </label>
                  <Input
                    name="title"
                    placeholder="e.g. Modern Wireless Headphones"
                    className="h-12 sm:h-14 bg-background/60 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 text-base transition-all shadow-sm"
                  />
                  <FieldError errors={state?.fieldErrors?.title} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">
                      Price ($)
                    </label>
                    <Input
                      name="price"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className="h-12 sm:h-14 bg-background/60 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 text-base transition-all shadow-sm"
                    />
                    <FieldError errors={state?.fieldErrors?.price} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">
                      Category
                    </label>
                    <CategorySelect
                      categories={categories}
                      placeholder="Select category"
                      name="category"
                      variant="form"
                    />
                    <FieldError errors={state?.fieldErrors?.category} />
                  </div>
                </div>
              </div>

              {/* Media & Details */}
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Image URL
                  </label>
                  <Input
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    className="h-12 sm:h-14 bg-background/60 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 text-base transition-all shadow-sm"
                  />
                  <FieldError errors={state?.fieldErrors?.image} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    placeholder="Describe your product in detail..."
                    className="min-h-32 sm:min-h-40 bg-background/60 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 py-3 text-base resize-none transition-all shadow-sm"
                  />
                  <FieldError errors={state?.fieldErrors?.description} />
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <SubmitButton
                  isPending={isPending}
                  label="Publish Product"
                  pendingLabel="Creating..."
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
