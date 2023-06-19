import React from "react";

import { useAppSelector } from "../store";
import {
  selectUserDropdown,
  selectUserName,
  selectUserWeight,
} from "../store/form/formSelectors";

const TestRed = () => {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);
  const userDropdown = useAppSelector(selectUserDropdown);

  return (
    <h1>
      Hi {userName} your weight is {userWeight} and your dropdown is{" "}
      {userDropdown}{" "}
    </h1>
  );
};

export default TestRed;
