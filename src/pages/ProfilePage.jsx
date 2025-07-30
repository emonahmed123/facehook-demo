import { useEffect } from "react";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
const ProfilePage = () => {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    // console.log(auth);
    // console.log(api, "...bal");
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `http://localhost:3000/profile/${auth?.user?.id}`
        );

        // console.log(response);
        // dispatch(response?.data?.user);
        // setPosts(response?.data?.posts);
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        // setError(error);

        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [api, auth]);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default ProfilePage;
