import axios from "axios";

// https://www.dicebear.com/styles/fun-emoji
const AVATAR_API_ROOT = "https://api.dicebear.com";

export const userService = {
  getUserAvatar: async (name: string) => {
    const url = `${AVATAR_API_ROOT}/6.x/fun-emoji/svg`;

    const res = await axios.get(url, { params: { seed: name } });

    return res.data;
  },
};
