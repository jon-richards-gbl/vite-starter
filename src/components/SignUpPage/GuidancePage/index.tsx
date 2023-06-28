import React from "react";

import { useAppSelector } from "../../../store";
import { selectPageByIndex } from "../../../store/signUpPages/selectors";
import { SignUpPageInformation } from "../../../store/signUpPages/state";
import "./styles.css";

const GuidancePage = ({ index }: { index: number }): React.JSX.Element => {
  const thisPageInfo: SignUpPageInformation = useAppSelector(
    selectPageByIndex(index)
  );
  // const thisPageInfo: SignUpPageInformation = useAppSelector((state) =>
  //   findPageByIndex(state, index)
  // );

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
      <span>For Testing: {thisPageInfo?.errorMessages}</span>
    </div>
  );
};

export default GuidancePage;
