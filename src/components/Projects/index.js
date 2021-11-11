import { CardProject } from "./CardProject";
import "./projects.css";

const ProjectsList = () => {
  return (
    <section className="projectsList">
      <ul>
        <CardProject />
        <CardProject />
      </ul>
    </section>
  );
};

export { ProjectsList };
