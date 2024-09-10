import React from "react";
import Pagination from "../../../components/Pagination";
import JobUserCustomerCard from "./JobUserCustomerCard";
import Loading from "../../../components/Loading";
import Error from "../../../components/Errors/Error";
import { useJobs } from "../../../hooks/useJobs";
import { getHistorialJobsByUserCustomer } from "../../../services/jobs/jobs.services";
import { useAuth0 } from "@auth0/auth0-react";

const JobsHistorialUserCustomer = () => {
  const { user } = useAuth0();
  const {
    data,
    isError,
    isLoading: isLoadingData,
    isPreviousData,
    nextPage,
    prevPage,
    page,
  } = useJobs(
    getHistorialJobsByUserCustomer,
    "jobsHistorialByUserCustomer",
    user?.email
  );
  return (
    <>
      <div className="container grid grid-cols-1  p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
      <Pagination
        isDataExists={isLoadingData || isError}
        isPreviousData={isPreviousData}
        isDataLast={data?.last}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default JobsHistorialUserCustomer;
