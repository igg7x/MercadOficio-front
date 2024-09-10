import React, { useRef, useState } from "react";
import { Label, Checkbox, Input } from "../../Register/OfferingRegister";
import { ROLES } from "../../../utils/roles";
import { useCategories } from "@hooks/useCategories";
import { useModal } from "../../../hooks/useModal";
import UpdateProfileModal from "./UpdateProfileModal";
import { CardFooter } from "../../Jobs/components/CreateNewJob";
import { useUpdateUser, useUserByEmail } from "@hooks/useUsers";
import { ToastContainer } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../../components/Loading";
import { useParams } from "react-router-dom";
import Error from "@components/Errors/Error";
import {
  LocationIcon,
  FileTextIcon,
  InfoIcon,
  MarkIcon,
  MailCheckIcon,
  PhoneIcon,
  TagIcon,
} from "@assets/icons/Icons";

const Info = () => {
  let { userEmail } = useParams();
  const [errors, setErrors] = useState({});
  const biographyRef = useRef(null);
  const locationRef = useRef(null);
  const phoneRef = useRef(null);
  const { show, toogle } = useModal();
  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { user } = useAuth0();

  const { data: userData, isError, isLoading } = useUserByEmail(userEmail);
  const [selectedCategories, setSelectedCategories] = useState(
    userData?.categories || []
  );

  const { handleUpdate, isLoading: isLoadingMutation } = useUpdateUser(
    userData?.roles
  );

  const handleInputChange = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newErrors = { ...errors };
    switch (fieldName) {
      case "biography":
        newErrors.biography =
          fieldValue.length === 0 ? "Complete este campo" : "";
        break;
      case "location":
        newErrors.location =
          fieldValue.length === 0 ? "Complete este campo" : "";
        break;
      case "phone":
        newErrors.phone =
          fieldValue.length === 0
            ? "Complete este campo"
            : fieldValue.length < 10
            ? "El telefono debe tener al menos 10 digitos"
            : fieldValue.length > 12
            ? "El telefono no puede tener mas de 12 digitos"
            : "";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const validateCategories = (categories) => {
    const newErrors = { ...errors };
    categories.length > 3
      ? (newErrors.categories = "Solo puedes seleccionar hasta 3 categorías")
      : categories.length === 0
      ? (newErrors.categories = "Debes seleccionar al menos una categoría")
      : (newErrors.categories = "");
    setErrors(newErrors);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.phone = Number(data.phone);
    handleUpdate(data, { categories: selectedCategories });
    toogle();
  };

  const handleSelectedCategories = (e) => {
    const { value } = e.target;
    setSelectedCategories((prev) => {
      const isAlreadySelected = prev.some(
        (category) => category.name === value
      );
      const newCategories = isAlreadySelected
        ? prev.filter((category) => category.name !== value)
        : [...prev, { name: value }];
      validateCategories(newCategories);
      return newCategories;
    });
  };

  if (isLoading || !userData) {
    return <Loading />;
  }
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col max-[640px]:items-center  justify-center items-stretch  py-5 md:py-7">
      {isError ? (
        <Error
          messaje={"Ups ! Ocurrio un error"}
          img={"/src/assets/images/undraw_server_down_s4lk.png"}
        />
      ) : (
        <div className="px-4 md:px-0">
          <h2 className="text-xl md:text-3xl p-2 flex  items-center gap-0.5 ">
            <InfoIcon className="inline-block h-7 w-7" />
            Informacion Personal
          </h2>
          <div className="space-y-6 w-full">
            <section className="grid grid-cols-1 md:grid-cols-2 text-base  gap-6 justify-center items-center">
              <div>
                <h4 className="gap-2 items-center text-lg font-medium flex text-gray-700 ">
                  <LocationIcon />
                  Ubicacion :
                </h4>
                <div className="mt-1 p-2">
                  <p
                    className="block w-full rounded-md  bg-white p-2 outline-none  max-w-[280px] border-gray-100 border-2  shadow-sm  sm:text-sm"
                    id="location"
                    name="location"
                    type="text">
                    {userData.location ? userData.location : "No especificado"}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="flex gap-1  items-center font-medium text-gray-700 ">
                  <FileTextIcon />
                  Biografia :
                </h4>
                <div className="mt-1 p-2">
                  <p className="block w-full rounded-md  bg-white p-2 outline-none  max-w-[280px] border-gray-100 border-2  shadow-sm  sm:text-sm ">
                    {userData.biography
                      ? userData.biography
                      : "El usuario no ha escrito una biografia por el momento "}
                  </p>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
              <div>
                <h4 className="flex gap-1   items-center font-medium text-gray-700 ">
                  <MailCheckIcon />
                  Email de contacto :
                </h4>
                <div className="mt-1 p-1">
                  <p className="block w-full rounded-md  bg-white p-2 outline-none  max-w-[280px] border-gray-100 border-2  shadow-sm  sm:text-sm ">
                    {userData.email
                      ? userData.email
                      : "El usuario no ha escrito una biografia por el momento "}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="flex gap-2   items-center font-medium text-gray-700 ">
                  <PhoneIcon />
                  Telefono de contacto :
                </h4>
                <div className="mt-1 p-2">
                  <p className="block w-full rounded-md  bg-white p-2 outline-none  max-w-[280px] border-gray-100 border-2  shadow-sm  sm:text-sm ">
                    {userData.phone
                      ? userData.phone
                      : "El usuario no ha dejado un telefono de contacto por el momento "}
                  </p>
                </div>
              </div>
            </section>
            {userData.roles.includes(ROLES.USER_OFFERING) && (
              <div>
                <Label className="flex gap-1  items-center font-medium  dark:text-gray-700">
                  <TagIcon />
                  Categorias seleccionadas
                </Label>
                <div>
                  <div className="grid grid-cols-2 p-2 gap-4">
                    {isLoadingCategories ? (
                      <Loading />
                    ) : (
                      categories.map((category) => (
                        <h4
                          key={category.name}
                          className="flex items-center gap-2">
                          {userData.categories.some(
                            (userCategory) =>
                              userCategory.name === category.name
                          ) ? (
                            <Checkbox
                              value={category.name}
                              name="categories"
                              defaultChecked
                            />
                          ) : (
                            <Checkbox
                              value={category.name}
                              disabled={true}
                              name="categories"
                            />
                          )}
                          {category.name}
                        </h4>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <UpdateProfileModal show={show}>
            <div className="w-full relative min-h-fit overflow-y-auto bg-white p-4 rounded-md m-1 max-h-[575px] max-w-2xl">
              <div className="absolute top-2 right-2" onClick={toogle}>
                <MarkIcon />
              </div>
              <header className="w-full border-b-2 p-2  border-spacing-y-2">
                <h1>
                  <InfoIcon className="inline-block h-6 w-6 mr-2" />
                  Actualiza tu perfil
                </h1>
                <p className="text-gray-500 text-sm ml-8">
                  Actualiza tu perfil con la informacion mas reciente
                </p>
              </header>
              <div className="mt-3">
                <form className="grid gap-6 " onSubmit={(e) => handelSubmit(e)}>
                  <div className="grid grid-cols-2 gap-4  items-center justify-center">
                    <div className="space-y-2 min-[640px]:w-full">
                      <Label
                        htmlFor="location"
                        className="text-sm flex items-center gap-1">
                        <LocationIcon className="inline-block h-5 w-5 mr-2" />
                        Ubicacion :
                      </Label>
                      <Input
                        onChange={() => handleInputChange(locationRef)}
                        defaultValue={userData.location}
                        ref={locationRef}
                        id="location"
                        placeholder="Ejemplo : Buenos Aires , Cordoba"
                        name="location"
                        required
                      />
                      {errors.location && (
                        <span className="text-red-500 text-sm">
                          {errors.location}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 min-[640px]:w-full">
                      <Label
                        htmlFor="phone"
                        className="text-sm flex items-center gap-1">
                        <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                        Telefono :
                      </Label>
                      <Input
                        onChange={() => handleInputChange(phoneRef)}
                        defaultValue={3364695506}
                        ref={phoneRef}
                        id="phone"
                        placeholder="Telefono"
                        name="phone"
                        required
                        type="number"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm">
                      <FileTextIcon className="inline-block h-5 w-5 " />{" "}
                      Biografia:
                      {errors.biography && (
                        <span className="text-red-500 text-sm">
                          {errors.biography}
                        </span>
                      )}
                    </Label>
                    <textarea
                      onChange={() => handleInputChange(biographyRef)}
                      defaultValue={userData.biography}
                      ref={biographyRef}
                      name="biography"
                      id="biography"
                      placeholder="Escribe una breve descripcion sobre ti , tu servicio o tu empresa"
                      className="min-h-[75px]  max-h-[200px] min-w-full p-1 border-2 border-gray-400 rounded-md text-sm"
                    />
                  </div>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    userData.roles.includes(ROLES.USER_OFFERING) && (
                      <div>
                        <Label className="flex gap-1  items-center text-sm ">
                          <TagIcon className="w-5 h-5" />
                          Categorias
                          {errors.categories && (
                            <span className="text-red-500 text-sm">
                              {errors.categories}
                            </span>
                          )}
                        </Label>
                        <div>
                          <div className="grid grid-cols-2 p-2 gap-4">
                            {isLoadingCategories ? (
                              <Loading />
                            ) : (
                              categories.map((category) => (
                                <div key={category.name}>
                                  <Label
                                    htmlFor={`category-${category.name}`}
                                    key={category.name}
                                    className="flex items-center  gap-2">
                                    {userData.categories.some(
                                      (userCategory) =>
                                        userCategory.name === category.name
                                    ) ? (
                                      <Checkbox
                                        onChange={handleSelectedCategories}
                                        value={category.name}
                                        name="categories"
                                        key={category.name}
                                        defaultChecked
                                      />
                                    ) : (
                                      <Checkbox
                                        key={category.name}
                                        onChange={handleSelectedCategories}
                                        value={category.name}
                                        name="categories"
                                      />
                                    )}
                                    {category.name}
                                  </Label>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                  <CardFooter>
                    <button
                      disabled={
                        isLoadingMutation ||
                        Object.values(errors).some((error) => error.length > 0)
                      }
                      type="submit"
                      className={`ml-auto  ${
                        isLoadingMutation ||
                        Object.values(errors).some((error) => error.length > 0)
                          ? "opacity-30"
                          : "hover:bg-blue-600"
                      }   p-2 text-white bg-blue-500 rounded-md `}>
                      {isLoadingMutation ? "Guardando..." : "Guardar"}
                    </button>
                  </CardFooter>
                </form>
              </div>
            </div>
          </UpdateProfileModal>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {userEmail === user.email && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={toogle}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit">
                Actualizar Perfil
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Info;
