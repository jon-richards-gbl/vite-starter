import { useAppSelector } from "../../store";
import { selectUserName } from "../../store/user/selectors";
import UserForm from "./UserForm";

const UserPage = () => {
  const userName = useAppSelector(selectUserName);

  return (
    <main>
      <UserForm />

      <hr />

      <h1>Hello {userName}</h1>
    </main>
  );
};

export default UserPage;
