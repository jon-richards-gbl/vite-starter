import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    Axios.post("http://localhost:3000/user/login", {
      email,
      password,
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
    <form className="login-form" onSubmit={handleLogin}>
      <div className="grid-container-login">
        <div className="grid-even-columns-login">
          <div className="icon">
            <FontAwesomeIcon className="fa-icon-login" icon={faEnvelope} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              type="email"
              placeholder="password"
              name="email"
              required
            />
          </div>
          <div className="icon">
            <FontAwesomeIcon className="fa-icon-login" icon={faLock} />
            <input
              onChange={(e) => setPassword(e.target.value)}
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
              If you do not have an account please click{" "}
              <a href="/Registration" className="about-link">
                Register
              </a>{" "}
              to create an account.{" "}
            </p>
          </div>
        </div>
        <button className="submitBtn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
