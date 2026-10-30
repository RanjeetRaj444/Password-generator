import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    q: "Is this password generator free?",
    a: "Yes. Secure Keys is completely free to use with no limits and no sign-up required. You can generate as many passwords as you like.",
  },
  {
    q: "Are the passwords safe? Do you store them?",
    a: "Your passwords are never stored or sent anywhere. Every password is generated locally in your browser using the cryptographically secure Web Crypto API, and it disappears as soon as you close or refresh the page. We have no way of seeing what you generate.",
  },
  {
    q: "How long should my password be?",
    a: "Longer is stronger. We recommend at least 16 characters wherever a website allows it. Length is the single most important factor in how hard a password is to crack — each extra character multiplies the number of possible combinations an attacker must try.",
  },
  {
    q: "What makes a password 'strong'?",
    a: "A strong password is long, uses a mix of character types (uppercase, lowercase, numbers and symbols), and is genuinely random rather than based on a word, name or predictable pattern. Our generator maximises all three.",
  },
  {
    q: "Why not just use Math.random()?",
    a: "Math.random() is fast but is not cryptographically secure — its output can be predictable. Secure Keys uses crypto.getRandomValues() with rejection sampling instead, which produces unbiased, unpredictable results suitable for security.",
  },
  {
    q: "Should I use a different password for every account?",
    a: "Absolutely. Reusing passwords is risky: if one site is breached, attackers will try that same password on your other accounts. A unique password for every account means a single breach can't cascade.",
  },
  {
    q: "How do I remember all these random passwords?",
    a: "You don't have to. The best approach is to store them in a reputable password manager, which securely remembers them for you so you only need to memorise one strong master password.",
  },
  {
    q: "Does the generator work on mobile?",
    a: "Yes. Secure Keys works in any modern browser on desktop, tablet or phone. You can copy the generated password to your clipboard with a single tap.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`}>
    <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
      <span>{item.q}</span>
      <FaChevronDown className="faq-chevron" />
    </button>
    {isOpen && <div className="faq-answer">{item.a}</div>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page">
      <div className="content-wrap narrow">
        <section className="content-section">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p>
            Everything you might want to know about Secure Keys and how to use
            strong passwords. Can&apos;t find your answer? Visit our contact
            page.
          </p>
        </section>

        <section className="content-section">
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
