import { screen } from "@testing-library/react";

import Header from ".";
import { renderComponent } from "../../../test/helpers/render";

describe("Header", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<Header />);

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("User")).toBeInTheDocument();
    });
  });
});
