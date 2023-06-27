import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SignUpPage, createInitialSignUpPagesState } from "./state";

/* Store the state of each of sign up form pages as an array of 
objects. */
const signUpPageSlice = createSlice({
  // name of the slice to identify it and differentiate from other slices
  name: "signUpPages",
  initialState: createInitialSignUpPagesState,
  reducers: {
    addPage(state, action: PayloadAction<SignUpPage>) {
      const newPage: SignUpPage = action.payload;
      newPage.index = state.pages.length;
      state.pages.push(newPage);
    },
    updatePage(state, action: PayloadAction<SignUpPage>) {
      state.pages[action.payload.index] = action.payload;
    },
    resetPages(state) {
      state.pages = new Array<SignUpPage>();
    },
  },
});

export const { addPage } = signUpPageSlice.actions;

export default signUpPageSlice.reducer;
