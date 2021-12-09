import React from "react";
import "./About.css";
import imgProfile from "../../assets/imgProfile.jpg";
import { iconsSkills } from "../../utils/icons";

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
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1642-javascript-profesional/diploma/detalle/"
              target="_blank"
            >
              <img
                src={iconsSkills.javascriptIcon}
                alt="Javascript Profesional"
              />
              <p>Javascript</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2008-html-css/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.htmlIcon} alt="Curso HTML" />
              <p>HTML</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2229-flexbox-css-grid/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.cssIcon} alt="CSS Flexbox y Grid" />
              <p>CSS 3</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1557-git-github/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.gitIcon} alt="Git y Github" />
              <p>Git</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2118-react-hooks/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.reactIcon} alt="React y React Hooks" />
              <p>React JS</p>
            </a>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.styledIcon} alt="Styles in JS" />
            <p>Styled Components</p>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.tailwindIcon} alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2242-webpack/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.webpackIcon} alt="Webpack" />
              <p>Webpack</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1480-postgresql/diploma/detalle/"
              target="_blank"
            >
              <img
                src={iconsSkills.postgresql}
                alt="Base de datos postgresql"
              />
              <p>Postgres</p>
            </a>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.firebaseIcon} alt="Firebase" />
            <p>Firebase</p>
          </li>
        </ul>
        <p className="about__p">
          Siempre dispuesto para nunca parar de aprender.
        </p>
      </div>
    </section>
  );
};

export { About };
