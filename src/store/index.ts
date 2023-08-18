import { configureStore } from "@reduxjs/toolkit";
// this is the only place these imports are allowed. everywhere else should use the app dispatch + app selector from this file
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import formReducer from "./form/formSlice";
import userReducer from "./user/userSlice";

export const createStore = (preloadedState = {}) =>
  configureStore({
    preloadedState,
    reducer: {
      user: userReducer,
      form: formReducer,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof createStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
