import React from "react";
import ProfileMainSection from "./components/ProfileMainSection";
import HeaderMobile from "../../components/HeaderMobile";
import Loading from "../../components/Loading";
import { useState, useRef, useEffect } from "react";
import { useUserByEmail } from "@hooks/useUsers";
import { useGetUserOffering } from "../../hooks/useGetUsersOffering";
import { ProfileProvider } from "./components/ProfileContext";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [expandText, setExpandText] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const toggleExpand = () => {
    setExpandText(!expandText);
  };
  const refBiography = useRef(null);
  useEffect(() => {
    if (refBiography.current) {
      setShowReadMoreButton(
        refBiography.current.scrollHeight !== refBiography.current.clientHeight
      );
    }
  }, []);
  const USER_EMAIL = useParams().userEmail;
  const { data: userData, isError, isLoading } = useUserByEmail(USER_EMAIL);

  const {
    data: userOffering,
    isError: isErrorUserOffering,
    isLoading: isLoadingUserOffering,
  } = useGetUserOffering("Dallin74@hotmail.com");

  return (
    <ProfileProvider userData={userData}>
      <div className=" w-full  max-[640px]:w-screen overflow-y-scroll">
        <HeaderMobile />
        <header className="flex gap-4 my-2 p-2  justify-start w-full">
          <img
            src=" 
        https://randomuser.me/api/portraits/women/79.jpg
        "
            alt="profile image"
            className="rounded-full  w-24 h-24 border-2 border-white
          max-[640px]:w-20 max-[640px]:h-20  max-[640px]:border-0        "
          />
          {isLoading || isError ? (
            <Loading />
          ) : (
            <div className="flex-col items-center mt-5 ">
              <h1 className="text-3xl max-[640px]:text-xl font-inter">
                {userData?.name} {userData?.surname}
              </h1>
              <h2 className="font-inter  text-lg  max-[640px]:text-base text-gray-500">
                {userData?.email}
              </h2>
              <p
                ref={refBiography}
                className={`text-base font-inter text-gray-400 p-1  max-w-xl ${
                  expandText ? "" : "line-clamp-3 overflow-hidden"
                } `}>
                {" "}
                {userData?.biography}
              </p>
              {showReadMoreButton && (
                <button
                  onClick={toggleExpand}
                  className="text-blue-500  rounded-full font-inter  bg-slate-200 p-2 text-ellipsis  outline-none">
                  {expandText ? "Ver menos" : "Ver más"}
                </button>
              )}
            </div>
          )}
        </header>
        {isLoading || isError ? (
          <Loading />
        ) : (
          <section className="my-4 w-full py-2 flex-row">
            <ProfileMainSection />
          </section>
        )}
      </div>
    </ProfileProvider>
  );
};

export default Profile;
