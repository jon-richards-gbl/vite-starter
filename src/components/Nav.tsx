import React, { useEffect, useState } from "react";

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
              <li className="items">Home</li>
              <li className="items">About</li>
              <li className="items">Calories</li>
              <li className="items">Map</li>
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
