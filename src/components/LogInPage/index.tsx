import { useAppSelector } from "../../store";
import { selectUserName } from "../../store/user/selectors";
import LogInForm from "../LogInForm";

const LogInPage = () => {
  const userName = useAppSelector(selectUserName);

  return (
    <main>
      <LogInForm />

      <h1>Hello {userName}</h1>
    </main>
  );
};

export default LogInPage;
