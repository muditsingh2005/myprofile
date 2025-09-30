import React from "react";
import "./tools.css";
import { motion } from "framer-motion";
import icon1 from "../../assets/icon-1.webp";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import icon5 from "../../assets/icon-5.png";
import icon6 from "../../assets/icon-6.webp";
import icon7 from "../../assets/icon-7.png";
import icon8 from "../../assets/icon-8.png";

function Tools() {
  const tools = [
    { icon: icon1, name: "React" },
    { icon: icon2, name: "CSS" },
    { icon: icon3, name: "C++" },
    { icon: icon4, name: "Node" },
    { icon: icon5, name: "Express" },
    { icon: icon6, name: "MongoDB" },
    { icon: icon7, name: "Postman" },
    { icon: icon8, name: "Docker" },
  ];

  return (
    <div className="tools-section" id="tools">
      <motion.div
        className="tools-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Technologies I Work With</h2>
        <p>Modern tools for modern solutions</p>
      </motion.div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="tool-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px rgba(8, 182, 188, 0.2)",
            }}
          >
            <div className="tool-icon-container">
              <img
                src={tool.icon}
                alt={`icon-${tool.name}`}
                className="tool-icon"
              />
            </div>
            <p className="tool-name">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
