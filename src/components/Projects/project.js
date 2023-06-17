import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import '../Projects/project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faLink } from '@fortawesome/free-solid-svg-icons'

const gitIcon = <FontAwesomeIcon icon={faGithub} />
// const linkIcon = <FontAwesomeIcon size='xs' icon={faLink} />


function Project() {
  const [animation, setAnimation] = useState(false)

  const onEnterViewport = () => {
    setAnimation(true)
  }


  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <main className={`projects-container ${animation ? 'slideFromRight' : ''}`}>
        <div className="parent">
          <div className="div1">
            <p className='title-projects'>Work</p> <span className='two'></span>
              <h1 className='projects-h1'>Recent Projects<span id='dot'>.</span></h1>

              <div id='gitgub-link-proj' >
                <a id='github-link-proj' className='a-github' href="https://github.com/PeterwMcClelland" target="_blank" rel="noopener noreferrer">
                GitHub Profile {gitIcon}
                </a>
              </div>
          
          </div>
          <div className={`div2 ${animation ? 'slideFromRight' : ''}`}>
          <a href="https://coffee-rolodex.herokuapp.com/Coffee-List" target="_blank" rel="noopener noreferrer">
            <div className='p1-img'>
              <div className='proj-txt-hover'>
                <div id='proj-txt-hover-div2'>A program to store coffee information using
                   REST API with CRUD operations.</div>
                  <p id='built-with' >
                  Built with: Mongodb, Express, React, Node.js, JavaScript, HTML & CSS.
                    <span id='repo' className='proj-txt-hover'>
                      <a href="https://github.com/PeterwMcClelland/Coffee-Rolodex" target="_blank" rel="noopener noreferrer">Repository</a>
                    </span>
                  </p>
              </div>
              <div className='proj-title'>
              Coffee Rolodex
              </div>
            </div>
            </a>
          </div>
        <div className={`div3 ${animation ? 'slideFromRight' : ''}`}>
          <a href="https://thisweekend.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className='p2-img'>
              <div className='proj-txt-hover'>
                <div>Portland Skate Spot Guide.</div>
                  <p id='built-with'>
                  Built with: React, HTML, CSS, JavaScript, MongoDB & deployed with Heroku.
                    <span id='repo' className='proj-txt-hover'>
                      <a id='repo-link' href="https://github.com/PeterwMcClelland/ThisWeekend3.0" target="_blank" rel="noopener noreferrer">
                        Repository
                      </a>
                    </span>
                  </p>
              </div>
                <p className='proj-title'>This Weekend</p>
            </div>
          </a>
        </div>

          <div className={`div4 ${animation ? 'slideFromRight' : ''}`}>
          <a href="https://newport-house.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className='p3-img'>
              <div className='proj-txt-hover'>
                <div>
                  Private Beach House Rental
                </div>
                  <p id='built-with'>
                  Built with: React, HTML, CSS, JavaScript, EmailJS & Heroku.
                    <span id='repo' className='proj-txt-hover'>
                      <a href="https://github.com/PeterwMcClelland/Beach-House" target="_blank" rel="noopener noreferrer">
                        Repository
                      </a>
                    </span>
                  </p>
              </div>
            <p className='proj-title'>Newport House</p>
          </div>
          </a>

        </div>
        </div>
      </main>
    </ScrollTrigger>
  )
}

export default Project;
