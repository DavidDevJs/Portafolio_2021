import { CardProject } from "./CardProject";
import "./projects.css";

const ProjectsList = () => {
  return (
    <section className="projects__list">
      <ul className="projects__list--ul">
        <CardProject
          imagePro={
            "https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/gf011f9399dc3cff7326f46571a140f29a1ce76df5f7e287f7e0dd1bad0b40529f6c99926d47891ba0f07091e2150baa104204c3c829f3797db2c3e2eb9f5de0cef68bbf57dd7760ab0cf9a60c35a144a_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/g01491a11bc02acfea941390fb6c4d72f2c6bfd38abfe2e0306c35c4955769e0e26ce88891a1983aa505bf4b1e7a50cace7e73e156c2e08267e8603072af8214bea18a2d20fb53c0dff48d4f2ce0d6281_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/g45803e6509a1a3b99564c95228c83f86b1a17dd85321ff5d19548a2b1d15cbd694b717ad770b400896ea13da49bb1e4d05503027f3d203c678f82de8f738ca5526114e8c7e9a62180ab6554862102c03_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/g93ffeceaf27b0e3be828ee4f815f6221e1c678009120fe62e559f2692726558c2a10f62756498443e1c1d79862be20ec8056b382157d09b186fcee2dcc217d3ebaf5dbc238098203fa3d21f7e23eec6a_640.png"
          }
        />
      </ul>
    </section>
  );
};

export { ProjectsList };
