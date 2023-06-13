import { NavLink } from "react-router-dom";

//import globalLogicIcon from "../../assets/global-logic-icon.png";
// import globalLogicIcon from '../../assets/gl-hitachi-Black-icon.svg'
// import reactIcon from "../../assets/react.svg";
import { PageRoutes } from "../../router";
import Logo from "../common/Logo";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="svg-logo-div">
        <Logo />
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-link align-left">
            <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
          </li>
          <li className="nav-link align-right">
            <NavLink to={PageRoutes.UserPage}>User</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
