import React, { useState } from "react";

import { Description } from "./Description";
import getDataProjects from "./getData";

import "./projects.css";
import "./cardProject.css";

const ProjectsList = () => {
  const [projects, setProjects] = useState(getDataProjects());
  console.log(projects);
  projects.forEach((i) => console.log(i));
  return (
    <section className="projects__list">
      <ul className="projects__list--ul"></ul>
    </section>
  );
};

export { ProjectsList };
