import { ChangeEvent, FocusEvent, useRef, useState } from "react";

import UserData from "../../../types/types";

interface loginDetailsProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const EmailPage: React.FC<loginDetailsProps> = ({
  userData,
  setUserData,
}): JSX.Element => {
  const [emailValid, setEmailValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  // Specify the correct type for useRef to give type safe access
  const emailErrorDiv = useRef<HTMLDivElement>(null);
  let emailErrorMessage = "";

  // When the email input has and then loses focus -
  // validate the user's entry and update accordingly.
  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
    setIsBlur(true);
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    );
    setEmailValid(emailRegex.test(userData.email));

    // Make it null safe and display the block now that
    // the input has gained and lost focus since rendering.
    // if (emailErrorDiv && emailErrorDiv.current) {
    //     emailErrorDiv.current.style.visibility = 'visible';
    // }

    // TODO: Disable next button if email is invalid.
  };

  // If email is not valid, determine what is wrong
  // and give a specific error message
  const emailErrorHTML = () => {
    if (isBlur && !emailValid) {
      // For now - consider input valid if it contains '@'
      if (userData.email === "") {
        emailErrorMessage = "An email address is required";
      } else if (!userData.email.includes("@")) {
        emailErrorMessage =
          "The email address you entered is missing the at '@' symbol";
      } else if (!userData.email.includes(".")) {
        emailErrorMessage =
          "The email address you entered is missing a full stop";
      } else {
        emailErrorMessage = "The email address is not quite right";
      }
      return (
        <p className="error">
          <span>&#10007;</span>
          {emailErrorMessage}
        </p>
      );
    } else if (!isBlur) {
      emailErrorMessage = "";
      return <></>;
    }

    return (
      <p className="success">
        <span>&#10003;</span>The email you entered looks good
      </p>
    );
  };

  // When the text is changed inside the input field, update state
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
  };

  return (
    <div>
      {/* Row of helper text, input or similar 
            control and then the error/success message */}
      <div className="row">
        {/* TODO - check out aria-placeholder, would descriptive label be preferable? */}
        <label className="help-label" htmlFor="email" id="email-label">
          Please enter a valid email address, e.g <i>name@domain.com</i> or{" "}
          <i>name@domain.co.uk</i>
        </label>
        <input
          className="block-input"
          autoFocus // For Screen Readers - this helps the focus start at the first input, rather than the buttons.
          name="email"
          id="email"
          type="text"
          placeholder="your email here"
          aria-placeholder="your email here"
          aria-labelledby="emailLabel"
          aria-required="true"
          aria-invalid={isBlur && !emailValid}
          value={userData.email}
          autoComplete="email"
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        <div
          className="feedback-text"
          id="emailErrorDiv"
          ref={emailErrorDiv}
          // Once user has tried to input - show
          aria-hidden={!isBlur}
          role="alert"
        >
          {emailErrorHTML()}
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
