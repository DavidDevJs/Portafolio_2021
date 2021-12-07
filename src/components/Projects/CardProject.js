import React from "react";
import "./cardProject.css";
import { Description } from "./Description";

const CardProject = () => {
  const styledImageBg = {
    backgroundImage: `url()`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "center",
  };

  return (
    <div className="project__container">
      <li>
        <div className="project__item" style={styledImageBg}>
          <Description />
        </div>
      </li>
    </div>
  );
};

export { CardProject };
