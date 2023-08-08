import {
  faArrowUp91,
  faEnvelope,
  faImage,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { useState } from "react";

import ModalRegister from "./Modals/ModalRegister";

const Registration = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmailReg, setUserEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState<File | null>(null);

  const [modalLogin, setModalLogin] = useState(false);
  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  if (modalLogin) {
    document.body.classList.add("active-modalLogin");
  } else {
    document.body.classList.remove("active-modalLogin");
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      setPic(file);
    }
  };
  const register = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", userEmailReg);
    formData.append("password", passwordReg);
    formData.append("f_name", f_name);
    formData.append("l_name", l_name);
    formData.append("age", age);

    if (pic !== null) {
      formData.append("profilePicture", pic);
    }
    console.log("form data", formData.append);

    Axios.post("http://localhost:3000/register", formData)

      .then((response) => {
        // console.log(response.data);
        console.log("Response Data:", response.data);
        toggleModalLogin();
      })
      .catch((error) => {
        console.error(error.response);
        console.log("Registration Error:", error.response.data.message);
        setErrorMessage("Email has already been used");
      });
  };

  return (
    <>
      <form className="login-form" onSubmit={register}>
        <div className="grid-container-login">
          <div className="grid-even-columns-login ">
            {" "}
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faUser} />
              <input
                type="name"
                onChange={(e) => setFName(e.target.value)}
                className="login-input"
                placeholder="first name"
                name="f_name"
                required
              />
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon className="fa-icon-login" icon={faUser} />
              <input
                type="name"
                onChange={(e) => setLName(e.target.value)}
                className="login-input"
                placeholder="last name"
                name="l_name"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faArrowUp91} />

              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                className="login-input"
                placeholder="age"
                name="age"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faEnvelope} />

              <input
                type="email"
                onChange={(e) => setUserEmailReg(e.target.value)}
                className="login-input"
                placeholder="email"
                name="email"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faLock} />

              <input
                type="password"
                onChange={(e) => setPasswordReg(e.target.value)}
                className="login-input"
                placeholder="password"
                name="password"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faImage} />
              <input
                type="file"
                onChange={handleFileChange}
                className="login-input picture-input"
                name="profilePicture"
                accept="image/*"
              />
            </div>
            {pic && (
              <div className="profile-picture-preview">
                <img src={URL.createObjectURL(pic)} alt="Profile Preview" />
              </div>
            )}
          </div>
          <div className="grid-one-columns1">
            <div className="card-container-login">
              <p>
                If you already have a account with us please{" "}
                <a href="/Login" className="about-link">
                  Login
                </a>{" "}
                here.{" "}
              </p>
            </div>
          </div>
          {errorMessage && (
            // <div className="grid-one-columns1">
            <div className="card-container-login-error">
              <p className="error-message">{errorMessage}</p>
            </div>
            // </div>
          )}

          <button className="submitBtn" type="submit">
            Register
          </button>
          {/* {errorMessage && (
            <div className="grid-one-columns1">
              <div className="card-container-login-error">
                <p>{errorMessage}</p>
              </div>
            </div>
          )} */}
        </div>
      </form>
      {modalLogin && (
        <ModalRegister modal={modalLogin} toggleModal={toggleModalLogin} />
      )}
    </>
  );
};

export default Registration;
