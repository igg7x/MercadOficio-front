import React from "react";
import Error from "../../../components/Errors/Error";
import Loading from "@components/Loading";
import Pagination from "@components/Pagination";
import JobApplyCard from "./JobApplyCard";
import { useHistorialJobsByUserOffering } from "../../../hooks/useJobs";
const JobsHistorialUserOffering = () => {
  const {
    data,
    isError,
    isLoading: isLoadingData,
    isPreviousData,
    nextPage,
    prevPage,
    page,
  } = useHistorialJobsByUserOffering();
  return (
    <>
      <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
        <div className="flex flex-col  items-center mx-auto px-4 ">
          <div className="container grid grid-cols-1  p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoadingData ? (
              <Loading />
            ) : isError ? (
              <Error
                messaje={"Ups ! Ocurrio un error"}
                img={"/src/assets/images/undraw_server_down_s4lk.png"}
              />
            ) : data.content.length !== 0 ? (
              data?.content.map((job) => (
                <JobApplyCard key={job.jobId} job={job} />
              ))
            ) : (
              <Error
                messaje={"No se encontraron trabajos disponibles"}
                img={"/src/assets/images/undraw_People_search_re_5rre.png"}
              />
            )}
          </div>
        </div>
        <Pagination
          isDataExists={isLoadingData || isError}
          page={page}
          isPreviousData={isPreviousData}
          nextPage={nextPage}
          prevPage={prevPage}
          isDataLast={data?.last}
        />
      </section>
    </>
  );
};

export default JobsHistorialUserOffering;
