import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import "./buttonsProject.css";

const Icons = {
  like: <BsFillHeartFill className="icon" />,
  share: <FaShare className="icon" />,
  github: <BsGithub className="icon" />,
  demo: <HiOutlineExternalLink className="icon" />,
};

const ButtonProject = ({ type, value, title, link }) => {
  return (
    <a href={link} target="_blank">
      <button className="container">
        {Icons[type]}
        {value}
        {title}
      </button>
    </a>
  );
};

export { ButtonProject };
