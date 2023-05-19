import { ChangeEventHandler, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { PageRoutes } from "../../../router";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchAvatar } from "../../../store/user/actions";
import { selectUserName } from "../../../store/user/selectors";
import { setName } from "../../../store/user/userSlice";

export const UserForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userName = useAppSelector(selectUserName);

  const handleUserName: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(fetchAvatar());
    navigate(PageRoutes.UserPage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Your name:</label>
      <input
        id="username"
        name="username"
        onInput={handleUserName}
        value={userName}
        required
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default UserForm;
