import React from "react";
import JobCard from "./components/JobCard";
import HeaderMobile from "../../components/HeaderMobile";
const JobMain = () => {
  return (
    <>
      <section className="  [grid-area:main] ">
        <HeaderMobile />
        <div className="flex flex-col  items-center mx-auto px-4 ">
          <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
            Portal de Trabajos
          </h2>
          <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
            Aqui podras aplicar a las ofertas de trabajo segun tu categoria
          </h4>
          <div className="grid grid-cols-1 border-t-2 p-3  max-[375px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <JobCard
              position={"Desarrollador Frontend"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
            <JobCard
              position={"Desarrollador Backend"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
            <JobCard
              position={"Desarrollador Fullstack"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
            <JobCard
              position={"Desarrollador Frontend"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
            <JobCard
              position={"Desarrollador Backend"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
            <JobCard
              position={"Desarrollador Fullstack"}
              userOffering={"Empresa de Desarrollo"}
              location={"Santiago, Chile"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default JobMain;
