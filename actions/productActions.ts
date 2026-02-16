"use server";
import { productSchema } from "../schemas/product";
import { fetchApi } from "@/lib/api";
import { validateData } from "@/lib/validation";
import { ActionState } from "../types/action";
import { Product } from "../types/product";
export async function getProductsAction() {
  return fetchApi<Product[]>("/products");
}

export async function getProductByIdAction(id: string) {
  return fetchApi<Product>(`/products/${id}`);
}

export async function getCategoriesAction() {
  return fetchApi<string[]>("/products/categories");
}

export async function createProductAction(
  _prevState: ActionState<Product>,
  formData: FormData
): Promise<ActionState<Product>> {
  const rawData = Object.fromEntries(formData.entries()) ;
  const validated = validateData(productSchema, rawData);

  if (!validated.success) {
    return {
      error: "Validation failed",
      fieldErrors: validated.errors,
    };
  }

  const result = await fetchApi<Product>("/products", {
    method: "POST",
    body: JSON.stringify(validated.data),
  });

  if (result.error) {
    return { error: result.error };
  }

  return { success: true, data: result.data };
}

