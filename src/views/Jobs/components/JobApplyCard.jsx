import React from "react";
import { LocationIcon, BriefcaseIcon } from "@assets/icons/Icons";
import { useModal } from "@hooks/useModal";

import ModalJobInfo from "../../Profile/components/ModalJobInfo";

const JobApplyCard = ({ job }) => {
  const { show, toogle } = useModal();
  return (
    <div className="border-2 max-h-96  rounded-md border-gray-300 ">
      <h4 className=" flex gap-2 w-full p-1 items-center justify-center bg-slate-200 text-gray-500">
        <BriefcaseIcon className="h-4 w-4" />
        <span className="text-sm">{job.category}</span>
      </h4>
      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{job.title}</h3>
        <div className="flex items-center py-1  space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <LocationIcon className="h-4 w-4" />
          <span className="truncate">{job.location}</span>
        </div>
        <div className=" flex-col gap-2   space-y-2 items-center justify-center py-2">
          <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
            Abrio :<span>{job.publish_date}</span>
          </p>
          <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
            Cierre : <span>{job.deadline_date}</span>
          </p>
          <p
            className={`p-1  text-center text-base  rounded-xl ${
              job.status ? "bg-red-400" : "bg-green-300"
            }`}>
            {job.status ? "Cerrado" : "Abierto"}
          </p>
        </div>
        <div className="flex justify-center  items-center ">
          <button
            onClick={toogle}
            className=" underline text-blue-500 rounded-md  w-full">
            Detalles
          </button>
        </div>
      </div>
      <ModalJobInfo job={job} show={show} toogle={toogle} />
    </div>
  );
};

export default JobApplyCard;
