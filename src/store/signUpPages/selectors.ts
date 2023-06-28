import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const signUpPageState = (state: RootState) => state.signUpPages;

export const selectPageByIndex = (indexIn: number) =>
  createSelector([signUpPageState], (pageState) => {
    return pageState.pages[indexIn];
  });

// Testing alternative
export const findPageByIndex = (indexIn: number) =>
  createSelector([signUpPageState], (pageState) => {
    return pageState.pages.find(({ index }) => index === indexIn);
  });

export const selectLastPage = createSelector([signUpPageState], (pageState) => {
  const lastIndex = pageState.pages.length - 1;
  return pageState.pages[lastIndex];
});

export const selectNumPages = createSelector(
  [signUpPageState],
  (pageState) => pageState.pages.length
);
