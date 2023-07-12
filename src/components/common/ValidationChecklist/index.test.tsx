import { screen } from "@testing-library/react";

import ValidationChecklist from ".";
import { renderComponent } from "../../../../test/helpers/render";
import { ValidationMessage } from "../../../store/signUpPages/state";

describe("Validation checklist", () => {
  describe("render", () => {
    it("renders errors and success messages how we'd expect", () => {
      const testMessages: ValidationMessage[] = [
        {
          isError: true,
          text: "This is an example error",
        },
        {
          isError: false,
          text: "This is an example success message",
        },
      ];

      renderComponent(<ValidationChecklist messageArray={testMessages} />);

      // Alt text not used for icons, but title is used in it's place
      expect(screen.getByTitle("OK:")).toBeInTheDocument();
      expect(screen.getByTitle("Error:")).toBeInTheDocument();
      expect(screen.getByText(testMessages[0].text)).toBeInTheDocument();
      expect(screen.getByText(testMessages[1].text)).toBeInTheDocument();
    });
  });
});
