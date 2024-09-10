import { useMutation } from "@tanstack/react-query";
import {
  createUser,
  createUserCustomer,
  createUserOffering,
} from "@services/users/users.services";
import { useNavigate } from "react-router-dom";

export const useCreateUserCustomer = () => {
  const navigate = useNavigate();
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onError: (err) => {
      throw new Error(err);
    },
  });

  const createUserCustomerMutation = useMutation({
    mutationFn: createUserCustomer,
    onError: (err) => {
      throw new Error(err);
    },
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleRegister = (userData, userCustomerEmail) => {
    createUserMutation.mutate(userData, {
      onSuccess: () => {
        createUserCustomerMutation.mutate(userCustomerEmail);
      },
    });
  };
  return {
    handleRegister,
    isLoading:
      createUserMutation.isLoading || createUserCustomerMutation.isLoading,
    isSuccess:
      createUserMutation.isSuccess && createUserCustomerMutation.isSuccess,
  };
};

export const useCreateUserAndOffering = () => {
  const navigate = useNavigate();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onError: (err) => {
      throw new Error(err);
    },
  });

  const createUserOfferingMutation = useMutation({
    mutationFn: createUserOffering,
    onError: (err) => {
      throw new Error(err);
    },
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleRegister = (userData, offeringData) => {
    createUserMutation.mutate(userData, {
      onSuccess: () => {
        createUserOfferingMutation.mutate(offeringData);
      },
    });
  };

  return {
    handleRegister,
    isLoading:
      createUserMutation.isLoading || createUserOfferingMutation.isLoading,
    isSuccess:
      createUserMutation.isSuccess && createUserOfferingMutation.isSuccess,
  };
};
