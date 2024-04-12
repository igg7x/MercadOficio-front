import React from "react";
import ProfileMainSection from "./components/ProfileMainSection";
import HeaderMobile from "../../components/HeaderMobile";

const Profile = () => {
  return (
    <div className=" w-full max-[640px]:w-screen">
      <HeaderMobile />
      <div className="flex w-full items-center my-2  p-2 max-w-lg gap-5">
        <img
          src=" 
        https://randomuser.me/api/portraits/women/79.jpg
        "
          alt="profile image"
          className="rounded-full  w-24 h-24 border-2 border-white
          max-[640px]:w-20 max-[640px]:h-20  max-[640px]:border-0        "
        />
        <div className="flex-col items-center ">
          <h1 className="text-3xl max-[640px]:text-xl font-semibold">
            Alivika Tony
          </h1>
          <h2 className="font-semibold max-[640px]:text-base text-gray-400">
            Alivikatonu@gmail.com
          </h2>
        </div>
      </div>
      <section className="my-4 w-full py-2 flex-row">
        <ProfileMainSection />
      </section>
    </div>
  );
};

export default Profile;
