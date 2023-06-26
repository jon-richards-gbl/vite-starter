import { createTestStore } from "../../../test/helpers/store";
import { setEmail, setPassword } from "./newUserSlice";

describe("newUserSlice test", () => {
  describe("inital state", () => {
    it("Should initially set properties of newUser to empty", () => {
      const testStore = createTestStore();
      const initialState = testStore.getState().newUser;
      expect(initialState).toEqual({ email: "", password: "" });
    });
  });

  describe("setEmail", () => {
    it("updates the email in the store", () => {
      const testStore = createTestStore();

      testStore.dispatch(setEmail("bob@myemail.co.uk"));

      const updatedState = testStore.getState();

      expect(updatedState.newUser).toEqual({
        email: "bob@myemail.co.uk",
        password: "",
      });
    });
  });

  describe("setPassword", () => {
    it("updates the password in the store", () => {
      const testStore = createTestStore();

      testStore.dispatch(setPassword("T3stP@ssw0rd"));

      const updatedState = testStore.getState();

      expect(updatedState.newUser).toEqual({
        email: "",
        password: "T3stP@ssw0rd",
      });
    });
  });
});
