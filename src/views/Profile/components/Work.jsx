import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "@assets/icons/Icons";
const Work = () => {
  return (
    <section className="py-12 md:py-20 lg:py-12">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-inter tracking-tighter sm:text-4xl md:text-5xl">
            Mi Trabajo
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Aquí puedes subir imágenes de tus trabajos realizados.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Project 1"
              className="aspect-[3/2] w-full object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm">Description of the project</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Project 2"
              className="aspect-[3/2] w-full object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-sm">Description of the project</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Project 3"
              className="aspect-[3/2] w-full object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-sm">Description of the project</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Project 4"
              className="aspect-[3/2] w-full object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">Project 4</h3>
                <p className="text-sm">Description of the project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <Plus className="mr-2 h-4 w-4" />
            Add New Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
