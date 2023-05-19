import { useAppSelector } from "../../store";
import { selectUserAvatar, selectUserName } from "../../store/user/selectors";

const UserPage = () => {
  const userName = useAppSelector(selectUserName);
  const userAvatar = useAppSelector(selectUserAvatar);

  return (
    <main>
      <h1>Hello {userName}</h1>
      {userAvatar && <div dangerouslySetInnerHTML={{ __html: userAvatar }} />}
    </main>
  );
};

export default UserPage;
