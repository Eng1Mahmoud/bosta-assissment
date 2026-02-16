"use server";
import { productSchema, ProductFormValues } from "../schemas/product";
import { fetchApi } from "@/lib/api";
import { getFormDataObject } from "@/lib/utils";
import { validateData } from "@/lib/validation";
import { ActionState } from "../types/action";
import { Product } from "../types/product";
import { cacheTag } from "next/cache";
// I use  use "use cashe" to cashe api data and I will revalidate by revalidateTag(tag) or updateTag(tag, data)  when we update this api for products , products-1 or categoryes  but here we use fake api and we don't update data so we just cache we can validate it when start use real api also we can validata it for spisific time by using cacheLife('1h');
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
  const rawData = getFormDataObject<ProductFormValues>(formData);

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

