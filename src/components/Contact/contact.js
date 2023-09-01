import React, { useState } from "react";
import "../Contact/contact.scss";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const gitIcon = <FontAwesomeIcon icon={faGithub} size="3x" />;
const Envelope = <FontAwesomeIcon icon={faEnvelope} size="3x" />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="3x" />;

function Contact() {
  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  return (
    <div className="education-section">
      <ScrollTrigger onEnter={onEnterViewport}>
        <div className={`icons ${animation ? "liftIntoPlace-contact" : ""}`}>
          <div className="contact-title">What Now?</div>

          <h1 className="education-h1">
            Lets Connect<span id="dot">.</span>
          </h1>
          <p className="p-text">
            Thank you for taking the time to explore my portfolio. If you have
            any projects or opportunities that you believe could benefit from my
            skills in web development, or simply want to discuss ideas, I'd love
            to connect. I am always excited about the possibility of
            collaborative work, problem-solving, and making a impact through web
            development.
          </p>

          <h2 className="icon-header">
            Feel To Reach Out Through my Platforms
          </h2>

          <footer className="contact-icons">
            <a
              href="https://github.com/PeterwMcClelland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-gitIcon">{gitIcon}</div>
            </a>
            <a
              href="https://www.linkedin.com/in/peterwmcclelland/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-envolope">{linkedin}</div>
            </a>
            <a href="mailto:peterwmcclelland@gmail.com">
              <div className="contact-envolope">{Envelope}</div>
            </a>
            <div className="contact-phone">971-205-4928</div>
          </footer>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Contact;
