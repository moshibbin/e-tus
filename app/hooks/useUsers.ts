import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import usersServices from "../services/usersServices";
import { CACHE_KEY_USERS } from "../utils/constans";
export interface User {
  id?: string; // Firebase Auth UID
  userId: string;
  email: string;
  name?: string;
  role: "admin" | "user";
  createdAt: any;
}

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: CACHE_KEY_USERS,
    queryFn: usersServices.getAll,
  });
};

export const useAddUsers = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, User>({
    mutationFn: (data: User) => usersServices.post(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_USERS,
      });
      toast.success("Users recoded uccessfully", {
        autoClose: 2000,
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(`Error recoding Users: ${error.message}`, {
        autoClose: 3000,
      });
    },
  });
};

// export const useUpdateCategory = () => {
//   const queryClient = useQueryClient();

//   return useMutation<void, Error, { id: string; data: User }>({
//     mutationFn: ({ id, data }) => usersServices.update(id, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: CACHE_KEY_USERS,
//       });
//       toast.success("Category updated uccessfully", {
//         autoClose: 2000,
//       });
//     },
//     onError: (error: Error) => {
//       // Show error toast
//       toast.error(`Error updeting Category: ${error.message}`, {
//         autoClose: 3000,
//       });
//     },
//   });
// };

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => usersServices.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_USERS,
      });
      toast.success("User deleted successfully", {
        autoClose: 2000,
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(`Error deleting User: ${error.message}`, {
        autoClose: 3000,
      });
    },
  });
};
