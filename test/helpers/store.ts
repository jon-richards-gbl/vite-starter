import { RootState, createStore } from "../../src/store";

export function createTestStore(initialState: Partial<RootState> = {}) {
  return createStore(initialState);
}
