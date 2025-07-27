import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorRoute from "./ErrorRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/me",
    element: <ProfilePage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },

  {
    path: "*",
    element: "not fuond",
  },
]);
