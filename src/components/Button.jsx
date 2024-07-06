import React from "react";

const Button = ({ text, onClick, type, styles, disabeled }) => {
  return (
    <button
      disabled={disabeled}
      type={type ? type : "button"}
      onClick={onClick}
      className={`p-2 flex justify-center  ${styles}   gap-1   text-white 
  disabled:opacity-50 transition-colors  w-full duration-200 disabled:cursor-not-allowed self-end  max-[640px]:text-sm sm:p-1
  rounded-xl`}>
      {text}
    </button>
  );
};

export default Button;
