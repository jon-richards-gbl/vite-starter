import { screen } from "@testing-library/react";

import Header from ".";
import { renderComponent } from "../../../test/helpers/render";

describe("Header", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<Header />);

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("User")).toBeInTheDocument();
      expect(
        screen.getByTitle("Global Logic - A Hitachi Group Company")
      ).toBeInTheDocument();

      // expect(screen.getByAltText("React Icon")).toBeInTheDocument();
      // expect(screen.getByAltText("Global Logic Icon")).toBeInTheDocument();
    });
  });
});
