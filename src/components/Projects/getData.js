import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase/firebaseConfig";

const getDataProjects = () => {
  const projects = [];
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "projects"));
        data.forEach((doc) => {
          projects.push({
            ...doc.data(),
            id: doc.id,
          });
        });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return projects;
};

export default getDataProjects;
