"use client";
import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  thumbs: string[];
  description: string;
  fullDescription: string;
  rating: number;
  reviews: number;
  stock: number;
  sku: string;
  categories: string[];
  tags: string[];
  brand: string;
  size: string;
  additionalInfo: Array<{ label: string; value: string }>;
  reviewsList: Array<{
    name: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  overallRating: number;
  ratingDistribution: Record<string, string>;
  oldPrice?: number;
  offer?: string;
  quantity?: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.id === product.id);
      if (item) {
        return prevItems.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => {
      return prevItems.filter((i) => i.id !== productId);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
