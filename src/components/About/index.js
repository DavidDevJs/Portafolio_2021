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
          Hola, soy David González desarrollador front-end, me encanta crear
          soluciones de software en la web para mejorar la calidad de vida en la
          sociedad, a través de código mantenible, escalable y optimizado con
          las mejores prácticas, pensando siempre en la Experiencia de Usuario.{" "}
          <br /> Trabajo con tecnologias Javascript como React JS, abierto para
          aprender nuevas tecnologias mas alla del front-end.
        </p>
      </div>
    </section>
  );
};

export { About };
