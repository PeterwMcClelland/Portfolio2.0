import React, { useState } from "react";
// import { LoremIpsum } from 'react-lorem-ipsum';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "react-scroll-trigger";

import Resume from "../../assets/PDF/PeterMcClellandCV.pdf";
import UT from "../../assets/PDF/McClelland_Peter_TCH-5003-052.pdf";

import "../Education/education.css";

function Education() {
  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  return (
    <div className="main-section">
      <ScrollTrigger onEnter={onEnterViewport}>
        <div id="education" className="columns">
          <div className="resume">
            <div
              className={`education-text ${
                animation ? "slideInFromLeft-h1" : ""
              }`}
            >
              Education
            </div>
            <div
              className={`resume-link ${
                animation ? "slideInFromLeft-res" : ""
              }`}
            >
              <FontAwesomeIcon size="xs" icon={faFile} />
              <a className="hyper-link" href={Resume} target="blank">
                {" "}
                Resume
              </a>
            </div>
            <div
              className={`resume-link ${
                animation ? "slideInFromLeft-edu" : ""
              }`}
            >
              <FontAwesomeIcon size="xs" icon={faFile} />
              <a className="hyper-link" href={UT} target="blank">
                {" "}
                UT Austin Certification
              </a>
            </div>
          </div>
          <div className="p-text">
            I graduated from UT Austin’s coding bootcamp program. Through this
            program I have learned HTML5, CSS, Javascript, Express, MongoDB and
            React. Previously I worked in the coffee industry for the past 10
            years. This has given me great communication and organization
            skills. I found these skills very useful while developing with a
            group. I hope to continue learning and growing with future projects.
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Education;
