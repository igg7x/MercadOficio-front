import React, { createContext, useContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children, userData }) => {
  return (
    <ProfileContext.Provider value={{ userData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useUserDataContext = () => {
  return useContext(ProfileContext);
};
