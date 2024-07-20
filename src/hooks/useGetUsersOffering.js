import { useQuery } from "@tanstack/react-query";
import {
  getUsersOfferingsByFilters,
  getUserOfferingByEmail,
} from "@services/users/users.services";

export function useFilteredUsersOffering(filters) {
  const result = useQuery({
    queryKey: ["searchUsersOffering", filters],
    queryFn: (filters) => getUsersOfferingsByFilters(1, filters.queryKey[1]),
    refetchOnWindowFocus: false,
  });
  return result;
}

export const useGetUserOffering = (email) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userOffering", email],
    queryFn: ({ queryKey }) => getUserOfferingByEmail(queryKey[1]),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
