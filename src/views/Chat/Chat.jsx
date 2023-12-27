import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";
const Chat = () => {
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
    <div className="[grid-area:main] ">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 4fr",
          gridTemplateRows: "100vh",
          gridTemplateAreas: '"aside main"',
        }}>
        <Chats />
        <Contacts />
      </div>
    </div>
  );
};

export default Chat;
