import React, { useEffect, useState, useRef } from "react";
import {
  InfoIcon,
  CheckIcon,
  WarningIcon,
  ErroIcon,
  SquareArrowIcon,
  MarkIcon,
  FilePenIcon,
  StarIcon,
  ClipboardIcon,
} from "../../../assets/icons/Icons";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderMobile from "../../../components/HeaderMobile";
import { useNotifications } from "../../../hooks/useNotifications";
import { TYPES } from "../../../utils/typesNotifications";
import Modal from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { Label } from "../../Register/OfferingRegister";
import { CardFooter } from "../../Jobs/components/CreateNewJob";
import { useCreateReview } from "../../../hooks/useReviews";
import Error from "../../../components/Errors/Error";
import Loading from "../../../components/Loading";

// import SockJS from "sockjs-client/dist/sockjs";
// import SockJS from "sockjs-client";
// import { Stomp } from "@stomp/stompjs";

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
  const { user } = useAuth0();
  const [notification, setNotification] = useState({});
  const [errors, setErrors] = useState({});
  const textAreaRef = useRef(null);
  const [rating, setRating] = useState(0);
  const { show, toogle } = useModal();

  const {
    data,
    isLoading: isLoadingNotifications,
    isError: isErrorNotifications,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useNotifications(user.email);
  const notifications = data?.pages?.flatMap((page) => page.content);
  const { handleCreateReview, isLoading } = useCreateReview(user.email, toogle);
  // let stompClient = null;
  // useEffect(() => {
  //   const connectWebSocket = async () => {
  //     try {
  //       const token = await getAccessTokenSilently(); // Asegúrate de esperar el token

  //       const socket = new SockJS("http://localhost:8080/ws");
  //       stompClient = Stomp.over(socket);
  //       stompClient.debug = (str) => {
  //         console.log("STOPM DEBUG", str);
  //       };
  //       stompClient.connect(
  //         { Authorization: `Bearer ${token}` },
  //         () => {
  //           console.log("Connected to the notification service.");

  //           stompClient.subscribe(`/topic/notifications`, (message) => {
  //             console.log(message);
  //             const notification = JSON.parse(message.body);
  //             setNotifications((prevNotifications) => [
  //               ...prevNotifications,
  //               notification,
  //             ]);
  //           });

  //           // stompClient.subscribe(`/user/${user.email}/specific-user/notifications`, (message) => {
  //           //   console.log(message);
  //           //   const notification = JSON.parse(message.body);
  //           //   setNotifications((prevNotifications) => [
  //           //     ...prevNotifications,
  //           //     notification,
  //           //   ]);
  //           // });
  //         },
  //         (error) => {
  //           console.error("Connection error: ", error);
  //         }
  //       );
  //     } catch (error) {
  //       console.error("Error obtaining access token: ", error);
  //     }
  //   };

  //   connectWebSocket();

  //   return () => {
  //     if (stompClient) {
  //       stompClient.disconnect();
  //     }
  //   };
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textAreaRef.current.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        textReview: "Este campo es requerido",
      }));
      return;
    }
    if (rating === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        rating: "Este campo es requerido",
      }));
      return;
    }
    const review = {
      jobId: notification.jobId,
      userEmailReviewer: user.email,
      userEmailReviewed: notification.title.split(" ")[5],
      text: textAreaRef.current.value,
      rating: rating,
    };
    handleCreateReview(review);
    toogle();
  };

  const handleSelectNotification = (notification) => {
    setNotification(notification);
    toogle();
  };

  const handleInputChange = (ref) => {
    const fieldValue = ref.current.value;
    const fieldName = ref.current.name;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: fieldValue ? "" : "Este campo es requerido",
    }));
  };

  return (
    <div className="min-h-screen [grid-area: main] max-[640px]:w-screen  overflow-y-auto bg-gray-50">
      <HeaderMobile />
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl  lg:text-4xl font-bold">
            ¡Bienvenido a Mercado Oficio,{" "}
            <span className="text-yellow-300 ">{user.given_name}</span>!
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 underline text-gray-800">
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
          <h2 className="text-2xl font-semibold underline mb-6 text-gray-800">
            Notificaciones
          </h2>
          <div className="space-y-4">
            {isLoadingNotifications ? (
              <Loading />
            ) : isErrorNotifications ? (
              <Error
                messaje={"Ups ! Ocurrio un error"}
                img={"/src/assets/images/undraw_server_down_s4lk.png"}
              />
            ) : !isLoadingNotifications &&
              !isErrorNotifications &&
              notifications.length === 0 ? (
              <Error
                messaje={"No hay notificaciones por el momento"}
                img={"/src/assets/images/undraw_People_search_re_5rre.png"}
              />
            ) : (
              notifications.length > 0 &&
              notifications.map((notification, index) => (
                <div
                  key={index}
                  className={`bg-white border rounded-lg shadow-md p-4 flex ${
                    notification.type == TYPES.INFO
                      ? "border-blue-200"
                      : notification.type === TYPES.SUCCESS
                      ? "border-green-200"
                      : notification.type === TYPES.WARNING
                      ? "border-yellow-200"
                      : "border-red-300"
                  } gap-2 items-center border-2  transition-all duration-300 hover:shadow-lg`}>
                  <article>
                    {notification.type === TYPES.INFO ? (
                      <InfoIcon className="w-7 h-7 mr-4 mt-1 flex-shrink-0 text-blue-500" />
                    ) : notification.type === TYPES.SUCCESS ? (
                      <CheckIcon className="w-7 h-7 mr-4 mt-1 flex-shrink-0 text-green-500" />
                    ) : notification.type === TYPES.WARNING ? (
                      <WarningIcon className="w-7 h-7 mr-4 mt-1 flex-shrink-0 text-yellow-500" />
                    ) : (
                      <ErroIcon className="w-7 h-7 mr-4 mt-1 flex-shrink-0 text-red-500" />
                    )}
                    <div className="flex justify-between w-full items-center  gap-4 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {notification.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p>
                          <span className="text-xs text-gray-400">
                            {new Date(notification.createdAt)
                              .toLocaleString("en-GB")
                              .substring(0, 10)}
                          </span>
                        </p>
                      </div>
                      {notification.type === TYPES.SUCCESS && (
                        <button
                          disabled={isLoading}
                          onClick={() => handleSelectNotification(notification)}
                          className="px-2 py-1 text-xs flex  outline-none gap-1 bg-white text-gray-500 rounded-md border-gray-400 border-2 hover:text-green-400 hover:border-green-400">
                          <SquareArrowIcon />
                          Crear Reseña
                        </button>
                      )}
                      <label className="flex text-xs gap-1">
                        <input type="checkbox" />
                        <h6 className="text-gray-500">Marcar como leido</h6>
                      </label>
                    </div>
                  </article>
                </div>
              ))
            )}
            {!isLoadingNotifications &&
              !isErrorNotifications &&
              hasNextPage === false && (
                <p className="text-gray-600 text-center">
                  No hay mas notificaciones
                </p>
              )}

            {!isLoadingNotifications &&
              !isErrorNotifications &&
              hasNextPage && (
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => fetchNextPage()}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Cargar mas
                  </button>
                </div>
              )}

            <Modal show={show}>
              {" "}
              <div className="w-full relative bg-white p-2 rounded-md m-1  max-h-[575px] max-w-2xl">
                <div
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setErrors({});
                    setRating(0);
                    toogle();
                  }}>
                  <MarkIcon />
                </div>
                <header className="p-2 flex flex-col items-start justify-center">
                  <h1>
                    <InfoIcon className="inline-block h-6 w-6 mr-2" />
                    Crear nueva reseña
                  </h1>
                  <div className="w-full border border-gray-300 my-1"></div>
                  <p className="text-gray-500 text-sm">
                    Escribe una reseña sobre tu experiencia con el profesional
                    que contrataste o el trabajo que realizaste.
                  </p>
                </header>
                <div className="mt-3">
                  <form
                    className="grid gap-6"
                    onSubmit={(e) => handleSubmit(e)}>
                    <div className="space-y-2 px-7">
                      <Label htmlFor="title" className="text-sm underline">
                        <FilePenIcon className="inline-block h-5 w-5 mr-2" />
                        Texto de la reseña{" "}
                      </Label>
                      <textarea
                        onChange={() => handleInputChange(textAreaRef)}
                        ref={textAreaRef}
                        name="textReview"
                        id="textReview"
                        placeholder="Escribe tu reseña aquí..."
                        className="min-h-[75px] resize-none outline-none  max-h-[200px] min-w-full p-1 border-2 border-gray-400 rounded-md text-sm"
                      />
                      {errors.textReview && (
                        <span className="text-xs p-1 underline text-red-500">
                          {errors.textReview}
                        </span>
                      )}
                    </div>
                    <div className="grid gap-2 px-7">
                      <Label
                        htmlFor="rating"
                        className="text-sm underline font-medium">
                        <ClipboardIcon className="inline-block h-5 w-5 mr-2" />
                        Calificación
                      </Label>
                      <div className="flex items-center space-x-2" id="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`w-6 h-6 cursor-pointer transition-colors ${
                              star <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => {
                              setRating(star);
                              errors.rating = "";
                            }}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium">
                          {rating} de 5
                        </span>
                        {errors.rating && (
                          <span className="text-xs p-1 underline text-red-500">
                            {errors.rating}
                          </span>
                        )}
                      </div>
                    </div>
                    <CardFooter>
                      <button
                        disabled={
                          isLoading || errors.textReview || errors.rating
                        }
                        type="submit"
                        className={`w-1/2 mx-auto ${
                          errors.textReview || isLoading
                            ? "opacity-20"
                            : " hover:bg-blue-600"
                        }  p-2  bg-black text-white  rounded-md`}>
                        Crear
                      </button>
                    </CardFooter>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </section>
      </main>
    </div>
  );
}
