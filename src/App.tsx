import { useState } from "react";

import Footer from "./components/Footer";
import Form from "./components/Form";
// import LandingPage from "./components/LandingPage";
import Map from "./components/Map";
import Nav from "./components/Nav";
import TestRed from "./components/TestRed";
import UserForm from "./components/UserPage/UserForm";
import "./css/CalorieMap.css";
import "./css/Footer.css";
import "./css/Form.css";
import "./css/LandingPage.css";
import "./css/Nav.css";
import { useAppSelector } from "./store";
import { selectUserWeight } from "./store/form/formSelectors";
import { selectUserName } from "./store/user/selectors";

function App() {
  const [weight, setWeight] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [name, setName] = useState("");
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);
  console.log("weight:", weight);
  console.log("dropdown:", dropdown);
  console.log("name:", name);

  return (
    <>
      <Nav />
      <Form setWeight={setWeight} setDropdown={setDropdown} setName={setName} />

      {weight && dropdown && name && (
        <Map weight={weight} dropdown={dropdown} name={name} />
      )}
      {/* <LandingPage /> */}
      <UserForm />
      <TestRed />
      <Footer />
    </>
  );
}

export default App;
