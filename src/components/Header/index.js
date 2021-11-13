import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <h3 className="hi">
        Hi, I'm David <span>👋</span>{" "}
      </h3>
      <h1 className="iam">
        Front-end developer <br />
        <span>&&</span> <br />
        Becoming Full-stack developer
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius,
        sunt dicta ullam consequuntur sapiente dolorum praesentium reiciendis?
        Quibusdam magni eos ad quia rerum libero aspernatur modi nam, quod qui!
      </p>
    </section>
  );
};

export { Header };
