import { createTestStore } from "../../../test/helpers/store";
import {
  resetConfirmPassword,
  resetEmail,
  resetPassword,
  setConfirmPassword,
  setEmail,
  setIsValid,
  setPassword,
} from "./newUserSlice";

// import { selectEmail } from "./selectors";
// import { useAppSelector } from "../../store";

describe("newUserSlice test", () => {
  describe("inital state", () => {
    it("Should initially set properties of newUser to empty", () => {
      const testStore = createTestStore();
      const initialState = testStore.getState().newUser;
      expect(initialState).toEqual({
        email: "",
        password: "",
        confirmPassword: "",
        isValid: false,
      });
    });
  });

  //   TODO: Find out if selectors can / should be tested here.
  //   describe("selectEmail", () => {
  //     it("gets the email from the store", () => {
  //         const testStore = createTestStore();

  //         testStore.dispatch(setEmail("bob@myemail.co.uk"));

  //         const email = useAppSelector(selectEmail);
  //         expect(email).toEqual(
  //             "bob@myemail.co.uk"
  //           );
  //     });
  //   });

  describe("setEmail", () => {
    it("updates the email in the store", () => {
      const testStore = createTestStore();

      testStore.dispatch(setEmail("bob@myemail.co.uk"));

      const updatedState = testStore.getState();

      expect(updatedState.newUser.email).toEqual("bob@myemail.co.uk");
    });
  });

  describe("resetEmail", () => {
    it("resets just the email in the store back to empty", () => {
      const testStore = createTestStore();

      testStore.dispatch(setEmail("bob@myemail.co.uk"));
      testStore.dispatch(setPassword("T3stP@ssw0rd"));
      testStore.dispatch(setConfirmPassword("T3stP@ssw0rd"));
      testStore.dispatch(setIsValid(true));
      testStore.dispatch(resetEmail());

      const updatedState = testStore.getState();

      expect(updatedState.newUser).toEqual({
        email: "",
        password: "T3stP@ssw0rd",
        isValid: true,
        confirmPassword: "T3stP@ssw0rd",
      });
    });
  });

  describe("setPassword", () => {
    it("updates the password in the store", () => {
      const testStore = createTestStore();

      testStore.dispatch(setPassword("T3stP@ssw0rd"));

      const updatedState = testStore.getState();

      expect(updatedState.newUser.password).toEqual("T3stP@ssw0rd");
    });
  });

  describe("resetPassword", () => {
    it("resets just the password in the store back to empty", () => {
      const testStore = createTestStore();

      testStore.dispatch(setEmail("bob@myemail.co.uk"));
      testStore.dispatch(setPassword("T3stP@ssw0rd"));
      testStore.dispatch(setConfirmPassword("T3stP@ssw0rd"));
      testStore.dispatch(setIsValid(true));
      testStore.dispatch(resetPassword());

      const updatedState = testStore.getState();

      expect(updatedState.newUser).toEqual({
        email: "bob@myemail.co.uk",
        password: "",
        confirmPassword: "T3stP@ssw0rd",
        isValid: true,
      });
    });
  });

  describe("setIsValid", () => {
    it("updates isValid", () => {
      const testStore = createTestStore();

      testStore.dispatch(setIsValid(true));

      const updatedState = testStore.getState();

      expect(updatedState.newUser.isValid).toEqual(true);
    });
  });
});
