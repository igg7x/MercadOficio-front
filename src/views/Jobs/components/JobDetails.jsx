import React, { useContext } from "react";
import HeaderMobile from "@components/HeaderMobile";
import {
  TagIcon,
  MapPinIcon,
  InfoIcon,
  FilePenIcon,
  FileTextIcon,
  MarkIcon,
} from "@assets/icons/Icons";
import JobApplicationModal from "./JobApplicationModal";
import { useModal } from "@hooks/useModal";
import { useParams } from "react-router-dom";
import { useApplications } from "@hooks/useApplications";
import { JobsContext } from "./JobsProvider";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const JOB_ID = useParams().jobId;

  const { data, isError, isLoading: isLoadingData } = useContext(JobsContext);

  if (isLoadingData) {
    return <Loading />;
  }

  const job = data.content.find((job) => job.jobId === JOB_ID);

  const { show, toogle } = useModal();

  const {
    data: applications,
    isLoading: isLoadingApplications,
    isError: isErrorApplications,
  } = useApplications(JOB_ID);

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
          <div className="flex flex-col gap-1 text-wrap p-3">
            <h2 className="font-semibold flex items-center gap-1">
              <FileTextIcon />
              Descripcion :
            </h2>
            <p className="text-gray-600 text-base  pl-7 max-w-2xl ">
              {job.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <h1 className="text-xl font-bold underline">Aplicaciones :</h1>
          {isLoadingApplications ? (
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
                    <td className="text-center whitespace-nowrap">
                      <button
                        onClick={toogle}
                        className="py-1.5 px-3 text-gray-600 duration-150 hover:bg-green-500 hover:text-white border rounded-lg">
                        Elegir
                      </button>
                    </td>
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
                      Crear nueva publicación de trabajo
                    </h1>
                    <p className="text-gray-500 text-sm ml-8">
                      Llene el formulario a continuación para publicar una nueva
                      oportunidad laboral.
                    </p>
                  </header>
                  {/* <div className="mt-3">
                    <form
                      className="grid gap-6"
                      onSubmit={(e) => handelSubmit(e)}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title" className="text-sm">
                            <FilePenIcon className="inline-block h-5 w-5 mr-2" />
                            Titulo del Trabajo{" "}
                          </Label>
                          <Input
                            id="title"
                            name="title"
                            placeholder="Desarrollador"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-sm">
                            <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                            Ubicacion
                          </Label>
                          <Input
                            id="location"
                            placeholder="Buenos Aires ,Cordoba..."
                            name="location"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="deadline" className="text-sm">
                            <CalendarIcon className="inline-block h-5 w-5 mr-2" />
                            Fecha límite de solicitud
                          </Label>
                          <Input
                            id="deadline"
                            name="deadline-date"
                            type="date"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-sm">
                            <TagIcon className="inline-block h-5 w-5 mr-2" />
                            Categoria
                          </Label>
                          <SelectCategories />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm">
                          <FileTextIcon className="inline-block h-5 w-5 mr-2" />{" "}
                          Descripcion
                        </Label>
                        <Textarea
                          name="description"
                          id="description"
                          placeholder="Estoy buscando un desarrollador de software para un proyecto de 3 meses. Debe tener experiencia en React y Node.js."
                          className="min-h-[75px]  max-h-[200px] min-w-full p-1 border-2 border-gray-400 rounded-md text-sm"
                        />
                      </div>
                      <CardFooter>
                        <button
                          disabled={isLoadingMutation}
                          type="submit"
                          className={`ml-auto  ${
                            isLoadingMutation
                              ? "opacity-30"
                              : "hover:bg-blue-600"
                          }   p-2 text-white bg-blue-500 rounded-md `}>
                          {isLoadingMutation ? "Publicando ..." : "Publicar"}
                        </button>
                      </CardFooter>
                    </form>
                  </div> */}
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

{
  /* <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        item.status == "Active"
                          ? "text-green-600 bg-green-50"
                          : "text-blue-600 bg-blue-50"
                      }`}>
                      {item.status}
                    </span>
                  </td> */
}
