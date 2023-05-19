import { userService } from "../../services/userService";
import { ActionWithThunk } from "../../types/store";
import { setAvatarPending, setAvatarResolved } from "./userSlice";

export const fetchAvatar = (name: string): ActionWithThunk => {
  return async (dispatch) => {
    dispatch(setAvatarPending);

    const avatar = await userService.getUserAvatar(name);
    dispatch(setAvatarResolved(avatar));
  };
};
