import { Outlet } from "react-router-dom";

//Components
import Footer from "./components/Footer";
// import Loading from "./components/GeoLocation-map/Loading";
import Login from "./components/Login";
// import Loading from "./components/GeoLocation-map/Loading";
import Nav from "./components/Nav";
import Registration from "./components/Registration";
//CSS
import "./css/About.css";
import "./css/CalorieMap.css";
import "./css/Footer.css";
import "./css/Form.css";
import "./css/LandingPage.css";
import "./css/Loading.css";
import "./css/Nav.css";
import "./css/Waypoint.css";

function App() {
  return (
    <>
      <Nav />
      {/* <Login />
      <Registration /> */}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
