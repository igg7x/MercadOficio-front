import React from "react";
import RegisterNav from "./components/RegisterNav";
import SubRegisterMain from "./components/SubRegisterMain";
import { Routes, Route, Outlet } from "react-router-dom";
import OfferingRegister from "./OfferingRegister";
const SubRegister = () => {
  return (
    <>
      <RegisterNav text={"Iniciar Sesion"} route={"/login"} />
      <Routes>
        <Route path="/" element={<SubRegisterMain />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default SubRegister;
