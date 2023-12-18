import React from "react";

const ItemNav = ({ item }) => {
  return (
    <li className="pb-1">
      <div className="flex  flex-col items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
        <div className="text-gray-500">{item.icon}</div>
        <h4 className="font-bold tracking-tight text-lg "> {item.name}</h4>
      </div>
    </li>
  );
};

export default ItemNav;
