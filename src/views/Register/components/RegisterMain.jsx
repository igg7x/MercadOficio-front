import React from "react";
import RegisterCard from "./RegisterCard";
import LogoRegisterUserOffering from "@assets/images/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_users_per_minute_1e4q_t22j_-1-_0ngf_-1-_27dv_30ul_legv_-1-_il1l_-2-_0jip.svg";
import LogoRegisterUserCustomer from "@assets/images/undraw_join_re_w1lh.svg";
const RegisterMain = () => {
  return (
    <main className="overflow-hidden">
      <section>
        <div className="max-w-screen-xl  px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Crear cuenta
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex mx-auto mt-4  max-w-screen-xl items-center max-[750px]:flex-col justify-around ">
        <RegisterCard
          title={"Quiero Contratar"}
          desc={"Estas Interesado en contratar "}
          srcImg={LogoRegisterUserCustomer}
          registerPage={"customer"}
        />
        <RegisterCard
          title={"Quiero Ofrecer Servicio"}
          desc={"Estas Interesado en ofrecer servicio"}
          srcImg={LogoRegisterUserOffering}
          registerPage={"offering"}
        />
      </section>
    </main>
  );
};

export default RegisterMain;
