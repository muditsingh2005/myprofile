import React, { useState } from "react";
import "./MailMe.css";
import { motion } from "framer-motion";

const MailMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      // Use local backend for development, deployed backend for production
      const API_URL = import.meta.env.PROD
        ? "https://myprofile-three-tawny.vercel.app/send"
        : "http://localhost:5000/send";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Network error. Please check if the server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="mail-me-container"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <h2>Get In Touch</h2>
        <div className="underline"></div>
        <p>Have a question or want to work together? Send me a message!</p>
      </motion.div>

      <motion.form
        onSubmit={sendEmail}
        className="contact-form"
        variants={itemVariants}
      >
        <motion.div
          className={`form-group ${focused === "name" ? "focused" : ""}`}
          variants={itemVariants}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            required
          />
          <div className="input-highlight"></div>
        </motion.div>

        <motion.div
          className={`form-group ${focused === "email" ? "focused" : ""}`}
          variants={itemVariants}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            required
          />
          <div className="input-highlight"></div>
        </motion.div>

        <motion.div
          className={`form-group ${focused === "message" ? "focused" : ""}`}
          variants={itemVariants}
        >
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            required
            rows="5"
          />
          <div className="input-highlight"></div>
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          disabled={isLoading}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <span className="loading-spinner"></span>
          ) : (
            <>
              Send Message<span className="btn-arrow">→</span>
            </>
          )}
        </motion.button>

        {status && (
          <motion.p
            className="status-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default MailMe;
