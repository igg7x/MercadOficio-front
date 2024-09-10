import React from "react";
import { useRoutes } from "react-router-dom";
import Overview from "../views/Overview/Overview";
import Error404 from "@components/Errors/Error404";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import SubRegister from "../views/Register/SubRegister";
import OfferingRegister from "../views/Register/OfferingRegister";
import Home from "../views/Home/Home";
import CallBackPage from "../auth/CallBackPage";
import AuthenticationGuard from "../auth/AuthenticationGuard";
import PostLoginPage from "../auth/PostLoginPage";
const router = [
  {
    path: "/",
    element: <Overview />,
    errorElement: <Error404 />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/subregister/*",
    // element: <AuthenticationGuard component={SubRegister} />,
    element: <SubRegister />,
    children: [
      {
        path: "offering",
        // element: <AuthenticationGuard component={OfferingRegister} />,
        element: <OfferingRegister />,
      },
    ],
  },
  {
    path: "/callback",
    element: <CallBackPage />,
  },
  {
    path: "/postlogin",
    element: <PostLoginPage />,
  },
  {
    path: "/home/*",
    element: <AuthenticationGuard component={Home} />,
  },
];

const Router = () => {
  let AppRoutes = useRoutes(router);
  return AppRoutes;
};

export default Router;
