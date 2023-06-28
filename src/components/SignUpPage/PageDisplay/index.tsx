import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { selectNumPages } from "../../../store/signUpPages/selectors";
import { addPage } from "../../../store/signUpPages/signUpPagesSlice";
import { SignUpPageInformation } from "../../../store/signUpPages/state";
import EmailPage from "../EmailPage";
import GuidancePage from "../GuidancePage";
import PasswordPage from "../PasswordPage";

const PageDisplay = ({ page }: { page: number }): React.JSX.Element => {
  // get the Redux  dispatch hook to call actions
  const dispatch = useAppDispatch();
  const numPages: number = useAppSelector(selectNumPages);

  useEffect(() => {
    // If this is the first time we have loaded this page,
    // we need to add a new SignUpPageInformation object
    // to the state. Passing the index to the child component.
    // Ensure that there is always a state object for each page.

    if (numPages < page) {
      const newPage: SignUpPageInformation = {
        index: page,
        isValid: false,
        errorMessages: [],
      };
      dispatch(addPage(newPage));
    }
  }, [dispatch, numPages, page]);

  switch (page) {
    case 0:
      return <GuidancePage index={page} />;
    case 1:
      return <EmailPage />;
    case 2:
      return <PasswordPage index={page} />;
    default:
      alert("SignUpPage - switch. No such page");
      return <></>;
  }
};

export default PageDisplay;
