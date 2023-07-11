import { createTestStore } from "../../../test/helpers/store";
import {
  addMessage,
  createPage,
  resetMessages,
  setValidTrue,
} from "./signUpPagesSlice";
import { SignUpPageInformation, ValidationMessage } from "./state";

describe("signUpPagesSlice", () => {
  describe("createPage", () => {
    it("creates a new page in the store", () => {
      //  Create blank page with just an ID
      const testStore = createTestStore();
      const id = "New Test Page";
      testStore.dispatch(createPage(id));

      // Test state for equality test
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
      // Create a blank page with just an ID
      const testStore = createTestStore();
      const id = "New Test Page";
      testStore.dispatch(createPage(id));

      // Test state for comparison
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
      // Create a blank test page with just an ID
      const testStore = createTestStore();
      const id = "New Test Page";
      testStore.dispatch(createPage(id));

      const message: ValidationMessage = {
        isError: true,
        text: "This is a test status",
      };
      //  Test state for equality test
      const newPage: SignUpPageInformation = {
        id: id,
        isValid: false,
        messages: [message],
      };

      // Add a message to our blank page
      testStore.dispatch(addMessage({ message: message, pageId: id }));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  describe("resetMessages", () => {
    it("deletes all status messages", () => {
      // Create a blank page with just an ID
      const testStore = createTestStore();
      const id = "New Test Page";
      testStore.dispatch(createPage(id));

      // Test state for equality test
      const newPage: SignUpPageInformation = {
        id: id,
        isValid: false,
        messages: [],
      };

      // Add two messages to the created page then reset all and compare to test state
      testStore.dispatch(
        addMessage({
          message: { isError: false, text: "This is a test status" },
          pageId: id,
        })
      );
      testStore.dispatch(
        addMessage({
          message: { isError: false, text: "This is another test status" },
          pageId: id,
        })
      );
      testStore.dispatch(resetMessages(id));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });
});
