import React from "react";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import HeaderMobile from "@components/HeaderMobile";
import Loading from "@components/Loading";
import Error404 from "@components/Errors/Error404";
import { useUsersOffering } from "@hooks/useUsersOffering";
const HomeMain = () => {
  const { usersOfferings, isLoading, isError, hasNextPage, fetchNextPage } =
    useUsersOffering();
  return (
    <div className="[grid-area:main]     flex-col flex items-center overflow-y-auto ">
      <HeaderMobile />
      <header className="bg-gray-900 w-full  text-white pt-3 pb-2 md:pt-5 md:pb-2">
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-xl  sm:text-3xl  md:text-4xl font-bold mb-4">
              Encontra a los mejores profesionales
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Aplique los ditintos filtros para encontrar el profesional que
              necesitas
            </p>
          </div>
        </div>
      </header>
      <section className=" w-full bg-gray-100 py-6 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="category">
                  Categoria
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="category">
                  <option value="">Select a category</option>
                  <option value="beach">Beach</option>
                  <option value="mountain">Mountain</option>
                  <option value="city">City</option>
                  <option value="rural">Rural</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="city">
                  City
                </label>
                <input
                  className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="city"
                  placeholder="Enter a city"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="price-range">
                  Calificacion
                </label>
                <div className="flex items-center">
                  <input
                    className="w-1/2 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    id="min-price"
                    placeholder="Min"
                    type="number"
                  />
                  <span className="mx-2">-</span>
                  <input
                    className="w-1/2 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    id="max-price"
                    placeholder="Max"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {usersOfferings.length > 0 && (
            <div className="flex flex-col gap-1">
              {usersOfferings.map((user, index) => (
                <Card key={index} user={user} />
              ))}
            </div>
          )}

          {isLoading && <Loading />}
          {isError && <Error404 />}
          {usersOfferings.length === 0 && !isLoading && !isError && (
            <div className="text-center text-2xl flex w-full justify-center items-center mt-10  text-gray-500">
              No se encontraron usuarios{" "}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeMain;
