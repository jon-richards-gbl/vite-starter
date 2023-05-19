import { fireEvent, screen } from "@testing-library/react";
import { vitest } from "vitest";

import LandingPage from ".";
import { renderComponent } from "../../../test/helpers/render";
import { userService } from "../../services/userService";

describe("Landing Page", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<LandingPage />);

      expect(screen.getByLabelText("Your name:")).toBeInTheDocument();
    });
  });

  describe("interact", () => {
    it("submitting the form triggers a 'getUserAvatar' action", () => {
      const fetchSpy = vitest.spyOn(userService, "getUserAvatar");
      fetchSpy.mockResolvedValue("cool");
      renderComponent(<LandingPage />);

      fireEvent.input(screen.getByLabelText("Your name:"), {
        target: { value: "Marco Polo" },
      });
      fireEvent.click(screen.getByText("SUBMIT"));

      expect(fetchSpy).toBeCalledWith("Marco Polo");
    });
  });
});
