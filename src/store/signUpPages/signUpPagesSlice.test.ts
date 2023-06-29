import { createTestStore } from "../../../test/helpers/store";
import { addPage, resetPages, updatePage } from "./signUpPagesSlice";
import { SignUpPageInformation } from "./state";

describe("signUpPagesSlice", () => {
  describe("addPage", () => {
    it("adds the page to the store", () => {
      const testStore = createTestStore();
      const newPage: SignUpPageInformation = {
        index: 0,
        isValid: true,
        errorMessages: ["Example error message"],
      };

      testStore.dispatch(addPage(newPage));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  describe("updatePage", () => {
    it("updates the page in the store", () => {
      const testStore = createTestStore();
      const newPage: SignUpPageInformation = {
        index: 0,
        isValid: true,
        errorMessages: ["Example error message"],
      };

      const updatedPage: SignUpPageInformation = {
        index: 0,
        isValid: false,
        errorMessages: ["This is an updated error message"],
      };

      testStore.dispatch(addPage(newPage));
      testStore.dispatch(updatePage(updatedPage));
      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(updatedPage);
    });
  });

  describe("resetPages", () => {
    it("resets all pages in the store", () => {
      const testStore = createTestStore();
      const page1: SignUpPageInformation = {
        index: 0,
        isValid: true,
        errorMessages: ["Example error message"],
      };

      const page2: SignUpPageInformation = {
        index: 1,
        isValid: false,
        errorMessages: ["This is an updated error message"],
      };

      testStore.dispatch(addPage(page1));
      testStore.dispatch(addPage(page2));
      testStore.dispatch(resetPages());
      const updatedState = testStore.getState();

      const emptyArray = new Array<SignUpPageInformation>();

      expect(updatedState.signUpPages.pages).toEqual(emptyArray);
    });
  });
});
