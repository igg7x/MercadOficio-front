import React, { useRef, useState, forwardRef } from "react";
import { useCategories } from "@hooks/useCategories";
import { ErrorBoundary } from "../../components/Errors/ErrorBoundaries";
import Loading from "../../components/Loading";
import Error from "../../components/Errors/Error";
import { useAuth0 } from "@auth0/auth0-react";
import { useCreateUserAndOffering } from "../../hooks/useCreateUser";
import {
  ClipboardIcon,
  InfoIcon,
  MapPinIcon,
  TagIcon,
  CheckIcon,
  FilePenIcon,
} from "@assets/icons/Icons";

const OfferingRegister = () => {
  const {
    categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useCategories();
  const [errors, setErrors] = useState({
    location: "",
    desc: "",
    categories: "",
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const locationRef = useRef(null);
  const descRef = useRef(null);
  const { user, isLoading: isLoadingAuth } = useAuth0();
  const { handleRegister, isLoading, isSuccess } = useCreateUserAndOffering();

  const handleSelectedCategories = (e) => {
    const { value } = e.target;
    setSelectedCategories((prev) => {
      if (prev.some((category) => category.name === value)) {
        return prev.filter((category) => category.name !== value);
      } else {
        return [...prev, { name: value }];
      }
    });
  };

  const handleInputChange = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newErrors = { ...errors };

    switch (fieldName) {
      case "location":
        newErrors.location =
          fieldValue.length === 0 ? "Complete este campo" : "";
        break;
      case "description":
        newErrors.desc = fieldValue.length === 0 ? "Complete este campo" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleUserProviderRegister = (e) => {
    e.preventDefault();
    if (isLoadingAuth || isLoading) return;

    const userData = {
      email: user?.email,
      name: user?.given_name,
      surname: user?.family_name,
      picture: String(user?.picture),
      roles: ["USER_OFFERING"],
      biography: descRef.current.value,
      location: locationRef.current.value,
    };

    const offeringData = {
      userCategories: selectedCategories,
    };

    handleRegister(userData, offeringData);
  };
  return (
    <ErrorBoundary
      result={categories}
      error={isErrorCategories}
      fallBackComponent={
        <Error
          messaje={"Ups ! Ocurrio un error"}
          img={"/src/assets/images/undraw_server_down_s4lk.png"}
        />
      }>
      <div className="mx-auto max-w-2xl  space-y-6 py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <h1 className="md:text-3xl  text-2xl font-bold">
            <ClipboardIcon className="mr-2 inline-block h-6 w-6" />
            Registro proveedor de servicios{" "}
          </h1>
          <p className="text-muted-foreground">
            <InfoIcon className="mr-2 inline-block h-6 w-6" />
            Ingresa los datos de tu servicio para comenzar a ofrecerlo
          </p>
        </div>
        <form
          onSubmit={(e) => handleUserProviderRegister(e)}
          method="post"
          className="space-y-6">
          <div className="md:grid md:grid-cols-2 flex  flex-col  gap-6">
            <div className="space-y-2">
              <div>
                <Label htmlFor="location">
                  <MapPinIcon className="mr-2 inline-block h-5 w-5" />
                  Ubicacion{" "}
                </Label>
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    {errors.location}
                  </span>
                )}
              </div>
              <Input
                onChange={() => handleInputChange(locationRef)}
                ref={locationRef}
                id="location"
                name="location"
                placeholder="Ingrese su ubicacion"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex-col gap-1">
                <Label htmlFor="description">
                  <FilePenIcon className="mr-2 inline-block h-5 w-5" />
                  Descripcion de tu servicio{" "}
                </Label>
                {errors.desc && (
                  <span className="text-red-500 text-sm">{errors.desc}</span>
                )}
              </div>
              <textarea
                onChange={() => handleInputChange(descRef)}
                ref={descRef}
                name="description"
                id="description"
                placeholder="Descripcion de tu servicio"
                rows={1}
                minLength={10}
                maxLength={128}
                required
                className=" border  border-spacing-2 p-2 border-gray-400 rounded-lg w-full"
              />
            </div>
          </div>
          <div className="space-y-2 space-x-3">
            <div
              className="flex gap-3
             items-center">
              <Label htmlFor="categories">
                <TagIcon className="mr-2 inline-block h-5 w-5" />
                Categorias
              </Label>
              {errors.categories && (
                <span className="text-red-500 text-sm">
                  {errors.categories}
                </span>
              )}
            </div>{" "}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {isLoadingCategories ? (
                  <Loading />
                ) : (
                  categories.map((category) => (
                    <Label
                      htmlFor="categories"
                      key={category.name}
                      className="flex items-center gap-2">
                      <Checkbox
                        onChange={handleSelectedCategories}
                        value={category.name}
                        name="categories"
                      />
                      {category.name}
                    </Label>
                  ))
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full ${
              Object.values(errors).some((error) => error.length > 0) ||
              selectedCategories.length === 0
                ? "opacity-40"
                : "hover:bg-blue-500 over:border-gray-500  hover:text-white "
            }    border-gray-300 p-2 border rounded-lg`}>
            <CheckIcon className="mr-2 inline-block h-5 w-5" />
            Registrarme
          </button>
        </form>
      </div>
    </ErrorBoundary>
  );
};

export default OfferingRegister;

export function Label({ children, ...props }) {
  return <label {...props}>{children}</label>;
}

export const Input = forwardRef(({ id, ...props }, ref) => (
  <input
    className="outline-none  border  border-spacing-2 p-2 border-gray-400 rounded-lg w-full"
    id={id}
    ref={ref}
    {...props}
  />
));

export const Checkbox = forwardRef(({ value, ...props }, ref) => (
  <input
    type="checkbox"
    id={value}
    name={value}
    value={value}
    ref={ref}
    {...props}
  />
));
