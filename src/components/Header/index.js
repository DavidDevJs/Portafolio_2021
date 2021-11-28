import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="header__name">
        <h2 className="iam">
          <span>
            DAVID <br />
          </span>
          GONZÁLEZ
        </h2>
        <h1>Front-end Developer</h1>
      </div>
    </section>
  );
};

export { Header };
