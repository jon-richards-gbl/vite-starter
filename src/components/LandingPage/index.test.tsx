import { screen } from "@testing-library/react";

import LandingPage from ".";
import { renderComponent } from "../../../test/helpers/render";

describe("Landing Page", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<LandingPage />);

      expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
  });
});
