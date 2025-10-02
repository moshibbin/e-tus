import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import projectsServices from "../services/projectsServices";
import { CACHE_KEY_PRODUCTS } from "../utils/constans";
export interface AdditionalInfoItem {
  key: string;
  value: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  thumbs: string[];
  description: string;
  fullDescription?: string; // total number of reviews
  stock: number;
  categories: string[];
  tags: string[];
  brand?: string;
  size?: string;
  additionalInfo?: AdditionalInfoItem[];
  // Shop display properties (optional)
  rating?: number;
  reviews?: number;
  offer?: string;
  oldPrice?: number;
  sku?: string;
  reviewsList?: any[];
  overallRating?: number;
  ratingDistribution?: { [key: number]: string };
}
export const useProductsBySites = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: projectsServices.getAllBySite,
  });
};
export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: projectsServices.getAll,
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, Product>({
    mutationFn: (products: Product) => projectsServices.post(products),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_PRODUCTS,
      });
      toast.success("Project recorded successfully", {
        autoClose: 2000,
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(`Error recording Project: ${error.message}`, {
        autoClose: 3000,
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { id: string; data: Product }>({
    mutationFn: ({ id, data }) => projectsServices.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_PRODUCTS,
      });
      toast.success("Project updated successfully", {
        autoClose: 2000,
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(`Error updating Product: ${error.message}`, {
        autoClose: 3000,
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => projectsServices.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_PRODUCTS,
      });
      toast.success("Product deleted successfully", {
        autoClose: 2000,
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(`Error deleting Product: ${error.message}`, {
        autoClose: 3000,
      });
    },
  });
};
