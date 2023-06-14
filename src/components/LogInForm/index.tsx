import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { useAppDispatch } from "../../store";
import { setUserName } from "../../store/user/userSlice";

export const LogInForm = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(setUserName(name));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Your name:</label>
      <input
        id="username"
        name="username"
        onInput={handleNameInput}
        value={name}
        required
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default LogInForm;
