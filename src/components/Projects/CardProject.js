import "./CardProject.css";

const CardProject = () => {
  return (
    <div className="projects__container">
      <li>
        <div className="projects__item">
          <img
            className="projects__item--img"
            src="https://www.wallpapertip.com/wmimgs/197-1977722_aesthetic-wallpaper-pixel.jpg"
            alt="test"
          />
          <div className="projects__item--description">
            <h2>Title Project</h2>
            <p>description project number one</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export { CardProject };
