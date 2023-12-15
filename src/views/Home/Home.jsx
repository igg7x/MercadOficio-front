import React from "react";
import HomeSideBar from "./components/HomeSideBar";
import HomeMain from "./components/HomeMain";
const Home = () => {
  return (
    <div
      style={{
        padding: "5",
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        gridTemplateRows: "100vh",
        gridTemplateAreas: '"sidebar main"',
      }}>
      <HomeSideBar />
      <HomeMain />
    </div>
  );
};

export default Home;
