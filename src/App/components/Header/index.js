import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section>
      <div className="container">
        <h4>
          Hi, I'm David <span>👋</span>{" "}
        </h4>
        <h1>
          Front-end developer <br />
          <span>&&</span>
        </h1>
        <h2>Becoming Full-stack developer</h2>
      </div>
    </section>
  );
};

export default Header;
