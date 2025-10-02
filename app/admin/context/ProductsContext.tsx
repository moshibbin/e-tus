"use client";

// NOTE: This ProductsContext is deprecated and replaced by Firebase integration
// Keeping for reference but not actively used in the application
// The admin now uses useProducts hook from @/app/hooks/useProducts for Firebase integration

/*
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product, ProductFormData } from "../types/Product";

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
  createProduct: (productData: ProductFormData) => Promise<void>;
  updateProduct: (id: string, productData: ProductFormData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProduct: (id: string) => Product | undefined;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem("admin_products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error("Error loading products:", error);
      }
    } else {
      // Initialize with some sample products
      const sampleProducts: Product[] = [
        {
          id: "1",
          name: "Professional Camera",
          description: "High-quality professional camera for filmmakers",
          price: 2999.99,
          category: "Cameras",
          image: "/assets/img/products/f-product-1-1.png",
          stock: 10,
          featured: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Wireless Microphone",
          description: "Professional wireless microphone system",
          price: 399.99,
          category: "Audio",
          image: "/assets/img/products/f-product-1-2.png",
          stock: 25,
          featured: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      setProducts(sampleProducts);
      localStorage.setItem("admin_products", JSON.stringify(sampleProducts));
    }
  }, []);

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("admin_products", JSON.stringify(products));
    }
  }, [products]);

  const createProduct = async (productData: ProductFormData) => {
    setIsLoading(true);
    try {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...productData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: ProductFormData) => {
    setIsLoading(true);
    try {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? {
                ...product,
                ...productData,
                updatedAt: new Date().toISOString(),
              }
            : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    setIsLoading(true);
    try {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getProduct = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  const value: ProductsContextType = {
    products,
    isLoading,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  };

*/
