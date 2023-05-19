import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialUserState } from "./state";

const userSlice = createSlice({
  name: "user",
  initialState: createInitialUserState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    setAvatarPending(state) {
      state.isLoading = true;
    },

    setAvatarResolved(state, action: PayloadAction<string>) {
      state.avatarUrl = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setName, setAvatarResolved, setAvatarPending } =
  userSlice.actions;

export default userSlice.reducer;
