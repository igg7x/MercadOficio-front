import React from "react";
import {
  UserIcon,
  MapPinIcon,
  DollarSignIcon,
  CalendarIcon,
} from "@assets/icons/Icons";
import { Link } from "react-router-dom";

const UserOfferingCard = ({ user }) => {
  return (
    <li key={user.email} className="p-5 bg-white rounded-md shadow-sm">
      <div>
        <div className="justify-between gap-1  sm:flex">
          <img
            src="https://randomuser.me/api/portraits/women/80.jpg"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1 ml-2">
            <h3 className="text-xl font-medium text-cyan-600">
              {user.name} {user.surname}
            </h3>
            <p className="text-gray-500 mt-2 pr-2">{user.email}</p>
          </div>
          <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
            <span className="flex items-center text-gray-500">
              <CalendarIcon className="w-6 h-6 text-gray-400" />
              {user.workDayStart.substring(0, 5)} -{" "}
              {user.workDayEnd.substring(0, 5)}
            </span>
            <span className="flex items-center justify-center bg-slate-200 rounded-full p-1 max-w-[100px] text-gray-500">
              <DollarSignIcon />
              {`${user.price}/hr`}
            </span>
          </div>
        </div>
        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex gap-1 items-center text-gray-500">
            <MapPinIcon className="w-6 h-6 text-gray-400" />
            {user.location}
          </span>
          <button className="px-3  flex items-center gap-1 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
            <svg
              className="w-6 h-6 text-gray-400   inset-y-0 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Mensaje{" "}
          </button>
          <Link
            to={`/home/profile/${user.email}`}
            className="px-3  flex items-center gap-1 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
            <UserIcon className="w-5 h-5 text-gray-400" />
            Perfil{" "}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default UserOfferingCard;
