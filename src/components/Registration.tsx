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
    const file = e.target.files?.[0];
    console.log("pic", pic);
    console.log("file", file);
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
      console.log("pic", pic);
      formData.append("file_path", `/uploads/${pic.name}`);
    }

    Axios.post("http://localhost:3000/register", formData)

      .then((response) => {
        const user_id = response.data.user.id;
        console.log("user_Id", user_id);
        console.log("Response Data:", response.data);

        const imageFormData = new FormData();
        imageFormData.append("user_id", user_id);

        // imageFormData.append("filename", pic?.name || "");
        // imageFormData.append("alt_text", "Profile Picture");
        if (pic !== null) {
          console.log("pic", pic);
          imageFormData.append("profilePicture", pic);
          imageFormData.append("filename", `${pic.name}`);
          imageFormData.append("alt_text", "Profile Picture");
          imageFormData.append("file_path", `/uploads/${pic.name}`);
        }
        //Apending file path, alt,
        console.log("file_path", `uploads/${pic?.name}`);
        console.log("user_id:", user_id);
        console.log("alt_text:", "Profile Picture");
        console.log("profilePicture:", `uploads/${pic}`);
        console.log("form data", formData);

        Axios.post("http://localhost:3000/addImage", imageFormData);
        console.log("imageFormData:", imageFormData);
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
      <form
        className="login-form"
        onSubmit={register}
        encType="multipart/form-data"
      >
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
