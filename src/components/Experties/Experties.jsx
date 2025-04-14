import React from "react";
import "./Experties.css";
// import { motion } from "framer-motion";

const SkillCard = ({ title, highlight, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>
          {title.split(" ")[0]}{" "}
          <span className="highlight">&nbsp;&nbsp;&nbsp;{highlight}</span>
        </h2>
      </div>
      <h3 className="card-description">{description}</h3>
    </div>
  );
};

export default SkillCard;
