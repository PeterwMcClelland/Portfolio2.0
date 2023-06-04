import React from 'react'
// import { LoremIpsum } from 'react-lorem-ipsum';
import { ReactComponent as HTML5 } from '../../assets/Images/icons8-html5.svg';
import { ReactComponent as MongoDB } from '../../assets/Images/icons8-mongodb.svg';
import { ReactComponent as CSS } from '../../assets/Images/icons8-css.svg';
import { ReactComponent as JS } from '../../assets/Images/icons8-javascript.svg';
import { ReactComponent as ReactNative } from '../../assets/Images/icons8-react-native.svg';
import { ReactComponent as ExpressJS } from '../../assets/Images/icons8-express-js.svg';
import { ReactComponent as NodeJS } from '../../assets/Images/icons8-node-js.svg';
import { ReactComponent as Heroku } from '../../assets/Images/icons8-heroku.svg';

function Skillset() {
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
          <div className='icon-container'>
            <div>
          <HTML5 className='HTML5'/>
          <CSS />
          <JS />
          <MongoDB />
            </div>
            <div>
              <ReactNative />
              <ExpressJS />
              <NodeJS />
              <Heroku />
            </div>
          </div>     
            </div>
          </div>
        
    
  )
}

export default Skillset;