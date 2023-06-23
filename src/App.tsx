import { Outlet } from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
//CSS
import "./css/CalorieMap.css";
import "./css/Footer.css";
import "./css/Form.css";
import "./css/LandingPage.css";
import "./css/Nav.css";
import "./css/Waypoint.css";
import { useAppSelector } from "./store";
//Redux
import { selectUserName, selectUserWeight } from "./store/form/formSelectors";

function App() {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);

  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
