export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  thumbs?: string[];
  stock: number;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
  // Additional properties for Firebase compatibility
  fullDescription?: string;
  categories?: string[];
  tags?: string[];
  brand?: string;
  size?: string;
  additionalInfo?: Array<{ key: string; value: string }>;
  rating?: number;
  reviews?: number;
  offer?: string;
  oldPrice?: number;
  sku?: string;
  reviewsList?: any[];
  overallRating?: number;
  ratingDistribution?: { [key: number]: string };
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  thumbs?: string[];
  stock: number;
  featured: boolean;
  // Additional optional properties for Firebase compatibility
  fullDescription?: string;
  categories?: string[];
  tags?: string[];
  brand?: string;
  size?: string;
  additionalInfo?: Array<{ key: string; value: string }>;
  rating?: number;
  reviews?: number;
  offer?: string;
  oldPrice?: number;
  sku?: string;
}

export interface ProductFormErrors {
  name?: string;
  description?: string;
  price?: string;
  category?: string;
  image?: string;
  stock?: string;
  featured?: string;
}
