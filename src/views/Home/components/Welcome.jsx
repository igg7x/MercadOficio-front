import React from "react";
import { BellIcon } from "../../../assets/icons/Icons";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Bell,
//   Briefcase,
//   UserCircle,
// } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderMobile from "../../../components/HeaderMobile";
export function HomeWelcome() {
  const recommendations = [
    {
      title: "Actualizar Perfil",
      icon: "🔄",
      description:
        "Mantén tu perfil actualizado para que los empleadores puedan encontrarte fácilmente.",
    },
    {
      title: "Explorar Trabajos",
      icon: "🔍",
      description: "Descubre nuevos trabajos que se ajusten a tus habilidades.",
    },
    {
      title: "Dejar una Reseña",
      icon: "📝",
      description:
        "No olvides dejar una reseña sobre tu experiencia con el profesional que contrataste o el trabajo que realizaste.",
    },
  ];

  const notifications = [
    {
      title: "New Job Match",
      description: "A new job matching your skills has been posted.",
    },
    {
      title: "Profile View",
      description: "A recruiter viewed your profile yesterday.",
    },
    {
      title: "Application Update",
      description:
        "Your application for Software Developer at TechCorp has moved to the next stage.",
    },
  ];
  const { user } = useAuth0();
  return (
    <div className="min-h-screen [grid-area: main] max-[640px]:w-screen  overflow-y-auto bg-gray-50">
      <HeaderMobile />
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl  lg:text-4xl font-bold">
            ¡Bienvenido a Mercado Oficio,{" "}
            <span className="text-yellow-300">{user.given_name}</span>!
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Recomendaciones para ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title} {item.icon}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Tomar Acción
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Tus Notificaciones
          </h2>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex  gap-2 items-center transition-all duration-300 hover:shadow-lg">
                <BellIcon className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
