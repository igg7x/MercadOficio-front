import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[400px] items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent dark:border-gray-600" />
        <p className="text-gray-500 dark:text-gray-400">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
