import { screen } from "@testing-library/react";

import ValidationChecklist from ".";
import { renderComponent } from "../../../../test/helpers/render";
import { ValidationMessage } from "../../../store/signUpPages/state";

describe("Validation Checklist", () => {
  describe("Error message", () => {
    it("renders an error message how we'd expect", () => {
      const testMessages: ValidationMessage[] = [
        {
          isError: true,
          text: "This is an example error",
        },
      ];

      renderComponent(<ValidationChecklist messageArray={testMessages} />);

      // Alt text not used for icons, but title is used in it's place
      expect(screen.getByTitle("Error:")).toBeInTheDocument();
      expect(screen.getByText(testMessages[0].text)).toBeInTheDocument();
      expect(screen.getByRole("status")).toBeInTheDocument();

      expect(screen.queryByText("OK:")).not.toBeInTheDocument();
    });
  });

  describe("Success message", () => {
    it("renders a success message how we'd expect", () => {
      const testMessages: ValidationMessage[] = [
        {
          isError: false,
          text: "This is an example success message",
        },
      ];

      renderComponent(<ValidationChecklist messageArray={testMessages} />);

      // Alt text not used for icons, but title is used in it's place
      expect(screen.getByTitle("OK:")).toBeInTheDocument();
      expect(screen.getByText(testMessages[0].text)).toBeInTheDocument();
      expect(screen.getByRole("status")).toBeInTheDocument();

      expect(screen.queryByText("Error:")).not.toBeInTheDocument();
    });
  });

  describe("Accessible error message", () => {
    it.todo("Should announce an error message to screen readers as a 'fail'");
    it.todo("Should announce all error messages to screen readers");
    it.todo("Should hide the error checkmark icon from screen readers");
  });

  describe("Accessible success message", () => {
    it.todo(
      "Should announce a non-error message to screen readers as a 'pass'"
    );
    it.todo("Should hide the success tick icon from screen readers");
  });
});
