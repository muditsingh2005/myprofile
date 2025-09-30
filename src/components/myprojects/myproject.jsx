import React from "react";
import "./myproject.css";
import { motion } from "framer-motion";

const Myproject = ({ title, image, description, projectlink }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <a href={projectlink} className="project-link">
        <div className="project-image-container">
          <img src={image} alt={title} className="project-logo" />
          <div className="project-overlay">
            <span className="view-project">View Project</span>
          </div>
        </div>
        <div className="project-content">
          <div className="project-card-header">
            <h2>{title}</h2>
          </div>
          <div className="project-description">
            <p>{description}</p>
          </div>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Web</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Myproject;
