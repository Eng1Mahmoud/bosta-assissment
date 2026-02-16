import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts FormData to a plain object
 */
export function getFormDataObject<T extends Record<string, any>>(formData: FormData): T {
  return Object.fromEntries(formData.entries()) as T;
}
