import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const signUpPageState = (state: RootState) => state.signUpPages;

export const selectPageWithIndex = createSelector(
  [signUpPageState, (signUpPageState, index: number) => index],
  (signUpPageState, index) => {
    return signUpPageState.pages[index];
  }
);
