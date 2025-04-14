import React from "react";
import "./tools.css";
// import { motion } from "framer-motion";
import icon1 from "../../assets/icon-1.webp";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import icon5 from "../../assets/icon-5.png";
import icon6 from "../../assets/icon-6.webp";

function Tools() {
  return (
    <div className="icon-section">
      <h1>Tools Used By Me</h1>
      <div className="floating-icon">
        <img src={icon1} alt="icon-react" className="icon" />
        <img src={icon2} alt="icon-react" className="icon" />
        <img src={icon3} alt="icon-react" className="icon" />
        <img src={icon4} alt="icon-react" className="icon" />
        <img src={icon5} alt="icon-react" className="icon" />
        <img src={icon6} alt="icon-react" className="icon" />
      </div>
    </div>
  );
}

export default Tools;
