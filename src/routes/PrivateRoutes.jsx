import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PostProvider from "../providers/PostProvider";
import ProfileProvider from "../providers/ProfileProvider";
const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <PostProvider>
          <ProfileProvider>{children}</ProfileProvider>
        </PostProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
