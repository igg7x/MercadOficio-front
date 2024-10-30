import request from "../request";
import HTTP from "../../utils/methods";

export const getJobsByUserCustomer = async (pageParam) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/customer?page=${pageParam}&size=7`,
  };
  return request({ params });
};

export const getJobsByCategories = async (pageParam) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/all?page=${pageParam}&size=7`,
  };
  return request({ params });
};

export const getHistorialJobsByUserCustomer = async (pageParam) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/customer/historial?page=${pageParam}&size=7`,
  };
  return request({ params });
};

export const getHistorialForUserOffering = async (pageParam) => {
  const params = {
    method: HTTP.GET,
    path: `jobs/offerings/historial?page=${pageParam}&size=8`,
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

export const deleteJob = async (jobId) => {
  const params = {
    method: HTTP.PUT,
    path: `jobs/delete/${jobId}`,
  };
  return request({ params });
};
