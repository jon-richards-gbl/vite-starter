import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface LogoutMessageProps {
  modal: boolean;
  toggleModal: () => void;
}
interface UserData {
  f_name: string;
  l_name: string;
}
const Modal: React.FC<LogoutMessageProps> = ({ modal, toggleModal }) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //JWT data persist
  const [userData, setUserData] = useState<UserData>({
    f_name: "",
    l_name: "",
  });
  const getUserDataFromLocalStorage = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };
  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);
  const logoutModal = () => {
    console.log("Logging out and removing user data...");
    localStorage.removeItem("userData");
    setUserData({ f_name: "", l_name: "" });
    console.log("User data removed");
    window.location.reload();
  };
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h1>
                {" "}
                Hello, {userData.f_name.trim()} {userData.l_name.trim()}!
                <hr />
              </h1>
              <p>
                You have successfully logged out we HOP to see you again soon
              </p>
              <button
                className="modal-btn"
                onClick={() => {
                  toggleModal();
                  logoutModal();
                }}
              >
                Close
              </button>
              <FontAwesomeIcon
                className="fa-icon fa-hippo modal-hippo"
                icon={faHippo}
              />{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
