import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CoffeeCards from "../components/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        // index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),

        children: [
          {
            path: "/cards/:category",
            element: <CoffeeCards></CoffeeCards>,
          },
        ],
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

export { routes };
