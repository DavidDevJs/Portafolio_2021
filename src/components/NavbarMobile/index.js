import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";

import addButton from "../../assets/addButtonTiktok.png";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <button>
            <BsFillHouseDoorFill />
            <span>Home</span>
          </button>
        </li>
        <li className="navbar__item">
          <button>
            <IoMdCompass />
            <span>About</span>
          </button>
        </li>
        <li className="navbar__item">
          <button>
            <img src={addButton} alt="add Comment" />
          </button>
        </li>
        <li className="navbar__item">
          <button>
            <FaTools />
            <span>Projects</span>
          </button>
        </li>
        <li className="navbar__item">
          <button>
            <RiMessageFill />
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarMobile };
