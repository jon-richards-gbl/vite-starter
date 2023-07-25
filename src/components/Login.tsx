import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { SetStateAction, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    Axios.post("http://localhost:3000/user/login", {
      email,
      password,
    })
      .then((response) => {
        console.log(response.data);
        const userData = response.data.user;
        console.log("response  data user", response.data.user);
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("accessToken", response.data.token);
        // Update the URL to the landing page
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.error("API error response:", error.response);
          if (error.response.status === 401) {
            // Invalid credentials error
            console.log("Invalid email or password");
          } else if (error.response.status === 500) {
            // Server error
            console.log("Server error");
          } else {
            // Other status codes
            console.log("Other API error:", error.response.data.message);
          }
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No response received from the server:", error.request);
        }
      });
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="grid-container-login">
        <div className="grid-even-columns-login">
          <div className="icon">
            <FontAwesomeIcon className="fa-icon-login" icon={faEnvelope} />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              placeholder="password"
              name="password"
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
