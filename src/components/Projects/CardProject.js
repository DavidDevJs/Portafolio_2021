import React from "react";
import "./cardProject.css";
import imgProject from "../../assets/loginTwitter.gif";

const CardProject = ({ children }) => {
  const styledImageBg = {
    backgroundImage: `url(${imgProject})`,
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
