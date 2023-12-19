import React from "react";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";
const Chat = () => {
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
