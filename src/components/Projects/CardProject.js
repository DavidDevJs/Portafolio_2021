import React from "react";
import "./cardProject.css";
import "./description.css";
import { ButtonProject } from "./Buttons/Button";

const CardProject = ({ title, description, img, likes, code, demo }) => {
  const styledImageBg = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "center",
  };

  return (
    <div className="project__container">
      <li>
        <div className="project__item" style={styledImageBg}>
          <div className="description__wrapper">
            <div className="description__text">
              <h2 className="description__text--title">{title}</h2>
              <p className="description__text-p">{description}</p>
            </div>
            <div className="description__technologies--wrapper">
              <ul className="description__technologies--list">
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
            <div className="description__feedback">
              <ButtonProject type="like" value={likes} />
              <ButtonProject type="share" title="Share" />
              <ButtonProject type="github" title="Code" link={code} />
              <ButtonProject type="demo" title="Demo" link={demo} />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export { CardProject };
