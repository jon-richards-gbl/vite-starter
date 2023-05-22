import { fireEvent, screen } from "@testing-library/react";
import { vitest } from "vitest";

import UserPage from ".";
import { renderComponent } from "../../../test/helpers/render";

describe("User Page", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<UserPage />);

      expect(screen.getByLabelText("Your name:")).toBeInTheDocument();
    });
  });

  describe("interact", () => {
    it("submitting the form triggers a 'setUsername' action", () => {
      const { store } = renderComponent(<UserPage />);
      const actionSpy = vitest.spyOn(store, "dispatch");

      fireEvent.input(screen.getByLabelText("Your name:"), {
        target: { value: "Marco Polo" },
      });
      fireEvent.click(screen.getByText("SUBMIT"));

      expect(actionSpy).toBeCalledWith({
        type: "user/setUserName",
        payload: "Marco Polo",
      });
    });
  });
});
