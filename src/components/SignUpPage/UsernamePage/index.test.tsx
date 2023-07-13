import { screen } from "@testing-library/dom";

import UsernamePage from ".";
import { renderComponent } from "../../../../test/helpers/render";

describe(UsernamePage, () => {
  it.todo("Should initally load with 3 'isError' validation messages");
  it.todo("Should initially include a cross mark on each validation message");
  it.todo(
    "Should enable the next button when a valid email is entered: test@test.com"
  );
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
  it.todo(
    "Should not enable the next button if the email does not contain a full stop"
  );
  it.todo(
    "Should not enable the next button if the email has the format 'test@test."
  );

  // describe()
});
