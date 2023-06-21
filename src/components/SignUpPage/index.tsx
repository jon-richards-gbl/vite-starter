import { useState } from "react";

import UserData from "../../types/types";
import BreadcrumbTrail from "../common/BreadcrumbTrail";
import EmailPage from "./EmailPage";
import GuidancePage from "./GuidancePage";
import PasswordPage from "./PasswordPage";
import "./styles.css";

export const formTitles: Array<string> = [
  "Sign Up - Guidance",
  "Email Address",
  "Secure your account",
  "Address",
];

const SignUpPage = (): JSX.Element => {
  // TODO: should this be in types.ts?
  // TS type for formData
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    surname: "",
    birthDate: null,
    address: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <GuidancePage />;
    } else if (page === 1) {
      return <EmailPage userData={userData} setUserData={setUserData} />;
    } else if (page === 2) {
      return <PasswordPage userData={userData} setUserData={setUserData} />;
    }
  };

  // Store the current page the user is viewing
  const [page, setPage] = useState<number>(0);

  return (
    <main>
      <hr aria-hidden="true" />
      <div className="title">
        <h1>Sign up for our services</h1>
      </div>
      {/* TODO: Add CSS padding to make the <br> tags unneccesary? */}
      <br />
      {/* Draw breadcrumb trail, showing where the user is up to */}
      <BreadcrumbTrail currentStep={page} />
      <br />

      {/* Output the header and page content for the step the user is currently at */}
      <div className="main-container">
        <div className="header">
          {/* Display the relevant title for the current page */}
          <h2>{formTitles[page]}</h2>
        </div>
        <div className="separator"></div>
        {PageDisplay()}
      </div>

      {/* Buttons will be controlled here, not via the individual pages */}
      <div className="button-row">
        <button
          className="form-button h4-style"
          // Aria-disabled attibute not needed if disabled attribute included
          disabled={page === 0}
          // No need to add Aria role of 'button' if button has type='button'
          type="button"
          onClick={() => {
            setPage((currentPg: number) => currentPg - 1);
          }}
        >
          Previous
        </button>
        <button
          className="form-button h4-style"
          type="button"
          // TODO: Enable child page components to disable the next button
          disabled={page === formTitles.length - 1}
          onClick={() => {
            setPage((currentPg: number) => currentPg + 1);
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default SignUpPage;
