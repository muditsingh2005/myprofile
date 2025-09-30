import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      className={`container ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src={logo} 
        alt="logo-image" 
        className="nav-logo"
        whileHover={{ rotate: 5 }}
      />

      <ul>
        <motion.li 
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05 }}
        >
          Home
        </motion.li>
        <motion.li 
          onClick={() => scrollToSection("experties")}
          whileHover={{ scale: 1.05 }}
        >
          Expertise
        </motion.li>
        <motion.li 
          onClick={() => scrollToSection("work")}
          whileHover={{ scale: 1.05 }}
        >
          Work
        </motion.li>
        <li>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgb(7, 162, 168)" }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            onClick={() => scrollToSection("footer")}
          >
            Contact Me
          </motion.button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
