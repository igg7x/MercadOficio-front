import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "../views/Overview/Overview";
import Error404 from "../views/Errors/Error404";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import CustomerRegister from "../views/Register/CustomerRegister";
import OfferingRegister from "../views/Register/OfferingRegister";
import Home from "../views/Home/Home";

const router = createBrowserRouter([
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
    path: "/register/customer",
    element: <CustomerRegister />,
  },
  {
    path: "/register/offering",
    element: <OfferingRegister />,
  },
  { path: "/home", element: <Home /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
