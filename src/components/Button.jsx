import React from "react";

const Button = ({ text }) => {
  return (
    <div
      className="p-2 flex justify-center  hover:bg-blue-600  items-center gap-1  bg-gray-600 text-white 
  disabled:opacity-50 transition-colors duration-200 disabled:cursor-not-allowed self-end  max-[640px]:text-sm sm:p-1
  rounded-xl">
      {text}
    </div>
  );
};

export default Button;
