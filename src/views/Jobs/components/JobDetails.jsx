import React from "react";

const JobDetails = () => {
  return (
    <div className="flex gap-8 min-w-3xl max-w-4xl flex-col  p-6 md:p-8">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Detalles del Trabajo : </h1>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Titulo del Trabajo</h2>
          <p className="text-gray-600">Descripcion del Trabajo</p>
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto">
        <h1 className="text-xl font-bold">Aplicaciones :</h1>
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Nombre</th>
              <th className="py-3 pr-6">Email</th>
              <th className="py-3 pr-6">Fecha de Aplicacion</th>
              <th className="py-3 pr-6">Estado</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {/* {tableItems.map((item, idx) => (
            <tr key={idx}>
              <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="pr-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.status == "Active"
                      ? "text-green-600 bg-green-50"
                      : "text-blue-600 bg-blue-50"
                  }`}>
                  {item.status}
                </span>
              </td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
              <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="text-right whitespace-nowrap">
                <a
                  href="javascript:void()"
                  className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                  Manage
                </a>
              </td>
            </tr>
          ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetails;
