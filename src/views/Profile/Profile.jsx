import React from "react";
import ProfileMainSection from "./components/ProfileMainSection";
import HeaderMobile from "../../components/HeaderMobile";

import { useState, useRef, useEffect } from "react";

const Profile = () => {
  const [expandText, setExpandText] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const toggleExpand = () => {
    setExpandText(!expandText);
  };

  const refBiography = useRef(null);
  useEffect(() => {
    if (refBiography.current) {
      setShowReadMoreButton(
        refBiography.current.scrollHeight !== refBiography.current.clientHeight
      );
    }
  }, []);
  return (
    <div className=" w-full max-[640px]:w-screen overflow-y-scroll">
      <HeaderMobile />
      <header className="flex gap-4 my-2 p-2  justify-start w-full">
        <img
          src=" 
        https://randomuser.me/api/portraits/women/79.jpg
        "
          alt="profile image"
          className="rounded-full  w-24 h-24 border-2 border-white
          max-[640px]:w-20 max-[640px]:h-20  max-[640px]:border-0        "
        />
        <div className="flex-col items-center mt-5 ">
          <h1 className="text-3xl max-[640px]:text-xl font-inter">
            Alivika Tony
          </h1>
          <h2 className="font-inter  text-lg  max-[640px]:text-base text-gray-500">
            Alivikatonu@gmail.com
          </h2>
          <p
            ref={refBiography}
            className={`text-base font-inter text-gray-400 p-1  max-w-xl ${
              expandText ? "" : "line-clamp-3 overflow-hidden"
            } `}>
            {" "}
            Con más de 15 años de experiencia en limpieza residencial y
            comercial, María se ha convertido en una experta en el arte de dejar
            impecables los espacios que toca. Su dedicación y atención al
            detalle son evidentes en cada tarea que realiza, desde limpiar pisos
            y ventanas hasta organizar armarios y cocinas.
          </p>
          {showReadMoreButton && (
            <button
              onClick={toggleExpand}
              className="text-blue-500  rounded-full font-inter  bg-slate-200 p-2 text-ellipsis  outline-none">
              {expandText ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </header>
      <section className="my-4 w-full py-2 flex-row">
        <ProfileMainSection />
      </section>
    </div>
  );
};

export default Profile;
