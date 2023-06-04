import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';


function Education() {
  return (
    <div className='main-section'>
        <div className='columns'>
            <div className='resume'>
            <p className='education-text'>
                Resume/ Certification
            </p>
            <h2 className='resume-link'>Resume</h2>
            
            </div>
            <div className='p-text'>
            <LoremIpsum p={2} />
            </div>
        </div>
    </div>
  )
}

export default Education;