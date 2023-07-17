import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const signUpPageState = (state: RootState) => state.signUpPages;

export const selectPageByIndex = (pageId: number) =>
  createSelector([signUpPageState], (pageState) => {
    return pageState.pages[pageId];
  });

export const selectIsValid = (pageId: string) =>
  createSelector([signUpPageState], (pageState) => {
    const page = pageState.pages.find((page) => page.id === pageId);
    if (page) {
      return page.isValid;
    }
    return false;
  });

export const pageExists = (pageId: string) =>
  createSelector([signUpPageState], (pageState) => {
    const page = pageState.pages.find((page) => page.id === pageId);
    return !(page === null || page === undefined);
  });

export const selectNumPages = createSelector(
  [signUpPageState],
  (pageState) => pageState.pages.length
);

export const selectMessages = (pageId: string) =>
  createSelector([signUpPageState], (pageState) => {
    const page = pageState.pages.find((page) => page.id === pageId);
    if (page) {
      return page.messages;
    }

    // TODO: Throw an error here?
    return [{ isError: true, text: "Page not found" }];
  });

// TODO: Test all following if needed?
// Testing alternative - working?
// export const findPageByIndex = (pageId: string) =>
//   createSelector([signUpPageState], (pageState) => {
//     return pageState.pages.find(({ id }) => id === pageId);
//   });
// export const selectLastPage = createSelector([signUpPageState], (pageState) => {
//   const lastIndex = pageState.pages.length - 1;
//   return pageState.pages[lastIndex];
// });
