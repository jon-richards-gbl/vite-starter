import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ModalLoginProps {
  modalLogin: boolean;
  toggleModalLogin: () => void;
}

interface UserData {
  f_name: string;
  l_name: string;
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  modalLogin,
  toggleModalLogin,
}) => {
  if (modalLogin) {
    document.body.classList.add("active-modalLogin");
  } else {
    document.body.classList.remove("active-modalLogin");
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

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {modalLogin && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h1>
                {" "}
                Hello, {userData.f_name.trim()} {userData.l_name.trim()}!
                <hr />
              </h1>
              <p>You have successfully logged in</p>
              <button
                className="modal-btn"
                onClick={() => {
                  toggleModalLogin();
                  const { from } = location.state || {
                    from: { pathname: "/" },
                  };
                  navigate(from);
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

export default ModalLogin;
