import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getReviewsByUserEmail,
  createReview,
} from "@services/reviews/reviews.services";

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

export const useCreateReview = (userReviewer, fn) => {
  const queryClient = useQueryClient();

  const createReviewMutation = useMutation({
    mutationFn: createReview,
    onError: (err) => {
      throw new Error(err);
    },
  });

  const handleCreateReview = (reviewData) => {
    createReviewMutation.mutate(reviewData, {
      onSuccess: async () => {
        // await queryClient.invalidateQueries({
        //   queryKey: ["getNotifications", userReviewed],
        // });
        await queryClient.invalidateQueries({
          queryKey: ["getNotifications", userReviewer],
        });
        // await queryClient.invalidateQueries({
        //   queryKey: ["reviewsByUser", userReviewed, 0],
        // });
        fn();
      },
    });
  };

  return { handleCreateReview, isLoading: handleCreateReview.isLoading };
};
