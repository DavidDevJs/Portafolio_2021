import { BsFillHeartFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import "./buttonsProject.css";

const typeIcons = {
  like: <BsFillHeartFill className="icon" />,
  share: <FaShare className="icon" />,
  github: <BsGithub className="icon" />,
  demo: <HiOutlineExternalLink className="icon" />,
};

const ButtonProject = ({ type, value, title }) => {
  return (
    <button className="container">
      {typeIcons[type]}
      {value}
      {title}
    </button>
  );
};

export { ButtonProject };
