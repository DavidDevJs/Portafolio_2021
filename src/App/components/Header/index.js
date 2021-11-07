import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <h4 className="hi">
        Hi, I'm David <span>👋</span>{" "}
      </h4>
      <h1 className="iam">
        Front-end developer <br />
        <span>&&</span> <br />
        Becoming Full-stack developer
      </h1>
    </section>
  );
};

export default Header;
