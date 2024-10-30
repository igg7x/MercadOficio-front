import React, { useState } from "react";
import Logo from "@assets/images/logo-no-background.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Register = () => {
  const { loginWithRedirect } = useAuth0();
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUpWithGoogle = async () => {
    await loginWithRedirect({
      appState: { returnTo: "/postlogin" },
    });
  };

  return (
    // <>
    //   <main className="w-full flex ">
    //     <div className="relative lg:flex-1  px-3 h-screen items-center justify-center  bg-gray-900 flex">
    //       <div className="relative z-10 w-full max-w-md">
    //         <img src={Logo} className="w-80" />
    //         <div className="mt-16 space-y-4">
    //           <h3 className="text-white text-3xl font-bold">
    //             Encuentra a los mejores profesionales en un solo lugar 🚀
    //           </h3>
    //           <p className="text-gray-300">
    //             Crea una cuenta y empieza a contratar a los mejores de cualquier
    //             rubro!
    //           </p>
    //           <div className="flex-col  flex gap-4">
    //             <p className="text-gray-300 text-sm ">
    //               Registrate con tu cuenta de Google
    //             </p>
    //             <button
    //               onClick={handleSignUpWithGoogle}
    //               className="flex items-center  w-full justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
    //               <svg
    //                 className="w-5 h-5"
    //                 viewBox="0 0 48 48"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <g clipPath="url(#clip0_17_40)">
    //                   <path
    //                     d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
    //                     fill="#4285F4"
    //                   />
    //                   <path
    //                     d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
    //                     fill="#34A853"
    //                   />
    //                   <path
    //                     d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
    //                     fill="#FBBC04"
    //                   />
    //                   <path
    //                     d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
    //                     fill="#EA4335"
    //                   />
    //                 </g>
    //                 <defs>
    //                   <clipPath id="clip0_17_40">
    //                     <rect width="48" height="48" fill="white" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="flex items-center  space-x-2 overflow-hidden">
    //             <img
    //               src="https://randomuser.me/api/portraits/women/79.jpg"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //             <img
    //               src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //             <img
    //               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //             <img
    //               src="https://randomuser.me/api/portraits/men/86.jpg"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //             <img
    //               src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="absolute inset-0 my-auto h-[500px]"
    //         style={{
    //           background:
    //             "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
    //           filter: "blur(118px)",
    //         }}></div>
    //     </div>
    //     {/* <div className="flex-1 flex items-center justify-center h-screen">
    //       <div className="w-full max-w-md max-[640px]:space-y-5 space-y-1 px-4 bg-white text-gray-600 sm:px-0">
    //         <div className="">
    //           <img src={Logo} className="w-56 min-[640px]:w-56" />
    //           <div className="space-y-2">
    //             <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
    //               Bienvenido a Mercado Oficio 👋
    //             </h3>
    //             <p className="">Registrate con tu cuenta de Google</p>
    //           </div>
    //         </div>
    //         <div className="relative">
    //           <span className="block w-full h-px bg-gray-300"></span>
    //           <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
    //             Continua con
    //           </p>
    //         </div>
    //         <form
    //           method="post"
    //           id="create-user-form"
    //           className="max-[640px]:space-y-1
    //         space-y-6
    //           min-[640px]:pt-2
    //         max-[640px]:text-sm
    //         ">
    //           <div>
    //             <div className="flex gap-4 items-center ">
    //               <label className="font-medium">Nombre</label>
    //               {errors.name && (
    //                 <span className="text-red-500 text-sm">{errors.name}</span>
    //               )}
    //             </div>
    //             <input
    //               onChange={() => handleInputChange(nameRef)}
    //               ref={nameRef}
    //               name="name"
    //               type="text"
    //               required
    //               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //             />
    //           </div>
    //           <div>
    //             <div className="flex gap-4 items-center">
    //               <label className="font-medium">Apellido</label>
    //               {errors.lastName && (
    //                 <span className="text-red-500 text-sm">
    //                   {errors.lastName}
    //                 </span>
    //               )}
    //             </div>
    //             <input
    //               onChange={() => handleInputChange(lastNameRef)}
    //               ref={lastNameRef}
    //               name="lastName"
    //               type="text"
    //               required
    //               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //             />
    //           </div>
    //           <div>
    //             <div className="flex gap-4 items-center">
    //               <label className="font-medium">Email</label>
    //               {errors.email && (
    //                 <span className="text-red-500 text-sm">{errors.email}</span>
    //               )}
    //             </div>
    //             <input
    //               onChange={() => handleInputChange(emailRef)}
    //               ref={emailRef}
    //               name="email"
    //               type="email"
    //               required
    //               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //             />
    //           </div>
    //           <div>
    //             <div className="flex gap-4 items-center">
    //               <label className="font-medium">Contraseña</label>
    //               {errors.password && (
    //                 <span className="text-red-500 text-sm">
    //                   {errors.password}
    //                 </span>
    //               )}
    //             </div>
    //             <input
    //               onChange={() => handleInputChange(passwordRef)}
    //               ref={passwordRef}
    //               name="password"
    //               type="password"
    //               required
    //               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //             />
    //           </div>{" "}
    //           <div>
    //             <div className="flex gap-4 items-center">
    //               <label className="font-medium"> Repetir contraseña</label>
    //               {errors.repeatPassword && (
    //                 <span className="text-red-500 text-sm">
    //                   {errors.repeatPassword}
    //                 </span>
    //               )}
    //             </div>
    //             <input
    //               onChange={() => handleInputChange(repeatPasswordRef)}
    //               ref={repeatPasswordRef}
    //               name="repeatPassword"
    //               type="password"
    //               required
    //               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //             />
    //           </div>
    //           <button
    //             disabled={
    //               errors.name ||
    //               errors.lastName ||
    //               errors.email ||
    //               errors.password ||
    //               errors.repeatPassword
    //             }
    //             type="submit"
    //             className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
    //             Crear
    //           </button>
    //         </form>
    //       </div>
    //     </div> */}
    //   </main>
    // </>

    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 px-4 py-4 lg:px-8">
      <div className="mx-auto flex w-full flex-col items-center justify-center space-y-4 sm:w-[350px]">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <img
            src={Logo}
            alt="MercadOficio"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        {/* Main Card */}
        <div className="w-full rounded-lg bg-white p-6 shadow-xl">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">
              Bienvenido
            </h1>
            <p className="text-sm text-gray-600">
              Encuentra a los mejores profesionales en un solo lugar
              <span role="img" aria-label="rocket" className="ml-2">
                🚀
              </span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* Google Sign In */}
            <button
              onClick={handleSignUpWithGoogle}
              className="flex items-center  w-full justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  O continúa con email
                </span>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="tu@ejemplo.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Crear una cuenta nueva
              </button>
              <button
                type="button"
                className="w-full rounded-lg bg-gray-50 px-4 py-2.5 text-center text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Iniciar sesión
              </button>
            </div>
          </form>

          {/* User Avatars */}
          <div className="mt-4 text-center">
            <div className="flex items-center  space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/90.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Únete a miles de profesionales que ya confían en nosotros
            </p>
          </div>

          {/* Footer Links */}
          {/* <div className="mt-4 text-center text-sm text-gray-600">
            <Link href="#" className="hover:text-purple-600">
              ¿Olvidaste tu contraseña?
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
