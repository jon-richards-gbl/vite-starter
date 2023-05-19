import { act, screen } from "@testing-library/react";

import UserPage from ".";
import { renderComponent } from "../../../test/helpers/render";
import { setAvatarResolved, setName } from "../../store/user/userSlice";

describe("Header", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<UserPage />);

      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("loading a user renders the user image and name", () => {
      const { store } = renderComponent(<UserPage />);

      act(() => {
        store?.dispatch(setName("Jim"));
        store?.dispatch(
          setAvatarResolved(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle data-testid="test-svg" cx="50" cy="50" r="50" />
</svg>`)
        );
      });

      expect(screen.getByText("Hello Jim")).toBeInTheDocument();
      expect(screen.getByTestId("test-svg")).toBeInTheDocument();
    });
  });
});
