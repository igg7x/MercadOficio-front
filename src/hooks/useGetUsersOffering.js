import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsersOfferingsByFilters } from "@services/users/users.services";

export function useFilteredUsersOffering(filters) {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isLoading, isError, isPreviousData } = useQuery({
    queryKey: ["searchUsersOffering", filters, page],
    queryFn: (filters) => getUsersOfferingsByFilters(page, filters.queryKey[1]),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
    enabled: !!filters,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: ["searchUsersOffering", filters, page + 1],
      queryFn: (filters) =>
        getUsersOfferingsByFilters(page + 1, filters.queryKey[1]),
    });
  }
  const nextPage = () => {
    if (!data?.last) {
      setPage((old) => old + 1);
    }
  };

  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  return {
    data,
    isLoading,
    isError,
    isPreviousData,
    page,
    nextPage,
    prevPage,
  };
}
