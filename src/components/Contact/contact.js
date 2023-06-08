import React from 'react'
import '../Contact/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedInIn } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const gitIcon = <FontAwesomeIcon icon={faGithub} size='3x' />;
const Envelope = <FontAwesomeIcon icon={faEnvelope} size='3x' />

function Contact() {
  return (
      <div className='education-section'>
        <div className='contact-title'>
          What Now?
        </div>
        <h1 className='education-h1'>
          Lets Connect.
        </h1>
          <p className='p-text'>
          Thank you for taking the time to explore my portfolio and
          getting to know a little about me. If you have any 
          projects or opportunities that you believe could benefit 
          from my skills in web development, or simply 
          want to discuss the the digital world, 
          I'd love to connect. I am always excited about the 
          possibility of collaborative work, problem-solving, 
          and making a impact through web development.
          </p>

          <h2 className='icon-header'>
            Feel To Reach Out Through my Platforms
          </h2>

          <footer className='contact-icons'>
          <a href="https://github.com/PeterwMcClelland" target="_blank" rel="noopener noreferrer">
            <div className='contact-gitIcon'>
              {gitIcon}
            </div>
            </a>
            <a href="mailto:peterwmcclelland@gmail.com">
            <div className='contact-envolope'>
              {Envelope}
            </div>
            </a>
            <div className='contact-phone'>
              971-205-4928
            </div>
          </footer>
      </div>

    
      
  )
}

export default Contact