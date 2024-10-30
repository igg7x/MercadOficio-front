import { useQuery } from "@tanstack/react-query";
import { isUserReported } from "../services/reports/reports.services";

export const useIsUserReported = (userEmailToReport) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["isUserReported", userEmailToReport],
    queryFn: ({ queryKey }) => isUserReported(queryKey[1]),
    refetchOnWindowFocus: false,
    enabled: !!userEmailToReport,
  });
  return { data, isError, isLoading };
};
