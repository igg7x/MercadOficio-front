import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getJobById } from "@services/jobs/jobs.services";

export const useJobs = (func, key, params) => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: [key, params, page],
    queryFn: ({ queryKey }) => func(page, queryKey[1]),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: [key, params, page + 1],
      queryFn: (queryKey) => func(page + 1, queryKey[1]),
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

export const useJobsByID = (jobId) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByID", jobId],
    queryFn: () => getJobById(jobId),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
// export const useJobsByCategories = (categories) => {
//   const { data, isError, isLoading } = useQuery({
//     queryKey: ["jobsByCategories", categories],
//     queryFn: ({ queryKey }) => getJobsByCategories(1, queryKey[1]),
//     refetchOnWindowFocus: false,
//   });

//   return { data, isError, isLoading };
// };

// export const useJobsByUserCustomer = (email) => {
//   const { data, isError, isLoading } = useQuery({
//     queryKey: ["jobsByUserCustomer", email],
//     queryFn: ({ queryKey }) => getJobsByUserCustomer(1, queryKey[1]),
//     refetchOnWindowFocus: false,
//   });

//   return { data, isError, isLoading };
// };
