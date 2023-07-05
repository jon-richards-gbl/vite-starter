import React, { ChangeEvent, Fragment, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setEmail } from "../../../store/newUser/newUserSlice";
import { selectEmail } from "../../../store/newUser/selectors";
import {
  selectIsValid,
  selectMessages,
} from "../../../store/signUpPages/selectors";
import {
  addMessage,
  resetMessages,
  setValidFalse,
  setValidTrue,
} from "../../../store/signUpPages/signUpPagesSlice";

const UsernamePage = ({ id }: { id: string }): React.JSX.Element => {
  // selector hook for Redux store (getter)
  const email = useAppSelector(selectEmail);
  const isValid: boolean = useAppSelector(selectIsValid(id));
  // get the dispatch hook to call actions
  const dispatch = useAppDispatch();
  // const [emailValid, setEmailValid] = useState(false);
  //const [isBlur, setIsBlur] = useState(false);
  const messages = useAppSelector(selectMessages(id));
  // Specify the correct type for useRef to give type safe access
  const emailErrorDiv = useRef<HTMLDivElement>(null);

  /* Validate using sections of the RegEx and add the corresponding
    messages to redux state for this page */
  const validateEmail = () => {
    dispatch(resetMessages(id));
    dispatch(setValidFalse(id));
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    );

    if (email === "") {
      console.log(email);
      dispatch(addMessage({ id: id, message: "An email address is required" }));
    } else {
      if (!email.includes("@")) {
        dispatch(
          addMessage({
            id: id,
            message:
              "The email address you entered is missing the at '@' symbol",
          })
        );
      }
      if (!email.includes(".")) {
        dispatch(
          addMessage({
            id: id,
            message: "The email address you entered is missing a full stop",
          })
        );
      }

      if (emailRegex.test(email)) {
        dispatch(setValidTrue(id));
        dispatch(
          addMessage({
            id: id,
            message: "The email address you entered looks good",
          })
        );
      } else {
        dispatch(
          addMessage({
            id: id,
            message:
              "Email address needs to be in the format - name@domain.com",
          })
        );
      }
    }
  };

  // If email is not valid, determine what is wrong
  // and give a specific error message
  const emailErrorHTML = (): React.JSX.Element => {
    //  Create an array of Fragments
    const content: Array<JSX.Element> = [];
    if (!messages) {
      return <></>;
    }

    for (const message of messages) {
      content.push(
        <p
          className={isValid ? "success-message" : "error-message"}
          key={globalThis.crypto.randomUUID()}
        >
          {/* Output the relevant tick or cross depending on 
          if it is an error or success message */}
          {isValid ? <span>&#10003;</span> : <span>&#10007;</span>}
          {` - ${message}`}
        </p>
      );
    }

    return <Fragment>{content}</Fragment>;
  };

  // When the email input has and then loses focus -
  // validate the user's entry and update accordingly.
  // const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
  //   dispatch(setEmail(e.target.value));
  //   setIsBlur(true);
  // };

  // When the text is changed inside the input field, update state
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    validateEmail();
  };

  return (
    <main>
      {/* Row of helper text, input or similar 
            control and then the error/success message */}
      <form aria-labelledby="email-legend">
        <fieldset>
          <legend id="email-legend">Your email address</legend>
          {/* For accessibility - show the help text BEFORE the input */}
          <label className="help-label" htmlFor="email" id="email-label">
            Please enter a valid email address. E.g: <i>name@domain.com</i> or{" "}
            <i>name@domain.co.uk.</i>
            <span className="required" aria-hidden="true">
              Required
            </span>
          </label>
          <input
            className="block-input"
            autoFocus // For Screen Readers - this helps the focus start at the first input, rather than the buttons.
            name="email"
            id="email"
            type="text"
            aria-labelledby="emailLabel"
            aria-required="true"
            aria-invalid={!isValid}
            value={email}
            autoComplete="email"
            // onBlur={blurHandler}
            onChange={changeHandler}
          />
          {/* Permanently show the error/success messages 
          to give user consistent feedback */}
          <div
            className="feedback-text"
            id="emailErrorDiv"
            ref={emailErrorDiv}
            // Once user has tried to input - show
            // aria-hidden={!isBlur}
            role="alert"
          >
            {emailErrorHTML()}
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default UsernamePage;
