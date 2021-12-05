import React from "react";
import "./description.css";

const Description = () => {
  return (
    <div className="description__wrapper">
      <div className="description__text">
        <h2 className="description__text--title">Title Project</h2>
        <p className="description__text-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          similique itaque animi delectus culpa quaerat molestias necessitatibus
        </p>
      </div>
      <div className="description__technologies--wrapper">
        <ul className="description__technologies--list">
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
      <div className="description__feedback">
        <button>like</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export { Description };
