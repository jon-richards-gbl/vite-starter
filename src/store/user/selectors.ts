import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const selectUserState = (state: RootState) => state.user;

export const selectUserAvatar = createSelector(
  [selectUserState],
  (userState) => userState.avatarSvg.data
);
export const selectIsUserLoading = createSelector(
  [selectUserState],
  (userState) => userState.avatarSvg.isLoading
);
export const selectUserName = createSelector(
  [selectUserState],
  (userState) => userState.name
);
