import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

import "./buttonsProject.css";

const Buttonlike = ({ type, value }) => {
  const [likes, setLikes] = useState(value);

  return (
    <button className="container" onClick={() => setLikes(likes + 1)}>
      <BsFillHeartFill className="icon" />
      {likes}
    </button>
  );
};

export { Buttonlike };
