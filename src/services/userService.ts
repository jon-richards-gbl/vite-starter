import axios from "axios";

// https://www.dicebear.com/styles/fun-emoji
const AVATAR_API_ROOT = "https://api.dicebear.com";

export const userService = {
  getUserAvatar: async (name: string) => {
    const url = `${AVATAR_API_ROOT}/6.x/fun-emoji/svg`;

    const res = await axios.get(url, { params: { seed: name } });

    // the avatar api is pretty fast, so just adding this to include some visual delay.
    await new Promise((resolve) => setTimeout(resolve, 500));

    return res.data;
  },
};
