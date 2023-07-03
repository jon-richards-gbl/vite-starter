import { createTestStore } from "../../../test/helpers/store";
// import { addPage, updatePage,
import { createPage, resetPages, setValidTrue } from "./signUpPagesSlice";
import { SignUpPageInformation } from "./state";

describe("signUpPagesSlice", () => {
  // describe("addPage", () => {
  //   it("adds the page to the store", () => {
  //     const testStore = createTestStore();
  //     const newPage: SignUpPageInformation = {
  //       id: 'New Test Page',
  //       isValid: true,
  //       errorMessages: ["Example error message"],
  //     };

  //     testStore.dispatch(addPage(newPage));

  //     const updatedState = testStore.getState();

  //     expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
  //   });
  // });

  describe("createPage", () => {
    it("creates a new page in the store", () => {
      const testStore = createTestStore();
      const id = "New Test Page";

      testStore.dispatch(createPage(id));

      const newPage: SignUpPageInformation = {
        id: "New Test Page",
        isValid: false,
        errorMessages: [],
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
        errorMessages: [],
      };

      testStore.dispatch(setValidTrue(id));
      newPage.isValid = true;

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });
  // describe("updatePage", () => {
  //   it("updates the page in the store", () => {
  //     const testStore = createTestStore();
  //     const newPage: SignUpPageInformation = {
  //       index: 0,
  //       isValid: true,
  //       errorMessages: ["Example error message"],
  //     };

  //     testStore.dispatch(addPage(newPage));

  //     // Jest seems to insist the original object is
  //     // read only so let's make a copy with some changes.
  //     // Inc. adding a new message
  //     const updatedPage = {
  //       ...newPage,
  //       isValid: false,
  //       errorMessages: [...newPage.errorMessages, "This is an extra message"],
  //     };
  //     console.log(updatedPage);

  //     testStore.dispatch(updatePage(updatedPage));
  //     const updatedState = testStore.getState();

  //     expect(updatedState.signUpPages.pages[0]).toEqual(updatedPage);
  //   });
  // });

  // describe("resetPages", () => {
  //   it("resets all pages in the store", () => {
  //     const testStore = createTestStore();
  //     const page1: SignUpPageInformation = {
  //       id: 'Test Page to reset',
  //       isValid: true,
  //       errorMessages: ["Example error message"],
  //     };

  //     const page2: SignUpPageInformation = {
  //       id: '',
  //       isValid: false,
  //       errorMessages: ["This is an updated error message"],
  //     };

  //     testStore.dispatch(addPage(page1));
  //     testStore.dispatch(addPage(page2));
  //     testStore.dispatch(resetPages());
  //     const updatedState = testStore.getState();

  //     const emptyArray = new Array<SignUpPageInformation>();

  //     expect(updatedState.signUpPages.pages).toEqual(emptyArray);
  //   });
  // });
});
