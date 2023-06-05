import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import { ReactComponent as HTML5 } from '../../assets/Images/icons8-html5.svg';
import { ReactComponent as MongoDB } from '../../assets/Images/icons8-mongodb.svg';
import { ReactComponent as CSS } from '../../assets/Images/icons8-css.svg';
import { ReactComponent as JS } from '../../assets/Images/icons8-javascript.svg';
import { ReactComponent as ReactNative } from '../../assets/Images/icons8-react-native.svg';
import { ReactComponent as ExpressJS } from '../../assets/Images/icons8-express-js.svg';
import { ReactComponent as NodeJS } from '../../assets/Images/icons8-node-js.svg';
import { ReactComponent as Heroku } from '../../assets/Images/icons8-heroku.svg';

import '../SkillSet/skillset.css';

function Skillset() {
  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  }

  const onExitViewport = () => {
    setAnimation(false);
  }

  return (
    <div className='main-section'>
      <div className='columns'>
        <div className='skill-text'>
          <p className='my-skillset'>
            My Skillset
          </p>
          <h2>
            Web Development, Interface Design &
            Site Deployment
          </h2>
        </div>
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          <div className='icon-container'>
            <div className={`icons ${animation ? 'fallIntoPlace' : ''}`}>
              <HTML5 id='HTML5'/>
              <CSS id='CSS'/>
              <JS id='js'/>
              <MongoDB id='mongodb'/>
            </div>
            <div className={`icons ${animation ? 'fallIntoPlace' : ''}`}>
              <ReactNative id='react'/>
              <ExpressJS id='express'/>
              <NodeJS id='node'/>
              <Heroku id='heroku'/>
            </div>
          </div>
        </ScrollTrigger>     
      </div>
    </div>
  )
}

export default Skillset;
