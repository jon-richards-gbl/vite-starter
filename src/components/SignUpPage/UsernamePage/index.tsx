import { isUndefined } from "lodash";
import React, { useEffect, useRef } from "react";

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
  enum ValidationText {
    AtTest = "Must contain the '@' symbol",
    StopTest = "Must contain a full stop",
    FormatTest = "Must be in the format - name@domain.com (or .co.uk)",
  }

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
            text: ValidationText.AtTest,
          },
          pageId: id,
        })
      );
      dispatch(
        addMessage({
          message: {
            isError: true,
            text: ValidationText.StopTest,
          },
          pageId: id,
        })
      );
      dispatch(
        addMessage({
          message: {
            isError: true,
            text: ValidationText.FormatTest,
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
    const testFormat = emailRegex.test(email);
    if (testAt && testStop && testFormat) {
      dispatch(setValidTrue(id));
    }

    dispatch(
      addMessage({
        message: { isError: !testAt, text: ValidationText.AtTest },
        pageId: id,
      })
    );
    dispatch(
      addMessage({
        message: { isError: !testStop, text: ValidationText.StopTest },
        pageId: id,
      })
    );
    dispatch(
      addMessage({
        message: { isError: !testFormat, text: ValidationText.FormatTest },
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
    <section>
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
            // Lots of events handled to avoid issue with use of autofill on browser not triggering onChange
            onBlur={inputUpdated}
            onChange={inputUpdated}
            onInput={inputUpdated}
            //onClick={inputUpdated}
            onKeyDown={inputUpdated}
            onKeyUp={inputUpdated}
            onPaste={inputUpdated}
          />

          <div className="feedback-text" id="emailErrorDiv">
            {/* Permanently show the error/success messages to give user consistent feedback */}
            <ValidationChecklist messageArray={messages} />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UsernamePage;
