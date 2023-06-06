import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import '../Projects/project.css'

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
            <p className='title-projects'>Projects</p> 
          </div>
          <div className={`div2 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p1-img'>
              <p className='proj-title'>This Weekend</p>
            </div>
          </div>
          <div className={`div3 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p2-img'>
              <p className='proj-title'> Newport House</p>
            </div>
          </div>
          <div className={`div4 ${animation ? 'slideFromRight' : ''}`}>
            <div className='p3-img'>
              <p className='proj-title'>Wine Index</p>
            </div>
          </div>
        </div>
      </main>
    </ScrollTrigger>
  )
}

export default Project
