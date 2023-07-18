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
        // Assuming login is successful
        // Update the URL to the landing page
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="grid-container">
        <div className="grid-even-columns">
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
