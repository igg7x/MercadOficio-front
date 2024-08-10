import React from "react";

const Error = ({ messaje, img }) => {
  return (
    <div className="p-3 flex  max-[640px]:text-sm items-center justify-center col-span-4 mx-auto flex-col gap-1">
      <p className="text-2xl max-[640px]:text-xl ">{messaje}</p>
      <img
        draggable="false"
        className="h-80 max-[640px]:h-60 max-[640px]:w-72"
        src={img}
        alt="Error en la carga"
      />
    </div>
  );
};

export default Error;
