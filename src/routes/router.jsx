import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../serviceData.json"),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          const res = await fetch("../serviceData.json");
          const data = await res.json();

          const singleData = data.find((d) => d.id == params.id);

          return singleData;
        },
      },
    ],
  },
]);

export default router;
