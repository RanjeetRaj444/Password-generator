import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields", { theme: "dark" });
      return;
    }
    // This static site has no backend. Open the visitor's email client
    // pre-filled so the message can be sent directly to us.
    const subject = encodeURIComponent(`Secure Keys contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:factsbe0@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…", { theme: "dark" });
  };

  return (
    <div className="page">
      <div className="content-wrap narrow">
        <section className="content-section">
          <h1 className="page-title">Contact Us</h1>
          <p>
            Have a question, a feature idea, or found a bug? We&apos;d genuinely
            like to hear from you. Use the form below, or email us directly — we
            read every message.
          </p>
        </section>

        <section className="content-section">
          <div className="contact-methods">
            <a className="contact-method" href="mailto:factsbe0@gmail.com">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <span>factsbe0@gmail.com</span>
              </div>
            </a>
            <a
              className="contact-method"
              href="https://github.com/RanjeetRaj444/Password-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
              <div>
                <h3>GitHub</h3>
                <span>Report an issue</span>
              </div>
            </a>
          </div>
        </section>

        <section className="content-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button type="submit" className="generate-btn-premium">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
