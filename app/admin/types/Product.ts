export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
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
