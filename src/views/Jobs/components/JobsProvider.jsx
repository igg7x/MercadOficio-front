import React, { createContext, useContext } from "react";

export const JobsContext = createContext();

export const JobsProvider = ({ children, jobs }) => {
  return <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>;
};

export const useJobsContext = () => {
  return useContext(JobsContext);
};
