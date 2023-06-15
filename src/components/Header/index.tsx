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
          <li className="nav-link">
            <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
          </li>
          {/* Items after this will all be right aligned */}
          <li className="nav-link align-right">
            <NavLink to={PageRoutes.LogInPage}>Log In</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={PageRoutes.SignUpPage}>Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
