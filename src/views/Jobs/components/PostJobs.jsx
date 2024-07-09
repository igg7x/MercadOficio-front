import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import PostJobsMain from "../PostJobsMain";
const PostJobs = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostJobsMain />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default PostJobs;
