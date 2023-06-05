import React from 'react'
// import { LoremIpsum } from 'react-lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

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
            <div className='resume-link'>
                <FontAwesomeIcon size='xs' icon={faFile} /><a className='hyper-link' href={Resume} target="blank"> Resume</a>
                </div>
            <div className='resume-link'>
                <FontAwesomeIcon size='xs' icon={faFile} /><a className='hyper-link' href={UT} target="blank"> UT Austin Certification</a>
                </div>
            
            </div>
            <div className='p-text'>
            I recently graduated from UT Austin’s coding bootcamp program. 
            Through this program I have learned HTML5, CSS, Javascript, 
             Express, MongoDB and React. Previously I worked in the 
            coffee industry for the past 10 years. This has given me great 
            communication and organization skills. I found these skills very 
            useful while developing with a group. I hope to continue learning 
            and growing with future projects.
            </div>
        </div>
    </div>
  )
}

export default Education;