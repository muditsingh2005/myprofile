import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="container">
      <img src={logo} alt="logo-image" className="nav-logo" />

      <ul>
        <li>Home</li>
        <li>Experties</li>
        <li>Work</li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
          >
            Contact Us
          </motion.button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
