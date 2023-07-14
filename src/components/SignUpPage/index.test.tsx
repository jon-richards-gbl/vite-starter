// import { screen } from "@testing-library/react";
// import SignUpPage from ".";
// import { renderComponent } from "../../../test/helpers/render";
export {};

describe("Sign Up Page", () => {
  describe("Render", () => {
    // it("renders how we expect", () => {
    //     renderComponent(<SignUpPage />);

    //     expect(screen.getByTitle("Sign up for our services")).toBeInTheDocument();
    //     expect(screen.getByTitle("Sign Up - Guidance")).toBeInTheDocument();
    // });
    it.todo("Previous button is enabled on initial render and middle pages");
    it.todo("Previous button is disabled when last page is reached");
    it.todo("Next button is not enabled");
    it.todo(
      "Should not enable the next button if the page is in a valid state"
    );
    it.todo("Should enable the next button if the page is in a valid state");
  });
});
//const prevBtn: HTMLElement = screen.getByText("Previous");
//expect(prevBtn).toBeInTheDocument();
//expect(prevBtn).toBeDisabled();
//expect(screen.getByText("Next")).toBeInTheDocument();
//expect(screen.getByText("Next")).toBeEnabled();
