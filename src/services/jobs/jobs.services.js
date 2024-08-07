import request from "../request";
import HTTP from "../../utils/methods";

export const getJobsByUserCustomer = async ({ pageParam = 1 }, email) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/customer/${email}`,
  };
  return request({ params });
};

export const getJobsByCategories = async ({ pageParam = 1 }, categories) => {
  const params = {
    method: HTTP.POST,
    path: `jobs/all?page=${pageParam}&size=10`,
    body: categories,
  };
  return request({ params });
};

export const createJobApplication = async (jobId, email) => {
  const params = {
    method: HTTP.POST,
    path: `applications/${jobId}`,
    body: email,
  };
  return request({ params });
};

export const createJob = async (job) => {
  const params = {
    method: HTTP.POST,
    path: `jobs/create`,
    body: job,
  };
  return request({ params });
};

export const updateJob = async (jobDetails) => {
  const job = {
    userOfferingEmail: jobDetails.userOfferingEmail,
  };
  const params = {
    method: HTTP.PUT,
    path: `jobs/update/${jobDetails.JOB_ID}`,
    body: job,
  };
  return request({ params });
};

export const getJobById = async (jobId) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/get/${jobId}`,
  };
  return request({ params });
};
