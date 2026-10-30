import React from "react";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaBolt,
  FaUserSecret,
  FaKey,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import Generator from "../components/Generator";

const Home = () => {
  return (
    <div className="page">
      <section className="hero">
        <Generator />
      </section>

      <div className="content-wrap">
        <section className="content-section">
          <h2>Create strong passwords you can actually trust</h2>
          <p>
            Secure Keys is a free online password generator that builds long,
            random, hard-to-guess passwords in a single click. Choose how long
            you want your password to be, pick which character types to include
            — uppercase letters, lowercase letters, numbers and symbols — and a
            fresh password is generated instantly. You can copy it to your
            clipboard and paste it straight into a sign-up form or your password
            manager.
          </p>
          <p>
            Weak and reused passwords are still the single most common way
            online accounts get broken into. A generator like this one removes
            the hardest part of good security: coming up with a password that is
            genuinely random and long enough to resist modern cracking attacks.
          </p>
        </section>

        <section className="content-section">
          <h2>Why use a random password generator?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <FaBolt className="feature-icon" />
              <h3>Instant &amp; free</h3>
              <p>
                Generate a new password in under a second. No sign-up, no
                limits, no cost — use it as many times as you need.
              </p>
            </div>
            <div className="feature-card">
              <FaUserSecret className="feature-icon" />
              <h3>100% private</h3>
              <p>
                Passwords are created entirely in your browser. They are never
                sent to a server, logged, or saved anywhere by us.
              </p>
            </div>
            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h3>Cryptographically secure</h3>
              <p>
                We use the browser&apos;s Web Crypto API, not predictable
                pseudo-random functions, so every character is truly random.
              </p>
            </div>
            <div className="feature-card">
              <FaKey className="feature-icon" />
              <h3>Fully customisable</h3>
              <p>
                Set the length from 8 to 50 characters and toggle exactly which
                character types a site will accept.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>What makes a password strong?</h2>
          <p>
            A strong password is one that is extremely hard for both a human and
            a computer to guess. Three things matter most:
          </p>
          <ul className="content-list">
            <li>
              <strong>Length.</strong> Length is the most important factor. Each
              extra character multiplies the number of possible combinations an
              attacker has to try. A 16-character password is astronomically
              harder to crack than an 8-character one, even if both look random.
              We recommend at least <strong>16 characters</strong> wherever a
              site allows it.
            </li>
            <li>
              <strong>Variety.</strong> Mixing uppercase letters, lowercase
              letters, numbers and symbols increases the number of possible
              characters in each position, which dramatically grows the total
              number of combinations.
            </li>
            <li>
              <strong>Randomness.</strong> &ldquo;P@ssw0rd123&rdquo; contains all
              four character types but is still weak, because it follows a
              predictable human pattern that cracking tools check first. True
              randomness — the kind this tool produces — is what actually
              protects you.
            </li>
          </ul>
          <p>
            The strength meter above gives you quick feedback based on these
            factors. For the strongest result, keep every character type turned
            on and use the longest length the website will accept.
          </p>
        </section>

        <section className="content-section">
          <h2>How Secure Keys generates your password</h2>
          <p>
            Many simple generators rely on <code>Math.random()</code>, which is
            fast but <em>not</em> designed for security — its output can, in
            theory, be predicted. Secure Keys instead uses{" "}
            <code>crypto.getRandomValues()</code>, the cryptographically secure
            random number generator built into every modern browser.
          </p>
          <p>
            To avoid subtle statistical bias, we use a technique called{" "}
            <strong>rejection sampling</strong>, which guarantees that every
            character in the pool has an exactly equal chance of being chosen.
            We also make sure your password contains at least one character from
            each type you selected, then shuffle the result so the pattern is
            unpredictable. All of this happens on your device — the password
            never leaves your browser.
          </p>
        </section>

        <section className="content-section">
          <h2>Password do&apos;s and don&apos;ts</h2>
          <div className="dos-donts">
            <div className="do-card">
              <h3>
                <FaCheckCircle /> Do
              </h3>
              <ul>
                <li>Use a unique password for every single account.</li>
                <li>Make passwords at least 16 characters long.</li>
                <li>Store them in a reputable password manager.</li>
                <li>Turn on two-factor authentication (2FA) where possible.</li>
              </ul>
            </div>
            <div className="dont-card">
              <h3>
                <FaExclamationTriangle /> Don&apos;t
              </h3>
              <ul>
                <li>Reuse the same password across multiple sites.</li>
                <li>Use names, birthdays or dictionary words.</li>
                <li>Share passwords over email or chat.</li>
                <li>Write them on sticky notes near your computer.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section cta-section">
          <h2>Have a question?</h2>
          <p>
            Read our <Link to="/faq">frequently asked questions</Link> to learn
            more about how the generator works, or see our{" "}
            <Link to="/privacy">privacy policy</Link> to understand exactly how
            your data is handled.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
