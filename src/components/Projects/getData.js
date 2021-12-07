import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";

const getData = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(collection(db, "projects"));
      data.forEach((document) => {
        setProjects(document.data());
        console.log(document.data());
      });
    };

    getProjects();
  }, []);

  return projects;
};

export default getData;
