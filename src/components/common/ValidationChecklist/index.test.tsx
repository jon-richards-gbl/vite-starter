import { screen } from "@testing-library/react";

import ValidationChecklist, { validationMessage } from ".";
import { renderComponent } from "../../../../test/helpers/render";

describe("Validation checklist", () => {
  describe("render", () => {
    it("renders errors and success messages how we'd expect", () => {
      const testMessages: validationMessage[] = [
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
      expect(screen.getByTitle("success message")).toBeInTheDocument();
      expect(screen.getByTitle("error message")).toBeInTheDocument();
      expect(screen.getByText(testMessages[0].text)).toBeInTheDocument();
      expect(screen.getByText(testMessages[1].text)).toBeInTheDocument();
    });
  });
});
