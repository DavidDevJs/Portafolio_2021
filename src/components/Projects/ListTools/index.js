import React from "react";
import { iconsSkills } from "../../../utils/icons";
import "./listTools.css";

const ListTools = ({ tools }) => {
  return (
    <ul className="tools">
      {tools.map((item, i) => (
        <li key={i} className="tools__item">
          <img src={iconsSkills[item]} alt={item} />
        </li>
      ))}
    </ul>
  );
};

export { ListTools };
