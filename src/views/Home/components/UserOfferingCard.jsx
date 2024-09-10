import React from "react";
import { UserIcon, MapPinIcon, BriefcaseIcon } from "@assets/icons/Icons";
import { Link } from "react-router-dom";

const UserOfferingCard = ({ user }) => {
  const sendEmailToUser = () => {
    const email = user.email;
    const subject = "Asunto ,Contacto desde MercadOficio";
    const body = "Hola, escribe tu mensaje aquí.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <li
      key={user.email}
      className="list-none border border-gray-300 bg-white rounded-md shadow-sm">
      <div className="flex flex-col gap-1">
        <h4 className=" flex items-center w-full bg-gray-200 p-1  rounded-t-md gap-2 text-gray-600">
          <BriefcaseIcon className="h-4 w-4" />
          {user.categories.map((category) => (
            <span key={category.name} className="text-sm">
              {category.name},
            </span>
          ))}
        </h4>
        <div className="justify-between gap-1 px-3 py-2 flex">
          <img src={user.picture} className="w-12 h-12 rounded-full" />
          <div className="flex-1 ml-2">
            <h3 className="text-xl font-medium text-cyan-600">
              {user.name} {user.surname}
            </h3>
            <p className="text-gray-500  pr-2">{user.email}</p>
          </div>
          <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2"></div>
        </div>
        <div className="items-center px-3 py-1 gap-3 max-[640px]:items-start  text-sm flex  sm:space-x-4 sm:space-y-0">
          <span className="flex gap-1 items-center text-gray-500">
            <MapPinIcon className="w-6 h-6 text-gray-400" />
            {user.location}
          </span>
          <button
            onClick={sendEmailToUser}
            className="px-3  flex items-center gap-1 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
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
