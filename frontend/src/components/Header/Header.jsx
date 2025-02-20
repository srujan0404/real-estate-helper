import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <header className="header" style={{ background: headerColor }}>
      <div className="container header-container">
        <img src="./logo.png" alt="logo" className="logo" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <nav className={`nav ${menuOpened ? "nav-open" : ""}`}>
            <a
              href="#residencies"
              className="nav-link"
              onClick={() => setMenuOpened(false)}
            >
              Residencies
            </a>
            <a
              href="#value"
              className="nav-link"
              onClick={() => setMenuOpened(false)}
            >
              Our Value
            </a>
            <a
              href="#contact-us"
              className="nav-link"
              onClick={() => setMenuOpened(false)}
            >
              Contact Us
            </a>
            <a
              href="#get-started"
              className="nav-link"
              onClick={() => setMenuOpened(false)}
            >
              Get Started
            </a>
            <button className="nav-button">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
          </nav>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
