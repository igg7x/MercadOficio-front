import React from "react";
import Button from "../../../components/Button";
import UserIcon from "../../../assets/icons/UserIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
const JobCard = ({ position, userOffering, location }) => {
  return (
    <div className="p-4 space-y-2 border-2 rounded-md border-gray-300 ">
      <h3 className="text-lg font-semibold">{position}</h3>
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <UserIcon className="h-4 w-4" />
        <span>{userOffering}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <LocationIcon className="h-4 w-4" />
        <span>{location}</span>
      </div>
      <Button text={"Aplicar"} />
    </div>
  );
};

export default JobCard;
