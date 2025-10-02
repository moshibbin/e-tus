import { Product } from "../hooks/useProducts";
import APIClient from "./apiClient";

export default new APIClient<Product>("products");
