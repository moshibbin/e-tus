"use client";
import { CartProvider } from "./context/cart";
import Footer from "./components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Footer />
    </CartProvider>
  );
}