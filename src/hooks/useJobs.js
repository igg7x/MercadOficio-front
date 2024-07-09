import { useQuery } from "@tanstack/react-query";
import { getJobsbyCategories, getJobsByUserCustomer } from "../services/jobs";

export const useJobsByCategories = (categories) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByCategories", categories],
    queryFn: ({ queryKey }) =>
      getJobsbyCategories(1, JSON.stringify(queryKey[1])),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};

export const useJobsByUserCustomer = (email) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByUserCustomer", email],
    queryFn: ({ queryKey }) => getJobsByUserCustomer(1, queryKey[1]),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
