import { useAppSelector } from "..";
import { createTestStore } from "../../../test/helpers/store";
import { selectLastPage, selectPageByIndex } from "../signUpPages/selectors";
import { addPage } from "./signUpPagesSlice";
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
});
