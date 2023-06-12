import { NavLink } from "react-router-dom";

import globalLogicIcon from "../../assets/global-logic-icon.png";
import reactIcon from "../../assets/react.svg";
import { PageRoutes } from "../../router";

const Header = () => {
  return (
    <header>
      <h1>Example App</h1>

      <img src={reactIcon} alt="React Icon" />
      <img src={globalLogicIcon} alt="GlobalLogic Icon" />

      <nav>
        <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
        <br />
        <NavLink to={PageRoutes.UserPage}>User</NavLink>
      </nav>
    </header>
  );
};

export default Header;
