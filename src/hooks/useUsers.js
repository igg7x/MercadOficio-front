import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../utils/roles";
import {
  getUserByEmail,
  getUserOfferingByEmail,
  getUserCustomerByEmail,
  isUserHasRoles,
  updateUser,
  updateUserOffering,
} from "../services/users/users.services";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
export const useUserByEmail = (email) => {
  const { data: userData, isLoading: isLoadingUserData } = useQuery({
    queryKey: ["userByEmail", email],
    enabled: !!email,
    queryFn: ({ queryKey }) => getUserByEmail(queryKey[1]),
    refetchOnWindowFocus: false,
  });
  const { data, isError, isLoading, isPending } = useQuery({
    queryKey: userData?.roles.includes(ROLES.USER_OFFERING)
      ? ["getUserOfferingByEmail", email]
      : ["getUserCustomerByEmail", email],
    enabled: !!email,
    queryFn: () => {
      if (userData?.roles.includes(ROLES.USER_OFFERING)) {
        return getUserOfferingByEmail(userData.email);
      } else {
        return getUserCustomerByEmail(userData.email);
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, isError, isLoading, isPending };
};

export const useUserData = (email) => {
  const { data: userData, isLoading: isLoadingUserData } = useQuery({
    queryKey: ["userDataByEmail", email],
    enabled: !!email,
    queryFn: ({ queryKey }) => getUserByEmail(queryKey[1]),
    refetchOnWindowFocus: false,
  });
  return { userData, isLoadingUserData };
};

export const useGetUserCustomer = (email) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getUserCustomerDataByEmail", email],
    queryFn: () => getUserCustomerByEmail,
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading, isPending };
};

export const useVerifyUserRoles = (email) => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userRoles", email],
    queryFn: () => isUserHasRoles(),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isLoading) return;
    if (data?.hasRole) {
      navigate("/home");
    } else {
      navigate("/subregister");
    }
  }, [data, isLoading]);
  return { data, isError, isLoading };
};

export const useGetUserOffering = (email) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userOffering", email],
    queryFn: () => getUserOfferingByEmail(email),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};

export const useUpdateUser = (userRoles) => {
  const queryClient = useQueryClient();
  const { user } = useAuth0();
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: userRoles.includes(ROLES.USER_OFFERING)
          ? ["getUserOfferingByEmail", user.email]
          : ["getUserCustomerByEmail", user.email],
      });
    },
    onError: (error) => {
      toast.error("Error al actualizar el perfil", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      throw new Error(error);
    },
  });

  const updateUserOfferingMutation = useMutation({
    mutationFn: updateUserOffering,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["getUserOfferingByEmail", email],
      });
    },
    onError: (error) => {
      toast.error("Error al actualizar el perfil", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      throw new Error(error);
    },
  });

  const handleUpdate = (updatedData, data) => {
    if (data.categories.length > 0) {
      updateUserMutation.mutate(updatedData, {
        onSuccess: () => {
          updateUserOfferingMutation.mutate(data, {
            onSuccess: () => {
              toast.success("Tu perfil se actualizo con exito!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            },
          });
        },
      });
    } else {
      updateUserMutation.mutate(updatedData, {
        onSuccess: () => {
          toast.success("Tu perfil se actualizo con exito!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        },
      });
    }
  };

  return { handleUpdate, isLoading: updateUserMutation.isLoading };
};
