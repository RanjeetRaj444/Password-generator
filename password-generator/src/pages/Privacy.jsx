import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="page">
      <div className="content-wrap narrow">
        <section className="content-section">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="muted">Last updated: 30 October 2026</p>
          <p>
            Your privacy matters to us. This policy explains what information
            Secure Keys does — and does not — collect when you use this website,
            and how any data is handled.
          </p>
        </section>

        <section className="content-section">
          <h2>The passwords you generate</h2>
          <p>
            Every password is generated locally in your web browser using the
            Web Crypto API. Passwords are <strong>never</strong> transmitted to
            our servers, stored in a database, logged, or shared with anyone. We
            have no way of seeing the passwords you create. When you close or
            refresh the page, the generated password is gone.
          </p>
        </section>

        <section className="content-section">
          <h2>Information we collect</h2>
          <p>
            Secure Keys does not require you to create an account or submit any
            personal information to use the generator. We do not ask for your
            name, email address, or any other personal detail in order to
            generate a password.
          </p>
          <p>
            Like most websites, our hosting provider and analytics may
            automatically record standard, non-identifying technical
            information — such as your browser type, approximate region, and the
            pages you visit — to help us understand how the site is used and keep
            it running reliably.
          </p>
        </section>

        <section className="content-section">
          <h2>Cookies and advertising</h2>
          <p>
            This website may display advertisements served by Google AdSense to
            help cover the cost of running the service. Third-party vendors,
            including Google, use cookies to serve ads based on your prior
            visits to this and other websites.
          </p>
          <ul className="content-list">
            <li>
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads to you based on your visits to this site
              and/or other sites on the Internet.
            </li>
            <li>
              You can opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              You can also opt out of a third-party vendor&apos;s use of cookies
              for personalised advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p>
            For more information on how Google uses data when you use our
            partners&apos; sites or apps, please see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section className="content-section">
          <h2>Third-party links</h2>
          <p>
            Our site may contain links to external websites. We are not
            responsible for the privacy practices or content of those sites and
            encourage you to review their privacy policies.
          </p>
        </section>

        <section className="content-section">
          <h2>Children&apos;s privacy</h2>
          <p>
            Secure Keys is a general-audience tool and is not directed at
            children under the age of 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section className="content-section">
          <h2>Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="content-section">
          <h2>Contact us</h2>
          <p>
            If you have any questions about this privacy policy, please reach out
            through our <Link to="/contact">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
