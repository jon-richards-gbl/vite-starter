import { isUndefined } from "lodash";
import React, {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";

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
import ValidationChecklist from "../../common/ValidationChecklist";

const UsernamePage = ({ id }: { id: string }): React.JSX.Element => {
  // selector hook for Redux store (getter)
  const email = useAppSelector(selectEmail);
  const isValid: boolean = useAppSelector(selectIsValid(id));
  // get the dispatch hook to call actions
  const dispatch = useAppDispatch();

  // Specify the correct type for useRef to give type safe access
  // const emailErrorDiv = useRef<HTMLDivElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  let messages = useAppSelector(selectMessages(id));
  if (isUndefined(messages)) {
    messages = [];
  }

  useEffect(() => {
    if (messages?.length === 0) {
      dispatch(
        addMessage({
          message: {
            isError: true,
            text: "Must contain the @ symbol",
          },
          pageId: id,
        })
      );
      dispatch(
        addMessage({
          message: {
            isError: true,
            text: "Must contain a full stop",
          },
          pageId: id,
        })
      );
      dispatch(
        addMessage({
          message: {
            isError: true,
            text: "Must be in the format - name@domain.com (or .co.uk)",
          },
          pageId: id,
        })
      );
    }
  });

  /* Validate using sections of the RegEx and add the corresponding
    messages to redux state for this page */
  const validateEmail = () => {
    console.log("validateEmail triggered");
    dispatch(resetMessages(id));
    dispatch(setValidFalse(id));
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    );

    const testAt = email.includes("@");
    const testStop = email.includes(".");
    const testRegex = emailRegex.test(email);
    if (testAt && testStop && testRegex) {
      dispatch(setValidTrue(id));
    }

    // TODO: make enum of error messages?
    dispatch(
      addMessage({
        message: { isError: !testAt, text: "Must contain the '@' symbol" },
        pageId: id,
      })
    );
    dispatch(
      addMessage({
        message: { isError: !testStop, text: "Must contain a full stop" },
        pageId: id,
      })
    );
    dispatch(
      addMessage({
        message: {
          isError: !testRegex,
          text: "Must be in the format - name@domain.com (or .co.uk)",
        },
        pageId: id,
      })
    );
  };

  // When the text is changed inside the input field, update state
  const inputUpdated = () => {
    dispatch(
      setEmail(
        inputEmailRef.current === null ? "" : inputEmailRef.current.value
      )
    );
    validateEmail();
  };

  return (
    <main>
      {/* Row of helper text, input or similar 
            control and then the error/success message */}
      <form aria-labelledby="email-legend" onInput={validateEmail}>
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
            ref={inputEmailRef}
            onBlur={inputUpdated}
            onChange={inputUpdated}
            onInput={inputUpdated}
            onClick={inputUpdated}
            onKeyDown={inputUpdated}
          />

          <div
          // className="feedback-text"
          // id="emailErrorDiv"
          // ref={emailErrorDiv}
          // // Once user has tried to input - show
          // // aria-hidden={!isBlur}
          // role="alert"
          >
            {/* Permanently show the error/success messages
          to give user consistent feedback */}
            <ValidationChecklist messageArray={messages} />
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default UsernamePage;
