import React, { useState, useEffect } from "react";
import HomeSideBar from "./components/HomeSideBar";
import Chat from "../Chat/Chat";
import HomeMain from "./components/HomeMain";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  // const isMobile = window.innerWidth < 640;s
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
        gridTemplateColumns: "1fr 4fr",
        gridTemplateRows: "100vh",
        gridTemplateAreas: isMobile ? '"main main"' : '"sidebar main"',
      }}>
      <HomeSideBar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="chats" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Home;
