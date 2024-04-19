import React, { useState } from "react";
import Info from "./Info";
import Work from "./Work";
import Reviews from "./Reviews";
const userData = {
  name: "Alivika",
  surname: "Tony",
  email: "Alivikatonu@gmail.com",
  biography:
    "Con más de 15 años de experiencia en limpieza residencial y comercial, María se ha convertido en una experta en el arte de dejar impecables los espacios que toca. Su dedicación y atención al detalle son evidentes en cada tarea que realiza, desde limpiar pisos y ventanas hasta organizar armarios y cocinas.",
};
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
            className={`text-lg font-inter flex-grow  max-[640px]:text-base hover:bg-gray-200 rounded-sm focus-visible:bg-gray-200 ${
              TAB === selectedTab ? "border-b-2 border-blue-500 font-bold" : ""
            }`}>
            {TAB}
          </button>
        ))}
      </div>
      {selectedTab === "Info" ? (
        <Info userData={userData} />
      ) : selectedTab === "Work" ? (
        <Work />
      ) : (
        <Reviews />
      )}
    </>
  );
};

export default ProfileMainSection;
