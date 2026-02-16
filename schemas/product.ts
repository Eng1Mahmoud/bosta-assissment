import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Must be a valid URL"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
