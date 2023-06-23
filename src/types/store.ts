import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface AsyncData<T> {
  isLoading: boolean;
  data: T;
  error: unknown | null;
}

// A 'thunk' is a piece of code that does some delayed work.
// In Redux, 'thunks' are a pattern of writing functions with logic inside
// that can interact with a Redux store's dispatch and getState methods.
// ThunkAction - Callback function that can be dispatched to the Redux store
export type ActionWithThunk<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  AnyAction
>;
