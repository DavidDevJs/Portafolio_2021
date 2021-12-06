import React from "react";
import "./About.css";
import imgProfile from "../../assets/imgProfile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__imgProfile">
        <img src={imgProfile} alt="Profile David Gonzalez" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__p">
          Hola, soy David González{" "}
          <strong className="item-strong">desarrollador front-end</strong>, me
          encanta crear soluciones de software en la web para mejorar la calidad
          de vida en la sociedad, a través de código mantenible, escalable y
          optimizado con las mejores prácticas, pensando siempre en la
          "Experiencia de Usuario".
        </p>
        <h4>Trabajo con tecnologias frontend:</h4>
        <ul className="about__list-skills">
          <strong>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS 3</li>
            <li>React JS</li>
            <li>Webpack</li>
            <li>Tailwind CSS</li>
            <li>Styled Components</li>
          </strong>
        </ul>
        <p className="about__p">
          Siempre dispuesto para nunca parar de aprender.
        </p>
      </div>
    </section>
  );
};

export { About };
