import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-brand-row">
            <FaShieldAlt className="footer-brand-icon" />
            <span>Secure Keys</span>
          </div>
          <p>
            A free, privacy-first password generator. Every password is created
            locally in your browser — nothing is stored or sent to a server.
          </p>
        </div>

        <div className="footer-col">
          <h4>Site</h4>
          <Link to="/">Generator</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://github.com/RanjeetRaj444/Password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ verticalAlign: "-2px", marginRight: 6 }} />
            Source
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} Secure Keys. Built for safer logins. This tool does not
          collect or transmit the passwords you generate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
