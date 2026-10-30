import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Particle from "./components/Particles";
import Bubble from "./components/Bubble";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const NotFound = () => (
  <div className="page">
    <div className="content-wrap narrow">
      <section className="content-section" style={{ textAlign: "center" }}>
        <h1 className="page-title">404 — Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <p>
          <Link to="/">Return to the password generator</Link>
        </p>
      </section>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Particle />
      <Bubble />
      <ScrollToTop />
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
