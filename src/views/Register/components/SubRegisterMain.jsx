import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseIcon, UserIcon } from "@assets/icons/Icons";
import { useAuth0 } from "@auth0/auth0-react";
import { useCreateUserCustomer } from "../../../hooks/useCreateUser";
const SubRegisterMain = () => {
  const { user } = useAuth0();
  const { handleRegister, isLoading, isSuccess } = useCreateUserCustomer();

  const handleUserCustomerRegister = () => {
    if (isLoading) return;
    handleRegister(
      {
        email: user.email,
        name: user.given_name,
        surname: user.family_name,
        picture: user.picture,
        roles: ["USER_CUSTOMER"],
      },
      user.email
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center  md:min-h-[90.8vh]  min-h-screen  py-2 px-4 md:px-6">
        <div className="max-w-3xl w-full space-y-6">
          <div className="text-center min-[640px]:space-y-2   ">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Quiero crear una cuenta como ...
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
              Elige el tipo de cuenta que deseas crear y comienza a disfrutar de
              los beneficios de nuestra plataforma.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article
              onClick={handleUserCustomerRegister}
              className="bg-white rounded-lg p-6 flex flex-col  border-gray-300 border items-start gap-3 hover:shadow-lg transition-shadow">
              <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h2 className="text-2xl font-semibold">Cliente</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Registrate como usuario cliente para disfrutar de nuestros
                servicios.
              </p>
              <div
                variant="outline"
                className="mt-auto  rounded-md text-gray-600 text-base border border-gray-500 py-1 px-2 hover:bg-gray-200 hover:border-gray-200 ">
                Registro como Cliente
              </div>
            </article>
            <Link
              to={"/subregister/offering"}
              className="bg-white rounded-lg p-6 flex  border-gray-300 border flex-col items-start gap-3 hover:shadow-lg transition-shadow">
              <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h2 className="text-2xl font-semibold">
                {" "}
                Proveedor de Servicios
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Registrate para ofrecer tus servicios a nuestros clientes.
              </p>
              <div className="mt-auto text-gray-600 rounded-md  text-base border border-gray-500 py-1 px-2 hover:bg-gray-200 hover:border-gray-200 ">
                Registro como Proveedor
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubRegisterMain;
