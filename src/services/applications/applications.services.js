import request from "../request";
import HTTP from "../../utils/methods";
export const getApplicationsByJobId = async (jobId) => {
  const params = {
    method: HTTP.GET,
    path: `applications/job/${jobId}`,
  };
  return request({ params });
};
