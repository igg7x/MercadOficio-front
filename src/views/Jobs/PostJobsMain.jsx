import React, { useState } from "react";
import HeaderMobile from "@components/HeaderMobile";
import JobsActiveUserCustomer from "./components/JobsActiveUserCustomer";
import JobsHistorialUserCustomer from "./components/JobsHistorialUserCustomer";
const PostJobsMain = () => {
  const TABS = ["Trabajos activos", "Historial de trabajos"];
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  return (
    <section className="[grid-area:main] flex-col flex items-center overflow-y-auto bg-gray-50">
      <HeaderMobile />
      <div className="flex flex-col mx-auto px-4 items-center">
        <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
          Portal de Trabajos
        </h2>
        <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
          Aqui podras publicar tus ofertas de trabajos
        </h4>
        <div className="flex  w-full border-b">
          {TABS.map((TAB, key) => (
            <button
              key={key}
              onClick={() => setSelectedTab(TAB)}
              className={`text-lg font-inter flex-grow  max-[640px]:text-base hover:bg-gray-200 rounded-sm focus-visible:bg-gray-200 ${
                TAB === selectedTab
                  ? "border-b-2 border-blue-500 font-bold"
                  : ""
              }`}>
              {TAB}
            </button>
          ))}
        </div>
        {selectedTab === TABS[0] ? (
          <JobsActiveUserCustomer />
        ) : (
          <JobsHistorialUserCustomer />
        )}
      </div>
    </section>
  );
};

export default PostJobsMain;
