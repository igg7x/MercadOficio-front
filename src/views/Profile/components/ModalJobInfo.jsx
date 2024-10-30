import React from "react";
import Modal from "../../../components/Modal";
import {
  InfoIcon,
  LocationIcon,
  MarkIcon,
  FilePenIcon,
  MailIcon,
  StatusIcon,
  CalendarIcon,
} from "@assets/icons/Icons";
import { Link } from "react-router-dom";

const ModalJobInfo = ({ job, show, toogle }) => {
  return (
    <Modal show={show}>
      <div className="flex flex-col gap-2 border border-gray-300 p-2 relative bg-slate-50 rounded-md">
        <div className="absolute top-2 right-2" onClick={toogle}>
          <MarkIcon />
        </div>
        <div className="mt-3 space-y-2 w-full">
          <h1 className="underline text-lg text-center">
            Informacion del empleo
          </h1>
          <div>
            <h2 className="text-base flex items-center gap-0.5">
              <InfoIcon className="w-5" />
              Titulo :
            </h2>
            <h3 className="text-sm px-6 font-semibold truncate">{job.title}</h3>
          </div>
          <div className="flex gap-1">
            <h2 className="text-base flex items-center gap-0.5">
              <StatusIcon />
              Estado :
            </h2>
            <p
              className={`text-sm rounded-lg p-1  ${
                job.status ? "bg-red-400" : "bg-green-500"
              }`}>
              {job.status ? "Cerrado" : "Abierto"}
            </p>
          </div>
          <div>
            <h2 className="text-base flex items-center gap-0.5">
              <LocationIcon className="w-2" />
              Ubicacion :
            </h2>
            <h3 className="text-sm px-6 font-semibold truncate">
              {job.location}
            </h3>
          </div>
          <div className="flex-col flex gap-1">
            <p className=" text-base flex items-center gap-1">
              <FilePenIcon className="w-5" />
              Descripcion:
            </p>
            <span className="text-gray-600 p-1 px-6 text-sm ">
              {job.description}
            </span>
          </div>
          <div className=" flex-col gap-2   space-y-2 items-center justify-center py-2">
            <div>
              <h2 className="text-base flex items-center gap-0.5">
                <CalendarIcon className="w-5" />
                Fechas :
              </h2>
            </div>
            <p className="text-sm flex px-6 gap-2  ">
              Publicacion :
              <span className="text-gray-600">{job.publish_date}</span>
            </p>
            <p className="text-sm flex  px-6 gap-2 ">
              Expiracion :
              <span className="text-gray-600">{job.deadline_date}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p>Creado por :</p>
          <div className="flex px-1 hover:underline hover:text-blue-500 items-center gap-1">
            <MailIcon className="h-4 w-4" />
            <Link to={`/home/profile/${job.userCustomerEmail}`}>
              <span className="">{job.userCustomerEmail}</span>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalJobInfo;
