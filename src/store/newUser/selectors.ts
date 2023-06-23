import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const selectNewUserState = (state: RootState) => state.newUser;

export const selectEmail = createSelector(
  [selectNewUserState],
  (newUserState) => newUserState.email
);
