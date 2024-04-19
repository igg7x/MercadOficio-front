import React, { memo } from "react";
import Logo from "../assets/logo-no-background.svg";

const HeaderMobile = memo(() => {
  return (
    <header
      id="inicio"
      className=" bg-gray-200  rounded-b-lg w-screen p-3 max-[640px]:block  hidden">
      <a href="javascript:void(0)" className="flex-none">
        <img src={Logo} width={200} className="mx-auto" />
      </a>
    </header>
  );
});

export default HeaderMobile;
