import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import ErrorPage from "../../ErrorPage";
import Profile from "../pages/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
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
