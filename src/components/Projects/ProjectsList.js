import { CardProject } from "./CardProject";
import { Description } from "./Description";
import "./projects.css";

const ProjectsList = () => {
  return (
    <section className="projects__list">
      <ul className="projects__list--ul">
        <CardProject>
          <Description />
        </CardProject>
        <CardProject>
          <Description />
        </CardProject>
      </ul>
    </section>
  );
};

export { ProjectsList };
