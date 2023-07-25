import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoutMessage from "./LogoutMessage";

// import { LogoutMessageProps } from "./Types";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleLogout = () => {
    toggleModal();
    retrunToLannding();
    setIsLoggedIn(!isLoggedIn);
    // window.location.reload();
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  async function retrunToLannding() {
    navigate("/");
  }

  // Re-sizing
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
              {localStorage.getItem("userData") ? (
                <>
                  <li className="items" onClick={closeNav}>
                    <Link onClick={handleLogout} to="/Login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="items" onClick={closeNav}>
                    <Link to="/Login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          )}

          <button onClick={toggleNav} className="btn">
            NAV
          </button>
        </nav>
      </div>
      {modal && <LogoutMessage modal={modal} toggleModal={toggleModal} />}
    </>
  );
};

export default Nav;
