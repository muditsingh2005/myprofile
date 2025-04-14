import React from "react";
import "./myproject.css";

const Myproject = ({ title, image, description, projectlink }) => {
  return (
    <div className="project-card">
      <a href={projectlink}>
        <img src={image} alt="" className="project-logo" />
        <div className="project-card-header">
          <h2>{title}</h2>
        </div>

        <div className="project-description">
          <h3>{description}</h3>
        </div>
      </a>
    </div>
  );
};

export default Myproject;
