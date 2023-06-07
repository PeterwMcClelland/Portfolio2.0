import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import '../Projects/project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const gitIcon = <FontAwesomeIcon icon={faGithub} />



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
            <p className='title-projects'>Work</p> 
              
              <h1>Recent Projects</h1>
              <div id='gitgub-link-proj' >
                <a id='github-link-proj' className='a-github' href="https://github.com/PeterwMcClelland" target="_blank" rel="noopener noreferrer">
                GitHub{gitIcon}
                </a>
              </div>
          
          </div>
          <div className={`div2 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p1-img'>
              <div className='proj-txt-hover'>
                <div >Portland Skate Spot Guide.</div>
                  <p id='built-with' >
                    Built with: React, HTML, CSS, JavaScript, MongoDB & deployed with Heroku.
                    <span id='repo' className='proj-txt-hover'>
                      <a href="https://github.com/PeterwMcClelland/ThisWeekend3.0" target="_blank" rel="noopener noreferrer">Repository</a>
                    </span>
                  </p>
              </div>
              <div className='proj-title'>This Weekend
              </div>
              
            </div>
          </div>
          <div className={`div3 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p2-img'>
              <div className='proj-txt-hover'>
                <div >Private Beach House Rental</div>
                  <p id='built-with'>
                    Built with: React, HTML, CSS, JavaScript, EmailJS & Heroku.
                    
                    <span id='repo' className='proj-txt-hover'>
                      <a id='repo-link' href="https://github.com/PeterwMcClelland/Beach-House" target="_blank" rel="noopener noreferrer">
                        Repository
                      </a>
                  
                    </span>
                  </p>
              </div>
              <p className='proj-title'> Newport House</p>
            </div>
          </div>

          <div className={`div4 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p3-img'>
              <div className='proj-txt-hover'>
                <div>Wine Index For Service Industry Workers</div>
                  <p id='built-with'>
                    Built with: Mongodb, Express, React, Node.js, JavaScript, HTML & CSS.
                    <span id='repo' className='proj-txt-hover'>
                      <a href="https://github.com/PeterwMcClelland/Wine-List" target="_blank" rel="noopener noreferrer">
                        Repository
                      </a>
                    </span>
                  </p>
              </div>
            <p className='proj-title'>Wine Index</p>
          </div>

        </div>
        </div>
      </main>
    </ScrollTrigger>
  )
}

export default Project;
