import React from "react";
import "./About.css";
import imgProfile from "../../assets/imgProfile.jpg";
import { iconsSkills } from "../../utils/icons";
import { getStorage, ref } from "firebase/storage";

const About = () => {
  const handlerDownload = async (e) => {
    const storage = getStorage();
    const pathReference = ref(storage, "manuel-david-arias-cv.pdf");
    const gsReference = ref(storage, "gd://bucket/manuel-david-arias-cv.pdf");
  };

  return (
    <section className="about" id="about">
      <div className="about__imgProfile">
        <img src={imgProfile} alt="Profile David Gonzalez" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__p">
          Hi, I'm David González{" "}
          <strong className="item-strong">front-end Developer</strong>, I love
          to create software solutions on the web to improve the quality of life
          in society quality of life in society, through maintainable, scalable
          and optimized code optimized with best practices, always thinking
          about the "User Experience".
        </p>
        <h4>I work with frontend technologies:</h4>
        <ul className="about__list-skills">
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1642-javascript-profesional/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.javascript} alt="Javascript Profesional" />
              <p>Javascript</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2008-html-css/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.html} alt="Curso HTML" />
              <p>HTML</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2229-flexbox-css-grid/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.css} alt="CSS Flexbox y Grid" />
              <p>CSS 3</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1557-git-github/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.git} alt="Git y Github" />
              <p>Git</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2118-react-hooks/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.react} alt="React y React Hooks" />
              <p>React JS</p>
            </a>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.styled} alt="Styles in JS" />
            <p>Styled Components</p>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.tailwind} alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/2242-webpack/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.webpack} alt="Webpack" />
              <p>Webpack</p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://platzi.com/p/davidgonzalez0519/curso/1480-postgresql/diploma/detalle/"
              target="_blank"
            >
              <img src={iconsSkills.postgres} alt="Base de datos postgresql" />
              <p>Postgres</p>
            </a>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.firebase} alt="Firebase" />
            <p>Firebase</p>
          </li>
          <li>
            {" "}
            <img src={iconsSkills.figma} alt="figma design" />
            <p>figma</p>
          </li>
        </ul>
        <p className="about__p">Always ready to never stop learning.</p>
        {/*
          <button className="about__download" onClick={handlerDownload}>
            Download CV
          </button>
        */}
      </div>
    </section>
  );
};

export { About };
