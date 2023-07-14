import { fireEvent, screen } from "@testing-library/react";

import UsernamePage from ".";
import { renderComponent } from "../../../../test/helpers/render";
import SignUpPage, { formTitles } from "../../SignUpPage/index";

describe("Username Page", () => {
  const id = formTitles[1];
  describe("Todo tests", () => {
    it.todo("Should initally load with 3 'isError' validation messages");
    it.todo("Should initially include a cross mark on each validation message");
    it.todo(
      "Should enable the next button when a valid email is entered: test@test.co.uk"
    );
    it.todo(
      "Should include 3 non 'isError' validation messages when a valid email is entered"
    );
    it.todo(
      "Should show a tick mark on each validation message when a valid email is entered"
    );
    it.todo(
      "Should not enable the next button if the email does not contain an @ symbol"
    );
  });

  describe("renders as we'd expect", () => {
    it("contains the input and error messages", () => {
      renderComponent(<UsernamePage id={id} />);

      expect(screen.getByTestId("email")).toBeInTheDocument();
    });
  });

  // TODO: Get these tests working!
  //describe("valid user input", () => {
  //   it("sets the page to valid on valid email entry", () => {
  //     // const id = formTitles[1];
  //     const { store } = renderComponent(<UsernamePage id={id} />);
  //     const actionSpy = jest.spyOn(store, "dispatch");

  //     fireEvent.input(screen.getByTestId("email"), {
  //       target: { value: "test@test.com" },
  //     });

  //     expect(actionSpy).toHaveBeenLastCalledWith(
  //       {
  //         type: "signUpPages/setValidTrue(id)",
  //         payload: "test@test.com",
  //       },
  //       expect.objectContaining({
  //         pageId: id,
  //       })
  //     );
  //   });
  // });

  // describe("interaction", () => {
  //   it("entering an email address triggers a 'setEmail' action", () => {
  //     const { store } = renderComponent(<UsernamePage id={formTitles[1]} />);
  //     const actionSpy = jest.spyOn(store, "dispatch");

  //     fireEvent.input(screen.getByTestId("email"), {
  //       target: { value: "test@test.com" },
  //     });

  //     // expect(actionSpy).toHaveBeenCalledWith({
  //     //   type: "newUser/setEmail",
  //     //   payload: "test@test.com",
  //     // });
  //     expect(actionSpy).toBeCalledWith(
  //       {
  //         type: "newUser/setEmail",
  //         payload: "test@test.com",
  //       },
  //       {
  //         type: "signUpPages/addMessage",
  //         payload:
  //           expect.objectContaining(
  //             {
  //               pageId: id,
  //             }
  //           )
  //       }
  //     )
  //   });
  // });
});
