import { useQuery } from "@tanstack/react-query";
import { getUsersByFilters } from "@services/users";
export function useFilteredUsersOffering(filters) {
  const result = useQuery({
    queryKey: ["usersOffering", filters],
    queryFn: (filters) =>
      getUsersByFilters(1, JSON.stringify(filters.queryKey[1])),
    refetchOnWindowFocus: false,
  });
  return result;
}
