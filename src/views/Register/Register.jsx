import React from "react";
import RegisterNav from "./components/RegisterNav";
import RegisterMain from "./components/RegisterMain";
import HomeFooter from "../Home/components/HomeFooter";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  return (
    <>
      <RegisterNav />
      <RegisterMain />
      <HomeFooter />
    </>
  );
};

export default Register;
