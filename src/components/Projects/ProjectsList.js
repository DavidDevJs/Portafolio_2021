import React, { useState, useEffect } from "react";
import "./projects.css";
import "./cardProject.css";
import { CardProject } from "./CardProject";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  let docsProjects = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "projects"));

        data.forEach((doc) => {
          const docData = doc.data();
          docsProjects.push({ ...docData, id: doc.id });
        });

        setProjects(docsProjects);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <section className="projects__list">
      <ul className="projects__list--ul">
        {projects.map((project) => (
          <CardProject {...project} key={project.id} />
        ))}
      </ul>
    </section>
  );
};

export { ProjectsList };
