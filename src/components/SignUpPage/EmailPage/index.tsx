import React, {
  ChangeEvent,
  FocusEvent,
  Fragment,
  useRef,
  useState,
} from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setEmail } from "../../../store/newUser/newUserSlice";
import { selectEmail } from "../../../store/newUser/selectors";
import { selectIsValid } from "../../../store/signUpPages/selectors";
import {
  setValidFalse,
  setValidTrue,
} from "../../../store/signUpPages/signUpPagesSlice";

const EmailPage = ({ id }: { id: string }): React.JSX.Element => {
  // selector hook for Redux store (getter)
  const email = useAppSelector(selectEmail);
  const isValid: boolean = useAppSelector(selectIsValid(id));
  // get the dispatch hook to call actions
  const dispatch = useAppDispatch();
  // const [emailValid, setEmailValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  let messages: string[] = [];
  // Specify the correct type for useRef to give type safe access
  const emailErrorDiv = useRef<HTMLDivElement>(null);

  /* Validate using sections of the RegEx and add the corresponding
    messages to redux state for this page */
  const validateEmail = (): string[] => {
    messages = [];
    dispatch(setValidFalse(id));
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    );

    if (emailRegex.test(email)) {
      dispatch(setValidTrue(id));
      messages.push("The email you entered looks good");
      return messages;
    }

    if (email === "") {
      messages.push("An email address is required");
    } else {
      if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]/.test(email)) {
        messages.push(
          "The email address you entered is missing the at '@' symbol"
        );
      }
      if (/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
        messages.push("The email address you entered is missing a full stop");
      }
    }

    return messages;
  };

  // If email is not valid, determine what is wrong
  // and give a specific error message
  const emailErrorHTML = (): React.JSX.Element => {
    // validateEmail();

    //  Create an array of Fragments
    const content: Array<JSX.Element> = [];
    for (const message of messages) {
      content.push(
        <p
          className={isValid ? "success" : "error"}
          key={globalThis.crypto.randomUUID()}
        >
          {/* Output the relevant tick or cross depending on 
          if it is an error or success message */}
          {isValid ? <span>&#10007;</span> : <span>&#10003;</span>}
          {` - ${message}`}
        </p>
      );
    }

    return (
      <Fragment>
        <p>TEST</p>
        {content}
      </Fragment>
    );
  };

  // When the email input has and then loses focus -
  // validate the user's entry and update accordingly.
  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    setIsBlur(true);
  };

  // When the text is changed inside the input field, update state
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    validateEmail();
    console.log(email, messages);
  };

  return (
    <main>
      {/* Row of helper text, input or similar 
            control and then the error/success message */}
      <form aria-labelledby="enter-email">
        <fieldset>
          <legend id="Your email address">Your email address</legend>
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
            aria-labelledby="emailLabel"
            aria-required="true"
            aria-invalid={isBlur && !isValid}
            value={email}
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
        </fieldset>
      </form>
    </main>
  );
};

export default EmailPage;
