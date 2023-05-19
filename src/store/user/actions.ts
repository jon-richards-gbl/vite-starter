import { userService } from "../../services/userService";
import { ActionWithThunk } from "../../types/store";
import { setAvatarPending, setAvatarResolved } from "./userSlice";

export const fetchAvatar = (): ActionWithThunk => {
  return async (dispatch, getState) => {
    dispatch(setAvatarPending);

    const { name } = getState().user;
    const avatar = await userService.getUserAvatar(name);

    dispatch(setAvatarResolved(avatar));
  };
};
