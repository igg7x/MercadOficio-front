import React from "react";
import ProfileMainSection from "./components/ProfileMainSection";
import HeaderMobile from "../../components/HeaderMobile";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useUserByEmail, useUserData } from "../../hooks/useUsers";
import Loading from "../../components/Loading";
const Profile = () => {
  let { userEmail } = useParams();
  const { user } = useAuth0();
  const { userData, isLoading } = useUserData(userEmail);
  return (
    <div className=" w-full bg-gray-50  max-[640px]:w-screen overflow-y-scroll">
      <HeaderMobile />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="flex gap-4 my-2 p-2  justify-start w-full">
            <img
              src={userData?.picture}
              alt="profile image"
              className="rounded-full  w-24 h-24 border-2 border-white
          max-[640px]:w-16 max-[640px]:h-16  max-[345px]:h-14 max-[345px]:w-14 max-[640px]:border-0        "
            />
            <div className="flex-col mt-5 flex">
              <h1 className="text-2xl max-[640px]:text-base  max-[345px]:text-sm  font-inter">
                {userData?.name} {userData?.surname}
              </h1>
              <h2 className="text-lg  max-[640px]:text-base max-[345px]:text-sm text-gray-500">
                {userData?.email}
              </h2>
            </div>
          </header>
          <section className="my-4 w-full py-2 flex-row">
            <ProfileMainSection />
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
