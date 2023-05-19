import { configureStore } from "@reduxjs/toolkit";
// this is the only place these imports are allowed. everywhere else should use the app dispatch + app selector from this file
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import userReducer from "./user/userSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
