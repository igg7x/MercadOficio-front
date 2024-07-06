import React, { memo } from "react";
import Logo from "@assets/images/logo-no-background.svg";
import { Link } from "react-router-dom";
const HeaderMobile = memo(() => {
  return (
    <header
      id="inicio"
      className=" bg-gray-200  rounded-b-lg w-screen p-3 max-[640px]:block  hidden">
      <Link to={"/home"} className="flex-none">
        <img src={Logo} width={200} className="mx-auto" />
      </Link>
    </header>
  );
});

export default HeaderMobile;
