import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const selectFormState = (state: RootState) => state.form;

export const selectUserName = createSelector(
  [selectFormState],
  (formState) => formState.name
);
