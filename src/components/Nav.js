import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { CgMenuCake } from "react-icons/cg";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const fblink = "https://www.facebook.com/profile.php?id=100057173991350";
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff", size: "3.5rem" }}>
      <nav className="navbar">
        <div className="navbar-container ncontainer">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Loan Do Cakes
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <CgMenuCake />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href={fblink}
                target="_blank"
                rel="noreferrer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
