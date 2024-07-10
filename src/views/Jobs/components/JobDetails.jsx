import React from "react";
import HeaderMobile from "@components/HeaderMobile";
import {
  TagIcon,
  MapPinIcon,
  InfoIcon,
  FilePenIcon,
  FileTextIcon,
} from "@assets/icons/Icons";

import { useParams } from "react-router-dom";
import { useApplications } from "@hooks/useApplications";
import { useQuery } from "@tanstack/react-query";
const JobDetails = () => {
  const JOB_ID = useParams().jobId;
  const {
    data: applications,
    isLoading: isLoadingApplications,
    isError: isErrorApplications,
  } = useApplications(JOB_ID);
  const { data, isLoading, isError } = useQuery({
    ["obsByUserCustomer"],
    "Esmeralda47@hotmail.com"
  }
  );

  console.log(data);
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
              <p className="text-gray-600 pl-7">Software Developer</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <MapPinIcon />
                Ubicacion:
              </h2>
              <p className="text-gray-600 pl-7">San Nicolas De los Arroyos</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className=" flex items-center gap-1 font-semibold">
                <TagIcon />
                Categoria:
              </h2>
              <p className="text-gray-600 pl-7">Construccion y diseño</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-wrap p-3">
            <h2 className="font-semibold flex items-center gap-1">
              <FileTextIcon />
              Descripcion :
            </h2>
            <p className="text-gray-600 text-base  pl-7 max-w-2xl ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              ullam, nostrum perferendis et libero quam, voluptate possimus
              molestiae hic repudiandae dolores unde facere quibusdam, ea porro
              cumque quia. Voluptas, saepe? Cum obcaecati hic quas vitae
              adipisci veritatis laborum soluta minus amet excepturi animi odio
              voluptatem corporis, nulla quaerat eum temporibus modi nostrum.
              Impedit ipsa sequi molestiae numquam architecto nihil pariatur.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <h1 className="text-xl font-bold underline">Aplicaciones :</h1>
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6">Nombre</th>
                <th className="py-3 pr-6">Email</th>
                <th className="py-3 pr-6">Fecha de Aplicacion</th>
                <th className="py-3 pr-6">Estado</th>
                <th className="py-3 pr-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {/* {tableItems.map((item, idx) => (
            <tr key={idx}>
              <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="pr-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.status == "Active"
                      ? "text-green-600 bg-green-50"
                      : "text-blue-600 bg-blue-50"
                  }`}>
                  {item.status}
                </span>
              </td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="text-right whitespace-nowrap">
                <a
                  href="javascript:void()"
                  className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                  Manage
                </a>
              </td>
            </tr>
          ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
