import { useState } from "react";

import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";

import addButton from "../../assets/addButtonTiktok.png";
import "./NavbarMobile.css";
import { smoothScroll } from "../../utils/smoothScrollUtils";

const NavbarMobile = () => {
  const [settings, setSettings] = useState(false);
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <button onClick={() => smoothScroll("header")}>
            <BsFillHouseDoorFill />
            <span>Home</span>
          </button>
        </li>
        <li className="navbar__item">
          <button onClick={() => smoothScroll("about")}>
            <IoMdCompass />
            <span>About</span>
          </button>
        </li>
        <li className="navbar__item nav__control">
          <button
            onClick={() => setSettings((active) => !active)}
            className={
              settings
                ? "nav__settings--wrapper"
                : "nav__settings--wrapper-disabled"
            }
          >
            <img src={addButton} alt="settings" />
          </button>
        </li>
        <li className="navbar__item">
          <button onClick={() => smoothScroll("projects")}>
            <FaTools />
            <span>Projects</span>
          </button>
        </li>
        <li className="navbar__item">
          <button onClick={() => smoothScroll("contact")}>
            <RiMessageFill />
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarMobile };
