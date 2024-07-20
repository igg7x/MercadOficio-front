import React, { useState, useEffect } from "react";
import HomeSideBar from "./components/HomeSideBar";
import JobMain from "../Jobs/JobMain";
import HomeMain from "./components/HomeMain";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import PostJobs from "../Jobs/components/PostJobs";
import { action as postJobApplication } from "../Jobs/components/JobCard";
import JobDetails from "../Jobs/components/JobDetails";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        padding: "5",
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "100vh",
        gridTemplateAreas: isMobile ? '"main main"' : '"sidebar main"',
      }}>
      <HomeSideBar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route action={postJobApplication} path="jobs" element={<JobMain />} />
        <Route path="profile/:userEmail" element={<Profile />} />
        <Route path="post-job/*" element={<PostJobs />}>
          <Route path="details/:jobId" element={<JobDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
