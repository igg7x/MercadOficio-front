import React, { useState } from "react";
import HomeSideBar from "./components/HomeSideBar";
import HomeMain from "./components/HomeMain";

const Home = () => {
  // const isMobile = window.innerWidth < 640;s
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 640);
  });

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
      <HomeMain />
    </div>
  );
};

export default Home;
