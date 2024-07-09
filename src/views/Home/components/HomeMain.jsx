import React from "react";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import HeaderMobile from "@components/HeaderMobile";
import Loading from "@components/Loading";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import { useCategories } from "@hooks/useCategories";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers, getUsersByFilters } from "@services/users";
import { useFilteredUsersOffering } from "@hooks/useGetUsersOffering";
import { useState, useCallback } from "react";
import { StarIcon } from "@assets/icons/Icons";

const HomeMain = () => {
  const [filters, setFilters] = useState({});
  const [debouncedFilters, setDebouncedFilters] = useState(filters);
  const { data, isLoading, isError } = useFilteredUsersOffering(filters);
  const usersOffering = data?.content || [];
  const { categories, isLoading: isLoadingCategories } = useCategories();

  const handleSubmit = (e) => {
    if (isLoading) return;
    e.preventDefault();

    const dataForm = new FormData(e.target);
    const newFilters = {};

    if (dataForm.get("category") !== "none") {
      newFilters.category = dataForm.get("category");
    }
    if (dataForm.get("location") !== "") {
      newFilters.location = dataForm.get("location");
    }
    if (dataForm.get("min-calification") !== "") {
      newFilters.calification = {
        minCalification: dataForm.get("min-calification"),
      };
    }
    if (dataForm.get("max-calification") !== "") {
      newFilters.calification = {
        ...newFilters.calification,
        maxCalification: dataForm.get("max-calification"),
      };
    }
    setFilters(newFilters);
  };

  return (
    <div className="[grid-area:main] flex-col flex items-center overflow-y-auto ">
      <HeaderMobile />
      <header className="bg-gray-900 w-full  text-white pt-3 pb-2 md:pt-5 md:pb-2">
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-xl  sm:text-3xl  md:text-4xl font-bold mb-4">
              Encuentra a los mejores profesionales
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
            <form
              onSubmit={(e) => handleSubmit(e)}
              role="search"
              className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="category">
                  Categoria
                </label>
                <select
                  nonce="category"
                  placeholder="Filtra por categoria"
                  name="category"
                  className="w-full bg-white   border border-gray-300 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="category">
                  <option value="none" defaultValue={"default"}>
                    Selecciona una categoria
                  </option>
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category.name} value={category.id}>
                        {category.name}
                      </option>
                    ))
                  ) : isLoadingCategories ? (
                    <option>
                      {" "}
                      <Loading />
                    </option>
                  ) : (
                    <option>Error al cargar categorias</option>
                  )}
                </select>
                <div className="  max-[768px]:hidden  max-w-[150px] mt-5  ">
                  <Button
                    text={"Buscar"}
                    type={"submit"}
                    styles={"bg-gray-500 "}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="location">
                  Ciudad
                </label>
                <input
                  className="w-full trucate  bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="location"
                  placeholder="San Nicolas , Rosario , Capital"
                  type="text"
                  name="location"
                />
              </div>
              <div>
                <label
                  className="gap-2 flex  text-gray-700 font-medium   mb-2"
                  htmlFor="price-range">
                  Calificacion
                  <StarIcon />
                </label>
                <div className=" w-full flex gap-3">
                  <div className="flex  w-full items-center gap-1">
                    <label htmlFor="min-calification">Min</label>
                    <input
                      className="w-3/4  bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="min-price"
                      placeholder="0,1,2,3,4,5"
                      type="number"
                      min={0}
                      max={5}
                      name="min-calification"
                    />
                  </div>
                  <div className="flex  w-full items-center gap-1">
                    <label htmlFor="max-calification">Max</label>
                    <input
                      className=" w-3/4 bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="max-calification"
                      placeholder="0,1,2,3,4,5"
                      type="number"
                      maxLength={1}
                      max={5}
                      min={0}
                      name="max-calification"
                    />
                  </div>
                </div>
              </div>
              <div className="md:hidden mx-6">
                <Button
                  text={"Buscar"}
                  type={"submit"}
                  styles={"bg-gray-500 "}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {usersOffering.length > 0 && (
            <div className="flex flex-col gap-1">
              {data.content.map((user, index) => (
                <Card key={index} user={user} />
              ))}
            </div>
          )}
          {isLoading && <Loading />}
          {isError && (
            <div className="text-center text-2xl flex w-full h-[250px] justify-center items-center mt-10  text-gray-500">
              {isError.message}
            </div>
          )}
          {usersOffering.length === 0 && !isLoading && !isError && (
            <div className="text-center text-2xl flex w-full justify-center items-center mt-10  text-gray-500">
              No se encontraron usuarios{" "}
            </div>
          )}
        </div>
      </div>
      <Outlet />
      <Pagination />
    </div>
  );
};

export default HomeMain;
