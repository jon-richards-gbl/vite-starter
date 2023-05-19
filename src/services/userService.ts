import axios from "axios";

const AVATAR_API_ROOT = "https://source.boringavatars.com";

export const userService = {
  // https://github.com/boringdesigners/boring-avatars-service
  getUserAvatar: async (name: string) => {
    const url = `${AVATAR_API_ROOT}/beam/160/${encodeURIComponent(name)}`;
    const res = await axios.get(url);

    // the avatar api is pretty fast, so just adding this to include some visual delay. it's safe to be removed
    await new Promise((resolve) => setTimeout(resolve, 500));

    return res.data;
  },
};
