import React from "react";
import "./Experties.css";
import { motion } from "framer-motion";

const SkillCard = ({ title, highlight, description }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 15px 30px rgba(8, 182, 188, 0.2)"
      }}
    >
      <div className="card-icon">
        <div className="icon-circle"></div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2>
            {title.split(" ")[0]}{" "}
            <span className="highlight">{highlight}</span>
          </h2>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
