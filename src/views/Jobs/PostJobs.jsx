import React from "react";
import HeaderMobile from "@components/HeaderMobile";
import Pagination from "@components/Pagination";
import CreateNewJob from "./components/CreateNewJob";
const PostJobs = () => {
  return (
    <section className="[grid-area:main] overflow-y-auto">
      <HeaderMobile />
      <div className="flex flex-col  items-center mx-auto px-4 ">
        <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
          Portal de Trabajos
        </h2>
        <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
          Aqui podras publicar tus ofertas de trabajos
        </h4>
        <div className="container grid grid-cols-1 border-t-2 p-3   max-[375px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <CreateNewJob />
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default PostJobs;
