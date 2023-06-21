import { ChangeEvent, useState } from "react";
import PasswordChecklist from "react-password-checklist";

import UserData from "../../../types/types";

// TODO: Should this be in types.tsx?
interface loginDetailsProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const PasswordPage: React.FC<loginDetailsProps> = ({
  userData,
  setUserData,
}): JSX.Element => {
  const [pwdIsVisible, setPwdIsVisible] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, password: e.target.value });
    // TODO: Disable next button if passwords are invalid / don't match
  };

  // When the email input has and then loses focus -
  // validate the user's entry and update accordingly.
  // const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
  //   setUserData({ ...userData, password: e.target.value });
  // }

  return (
    <div>
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
        // placeholder="your password here"
        // aria-placeholder="your password here"
        aria-labelledby="pwd-label"
        aria-required="true"
        value={userData.password}
        // onBlur={blurHandler}
        onChange={changeHandler}
      />
      <PasswordChecklist
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
        value={userData.password}
        valueAgain={userData.passwordConfirm}
        // TODO: Enable/disable next button depending on isValid
        onChange={(isValid) => setIsPwdValid(isValid)}
      />
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
        placeholder="confirm your password"
        aria-placeholder="confirm your password"
        aria-labelledby="pwd-confirm-label"
        aria-required="true"
        value={userData.passwordConfirm}
        // onBlur={blurHandler}
        onChange={(e) =>
          setUserData({ ...userData, passwordConfirm: e.target.value })
        }
      />
    </div>
  );
};

export default PasswordPage;