import React from "react";
import { Label, Input } from "../../Register/OfferingRegister";
import {
  LocationIcon,
  FileTextIcon,
  InfoIcon,
  TagIcon,
  CalendarIcon,
  DollarSignIcon,
} from "@assets/icons/Icons";
import { useUserDataContext } from "./ProfileContext";
const Info = () => {
  const userData = useUserDataContext();
  return (
    <section className="w-full max-w-4xl mx-auto py-5 md:py-7">
      <div className="px-4 md:px-0">
        <div className="mb-8 flex items-center gap-2">
          <InfoIcon className="mr-2 inline-block h-9 w-9" />
          <div className="flex flex-col">
            <h2 className="text-3xl  gap-2 ">Informacion Personal</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Aqui puedes actualizar tu perfil
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <div>
              <Label
                className="block  font-medium text-gray-700 "
                htmlFor="image">
                Foto de perfil
              </Label>
              <div className="mt-1">
                <div className="flex items-center">
                  <img
                    src=" 
        https://randomuser.me/api/portraits/women/79.jpg
        "
                    alt="profile image"
                    className="rounded-full  w-20 h-20 border-2 border-white
          max-[640px]:w-20 max-[640px]:h-20  max-[640px]:border-0        "
                  />
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    className="ml-5 bg-indigo-500 hover:bg-indigo-600    rounded-md px-3 py-2 text-sm font-medium text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <Label
                className="gap-2 items-center text-lg font-medium flex text-gray-700 "
                htmlFor="name">
                <LocationIcon />
                Ubicacion
              </Label>
              <div className="mt-1">
                <Input
                  className="block w-full rounded-md  p-2 outline-none  max-w-[280px] border-gray-100 border-2  shadow-sm  sm:text-sm"
                  defaultValue="San Nicolas"
                  id="location"
                  name="location"
                  type="text"
                />
              </div>
            </div>
          </form>
          <div>
            <Label
              className="flex gap-1  items-center font-medium text-gray-700 "
              htmlFor="bio">
              <FileTextIcon />
              Biografia
            </Label>
            <div className="mt-1">
              <textarea
                className="block w-full outline-none rounded-md  border-gray-100 border-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={userData.biography}
                id="bio"
                name="bio"
                rows={3}
                maxLength={128}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-3 flex-col  w-full justify-center gap-6">
          <div>
            <Label className="flex gap-1  items-center font-medium  dark:text-gray-700">
              <TagIcon />
              Categorias
            </Label>
            <div></div>
          </div>
          <div className="flex-col flex gap-2">
            <Label className="flex gap-1  items-center font-medium  dark:text-gray-700">
              <CalendarIcon />
              Horarios de trabajo
            </Label>
            <div className="grid grid-cols-2 gap-6">
              <div className=" space-x-6 border p-1 border-gray-300  rounded-lg">
                <Label htmlFor="start-time">Hora Inicio :</Label>
                <input
                  defaultValue={"09:00"}
                  id="start-time"
                  className="outline-none"
                  type="time"
                  name="start-time"
                  required
                />
              </div>
              <div className="space-x-6 border p-1 border-gray-300  rounded-lg">
                <Label htmlFor="end-time">Hora Finalizacion :</Label>
                <input
                  defaultValue={"18:00"}
                  id="end-time"
                  className="outline-none"
                  type="time"
                  name="end-time"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <Label className="flex gap-1  items-center font-medium  dark:text-gray-700">
              <DollarSignIcon />
              Precio / hora
            </Label>
            <div className="mt-1 ">
              <input
                defaultValue={"20"}
                className="block w-full p-2 max-w-[280px] rounded-md outline-none border-gray-100 border-2 shadow-sm   sm:text-sm"
                id="price"
                name="price"
                type="number"
                min={0}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="submit">
            Guardar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
