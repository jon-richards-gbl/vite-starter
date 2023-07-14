import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  SignUpPageInformation,
  ValidationMessage,
  createInitialSignUpPagesState,
} from "./state";

/* Store the state of each of sign up form pages as an array of 
objects. */
const signUpPageSlice = createSlice({
  // name of the slice to identify it and differentiate from other slices
  name: "signUpPages",
  initialState: createInitialSignUpPagesState,
  reducers: {
    // addPage(state, action: PayloadAction<SignUpPageInformation>): void {
    //   const newPage: SignUpPageInformation = action.payload;
    //   newPage.index = state.pages.length;
    //   state.pages.push(newPage);
    // },
    createPage(state, action: PayloadAction<string>): void {
      // Ensure page does not already exist
      const page = state.pages.find((page) => page.id === action.payload);
      if (page === undefined || page === null) {
        const newPage: SignUpPageInformation = {
          id: action.payload,
          isValid: false,
          messages: [],
        };

        state.pages.push(newPage);
      }
    },
    setValidTrue(state, action: PayloadAction<string>): void {
      const pageFound = state.pages.find((page) => page.id === action.payload);
      if (pageFound) {
        pageFound.isValid = true;
      }
    },
    setValidFalse(state, action: PayloadAction<string>): void {
      const page = state.pages.find((page) => page.id === action.payload);
      if (page) {
        page.isValid = false;
      }
    },
    resetMessages(state, action: PayloadAction<string>) {
      const page = state.pages.find((page) => page.id === action.payload);
      if (page) {
        page.messages = [];
      }
    },

    addMessage(
      state,
      action: PayloadAction<{ message: ValidationMessage; pageId: string }>
    ): void {
      const page = state.pages.find(
        (page) => page.id === action.payload.pageId
      );
      if (page) {
        page.messages.push(action.payload.message);
      }
    },
    resetPages(state) {
      state.pages = new Array<SignUpPageInformation>();
    },
  },
});

export const {
  createPage,
  setValidTrue,
  setValidFalse,
  resetPages,
  resetMessages,
  addMessage,
} = signUpPageSlice.actions;

export default signUpPageSlice.reducer;
