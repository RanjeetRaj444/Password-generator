import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      <div className="content-wrap narrow">
        <section className="content-section">
          <h1 className="page-title">About Secure Keys</h1>
          <p>
            Secure Keys is a free, privacy-focused password generator built to
            help everyday people create strong, unique passwords without any
            technical knowledge. It was created out of a simple frustration:
            most of us know we <em>should</em> use long random passwords, but
            inventing them by hand is tedious, and many online generators are
            cluttered, slow, or ask you to trust them with the very secrets they
            are creating.
          </p>
          <p>
            Our goal is to make good security effortless. Open the page, click a
            button, and you have a password strong enough to stand up to modern
            attacks — generated instantly and entirely on your own device.
          </p>
        </section>

        <section className="content-section">
          <h2>What we believe</h2>
          <ul className="content-list">
            <li>
              <strong>Security should be free.</strong> Protecting your accounts
              shouldn&apos;t cost money or require an account of its own.
            </li>
            <li>
              <strong>Privacy is the default.</strong> A password generator has
              no reason to see, store or transmit the passwords it creates — so
              ours doesn&apos;t. Everything runs locally in your browser.
            </li>
            <li>
              <strong>Simplicity wins.</strong> The fewer steps between you and a
              strong password, the more likely you are to actually use one.
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>How it works</h2>
          <p>
            Secure Keys uses the Web Crypto API — the cryptographically secure
            random number generator that is built into every modern browser — to
            select each character of your password. We apply rejection sampling
            to keep the output perfectly unbiased and guarantee at least one
            character from each category you choose. You can read a fuller
            explanation on the{" "}
            <Link to="/">generator page</Link> and in our{" "}
            <Link to="/faq">FAQ</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2>Who makes this?</h2>
          <p>
            Secure Keys is an independent project maintained by a small team of
            web developers who care about online safety. It is open about how it
            works and free for anyone to use. If you have feedback, a feature
            request, or spot a problem, we&apos;d love to hear from you — please
            get in touch through our <Link to="/contact">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
