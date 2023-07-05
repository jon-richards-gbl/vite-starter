import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialFormState } from "./formState";

const formSlice = createSlice({
  name: "form",
  initialState: createInitialFormState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setUserWeight(state, action: PayloadAction<string>) {
      state.weight = action.payload;
    },
    setUserTime(state, action: PayloadAction<string>) {
      state.time = action.payload;
    },
    setUserDropdown(state, action: PayloadAction<string>) {
      state.dropdown = action.payload;
    },
    setUserCalsBun(state, action: PayloadAction<string | number>) {
      state.calsBun = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserWeight,
  setUserTime,
  setUserDropdown,
  setUserCalsBun,
} = formSlice.actions;

export default formSlice.reducer;
