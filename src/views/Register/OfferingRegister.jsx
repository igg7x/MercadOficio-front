import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { getCategories } from "@services/categories/categories.services";
import {
  ClipboardIcon,
  InfoIcon,
  MapPinIcon,
  DollarSignIcon,
  TagIcon,
  CheckIcon,
} from "@assets/icons/Icons";

export async function loader() {
  const categories = await getCategories();
  return { categories };
}

export async function action({ request }) {
  const formData = await request.formData();
  const userOfferingData = Object.fromEntries(formData);
  return redirect("/home");
}

const OfferingRegister = () => {
  const { categories } = useLoaderData();
  return (
    <div className="mx-auto max-w-2xl  space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          <ClipboardIcon className="mr-2 inline-block h-6 w-6" />
          Registra Tu Servicio{" "}
        </h1>
        <p className="text-muted-foreground">
          <InfoIcon className="mr-2 inline-block h-6 w-6" />
          Ingresa los datos de tu servicio para comenzar a ofrecerlo
        </p>
      </div>
      <Form method="post" className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="location">
              <MapPinIcon className="mr-2 inline-block h-5 w-5" />
              Ubicacion{" "}
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="Ingrese su ubicacion"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">
              <DollarSignIcon className="mr-2 inline-block h-5 w-5" />
              Precio por hora
            </Label>
            <Input
              name="price"
              id="price"
              type="number"
              placeholder="Enter your price"
              required
              min="0"
            />
          </div>
        </div>
        <div className="space-y-2 space-x-3">
          <label htmlFor="categories">
            <TagIcon className="mr-2 inline-block h-5 w-5" />
            Categorias
          </label>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Label key={category.name} className="flex items-center gap-2">
                  <Checkbox value={category.name} name="categories" />
                  {category.name}
                </Label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className=" space-x-6 border p-1 border-gray-300  rounded-lg">
            <Label htmlFor="start-time">Hora Inicio :</Label>
            <input
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
              id="end-time"
              className="outline-none"
              type="time"
              name="end-time"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full  hover:bg-blue-500  hover:border-gray-500  hover:text-white border border-gray-300 p-2 rounded-lg">
          <CheckIcon className="mr-2 inline-block h-5 w-5" />
          Registrarme
        </button>
      </Form>
    </div>
  );
};

export default OfferingRegister;

function Checkbox({ value }) {
  return <input type="checkbox" id={value} name={value} value={value} />;
}

export function Label({ children, ...props }) {
  return <label {...props}>{children}</label>;
}

export function Input({ id, ...props }) {
  return (
    <input
      className="outline-none  border  border-spacing-2 p-2 border-gray-400 rounded-lg w-full"
      id={id}
      {...props}
    />
  );
}
