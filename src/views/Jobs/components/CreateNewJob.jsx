import React from "react";
import JobApplicationModal from "./JobApplicationModal";
import { useModal } from "@hooks/useModal";
import MarkIcon from "@assets/icons/MarkIcon";

const SelectCategories = () => {
  return (
    <div className="relative w-72 max-w-full mx-auto ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <option>Project manager</option>
        <option>Software engineer</option>
        <option>IT manager</option>
        <option>UI / UX designer</option>
      </select>
    </div>
  );
};

const CreateNewJob = () => {
  const { show, toogle } = useModal();
  return (
    <div className="bg-slate-100 hover:bg-gray-300 rounded-md border-dashed border-gray-600 border-spacing-2 border-2 w-52  h-72">
      <div
        onClick={toogle}
        className="flex  items-center justify-center h-full">
        Añadir Nuevo Trabajo
      </div>
      <JobApplicationModal show={show}>
        <div className="bg-white relative p-4 rounded-md">
          <div className="absolute top-2 right-2" onClick={toogle}>
            <MarkIcon />
          </div>
          <h2 className="text-lg font-semibold">Crear nuevo trabajo</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre del trabajo"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Ubicación"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <SelectCategories />
            <input
              type="date"
              placeholder="Fecha de inicio"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <input
              type="date"
              placeholder="Fecha de cierre"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Descripción"
              className="p-2 border-2 border-gray-300 rounded-md"></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md">
              Crear trabajo
            </button>
          </form>
        </div>
      </JobApplicationModal>
    </div>
  );
};

export default CreateNewJob;
