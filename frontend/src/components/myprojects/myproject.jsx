import React from "react";
import "./myproject.css";
import { motion } from "framer-motion";

function Myproject({ title, image, description, projectlink, openDialog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card"
      onClick={() => openDialog(title, description, image, projectlink)}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <button className="view-project">View Project</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Myproject;
