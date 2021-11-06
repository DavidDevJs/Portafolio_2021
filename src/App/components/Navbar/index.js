import logo from "../../assets/Icon.svg";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav>
      <img className="Icon" src={logo} alt="Logo David Gonzalez" />
      <h1>Front-end Developer</h1>
    </nav>
  );
};

export { Navbar };
