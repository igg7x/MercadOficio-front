import { useQuery } from "@tanstack/react-query";
import { getUserByEmail } from "../services/users/users.services";

export const useUserByEmail = (email) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userByEmail", email],
    queryFn: ({ queryKey }) => getUserByEmail(queryKey[1]),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
