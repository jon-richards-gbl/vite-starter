import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoutMessage from "./LogoutMessage";
import { LogoutMessageProps } from "./Types";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);

  // const handleLogout = () => {

  //   localStorage.removeItem("userData");

  //   setLogoutModal(true);

  //   const closeModal: LogoutMessageProps["closeModal"] = () => {
  //     // Close the logout modal
  //     setLogoutModal(false);
  //   };
  // };

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

  function closeModal(): void {
    throw new Error("Function not implemented.");
  }

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
              <li className="items" onClick={closeNav}>
                {/* <button onClick={handleLogout}>Logout</button> */}
                <button>Logout</button>
              </li>
            </ul>
          )}

          <button onClick={toggleNav} className="btn">
            NAV
          </button>
        </nav>
      </div>
      {logoutModal && <LogoutMessage closeModal={closeModal} />}
    </>
  );
};

export default Nav;
