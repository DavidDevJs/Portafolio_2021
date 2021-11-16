import { CgMenuLeftAlt } from "react-icons/cg";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <CgMenuLeftAlt className="nav__icon" />

      <div className="nav__sections">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
