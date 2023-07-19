import {
  faArrowUp91,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
  const [userEmailReg, setUserEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const register = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    Axios.post("http://localhost:3000/user", {
      email: userEmailReg,
      password: passwordReg,
      f_name: f_name,
      l_name: l_name,
      age: age,
    })

      .then((response) => {
        console.log(response.data);

        // Update the URL to the landing page
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      })
      .catch((error) => {
        console.error(error.response);
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
                onChange={(e) => setFName(e.target.value)}
                className="login-input"
                type="name"
                placeholder="first name"
                name="f_name"
                required
              />
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon className="fa-icon-login" icon={faUser} />
              <input
                onChange={(e) => setLName(e.target.value)}
                className="login-input"
                type="name"
                placeholder="last name"
                name="l_name"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faArrowUp91} />

              <input
                onChange={(e) => setAge(e.target.value)}
                className="login-input"
                type="integer"
                placeholder="age"
                name="age"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faEnvelope} />

              <input
                onChange={(e) => setUserEmailReg(e.target.value)}
                className="login-input"
                type="email"
                placeholder="email"
                name="email"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="fa-icon-login" icon={faLock} />

              <input
                onChange={(e) => setPasswordReg(e.target.value)}
                className="login-input"
                type="password"
                placeholder="password"
                name="time"
                required
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
          <button className="submitBtn" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Registration;
