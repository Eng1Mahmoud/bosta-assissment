import { z } from "zod";

export type ValidationResult<T> = 
  | { success: true; data: T }
  | { success: false; errors: Record<string, string[]> };

export function validateData<T>(schema: z.ZodSchema<T>, data: unknown): ValidationResult<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  return {
    success: true,
    data: result.data,
  };
}
