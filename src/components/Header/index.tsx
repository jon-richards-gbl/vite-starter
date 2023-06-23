import { NavLink } from "react-router-dom";

import globalLogicIcon from "../../assets/gl-hitachi-Black-icon.svg";
import { PageRoutes } from "../../router";
// import Logo from "../common/Logo";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="svg-logo-div">
        {/* <Logo /> */}
        <img
          alt="Global Logic - A Hitachi Group Company"
          src={globalLogicIcon}
        ></img>
      </div>
      <div className="a11y-btns">
        <button className="align-right">Skip to main content</button>
        <button>Change font colours</button>
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-link">
            <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
          </li>
          {/* Items after this will all be right aligned */}
          <li className="nav-link align-right">
            <i className="fa-solid fa-user" aria-hidden="true"></i>
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
