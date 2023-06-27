import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialUserState } from "../user/state";
import { createInitialNewUserState } from "./state";

// Redux store slice created to store the new user data input
// during registration process by the SignUpPage and it's child components

const newUserSlice = createSlice({
  // name of the slice to identify it and differentiate from other slices
  name: "newUser",
  initialState: createInitialNewUserState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    resetEmail(state) {
      state.email = "";
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    resetPassword(state) {
      state.password = "";
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
    },
    resetConfirmPassword(state) {
      state.confirmPassword = "";
    },
  },
});

// Action creators are generated for each case reducer function
// Export all the actions so that they can be used in ALL
// components in the application
export const {
  setEmail,
  resetEmail,
  setPassword,
  resetPassword,
  setConfirmPassword,
  resetConfirmPassword,
} = newUserSlice.actions;

export default newUserSlice.reducer;
