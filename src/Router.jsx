import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";

const routerPaths = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/cityData/:cityId",
    element: <DashboardPage />,
  },
];

const routes = createBrowserRouter(routerPaths);

export const Router = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};
