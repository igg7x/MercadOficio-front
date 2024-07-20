import React, { useContext } from "react";
import HeaderMobile from "@components/HeaderMobile";
import Pagination from "@components/Pagination";
import CreateNewJob from "./components/CreateNewJob";
import JobUserCustomerCard from "./components/JobUserCustomerCard";
import Loading from "../../components/Loading";
import { useJobsByUserCustomer } from "@hooks/useJobs";
const PostJobsMain = () => {
  const {
    data,
    isError,
    isLoading: isLoadingData,
  } = useJobsByUserCustomer("Esmeralda47@hotmail.com");
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
        <ul className="container grid grid-cols-1 border-t-2 p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <CreateNewJob userCustomerEmail={"Esmeralda47@hotmail.com"} />
          {isLoadingData && <Loading />}
          {isError && <p>Error al cargar los datos</p>}
          {data?.content.map((job) => (
            <li key={job.jobId}>
              <JobUserCustomerCard job={job} />
            </li>
          ))}
        </ul>
      </div>
      <Pagination />
    </section>
  );
};

export default PostJobsMain;
