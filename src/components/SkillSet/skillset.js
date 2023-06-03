import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

function Skillset() {
  return (
    <div className='main-section'>
        <div className='columns'>
          <div className='hero-text'>
            <p className='my-skillset'>
                My Skillset
            </p>
            <h2>
                Web Development, Interface Design &
                Site Deployment
            </h2>

          </div>
          <div className='p-text'>
            ljaldjcb
          <LoremIpsum p={2} />
          </div>
        </div>
    </div>
  )
}

export default Skillset;