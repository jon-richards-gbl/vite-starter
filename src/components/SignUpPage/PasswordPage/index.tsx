// import { } from "react";
import UserData from "../../../types/types";

interface loginDetailsProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const PasswordPage: React.FC<loginDetailsProps> = ({
  userData,
  setUserData,
}): JSX.Element => {
  return (
    <>
      <p>TODO: add password inputs</p>
    </>
  );
};

export default PasswordPage;
