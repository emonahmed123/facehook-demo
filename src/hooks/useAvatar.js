import useProfile from "./useProfile";

export const useAvatar = (post) => {
    const { state } = useProfile();

    const isMe = post?.author?.id === state?.user?.id;
    const avatar = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`;

    const avatarURL = `http://localhost:3000/${avatar}`;

    return { avatarURL };
};
