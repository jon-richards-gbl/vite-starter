import React from "react";

import { useAppSelector } from "../store";
import { selectUserWeight } from "../store/form/formSelectors";
import { selectUserName } from "../store/user/selectors";

const TestRed = () => {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);

  return (
    <h1>
      Hi {userName} twerking {userWeight}{" "}
    </h1>
  );
};

export default TestRed;
