import { useState } from "react";

const SignUpPage = (): JSX.Element => {
  const formTitles: Array<string> = [
    "Sign Up",
    "Login Details",
    "Personal Information",
    "Address",
  ];

  // Store the current page the user is viewing
  const [page, setPage] = useState<number>(0);

  return (
    <main>
      <h1>This will be the sign up page</h1>
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
