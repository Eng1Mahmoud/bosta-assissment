import { getProductByIdAction } from "@/actions/productActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Tag, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/products/AddToCartButton";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const res = await getProductByIdAction(id);

  if (res.error || !res.data) {
    return {
      title: "Product Not Found",
    };
  }

  const product = res.data;

  return {
    title: product.title,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: Props) {
  const { id } = await params;
  const res = await getProductByIdAction(id);

  if (res.error || !res.data) {
    notFound();
  }

  const product = res.data;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-6 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/products">
            <Button variant="ghost" className="mb-6 md:mb-8 gap-2 -ml-2 text-zinc-500 hover:bg-[#e41e26] hover:text-white transition-colors rounded-xl">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="relative aspect-square flex items-center justify-center bg-white rounded-2xl p-6 sm:p-8 border border-zinc-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-6 sm:p-8"
                priority
              />
            </div>

            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <Badge className="bg-[#e41e26] hover:bg-[#c31a21] text-white border-none py-1 px-3 capitalize w-fit">
                  <Tag className="mr-2 h-3 w-3" />
                  {product.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight dark:text-zinc-100 leading-tight">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 font-bold text-zinc-900 dark:text-zinc-100">
                      {product.rating?.rate || "4.5"}
                    </span>
                  </div>
                  <span className="text-zinc-400 text-sm">
                    ({product.rating?.count || "120"} reviews)
                  </span>
                </div>
              </div>

              <div className="border-y border-zinc-100 py-4 md:py-6 dark:border-zinc-800">
                <span className="text-3xl md:text-4xl font-extrabold text-[#e41e26]">
                  ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Description
                </h3>
                <p className="text-zinc-600 leading-relaxed dark:text-zinc-400 text-base md:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 md:pt-6">
                  <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
