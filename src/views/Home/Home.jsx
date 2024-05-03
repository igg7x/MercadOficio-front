import React, { useState, useEffect } from "react";
import HomeSideBar from "./components/HomeSideBar";
import JobMain from "../Jobs/JobMain";
import HomeMain from "./components/HomeMain";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

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
        <Route path="jobs" element={<JobMain />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Home;
