import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SignUpPageInformation, createInitialSignUpPagesState } from "./state";

/* Store the state of each of sign up form pages as an array of 
objects. */
const signUpPageSlice = createSlice({
  // name of the slice to identify it and differentiate from other slices
  name: "signUpPages",
  initialState: createInitialSignUpPagesState,
  reducers: {
    addPage(state, action: PayloadAction<SignUpPageInformation>): void {
      const newPage: SignUpPageInformation = action.payload;
      newPage.index = state.pages.length;
      state.pages.push(newPage);
    },
    updatePage(state, action: PayloadAction<SignUpPageInformation>): void {
      state.pages[action.payload.index] = action.payload;
    },
    resetPages(state) {
      state.pages = new Array<SignUpPageInformation>();
    },
  },
});

export const { addPage, updatePage, resetPages } = signUpPageSlice.actions;

export default signUpPageSlice.reducer;
