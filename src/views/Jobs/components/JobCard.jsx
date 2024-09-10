import React from "react";
import { useRef, useState } from "react";
import Button from "@components/Button";
import { useModal } from "@hooks/useModal";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import JobApplicationModal from "./JobApplicationModal";
import { useCreateJobApplication } from "../../../hooks/useApplications";
import {
  InfoIcon,
  LocationIcon,
  MarkIcon,
  BriefcaseIcon,
  FilePenIcon,
  MailIcon,
} from "@assets/icons/Icons";

export const JobCard = ({
  jobId,
  position,
  userOffering,
  location,
  publish_date,
  expiration_date,
  status,
  category,
}) => {
  const { show, toogle } = useModal();
  const { createApplication, isLoading } = useCreateJobApplication();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    createApplication({ jobId });
    toogle();
  };

  return (
    <div className="p-4  border-2 max-h-96  rounded-md border-gray-300 ">
      <h3 className="text-lg font-semibold truncate">{position}</h3>
      <h4 className=" flex gap-2 text-gray-500">
        <BriefcaseIcon className="h-4 w-4" />
        <span className="text-sm">{category}</span>
      </h4>
      <div className="flex items-center py-1  space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <LocationIcon className="h-4 w-4" />
        <span className="truncate">{location}</span>
      </div>
      <div className=" flex-col gap-2 space-y-2 items-center justify-center py-2">
        <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
          Abrio :<span>{publish_date}</span>
        </p>
        <p className="text-sm flex gap-2 text-gray-500 dark:text-gray-400">
          Cierre : <span>{expiration_date}</span>
        </p>
        <p
          className={`p-1  text-center text-base  rounded-xl ${
            status === "Abierto" ? "bg-green-300" : "bg-red-400"
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
      <JobApplicationModal show={show}>
        <form
          mehtod="post"
          onSubmit={(e) => handleSubmit(e)}
          id="form-application"
          className=" gap-2 m-2 py-4 flex-col px-2  relative rounded-md  bg-white">
          <div className="absolute top-2 right-2" onClick={toogle}>
            <MarkIcon />
          </div>
          <h2 className="text-xl flex gap-2">
            <InfoIcon />
            Envio de postulacion
          </h2>
          <div className="pl-8">
            <h4 className="text-sm text-gray-500">
              Trabajo publicado por{" "}
              <span className="text-black border-b-2">{userOffering}</span>
            </h4>
            <h4 className="text-sm text-gray-500">
              Estas por enviar una aplicacion para : "{" "}
              <span className="text-black border-b-2">{position}</span>"
            </h4>
          </div>
          <div className="flex w-full max-[600px]:flex-col  p-1 gap-2 first-letter:">
            {/* <div className="flex-col space-y-2 gap-2">
              <label htmlFor="name" className="flex gap-1">
                <FilePenIcon />
                Nombre
                {errors.name && (
                  <span className="text-red-500  text-sm">{errors.name}</span>
                )}
              </label>
              <div className="border-2  max-[600px]:w-60   rounded-lg p-2">
                <input
                  onChange={() => handleInputChange(nameRef)}
                  name="name"
                  type="text"
                  id="name"
                  className="focus:outline-none"
                  placeholder="Nombre Completo"
                  ref={nameRef}
                />
              </div>
            </div> */}
            {/* <div className="flex-col space-y-2 gap-2">
              <label htmlFor="email" className="flex gap-1">
                <MailIcon />
                Email
                {errors.email && (
                  <span className="text-red-500  text-sm">{errors.email}</span>
                )}
              </label>
              <div className="border-2  max-[600px]:w-60  rounded-lg p-2">
                <input
                  onChange={() => handleInputChange(emailRef)}
                  id="email"
                  className="focus:outline-none "
                  placeholder="Email"
                  type="email"
                  name="email"
                  ref={emailRef}
                />
              </div>
            </div> */}
          </div>
          <div className="flex p-1 max-[600px]:flex-col gap-1 justify-center items-center">
            <Button
              disabeled={isLoading}
              text={"Enviar"}
              type={"submit"}
              styles={` ${isLoading ? "bg-gray-500" : "bg-indigo-500"}`}
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
