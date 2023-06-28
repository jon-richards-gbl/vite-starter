import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const signUpPageState = (state: RootState) => state.signUpPages;

export const selectPageByIndex = createSelector(
  [signUpPageState, (signUpPageState, index: number) => index],
  (signUpPageState, index) => {
    return signUpPageState.pages[index];
  }
);

export const selectLastPage = createSelector(
  [signUpPageState],
  (newPageState) => {
    const lastIndex = newPageState.pages.length - 1;
    return newPageState.pages[lastIndex];
  }
);

export const selectNumPages = createSelector(
  [signUpPageState],
  (newPageState) => newPageState.pages.length
);
