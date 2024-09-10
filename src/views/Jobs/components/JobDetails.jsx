import React, { useContext, useState } from "react";
import HeaderMobile from "@components/HeaderMobile";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";
import JobApplicationModal from "./JobApplicationModal";
import { useModal } from "@hooks/useModal";
import { useApplications } from "@hooks/useApplications";
import { useParams } from "react-router-dom";
import { CardFooter } from "./CreateNewJob";
import {
  TagIcon,
  MapPinIcon,
  InfoIcon,
  FilePenIcon,
  FileTextIcon,
  MarkIcon,
  StatusIcon,
  CalendarIcon,
} from "@assets/icons/Icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useJobsByID } from "@hooks/useJobs";
import { updateJob } from "@services/jobs/jobs.services";
const JobDetails = () => {
  const JOB_ID = useParams().jobId;

  const { data: job, isError, isLoading: isLoadingData } = useJobsByID(JOB_ID);
  const {
    data: applications,
    isLoading: isLoadingApplications,
    isError: isErrorApplications,
  } = useApplications(JOB_ID);
  const [selectedApplicant, setSelectedApplicant] = useState("");
  const { show, toogle } = useModal();

  const queryClient = useQueryClient();
  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: updateJob,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["jobsByID"],
      });
      toogle();
    },
  });

  const handleSelectApplicant = (email) => {
    if (isLoadingApplications) return;
    setSelectedApplicant(email);
    toogle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoadingApplications) return;
    mutate({ userOfferingEmail: selectedApplicant, JOB_ID });
  };

  if (isLoadingData) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <section className="[grid-area:main] overflow-y-auto">
      <HeaderMobile />
      <div className="flex gap-8 min-h-fit max-w-4xl flex-col items-center mx-2  p-4 md:px-8 md:py-6">
        <div className="w-full">
          <h1 className="text-2xl underline max-[640px]:text-xl w-full flex items-center gap-1 font-bold">
            <InfoIcon />
            Detalles del Trabajo :{" "}
          </h1>
          <div className="p-3  text-lg  max-[640px]:text-base flex  sm:items-center flex-wrap max-[640px]:gap-3   md:gap-8">
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <FilePenIcon />
                Titulo del Trabajo:
              </h2>
              <p className="text-gray-600 pl-7">{job.title}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <MapPinIcon />
                Ubicacion:
              </h2>
              <p className="text-gray-600 pl-7">{job.location}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <TagIcon />
                Categoria:
              </h2>
              <p className="text-gray-600 pl-7">{job.category}</p>
            </div>
          </div>
          <div className="flex p-3 text-lg max-[640px]:text-base items-center max-[640px]:gap-3 flex-wrap sm:items-center  md:gap-8">
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <StatusIcon />
                Estado:
              </h2>
              <p
                className={`text-gray-600  rounded-md ${
                  job.status ? "bg-gray-300" : " text-white bg-green-500"
                } text-center ml-7 p-1`}>
                {job.status ? "Cerrado" : "Abierto"}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-wrap p-3">
              <h2 className="font-semibold flex  gap-1">
                <CalendarIcon />
                Fecha de publicacion :
              </h2>
              <p className="text-gray-600 text-base  pl-7 max-w-2xl ">
                {job.publish_date}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-wrap p-3">
              <h2 className="font-semibold flex  gap-1">
                <FileTextIcon />
                Descripcion :
              </h2>
              <p className="text-gray-600 text-base  pl-7 max-w-2xl ">
                {job.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <h1 className="text-xl font-bold underline">Aplicaciones : </h1>
          {isErrorApplications || isLoadingApplications ? (
            <Loading />
          ) : applications?.content?.length !== 0 ? (
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-black font-bold border-b">
                <tr>
                  <th className="py-3 pr-6 ">Email</th>
                  <th className="py-3 pr-6 ">Fecha de Aplicacion</th>
                  <th className="py-3 pr-6 "></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {applications.content.map((application) => (
                  <tr key={application.userOfferingEmail}>
                    <Link
                      to={`/home/profile/${application.userOfferingEmail}`}
                      className="hover:underline  hover:text-blue-500">
                      <td className="pr-6 py-4 whitespace-nowrap">
                        {application.userOfferingEmail}
                      </td>
                    </Link>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {application.applyDate}
                    </td>
                    {!job.status && (
                      <td className="text-center whitespace-nowrap">
                        <button
                          disabled={isLoadingMutation}
                          onClick={() =>
                            handleSelectApplicant(application.userOfferingEmail)
                          }
                          className="py-1.5 px-3 text-gray-600 duration-150 hover:bg-green-500 hover:text-white border rounded-lg">
                          Elegir
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              <JobApplicationModal show={show}>
                <div className="w-full relative bg-white p-2 rounded-md m-1  max-h-[575px] max-w-2xl">
                  <div className="absolute top-2 right-2" onClick={toogle}>
                    <MarkIcon />
                  </div>
                  <header>
                    <h1>
                      <InfoIcon className="inline-block h-6 w-6 mr-2" />
                      Elegir Aplicante para el Trabajo :
                    </h1>
                    <p className="text-gray-500 text-sm ml-8">
                      Esta acción no se puede deshacer. ¿Estás seguro de que
                      quieres elegir a este aplicante?
                    </p>
                    <p className="text-gray-500 text-sm ml-8">
                      Este trabajo pasara al estado de{" "}
                      <span className="font-bold underline text-black">
                        cerrado
                      </span>{" "}
                    </p>
                  </header>
                  <div className="mt-3">
                    <form
                      className="grid gap-6"
                      onSubmit={(e) => handleSubmit(e)}>
                      <CardFooter>
                        <button
                          type="submit"
                          className={`mx-auto  ${
                            isLoadingApplications
                              ? "opacity-30"
                              : "hover:bg-blue-600"
                          }   p-2 text-white bg-blue-500 rounded-md `}>
                          {isLoadingApplications ? "Publicando ..." : "Elegir"}
                        </button>
                        <button
                          onClick={toogle}
                          className="mx-auto duration-150 hover:border-gray-600 border-2 p-2 bg-red-500 rounded-md text-white ">
                          Cancelar
                        </button>
                      </CardFooter>
                    </form>
                  </div>
                </div>
              </JobApplicationModal>
            </table>
          ) : (
            <div className="w-full flex p-3  items-center  justify-center flex-col gap-1">
              <p className=" text-3xl max-[640px]:text-2xl ">
                No hay aplicaciones
              </p>
              <img
                draggable="false"
                className="h-96 w-96 max-[640px]:h-72 max-[640px]:w-72"
                src="/src/assets/images/undraw_People_search_re_5rre.png"
                alt="No hay aplicaciones"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
