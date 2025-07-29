import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    // console.log(auth);
    // console.log(api, "...bal");
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `http://localhost:3000/profile/${auth?.user?.id}`
        );

        // console.log(response);
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [api, auth]);

  if (loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <div>
      Welcome, {user?.firstName} {user?.lastName}
      <p>You have {posts?.length} posts.</p>
    </div>
  );
};

export default ProfilePage;
