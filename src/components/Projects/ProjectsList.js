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
            "https://pixabay.com/get/g8d652bf0bf78fcb275639b40320ffd2c5bc1b353662bbd4e7a2412349691d3bee44b9debf800a8fd8b21052d6246df0c50d399b364f9285561b0474fa00f6f37de7da8895cb5338929e74c04762980d8_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/gb0a282d9625717369ee1fb95af678e233385f34c081f1515b34581963239eafb80a9a227fe99a8ca188424931ef76f765acf5c33c287f547825e01bd8357f88c491d4d1d173f33f7d0ee2f5a9ec07ead_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/gd362a0801ba8d4891edd847a36fe9960243b841fb6a85e83f08a67b3e8b3d01df2cc8e2f1cb0ed289993807b23550d96164dba5cb3a907640934000b4007ee1e83a75d5900fc3d622ca4b538cfb55692_640.jpg"
          }
        />
        <CardProject
          imagePro={
            "https://pixabay.com/get/g9944098302e87730376fcac952f91b655dfda16a05ab8ae33def1a9f4619320a3f118957c3724f46c8e7c5a89428b8e9deb68064104882702582842728f2331f351f4e4ce8a0fe95ad9dd89fbee3e40c_640.jpg"
          }
        />
      </ul>
    </section>
  );
};

export { ProjectsList };
