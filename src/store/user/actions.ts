import { serializeError } from "../../helpers/errors";
import { userService } from "../../services/userService";
import { ActionWithThunk } from "../../types/store";
import {
  setAvatarPending,
  setAvatarRejected,
  setAvatarResolved,
} from "./userSlice";

export const fetchAvatar = (): ActionWithThunk => {
  return async (dispatch, getState) => {
    const { name } = getState().user;

    if (!name) {
      dispatch(setAvatarRejected(serializeError(new Error("No Name Set"))));
      return;
    }

    dispatch(setAvatarPending);

    try {
      const avatar = await userService.getUserAvatar(name);

      dispatch(setAvatarResolved(avatar));
    } catch (error) {
      dispatch(setAvatarRejected(serializeError(error)));
    }
  };
};
