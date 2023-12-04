import React from "react";
import RegisterCard from "./RegisterCard";
const RegisterMain = () => {
  return (
    <main>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Crea una cuenta
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex mx-auto mt-4  max-w-screen-xl items-center max-[750px]:flex-col justify-around ">
        <RegisterCard
          title={"Quiero Contratar"}
          desc={"Estas Interesado en contratar "}
          srcImg="src\assets\pexels-sora-shimazaki-5673488.jpg"
          registerPage={"customer"}
        />
        <RegisterCard
          title={"Quiero Ofrecer Servicio"}
          desc={"Estas Interesado en ofrecer servicio"}
          srcImg="src\assets\pexels-fox-1595385.jpg"
          registerPage={"offering"}
        />
      </section>
    </main>
  );
};

export default RegisterMain;
