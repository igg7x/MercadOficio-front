import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { getCategories } from "@services/categories";
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
              placeholder="Enter your location"
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
          Register
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

export function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

export function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function TagIcon(props) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
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
