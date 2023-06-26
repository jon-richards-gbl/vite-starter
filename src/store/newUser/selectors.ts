import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const selectNewUserState = (state: RootState) => state.newUser;

// createSelector() - Accepts one or more "input selectors"
// (either as separate arguments or a single array), a single
// "output selector" / "result function", and an optional options
// object, and generates a memoized selector function.
export const selectEmail = createSelector(
  selectNewUserState,
  (newUserState) => newUserState.email
);

export const selectPassword = createSelector(
  selectNewUserState,
  (newUserState) => newUserState.password
);

export const selectIsValid = createSelector(
  selectNewUserState,
  (newUserState) => newUserState.isValid
);
