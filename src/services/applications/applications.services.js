import request from "../request";
import HTTP from "../../utils/methods";
export const getApplicationsByJobId = async (jobId) => {
  const params = {
    method: HTTP.GET,
    path: `applications/job/${jobId}`,
  };
  return request({ params });
};

export const createJobApplication = async (jobId) => {
  console.log(jobId);
  const params = {
    method: HTTP.POST,
    path: `applications/${jobId}`,
  };
  return request({ params });
};
