import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserDataContext } from "../views/Profile/components/ProfileContext";
const RoleGuard = ({ allowedRoles, component: Component }) => {
  const { userData } = useUserDataContext();
  const { isAuthenticated } = useAuth0();
  const userRoles = userData?.roles || [];
  const hasAccess = userRoles.some((rol) => allowedRoles.includes(rol));
  return hasAccess && isAuthenticated ? <Component /> : <Navigate to="/home" />;
};

export default RoleGuard;
