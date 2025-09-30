import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      icon: "fab fa-instagram",
      name: "Instagram",
      url: "https://www.instagram.com/_muditsingh2406_/",
    },
    {
      icon: "fab fa-linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muditsingh24/",
    },
    {
      icon: "fab fa-github",
      name: "Github",
      url: "https://www.github.com/muditsingh2005",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <motion.div
          className="footer-message"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>
            Available for select freelance opportunities
          </motion.h2>
          <motion.div
            className="footer-divider"
            variants={itemVariants}
          ></motion.div>
          <motion.p variants={itemVariants}>
            Have an exciting project you need help with? Send me an email or
            contact me via instant message!
          </motion.p>
        </motion.div>

        <motion.div
          className="footer-social"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants}>Connect With Me</motion.h3>
          <motion.div className="social-links" variants={containerVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(8, 182, 188, 0.2)",
                  color: "rgb(8, 182, 188)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Mudit Singh. All rights reserved.</p>
      </motion.div>
    </div>
  );
}

export default Footer;
