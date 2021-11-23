import "./CardProject.css";

const CardProject = ({ imagePro }) => {
  return (
    <div className="project__container">
      <li>
        <div className="project__item">
          <img className="project__item--img" src={imagePro} alt="test" />
          {/* <div className="projects__item--description">
            <h2>Title Project</h2>
            <p>description project number one</p>
          </div> */}
        </div>
      </li>
    </div>
  );
};

export { CardProject };
