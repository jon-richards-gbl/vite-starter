import { useState } from "react";

import "./styles.css";

const SignUpPage = (): JSX.Element => {
  const formTitles: Array<string> = [
    "Sign Up - Guidance",
    "Login Details",
    "Personal Information",
    "Address",
  ];

  // Store the current page the user is viewing
  const [page, setPage] = useState<number>(0);

  const BreadcrumbDisplay = () => {
    const content: Array<JSX.Element> = [];

    for (let i = 0; i < page; i++) {
      // if last element - mark as current for aria
      content.push(
        <li id={`crumb ${i}`} aria-current={i === page - 1 ? "step" : false}>
          <p>Step {i + 1}</p>
          <p>{formTitles[i]} &gt;</p>
        </li>
      );
    }

    content.push(
      <div className="breadcrumb-item">
        <p>Steps Remaining</p>
        <p>{formTitles.length - page}</p>
      </div>
    );

    return (
      <div className="breadcrumb-trail">
        <ol>{content}</ol>
      </div>
    );
  };

  return (
    <main>
      <div className="title">
        <h1>Let's get you signed up!</h1>
      </div>
      <br />
      {/* Draw breadcrumb trail, showing where the user is up to */}
      {BreadcrumbDisplay()}
      <br />
      <div className="header">
        {/* Display the relevant title for the current page */}
        <h3>{formTitles[page]}</h3>
      </div>
      <div className="main-container">
        {/* TODO: Include instructions for completing sign up - inc save option */}
        <p id="instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio
          at mollitia numquam provident aspernatur iure, necessitatibus officia
          a voluptates ducimus. Officiis, velit vel? Dicta ipsum ipsam quisquam
          consequuntur natus alias! Cum accusantium pariatur similique ab earum
          vel! Sit, accusamus!
        </p>
      </div>
      <div className="row">
        <button
          className="form-button"
          // Aria-disabled attibute not needed if disabled
          // attribute included
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
          className="form-button"
          type="button"
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
