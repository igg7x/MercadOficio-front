import React from "react";
import { Link } from "react-router-dom";
import OverViewFeatures from "./components/OverviewFeatures";
import OverViewFooter from "./components/OverviewFooter";
import OverViewNav from "./components/OverviewNav";

const Overview = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Arquitecto",
      quote:
        "La aplicación ofrece una plataforma fácil de usar y bien diseñada que me permite promocionar mis servicios de manera efectiva y conectarme con clientes potenciales",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Diseñadora de interiores",
      quote:
        "Me gusta cómo puedo personalizar mi perfil para destacar mis habilidades y experiencia, lo que me ayuda a atraer la atención de clientes interesados en mis servicios.  ",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Adrian Parejo",
      title: "Cliente de Mercado Oficio",
      quote:
        "Gracias a las reseñas y calificaciones de otros usuarios, puedo tomar decisiones informadas y seleccionar a los profesionales que mejor se adapten a mis requisitos.",
    },
  ];
  return (
    <>
      <OverViewNav />
      <section>
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden my-4 md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-gray-800 font-semibold md:text-5xl">
              Encuentra profesionales para cualquier tarea en un solo lugar.
            </h2>
            <p>
              Descubre el poder de la colaboración: encuentra y conecta con los
              mejores talentos en nuestro mercado de oficios.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to={"/register"}
                className="block py-2 px-4 text-center text-white font-medium bg-gray-500 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                Crear cuenta
              </Link>
              <Link
                to={"/login"}
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                Iniciar sesión
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              className=" md:rounded-tl-[108px]"
              alt=""
              src="src/assets/images/undraw_engineering_team_a7n2.svg"
            />
          </div>
        </div>
        <section className="py-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl sm:text-center md:mx-auto">
              <h3 className="text-gray-800 text-2xl font-semibold sm:text-4xl">
                Opiniones de Nuestros Usuarios
              </h3>
              <p className="mt-3 text-gray-600">
                Descubre lo que dicen nuestros usuarios sobre sus experiencias
                al encontrar y ofrecer servicios a través de{" "}
                <strong>Mercado Oficio</strong>.{" "}
              </p>
            </div>
            <div className="mt-12">
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, idx) => (
                  <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">{item.quote}</p>
                      </blockquote>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
      {/* <OverViewFeatures /> */}
      <OverViewFooter />
    </>
  );
};

export default Overview;
