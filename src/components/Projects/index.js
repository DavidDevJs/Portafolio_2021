import React from "react";

import getData from "./getData";
import { ProjectsList } from "./ProjectsList";
import "./projects.css";

const Projects = () => {
  getData();
  return (
    <section className="projects" id="projects">
      <ProjectsList />
    </section>
  );
};

export { Projects };
