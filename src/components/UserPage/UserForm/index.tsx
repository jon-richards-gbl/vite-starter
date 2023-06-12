import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { useAppDispatch } from "../../../store";
import { setUserName } from "../../../store/user/userSlice";

export const UserForm = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const formTitles: Array<string> = [
    "Sign Up",
    "Login Details",
    "Personal Information",
    "Address",
  ];

  // Store the current page the user is viewing
  const [page, setPage] = useState<number>(0);

  // const handleNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setName(e.target.value);
  // };

  // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   dispatch(setUserName(name));
  // };

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <div className="title">
        <h1>Let's get you signed up!</h1>
      </div>
      <div className="row">
        <button
          className="form-button"
          // Aria-disabled attibute not needed if disabled
          // attribute included
          disabled={page === 0}
          tabIndex={0}
          // No need to add Aria role of 'button' if button has type='button'
          type="button"
          // TODO: Set this up again
          onClick={() => {
            setPage((currentPg) => currentPg - 1);
          }}
        >
          Previous
        </button>
        <button
          className="form-button"
          type="button"
          disabled={page === formTitles.length - 1}
          // TODO: Set this up again and make the button 'submit' on the final stage. Add 'submit' action?
          onClick={() => {
            setPage((currentPg) => currentPg + 1);
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default UserForm;
