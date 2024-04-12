import React from "react";
import RegisterNav from "./components/RegisterNav";
import RegisterMain from "./components/RegisterMain";
import OverViewFooter from "../Overview/components/OverviewFooter";
const Register = () => {
  return (
    <>
      <RegisterNav text={"Iniciar Sesion"} route={"/login"} />
      <RegisterMain />
      <OverViewFooter />
    </>
  );
};

export default Register;
