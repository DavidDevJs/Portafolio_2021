import "./cardProject.css";

const CardProject = ({ children }) => {
  return (
    <div className="project__container">
      <li>
        <div className="project__item">{children}</div>
      </li>
    </div>
  );
};

export { CardProject };
