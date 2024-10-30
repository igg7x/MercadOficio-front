import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <div className="flex items-center gap-1 justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600"></div>
        <div>
          <span className="text-gray-400">Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
