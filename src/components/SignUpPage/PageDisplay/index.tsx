import React, { useEffect } from "react";

import { formTitles } from "..";
import { useAppDispatch } from "../../../store";
import { createPage } from "../../../store/signUpPages/signUpPagesSlice";
import UsernamePage from "../EmailPage";
import GuidancePage from "../GuidancePage";
import PasswordPage from "../PasswordPage";

const PageDisplay = ({ page }: { page: number }): React.JSX.Element => {
  // get the Redux  dispatch hook to call actions
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Ensure that there is always a state object for each page.
    // This reducer method will create one only if one doesn't
    // already exist.
    dispatch(createPage(formTitles[page]));
  }, [dispatch, page]);

  switch (page) {
    case 0:
      return <GuidancePage id={formTitles[page]} />;
    case 1:
      return <UsernamePage id={formTitles[page]} />;
    case 2:
      return <PasswordPage index={page} />;
    case 3:
      return <div>Address</div>;
    default:
      alert("SignUpPage - switch. No such page");
      return <></>;
  }
};

export default PageDisplay;
