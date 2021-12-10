import React from "react";
import { FaShare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import "./buttonsProject.css";

const Icons = {
  share: <FaShare className="icon" />,
  github: <BsGithub className="icon" />,
  demo: <HiOutlineExternalLink className="icon" />,
};

export const ButtonLink = ({ type, title, link }) => {
  return (
    <a href={link} target="_blank">
      <button className="container">
        {Icons[type]}
        {title}
      </button>
    </a>
  );
};
