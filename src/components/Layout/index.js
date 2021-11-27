import { Navbar } from "../Navbar";
import { NavbarMobile } from "../NavbarMobile";
import "./main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main>{children}</main>
    </>
  );
};

export { Layout };
