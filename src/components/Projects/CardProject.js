import "./cardProject.css";

const CardProject = ({ children }) => {
  return (
    <div className="project__container">
      <li>
        <div className="project__item">
          <img
            className="project__item--img"
            src="https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
            alt="test"
          />
          {children}
        </div>
      </li>
    </div>
  );
};

export { CardProject };
