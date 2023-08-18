import { Outlet } from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
//CSS
import "./css/About.css";
import "./css/CalorieMap.css";
import "./css/Footer.css";
import "./css/Form.css";
import "./css/LandingPage.css";
import "./css/Loading.css";
import "./css/Login.css";
import "./css/Modal.css";
import "./css/Nav.css";
import "./css/Waypoint.css";

function App() {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
