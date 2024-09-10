import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviewsByUserEmail } from "@services/reviews/reviews.services";
import { useState } from "react";

export const useReviews = (email) => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();

  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: ["reviewsByUser", email, page],
    queryFn: () => getReviewsByUserEmail(email, page),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled: !!email,
    staleTime: 5000,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: ["reviewsByUser", email, page + 1],
      queryFn: () => getReviewsByUserEmail(email, page + 1),
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

  return { data, isError, isLoading, isPreviousData, nextPage, prevPage, page };
};
