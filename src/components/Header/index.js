import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="header__title">
        <h2 className="header__title--name item">
          DAVID <br /> GONZÁLEZ
        </h2>
        <h1 className="header__title--skill item">Front-end Developer</h1>
      </div>
    </section>
  );
};

export { Header };
