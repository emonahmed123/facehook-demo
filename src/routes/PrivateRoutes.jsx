import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";
const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <ProfileProvider>{children}</ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
