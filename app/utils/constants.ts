// Shared constants for the application
export const PRODUCT_CATEGORIES = [
  "Cameras",
  "Audio",
  "Lighting",
  "Accessories",
  "Lenses",
  "Tripods",
  "Batteries",
  "Storage",
  "Other",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
