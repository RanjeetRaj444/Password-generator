import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={close}>
          <FaShieldAlt className="nav-brand-icon" />
          <span>Secure Keys</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={close}>
            Generator
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/faq" onClick={close}>
            FAQ
          </NavLink>
          <NavLink to="/privacy" onClick={close}>
            Privacy
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
