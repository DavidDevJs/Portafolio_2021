import React from "react";
import "./cardProject.css";

const CardProject = ({ children }) => {
  const urlTest = "https://gfycat.com/severeindeliblebrownbear";
  const styledImageBg = {
    backgroundImage: `url(${urlTest})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "center",
  };

  return (
    <div className="project__container">
      <li>
        <div className="project__item" style={styledImageBg}>
          {children}
        </div>
      </li>
    </div>
  );
};

export { CardProject };
