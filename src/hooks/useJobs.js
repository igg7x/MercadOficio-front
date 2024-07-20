import { useQuery } from "@tanstack/react-query";
import {
  getJobsByCategories,
  getJobsByUserCustomer,
  getJobById,
} from "@services/jobs/jobs.services";

export const useJobsByCategories = (categories) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByCategories", categories],
    queryFn: ({ queryKey }) => getJobsByCategories(1, queryKey[1]),
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

export const useJobsByID = (jobId) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByID", jobId],
    queryFn: () => getJobById(jobId),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
