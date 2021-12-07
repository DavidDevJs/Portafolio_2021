import React, { useState, useEffect } from "react";
import "./projects.css";
import "./cardProject.css";
import { Description } from "./Description";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "projects"));
        data.forEach((doc) => {
          const dataProjects = { ...doc.data(), id: doc.id };
          setProjects([...projects, dataProjects]);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  console.log(projects);
  return (
    <section className="projects__list">
      <ul className="projects__list--ul"></ul>
    </section>
  );
};

export { ProjectsList };
