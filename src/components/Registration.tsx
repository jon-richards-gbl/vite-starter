import Axios from "axios";
import { useState } from "react";

const Registration = () => {
  const [userEmailReg, setUserEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState("");

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
      })
      .catch((error) => {
        console.error(error.response);
      });
  };

  return (
    <>
      <form onSubmit={register}>
        <div className="grid-container">
          <div className="grid-even-columns">
            {" "}
            <label>First Name</label>
            <input type="name" onChange={(e) => setFName(e.target.value)} />
            <label>Last Name</label>
            <input type="name" onChange={(e) => setLName(e.target.value)} />
            <label>Age</label>
            <input type="integer" onChange={(e) => setAge(e.target.value)} />
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setUserEmailReg(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Registration;
