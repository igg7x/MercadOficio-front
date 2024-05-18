import React from "react";
import Button from "@components/Button";
import UserIcon from "@assets/icons/UserIcon";
import LocationIcon from "@assets/icons/LocationIcon";
import MarkIcon from "@assets/icons/MarkIcon";
import { useModal } from "@hooks/useModal";
import JobApplicationModal from "./JobApplicationModal";
import { useRef, useState } from "react";

const JobCard = ({
  position,
  userOffering,
  location,
  publish_date,
  expiration_date,
  status,
}) => {
  const { show, toogle } = useModal();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleInputChange = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;

    const newErrors = { ...errors };

    switch (fieldName) {
      case "name":
        newErrors.name =
          fieldValue.length === 0 ? "El nombre es requerido" : "";
        break;
      case "email":
        newErrors.email =
          fieldValue.length === 0
            ? "El email es requerido"
            : !isValidEmail(fieldValue)
            ? "El email no es valido"
            : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.name.length > 0 || errors.email.length > 0) {
      return;
    }
    if (nameRef.current.value === "" || emailRef.current.value === "") {
      return;
    }

    toogle();
  };
  return (
    <div className="p-4  border-2  rounded-md border-gray-300 ">
      <h3 className="text-lg font-semibold">{position}</h3>
      <div className="flex items-center py-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <UserIcon className="h-4 w-4" />
        <span>{userOffering}</span>
      </div>
      <div className="flex items-center py-1  space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <LocationIcon className="h-4 w-4" />
        <span>{location}</span>
      </div>
      <div className=" flex-col gap-2 space-y-2 items-center justify-center py-2">
        <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
          Abrio :<span>{publish_date}</span>
        </p>
        <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
          Cierre : <span>{expiration_date}</span>
        </p>
        <p
          className={`p-1  text-center text-base  rounded-md ${
            status === "Abierto"
              ? "bg-green-300"
              : "status === 'Cerrado' bg-red-400"
          }`}>
          {status}
        </p>
      </div>
      <Button
        disabeled={status === "Cerrado"}
        text={"Aplicar"}
        type={"button"}
        styles={"bg-blue-500"}
        onClick={toogle}
      />
      <JobApplicationModal show={show}>
        <form
          onSubmit={() => handleSubmit()}
          id="form-application"
          className="grid gap-4  max-[560px]:m-2 py-4 flex-col px-3  relative  justify-center  items-center rounded-md  bg-white">
          <div className="absolute top-2 right-2" onClick={toogle}>
            <MarkIcon />
          </div>
          <h2 className="text-xl">Envio de postulacion</h2>
          <h4 className="text-sm text-gray-500">
            Completa tus datos para enviar tu postulacion para "{" "}
            <span className="text-black border-b-2">{position}</span> "
          </h4>
          <div className="flex w-5  max-[560px]:flex-col  p-1 gap-2 first-letter:">
            <div className="flex-col space-y-2 gap-2">
              <label htmlFor="name">Nombre</label>
              <div className="border-2  max-[560px]:w-60   rounded-lg p-2">
                <input
                  onChange={() => handleInputChange(nameRef)}
                  name="name"
                  type="text"
                  id="name"
                  className="focus:outline-none"
                  placeholder="Nombre completo"
                  ref={nameRef}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="flex-col space-y-2 gap-2">
              <label htmlFor="email">Email</label>
              <div className="border-2 max-[560px]:w-60   rounded-lg p-2">
                <input
                  onChange={() => handleInputChange(emailRef)}
                  id="email"
                  className="focus:outline-none "
                  placeholder="Email Ej.(@gmail.com)"
                  type="email"
                  name="email"
                  ref={emailRef}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-1">
            <Button
              text={"Enviar"}
              type={"submit"}
              styles={` ${
                errors.email || errors.name ? "bg-gray-500" : "bg-indigo-500"
              }`}
              onClick={(e) => handleSubmit(e)}
            />
            <Button text={"Cancelar"} onClick={toogle} styles={"bg-red-500"} />
          </div>
        </form>
      </JobApplicationModal>
    </div>
  );
};

export default JobCard;
