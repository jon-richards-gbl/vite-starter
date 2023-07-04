import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const signUpPageState = (state: RootState) => state.signUpPages;

export const selectPageByIndex = (indexIn: number) =>
  createSelector([signUpPageState], (pageState) => {
    return pageState.pages[indexIn];
  });

export const selectIsValid = (indexIn: string) =>
  createSelector([signUpPageState], (pageState) => {
    // return pageState.pages[indexIn].isValid;
    const page = pageState.pages.find((page) => page.id === indexIn);
    if (page) {
      return page.isValid;
    }
    return false;
  });

export const pageExists = (indexIn: string) =>
  createSelector([signUpPageState], (pageState) => {
    const page = pageState.pages.find((page) => page.id === indexIn);
    return !(page === null || page === undefined);
  });

export const selectNumPages = createSelector(
  [signUpPageState],
  (pageState) => pageState.pages.length
);

export const selectMessages = (indexIn: string) =>
  createSelector([signUpPageState], (pageState) => {
    const page = pageState.pages.find((page) => page.id === indexIn);
    return page?.messages;
  });

// TODO: Test all following
// Testing alternative - working?
// export const findPageByIndex = (indexIn: string) =>
//   createSelector([signUpPageState], (pageState) => {
//     return pageState.pages.find(({ id }) => id === indexIn);
//   });
// export const selectLastPage = createSelector([signUpPageState], (pageState) => {
//   const lastIndex = pageState.pages.length - 1;
//   return pageState.pages[lastIndex];
// });
