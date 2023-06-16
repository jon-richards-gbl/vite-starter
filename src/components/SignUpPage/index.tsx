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
      content.push(
        <>
          <div
            className="crumb"
            key={`crumb-${i}`}
            // if last element - mark as current step for aria,
            // mark all others as false
            aria-current={i === page - 1 ? "step" : "false"}
          >
            <h4>Step {i + 1}</h4>
            <p>{formTitles[i]}</p>
          </div>
          <div className="divider">
            {/* TODO: Add font awesome icon */}
            <span>&gt</span>
          </div>
        </>
      );
    }

    content.push(
      <div className="crumb" key={page}>
        <p>Steps Remaining</p>
        <p>{formTitles.length - page}</p>
      </div>
    );

    return <div className="breadcrumb-trail">{content}</div>;
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
