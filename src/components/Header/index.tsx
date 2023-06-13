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
      {/* <h1>Global Logic</h1> */}

      {/* <img src={reactIcon} alt="React Icon" /> */}
      <div className="svg-logo-div">
        <Logo />
      </div>
      <nav className="nav-bar">
        <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
        <NavLink to={PageRoutes.UserPage}>User</NavLink>
      </nav>
    </header>
  );
};

export default Header;
