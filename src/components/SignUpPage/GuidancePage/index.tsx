import React from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { selectPageByIndex } from "../../../store/signUpPages/selectors";
import { updatePage } from "../../../store/signUpPages/signUpPagesSlice";
import { SignUpPageInformation } from "../../../store/signUpPages/state";
import "./styles.css";

const GuidancePage = ({ index }: { index: number }): React.JSX.Element => {
  const thisPageInfo: SignUpPageInformation = useAppSelector(
    selectPageByIndex(index)
  );

  // TESTING
  // thisPageInfo.isValid = true;
  // thisPageInfo.errorMessages = ["This is an error test"]
  // const dispatch = useAppDispatch();
  // dispatch(updatePage(thisPageInfo));

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
      <p>Testing Error msgs: {thisPageInfo?.errorMessages}</p>
      <p>Testing isValid: {thisPageInfo?.isValid}</p>
      <p>Testing Index: {thisPageInfo?.index}</p>
    </div>
  );
};

export default GuidancePage;
