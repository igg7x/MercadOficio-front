import React, { useState } from "react";
import Info from "./Info";
import Work from "./Work";
import Reviews from "./Reviews";

const ProfileMainSection = () => {
  const TABS = ["Info", "Reviews", "Work"];

  const [selectedTab, setSelectedTab] = useState("Info");
  return (
    <>
      <div className="flex border-b">
        {TABS.map((TAB, key) => (
          <button
            key={key}
            onClick={() => setSelectedTab(TAB)}
            className={`text-lg font-semibold flex-grow  max-[640px]:text-base hover:bg-gray-200 rounded-sm focus-visible:bg-gray-200 ${
              TAB === selectedTab ? "border-b-2 border-blue-500 font-bold" : ""
            }`}>
            {TAB}
          </button>
        ))}
      </div>
      {selectedTab === "Info" ? (
        <Info />
      ) : selectedTab === "Work" ? (
        <Work />
      ) : (
        <Reviews />
      )}
    </>
  );
};

export default ProfileMainSection;
