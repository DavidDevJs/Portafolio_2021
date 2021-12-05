import { Navbar } from "../Navbar";
import { NavbarMobile } from "../NavbarMobile";
import { ConfigMenu } from "./configMenu";
import "./main.css";

const Layout = ({ children }) => {
  return (
    <>
      <ConfigMenu />
      <Navbar />
      <NavbarMobile />
      <main>{children}</main>
    </>
  );
};

export { Layout };
