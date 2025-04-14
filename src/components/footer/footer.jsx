import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="foot">
      <div className="footer">
        <div className="end-message">
          <h1>Available for select freelance opportunities</h1>
          <span>
            Have an exciting project you need help with? Send me an email or
            contact me via instant message!
          </span>
        </div>

        <div className="contact">
          <h1>Contact_Me</h1>

          <ul>
            <li>
              <a href="https://www.google.com">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>

            <li>
              <a href="https://www.google.com">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>

            <li>
              <a href="https://www.google.com">
                <i className="fab fa-github"></i>Github
              </a>
            </li>

            <li>
              <a href="https://www.google.com">
                <i className="fas fa-envelope"></i> Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
