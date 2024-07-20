import React from "react";
import JobApplicationModal from "./JobApplicationModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@hooks/useModal";
import { useCategories } from "@hooks/useCategories";
import { createJob } from "@services/jobs/jobs.services";
import { Label, Input } from "../../Register/OfferingRegister";
import {
  TagIcon,
  MapPinIcon,
  InfoIcon,
  MarkIcon,
  FilePenIcon,
  CalendarIcon,
  FileTextIcon,
} from "@assets/icons/Icons";

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
          <option key={category.name} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const CreateNewJob = ({ userCustomerEmail }) => {
  const { show, toogle } = useModal();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: createJob,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["jobsByUserCustomer"],
      });
      toogle();
    },
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if (isLoadingMutation) return;
    const data = new FormData(e.target);
    const title = data.get("title");
    const location = data.get("location");
    const deadline_date = data.get("deadline-date");
    const description = data.get("description");
    const category = data.get("category");
    mutate({
      userCustomerEmail,
      title,
      location,
      deadline_date,
      description,
      category,
    });
  };

  return (
    <div className="bg-slate-100 hover:bg-gray-300  rounded-md max-h-44 shadow-md  border-dashed border-gray-600 border-spacing-2 border-2 ">
      <div
        onClick={toogle}
        className="flex  items-center justify-center h-full">
        Añadir Nuevo Trabajo
      </div>
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
                  className="min-h-[75px]  max-h-[200px] min-w-full p-1 border-2 border-gray-400 rounded-md text-sm"
                />
              </div>
              <CardFooter>
                <button
                  disabled={isLoadingMutation}
                  type="submit"
                  className={`ml-auto  ${
                    isLoadingMutation ? "opacity-30" : "hover:bg-blue-600"
                  }   p-2 text-white bg-blue-500 rounded-md `}>
                  {isLoadingMutation ? "Publicando ..." : "Publicar"}
                </button>
              </CardFooter>
            </form>
          </div>
        </div>
      </JobApplicationModal>
    </div>
  );
};

export default CreateNewJob;

export function Textarea({ children, ...props }) {
  return <textarea {...props}>{children}</textarea>;
}

export function CardFooter({ children }) {
  return <footer className="flex items-center gap-4">{children}</footer>;
}
