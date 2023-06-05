import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import Resume from '../../assets/PDF/Peter McClelland Resume.pdf';
import UT from '../../assets/PDF/McClelland_Peter_TCH-5003-052.pdf'


function Education() {
  return (
    <div className='main-section'>
        <div className='columns'>
            <div className='resume'>
            <p className='education-text'>
                Education
            </p>
            <div className='resume-link'><a className='hyper-link' href={Resume} target="blank">Resume</a></div>
            <div className='resume-link'><a className='hyper-link' href={UT} target="blank">UT Austin Certification</a></div>
            
            </div>
            <div className='p-text'>
            <LoremIpsum p={2} />
            </div>
        </div>
    </div>
  )
}

export default Education;