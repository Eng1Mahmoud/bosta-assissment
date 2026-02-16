"use client";
import { useActionState, useEffect, useState } from "react";
import { createProductAction, getCategoriesAction } from "@/actions/productActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ActionState } from "@/types/action";
import { Product } from "@/types/product";

const initialState: ActionState<Product> = {};

export function useCreateProduct() {
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

  return { categories, state, formAction, isPending };
}
