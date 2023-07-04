import { createTestStore } from "../../../test/helpers/store";
import {
  addMessage,
  createPage,
  resetMessages,
  setValidTrue,
} from "./signUpPagesSlice";
import { SignUpPageInformation } from "./state";

describe("signUpPagesSlice", () => {
  describe("createPage", () => {
    it("creates a new page in the store", () => {
      const testStore = createTestStore();
      const id = "New Test Page";

      testStore.dispatch(createPage(id));

      const newPage: SignUpPageInformation = {
        id: "New Test Page",
        isValid: false,
        messages: [],
      };

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  describe("setValidTrue", () => {
    it("updates the isValid status for a page", () => {
      const testStore = createTestStore();
      const id = "New Test Page";

      testStore.dispatch(createPage(id));

      const newPage: SignUpPageInformation = {
        id: "New Test Page",
        isValid: false,
        messages: [],
      };

      testStore.dispatch(setValidTrue(id));
      newPage.isValid = true;

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  describe("addMessage", () => {
    it("adds status message to the page's state", () => {
      const testStore = createTestStore();
      const id = "New Test Page";
      const message = "This is a test status";

      testStore.dispatch(createPage(id));

      const newPage: SignUpPageInformation = {
        id: "New Test Page",
        isValid: false,
        messages: [message],
      };

      testStore.dispatch(addMessage({ id: id, message: message }));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  describe("resetMessages", () => {
    it("deletes all status messages", () => {
      const testStore = createTestStore();
      const id = "New Test Page";

      testStore.dispatch(createPage(id));

      const newPage: SignUpPageInformation = {
        id: "New Test Page",
        isValid: false,
        messages: [],
      };

      testStore.dispatch(
        addMessage({ id: id, message: "This is a test status" })
      );
      testStore.dispatch(
        addMessage({ id: id, message: "Another test status" })
      );
      testStore.dispatch(resetMessages(id));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });
});
