import { User } from "../hooks/useUsers";
import APIClient from "./apiClient";

export default new APIClient<User>("users");
