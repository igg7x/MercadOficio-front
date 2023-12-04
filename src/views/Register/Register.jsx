import React from "react";
import RegisterNav from "./components/RegisterNav";
import RegisterMain from "./components/RegisterMain";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <RegisterNav />
      {!view && <RegisterMain setView={setView} />}
      <Outlet />
    </>
  );
};

export default Register;
