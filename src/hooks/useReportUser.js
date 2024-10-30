import { reportUser } from "../services/reports/reports.services";
import { useMutation } from "@tanstack/react-query";
export const useReportUser = () => {
  const reportUserMutation = useMutation({
    mutationFn: reportUser,
    onError: (err) => {
      throw new Error(err);
    },
  });

  const handleReport = (reportData) => {
    reportUserMutation.mutate(reportData);
  };

  return {
    handleReport,
    isLoading: reportUserMutation.isLoading,
    isSuccess: reportUserMutation.isSuccess,
  };
};
