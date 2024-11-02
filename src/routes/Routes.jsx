import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        // index: true,
        element: <Home></Home>,
        children: [],
      },

      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
