import { useEffect } from "react";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";

import NewPost from "../components/posts/NewPost";
import useAxios from "../hooks/useAxios";
import { usePost } from "../hooks/usePost";

const HomePage = () => {
  const { state, dispatch } = usePost();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions?.post?.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(`http://localhost:3000/posts`);
        if (response.status === 200) {
          dispatch({
            type: actions?.post?.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: response.error,
        });
      }
    };

    fetchPost();
  }, []);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }

  console.log("HomePage component rendered with posts:", state?.posts);
  return (
    <div className="container mx-auto px-4">
      <NewPost />
      <PostList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
