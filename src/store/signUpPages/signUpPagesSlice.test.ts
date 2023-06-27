// import { useAppSelector } from "..";
// import { selectPageWithIndex } from "../signUpPages/selectors";
import { createTestStore } from "../../../test/helpers/store";
import { addPage } from "./signUpPagesSlice";
import { SignUpPage } from "./state";

describe("signUpPagesSlice", () => {
  describe("addPage", () => {
    it("adds the page to the store", () => {
      const testStore = createTestStore();
      const newPage: SignUpPage = {
        index: 0,
        isValid: false,
        errorMessages: [],
      };

      testStore.dispatch(addPage(newPage));

      const updatedState = testStore.getState();

      expect(updatedState.signUpPages.pages[0]).toEqual(newPage);
    });
  });

  //   describe("selectPageWithIndex", () => {
  //     it("returns the page with the selected index", () => {
  //       const testStore = createTestStore();
  //       const newPage: SignUpPage = {
  //         index: 0,
  //         isValid: false,
  //         errorMessages: [],
  //         }

  //         testStore.dispatch(addPage(newPage));

  //         const retrievedPage: SignUpPage = useAppSelector((state) => selectPageWithIndex(state, 0));

  //         expect(retrievedPage).toEqual(newPage);
  //     });
  //   });
});
