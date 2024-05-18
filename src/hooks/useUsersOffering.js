import { fetchUsers } from "@services/users";
import { useQuery } from "@tanstack/react-query";

export const useUsersOffering = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } = useQuery({
    queryKey: ["usersOffering"],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  };
};
