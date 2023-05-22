import { createTestStore } from "../../../test/helpers/store";
import { setUserName } from "./userSlice";

describe("userSlice", () => {
  describe("setUsername", () => {
    it("updates the username in the store", () => {
      const testStore = createTestStore();

      testStore.dispatch(setUserName("John Smith"));

      const updatedState = testStore.getState();

      expect(updatedState.user).toEqual({ name: "John Smith" });
    });
  });
});
