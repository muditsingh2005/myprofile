import React from 'react';
import './ProjectDialog.css';

const ProjectDialog = ({ title, description, image, projectlink, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="project-dialog-overlay" onClick={onClose}>
      <div className="project-dialog-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-dialog-close" onClick={onClose}>&times;</button>
        {image && <img src={image} alt={title} className="project-dialog-image" />}
        <h2>{title}</h2>
        <p>{description}</p>
        {projectlink && (
          <a href={projectlink} target="_blank" rel="noopener noreferrer" className="project-dialog-link">
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDialog;