import React, { ChangeEvent, FocusEvent, useState } from "react";

// import PasswordChecklist from "react-password-checklist";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setConfirmPassword,
  setPassword,
} from "../../../store/newUser/newUserSlice";
import {
  selectConfirmPassword,
  selectPassword,
} from "../../../store/newUser/selectors";
import { selectIsValid } from "../../../store/signUpPages/selectors";

const PasswordPage = ({ id }: { id: string }): React.JSX.Element => {
  // get the Redux  dispatch hook to call actions
  const dispatch = useAppDispatch();
  // selector hook for Redux store (getter)
  const password = useAppSelector(selectPassword);
  const passwordConfirm = useAppSelector(selectConfirmPassword);
  const isValid: boolean = useAppSelector(selectIsValid(id));
  const [pwdIsVisible, setPwdIsVisible] = useState(false);

  // TODO: Create enum for all password validation messages
  // TODO: useEffect - add all validation messages to state.

  // const validate = () => {
  //   // TODO: Validate for each stage - follow usernamePage example.
  //   // Can the password checklist npm github help? - steal regex?
  // }

  // const inputUpdated = () => {
  //   // TODO: create a ref for the pwd input fields and get the values here
  //   // use that to update the password in state and call validate func
  // }

  // TODO: Combine handlers - set inputUpdated as the callback for each HTML element
  const changeHandlerPwd = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const changeHandlerConfirmPwd = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setConfirmPassword(e.target.value));
  };

  // When the email input has and then loses focus -
  // validate the user's entry and update accordingly.
  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <main>
      <form aria-labelledby="enter-password">
        <fieldset>
          <legend id="enter-password">Create new password</legend>
          <label className="help-label" htmlFor="password" id="pwd-label">
            Please enter a password:
            <span className="required" aria-hidden="true">
              Required
            </span>
          </label>
          {/* Toggle between password visibility */}
          <div className="checkbox-combo" id="password-combo">
            <input
              id="pwdCheckbox"
              name="pwdCheckbox"
              type="checkbox"
              checked={pwdIsVisible}
              // aria-labelledby="pwdCheckboxLabel"
              // aria-checked={pwdIsVisible}
              onChange={() => {
                setPwdIsVisible((pwdIsVisible) => !pwdIsVisible);
              }}
            />
            <label
              className="checkbox-label"
              htmlFor="pwdCheckbox"
              id="pwdCheckboxLabel"
            >
              Show password?
            </label>
          </div>
          <input
            className="block-input"
            autoFocus
            name="password"
            id="password"
            autoComplete="new-password"
            type={pwdIsVisible ? "text" : "password"}
            aria-labelledby="pwd-label"
            aria-describedby="pwd-desc"
            aria-required="true"
            value={password}
            onBlur={blurHandler}
            onChange={changeHandlerPwd}
          />
          <span className="help-label" id="pwd-desc">
            Passwords must be between 8 and 15 characters and include uppercase
            and lowercase letters and a number
          </span>
          <label
            className="help-label"
            htmlFor="password-confirm"
            id="pwd-confirm-label"
          >
            Please re-type your new password to confirm:
          </label>
          <input
            className="block-input"
            name="password-confirm"
            id="password-confirm"
            type="password"
            autoComplete="new-password"
            aria-labelledby="pwd-confirm-label"
            aria-required="true"
            value={passwordConfirm}
            // onBlur={blurHandler}
            onChange={changeHandlerConfirmPwd}
          />
        </fieldset>
        {/* Permanently show the error/success messages to give user consistent feedback */}
        {/* <ValidationChecklist messageArray={messages} /> */}

        {/* TODO: Remove all traces of this  */}
        {/* <PasswordChecklist
          rules={[
            "minLength",
            "maxLength",
            "specialChar",
            "number",
            "capital",
            "match",
          ]}
          minLength={8}
          maxLength={15}
          value={password}
          valueAgain={passwordConfirm}
          // TODO: Get this page's info from state and update isValid there.
          // onChange={(isValid) => dispatch(setIsValid(isValid))}
        /> */}
      </form>
    </main>
  );
};

export default PasswordPage;
