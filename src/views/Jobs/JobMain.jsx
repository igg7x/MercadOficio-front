import React from "react";
import JobCard from "./components/JobCard";
import HeaderMobile from "@components/HeaderMobile";
import Pagination from "@components/Pagination";
import { useJobs } from "../../hooks/useJobs";
import Loading from "@components/Loading";
import { getJobsByCategories } from "@services/jobs/jobs.services";
import Error from "../../components/Errors/Error";
import { useGetUserOffering } from "../../hooks/useUsers";
import { useAuth0 } from "@auth0/auth0-react";
const JobMain = () => {
  const { user } = useAuth0();
  const {
    data: userOfferingData,
    isError: isErrorUserData,
    isLoading: isLoadingUserData,
  } = useGetUserOffering(user.email);

  const {
    data,
    isError,
    isLoading: isLoadingData,
    isPreviousData,
    nextPage,
    prevPage,
    page,
  } = useJobs(
    getJobsByCategories,
    "jobsByCategories",
    userOfferingData?.categories
  );

  return (
    <>
      <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
        <HeaderMobile />
        <div className="flex flex-col  items-center mx-auto px-4 ">
          <h2 className="text-2xl font-bold  pt-4 mb-6 min-[640px]:text-center  md:text-4xl ">
            Portal de Trabajos
          </h2>
          <h4 className="text-xl  mb-6 md:mb-8 md:text-3xl">
            Aqui podras aplicar a las ofertas de trabajo segun tu categoria
          </h4>
          <div className="container grid grid-cols-1 border-t-2 p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoadingData || isLoadingUserData ? (
              <Loading />
            ) : isError || isErrorUserData ? (
              <Error
                messaje={"Ups ! Ocurrio un error"}
                img={"/src/assets/images/undraw_server_down_s4lk.png"}
              />
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

export default JobMain;
