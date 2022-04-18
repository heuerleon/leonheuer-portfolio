import * as React from "react";

const Footer = () => {
  return (
    <section className="alt-section-dark" id="footer">
      <div className="container">
        <div className="row padding-row">
          <div className="column-centered">
            <div className="social-media-container">
              <a
                href="https://github.com/heuerleon"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/heuerleon/"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/leonheuer/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <span>Designed & Built by Leon Heuer</span>
            <span>
              <a
                href="https://github.com/Hakuyamu/leonheuer-portfolio"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </span>
            <span className="light">
              All rights reserved | <a href="/legal">Legal Notice</a> |{" "}
              <a href="/privacy">Privacy Policy</a>
            </span>
            <span className="light">
              Contains images from{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                Unsplash
              </a>
              ,{" "}
              <a href="https://icons8.com/" target="_blank" rel="noreferrer">
                ICONS8
              </a>{" "}
              and
              <a
                href="https://www.vectorlogo.zone/"
                target="_blank"
                rel="noreferrer"
              >
                VectorLogoZone
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
