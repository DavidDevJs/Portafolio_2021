import React from "react";
import { smoothScroll } from "../../utils/smoothScrollUtils";

import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__sections">
        <ul>
          <li className="nav__item">
            <button onClick={() => smoothScroll("header")}>Home</button>
          </li>
          <li className="nav__item">
            <button onClick={() => smoothScroll("about")}>About</button>
          </li>
          <li className="nav__item">
            <button onClick={() => smoothScroll("projects")}>Projects</button>
          </li>
          <li className="nav__item">
            <button onClick={() => smoothScroll("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
