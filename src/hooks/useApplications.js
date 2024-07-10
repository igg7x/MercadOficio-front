import { useQuery } from "@tanstack/react-query";
import { getApplicationsByJobId } from "../services/job-applications";
export const useApplications = (jobId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getApplications", jobId],
    queryFn: ({ queryKey }) => getApplicationsByJobId(queryKey[1]),
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, isError };
};
