import logo from "../../assets/Icon.svg";

const Navbar = () => {
  return (
    <nav>
      <img className="Icon" src={logo} alt="Logo David Gonzalez" />
      <h1>Front-end Developer</h1>
    </nav>
  );
};

export { Navbar };
