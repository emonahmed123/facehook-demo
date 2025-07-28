import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorRoute from "./ErrorRoute";
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <App></App>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <HomePage />,
          </PrivateRoutes>
        ),
      },

      {
        path: "me",
        element: (
          <PrivateRoutes>
            <ProfilePage />
          </PrivateRoutes>
        ),
      },
    ],
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },

  {
    path: "/registration",
    element: <RegistrationPage />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },

  {
    path: "*",
    element: "not fuond",
  },
]);
