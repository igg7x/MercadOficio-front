import React from "react";
import { Link } from "react-router-dom";
import {
  LocationIcon,
  InfoIcon,
  TagIcon,
  CalendarIcon,
} from "@assets/icons/Icons";

const JobUserCustomerCard = ({ job }) => {
  return (
    <div className="bg-white rounded-md   shadow-md border border-gray-200">
      <p className="text-black  p-1 bg-gray-200  w-full text-sm flex items-center gap-1 ">
        <TagIcon className="h-4 w-4" />
        {job.category}
      </p>
      <div className="p-2 text-base flex flex-col gap-1">
        <h3 className=" flex  gap-1 font-bold ">
          <InfoIcon className="h-6 w-6" />
          {job.title}
        </h3>
        <p className="text-gray-500 flex gap-1 items-center">
          <LocationIcon className="h-5 w-5" />
          {job.location}
        </p>
        <p className="text-gray-500 flex gap-1 items-center">
          <CalendarIcon className="h-5 w-5" />
          {job.deadline_date}
        </p>
        <Link
          to={`details/${job.jobId}`}
          className="text-blue-500 underline text-center">
          {" "}
          Detalles{" "}
        </Link>
      </div>
    </div>
  );
};

export default JobUserCustomerCard;
