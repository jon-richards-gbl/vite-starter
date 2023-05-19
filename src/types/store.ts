import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface AsyncData<T> {
  isLoading: boolean;
  data: T;
  error: unknown | null;
}

export type ActionWithThunk<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  AnyAction
>;
