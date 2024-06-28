import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../Projects/project.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const gitIcon = <FontAwesomeIcon icon={faGithub} />;

function Project() {
  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <main
        className={`projects-container ${animation ? "slideFromRight" : ""}`}
      >
        <div className="parent">
          <div className="div1">
            <p className="title-projects">Work</p> <span className="two"></span>
            <h1 className="projects-h1">
              Recent Projects<span id="dot">.</span>
            </h1>
            <div id="gitgub-link-proj">
              <a
                id="github-link-proj"
                className="a-github"
                href="https://github.com/PeterwMcClelland"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile {gitIcon}
              </a>
            </div>
          </div>
          <div className={`div2 ${animation ? "slideFromRight" : ""}`}>
            <a
              href="https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/coffees"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p1-img">
                <div className="proj-txt-hover">
                  <div id="proj-txt-hover-div2">
                    A program to store coffee information using REST API with
                    CRUD operations.
                  </div>
                  <p id="built-with">
                    Built with: Mongodb, Express, React, Node.js, JavaScript,
                    HTML, CSS & deployed with Heroku.
                    <span id="repo" className="proj-txt-hover">
                      <a
                        href="https://github.com/PeterwMcClelland/coffee-rolodex-sample"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </span>
                  </p>
                </div>
                <div className="proj-title">Coffee Rolodex</div>
              </div>
            </a>
          </div>
          <div className={`div3 ${animation ? "slideFromRight" : ""}`}>
            <a
              href="https://heres-a-tip-689e97f325a7.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p2-img">
                <div className="proj-txt-hover">
                  <div>Tip calculator with split bill feature.</div>
                  <p id="built-with">
                    Built with: React, JavaScript, HTML, CSS & Sass deployed
                    with Heroku.
                    <span id="repo" className="proj-txt-hover">
                      <a
                        id="repo-link"
                        href="https://github.com/PeterwMcClelland/Heres-A-Tip"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </span>
                  </p>
                </div>
                <p className="proj-title">Here's A Tip</p>
              </div>
            </a>
          </div>

          <div className={`div4 ${animation ? "slideFromRight" : ""}`}>
            <a
              href="https://miso-presents-7126a5ab349e.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p3-img">
                <div className="proj-txt-hover">
                  <div>Concert Promotion Company</div>
                  <p id="built-with">
                    Built with: React, HTML, JavaScript CSS & Sass.
                    <span id="repo" className="proj-txt-hover">
                      <a
                        href="https://github.com/PeterwMcClelland/Miso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </span>
                  </p>
                </div>
                <p className="proj-title">MOSO Presents</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </ScrollTrigger>
  );
}

export default Project;
