import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialNewUserState } from "./state";

// Redux store slice created to store the new user data input
// during registration process by the SignUpPage and child components

const newUserSlice = createSlice({
  // name of the slice to identify it and differentiate from other slices
  name: "newUser",
  initialState: createInitialNewUserState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload;
    },
    resetEmail(state) {
      state.email = "";
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    resetUserPassword(state) {
      state.password = "";
    },
  },
});

// Action creators are generated for each case reducer function
// Export all the actions so that they can be used in ALL
// components in the application
export const { setEmail } = newUserSlice.actions;
export const { resetEmail } = newUserSlice.actions;

export default newUserSlice.reducer;
