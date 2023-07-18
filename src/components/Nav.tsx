import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeNav = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <div className="containerN">
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <li className="items" onClick={closeNav}>
                <Link to="/">Home</Link>
              </li>
              <li className="items" onClick={closeNav}>
                <Link to="/about">About</Link>
              </li>
              <li className="items" onClick={closeNav}>
                <Link to="/formMap">Calorie Map</Link>
              </li>
              <li className="items" onClick={closeNav}>
                <Link to="/GeoLocationFormMap">Geo Map</Link>
              </li>
              <li className="items" onClick={closeNav}>
                <Link to="/waypointFormMap">Waypoint Map</Link>
              </li>
              <Link to="/Login">Login</Link>
            </ul>
          )}

          <button onClick={toggleNav} className="btn">
            NAV
          </button>
        </nav>
      </div>
    </>
  );
};

export default Nav;
