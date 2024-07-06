import React from "react";
import JobApplicationModal from "./JobApplicationModal";
import { useModal } from "@hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import { createJob } from "@services/jobs";
import MarkIcon from "@assets/icons/MarkIcon";
import {
  Label,
  Input,
  TagIcon,
  MapPinIcon,
  InfoIcon,
} from "../../Register/OfferingRegister";
import { useCategories } from "@hooks/useCategories";

const SelectCategories = () => {
  const { categories, isLoading, isError } = useCategories();
  return (
    <div className="relative w-80 max-w-full mx-auto  ">
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
      <select
        name="category"
        className="w-full px-3 py-2.5 text-sm    border-gray-400 bg-white border rounded-lg shadow-sm outline-none appearance-none ">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
const { mutate } = useMutation({
  mutationFn: createJob,
});

const handelSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
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
        <div className="w-full relative bg-white p-4 rounded-md  max-w-2xl">
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
          <div className="mt-3">
            <form className="grid gap-6" onSubmit={(e) => handelSubmit(e)}>
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
                  <Input id="deadline" name="deadline-date" type="date" />
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
                  className="min-h-[150px] min-w-full p-2 border-2 border-gray-400 rounded-md text-sm"
                />
              </div>
            </form>
          </div>
          <CardFooter>
            <button
              type="submit"
              className="ml-auto p-2 text-white bg-blue-500 rounded-md ">
              Publicar
            </button>
          </CardFooter>
        </div>
      </JobApplicationModal>
    </div>
  );
};

export default CreateNewJob;

function Textarea({ children, ...props }) {
  return <textarea {...props}>{children}</textarea>;
}

function CardFooter({ children }) {
  return <footer className="flex items-center gap-4">{children}</footer>;
}

export function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

export function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
