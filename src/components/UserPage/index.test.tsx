import { fireEvent, screen } from "@testing-library/react";

import UserPage from ".";
import { renderComponent } from "../../../test/helpers/render";

describe("User Page", () => {
  describe("render", () => {
    it("renders how we'd expect", () => {
      renderComponent(<UserPage />);

      //expect(screen.getByLabelText("Your name:")).toBeInTheDocument();
      const prevBtn: HTMLElement = screen.getByText("Previous");
      expect(prevBtn).toBeInTheDocument();
      expect(prevBtn).toBeDisabled();
      expect(screen.getByText("Next")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeEnabled();
    });
  });

  // TODO: Write to test next button.

  // TODO: Use this as an example to test the email entry on the first page.
  // describe("interact", () => {
  //   it("submitting the form triggers a 'setUsername' action", () => {
  //     const { store } = renderComponent(<UserPage />);
  //     const actionSpy = jest.spyOn(store, "dispatch");

  //     fireEvent.input(screen.getByLabelText("Your name:"), {
  //       target: { value: "Marco Polo" },
  //     });
  //     fireEvent.click(screen.getByText("SUBMIT"));

  //     expect(actionSpy).toBeCalledWith({
  //       type: "user/setUserName",
  //       payload: "Marco Polo",
  //     });
  //   });
  // });
});
