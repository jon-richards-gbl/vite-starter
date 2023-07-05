import React, { FocusEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { selectIsValid } from "../../../store/signUpPages/selectors";
import { setValidTrue } from "../../../store/signUpPages/signUpPagesSlice";
import "./styles.css";

const GuidancePage = ({ id }: { id: string }): React.JSX.Element => {
  // TODO: remove testing code
  const dispatch = useAppDispatch();
  const isValid: boolean = useAppSelector(selectIsValid(id));

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    dispatch(setValidTrue(id));
  };

  return (
    <div>
      {/* TODO: Include instructions for completing sign up - inc save option */}
      <h4>Instructions</h4>
      <p id="instructions">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio
        at mollitia numquam provident aspernatur iure, necessitatibus officia a
        voluptates ducimus. Officiis, velit vel? Dicta ipsum ipsam quisquam
        consequuntur natus alias! Cum accusantium pariatur similique ab earum
        vel! Sit, accusamus!
      </p>
      <h4>Terms and Conditions</h4>
      <p id="terms_conditions">Terms and conditions to agree to here?</p>
      <br />
      {/* TODO: remove testing code */}
      <p>Testing isValid: {isValid.toString()}</p>
      <input type="email" placeholder="Enter email here" onBlur={blurHandler} />
    </div>
  );
};

export default GuidancePage;
