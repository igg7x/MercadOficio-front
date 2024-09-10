import React from "react";
import RegisterNav from "./components/RegisterNav";
import SubRegisterMain from "./components/SubRegisterMain";
import { Routes, Route, Outlet } from "react-router-dom";
const SubRegister = () => {
  return (
    <>
      <RegisterNav />
      <Routes>
        <Route path="/" element={<SubRegisterMain />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default SubRegister;
