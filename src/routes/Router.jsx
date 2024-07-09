import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "../views/Overview/Overview";
import Error404 from "@components/Errors/Error404";
import Login from "../views/Login/Login";
import Register, { action as registerAction } from "../views/Register/Register";
import SubRegister from "../views/Register/SubRegister";
import OfferingRegister, {
  action as offeringAction,
  loader as categoriesLoader,
} from "../views/Register/OfferingRegister";
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
    action: registerAction,
    element: <Register />,
  },
  {
    path: "/subregister",
    element: <SubRegister />,
    children: [
      {
        path: "provider",
        element: <OfferingRegister />,
        loader: categoriesLoader,
        action: offeringAction,
      },
    ],
  },
  {
    path: "/home/*",
    element: <Home />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
