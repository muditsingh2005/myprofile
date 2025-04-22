import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="container">
      <img src={logo} alt="logo-image" className="nav-logo" />

      <ul>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("experties")}>Experties</li>
        <li onClick={() => scrollToSection("work")}>Work</li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            onClick={() => scrollToSection("footer")}
          >
            Contact Us
          </motion.button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
