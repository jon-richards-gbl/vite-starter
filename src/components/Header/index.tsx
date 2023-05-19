import { NavLink } from "react-router-dom";

import { PageRoutes } from "../../router";

const Header = () => {
  return (
    <header>
      <h1>Example App</h1>

      <nav>
        <NavLink to={PageRoutes.LandingPage}>Home</NavLink>
        <NavLink to={PageRoutes.UserPage}>User</NavLink>
      </nav>
    </header>
  );
};

export default Header;
