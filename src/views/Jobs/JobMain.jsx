import React from "react";
import JobCard from "./components/JobCard";
import HeaderMobile from "@components/HeaderMobile";
import Pagination from "@components/Pagination";
import { useJobsByCategories } from "../../hooks/useJobs";
import Loading from "@components/Loading";

const JobMain = () => {
  const { data, isLoading, isError } = useJobsByCategories([
    { name: "Educacion" },
  ]);
  return (
    <>
      <section className="[grid-area:main] overflow-y-auto">
        <HeaderMobile />
        <div className="flex flex-col  items-center mx-auto px-4 ">
          <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
            Portal de Trabajos
          </h2>
          <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
            Aqui podras aplicar a las ofertas de trabajo segun tu categoria
          </h4>
          <div className="container grid grid-cols-1 border-t-2 p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading || isError ? (
              <Loading />
            ) : data.content.length !== 0 ? (
              data?.content.map((job) => (
                <JobCard
                  key={job.jobId}
                  jobId={job.jobId}
                  position={job.title}
                  description={job.description}
                  category={job.category}
                  location={job.location}
                  publish_date={job.publish_date}
                  expiration_date={job.deadline_date}
                  userOffering={job.userCustomerEmail}
                  status={job.status ? "Cerrado" : "Abierto"}
                />
              ))
            ) : (
              <div className="p-3 flex  items-center justify-center col-span-4 mx-auto flex-col gap-1">
                <p className="text-2xl max-[640px]:text-xl ">
                  No se encontraron trabajos disponibles
                </p>
                <img
                  draggable="false"
                  className="h-80 w-80 max-[640px]:h-72 max-[640px]:w-72"
                  src="/src/assets/images/undraw_People_search_re_5rre.png"
                  alt="No hay aplicaciones"
                />
              </div>
            )}
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default JobMain;
