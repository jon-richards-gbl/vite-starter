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
      state.avatarSvg.isLoading = true;
    },

    setAvatarRejected(state, action: PayloadAction<unknown>) {
      state.avatarSvg.isLoading = false;
      state.avatarSvg.error = action.payload;
    },

    setAvatarResolved(state, action: PayloadAction<string>) {
      state.avatarSvg.data = action.payload;
      state.avatarSvg.isLoading = false;
      state.avatarSvg.error = null;
    },
  },
});

export const {
  setName,
  setAvatarResolved,
  setAvatarPending,
  setAvatarRejected,
} = userSlice.actions;

export default userSlice.reducer;
