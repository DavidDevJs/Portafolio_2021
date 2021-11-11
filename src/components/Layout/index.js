import { Navbar } from "../Navbar";
import "./main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export { Layout };
