import { fetchUsers } from "@services/users";
import { useQuery } from "@tanstack/react-query";

export const useUsersOffering = () => {
  const {
    isLoading,
    isError,
    data: usersOfferings = [],
    hasNextPage,
    fetchNextPage,
  } = useQuery({
    queryKey: ["usersOffering"],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    usersOfferings,
    hasNextPage,
    fetchNextPage,
  };
};
