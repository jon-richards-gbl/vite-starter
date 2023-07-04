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

  return (
    <>
      <div className="containerN">
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <Link className="items" to="/">
                Home
              </Link>
              <Link className="items" to="/about">
                About
              </Link>
              <Link className="items" to="/formMap">
                Calorie Map
              </Link>
              <Link className="items" to="/GeoLocationFormMap">
                Geo Map
              </Link>
              <Link className="items" to="/waypointMap">
                Waypoint Map
              </Link>
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
