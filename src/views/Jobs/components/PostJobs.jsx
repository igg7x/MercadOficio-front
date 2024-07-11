import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import PostJobsMain from "../PostJobsMain";
import { useJobsByUserCustomer } from "@hooks/useJobs";
import { JobsProvider } from "../components/JobsProvider";
const PostJobs = () => {
  const results = useJobsByUserCustomer("Esmeralda47@hotmail.com");
  return (
    <>
      <JobsProvider jobs={results}>
        <Routes>
          <Route path="/" element={<PostJobsMain />} />
        </Routes>
        <Outlet />
      </JobsProvider>
    </>
  );
};

export default PostJobs;
