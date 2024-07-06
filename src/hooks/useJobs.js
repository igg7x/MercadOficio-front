import { useQuery } from "@tanstack/react-query";
import { getJobsbyCategories } from "../services/jobs";

export const useJobsByCategories = (categories) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByCategories", categories],
    queryFn: ({ queryKey }) =>
      getJobsbyCategories(1, JSON.stringify(queryKey[1])),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
