import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

function Hero() {
  return (
    <div className="hero container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="hero-text"
      >
        <h1>Hi, I'm Mudit Singh, Full-Stack Developer</h1>

        <p>building intuitive and efficient web applications.</p>
      </motion.div>
    </div>
  );
}

export default Hero;
