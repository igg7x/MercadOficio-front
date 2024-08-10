import React from "react";
import Error from "../../components/Errors/Error";
import HeaderMobile from "@components/HeaderMobile";
import Pagination from "@components/Pagination";
import CreateNewJob from "./components/CreateNewJob";
import JobUserCustomerCard from "./components/JobUserCustomerCard";
import Loading from "../../components/Loading";
import { useJobs } from "@hooks/useJobs";
import { getJobsByUserCustomer } from "@services/jobs/jobs.services";
const PostJobsMain = () => {
  const {
    data,
    isError,
    isLoading: isLoadingData,
    isPreviousData,
    nextPage,
    prevPage,
    page,
  } = useJobs(
    getJobsByUserCustomer,
    "jobsByUserCustomer",
    "Esmeralda47@hotmail.com"
  );

  return (
    <section className="[grid-area:main] flex-col flex items-center overflow-y-auto">
      <HeaderMobile />
      <div className="flex flex-col mx-auto px-4 items-center">
        <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
          Portal de Trabajos
        </h2>
        <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
          Aqui podras publicar tus ofertas de trabajos
        </h4>
        <div className="container grid grid-cols-1 border-t-2 p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {!isLoadingData && (
            <CreateNewJob userCustomerEmail={"Esmeralda47@hotmail.com"} />
          )}
          {isLoadingData ? (
            <Loading />
          ) : isError ? (
            <Error
              messaje={"Ups ! Ocurrio un error"}
              img={"/src/assets/images/undraw_server_down_s4lk.png"}
            />
          ) : data.content.length !== 0 ? (
            data?.content.map((job) => <JobUserCustomerCard job={job} />)
          ) : (
            <Error
              messaje={"Aun no has publicado ninguna oferta de trabajo"}
              img={"/src/assets/images/undraw_People_search_re_5rre.png"}
            />
          )}
        </div>
      </div>
      <Pagination
        isDataExists={isLoadingData || isError}
        isPreviousData={isPreviousData}
        isDataLast={data?.last}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};

export default PostJobsMain;
