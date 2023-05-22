import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialUserState } from "./state";

const userSlice = createSlice({
  name: "user",
  initialState: createInitialUserState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
