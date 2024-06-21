import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@components/Button";
import { BriefcaseIcon } from "@assets/icons/BriefIcaseIcon";
const SubRegisterMain = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[90.8dvh] bg-gray-100  px-4 md:px-6">
        <div className="max-w-3xl w-full space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Quiero crear una cuenta como ...
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
              Elige el tipo de cuenta que deseas crear y comienza a disfrutar de
              los beneficios de nuestra plataforma.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="#"
              className="bg-white rounded-lg p-6 flex flex-col items-start gap-3 hover:shadow-lg transition-shadow"
              prefetch={false}>
              <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h2 className="text-2xl font-semibold">Cliente</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Sign up to access our services as a customer.
              </p>
              <Link
                variant="outline"
                className="mt-auto  rounded-md text-gray-600 text-base border border-gray-500 py-1 px-2 hover:bg-gray-200 hover:border-gray-200 ">
                Registro como Cliente
              </Link>
            </Link>
            <Link
              to={"/subregister/provider"}
              className="bg-white rounded-lg p-6 flex flex-col items-start gap-3 hover:shadow-lg transition-shadow"
              prefetch={false}>
              <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h2 className="text-2xl font-semibold">
                {" "}
                Proveedor de Servicios
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Registrate para ofrecer tus servicios a nuestros clientes.
              </p>
              <Link
                to={"/subregister/provider"}
                variant="outline"
                className="mt-auto text-gray-600 rounded-md  text-base border border-gray-500 py-1 px-2 hover:bg-gray-200 hover:border-gray-200 ">
                Registro como Proveedor
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubRegisterMain;

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
