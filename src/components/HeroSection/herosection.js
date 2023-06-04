import React from 'react';

function HeroSection({ skillRef }) {
  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <body>
      <div className='main-section'>
        <div className='columns'>
          <div className='hero-text'>
          <h2 className='first'>Peter</h2>
          <h1 className='last'>McClelland<a href='home' className='dot'>.</a></h1>
          <p className='p-text'>
          I am a creative and detail-oriented web developer
           based in Austin, Texas. I am passionate about creating
          functional, modern websites for the optimal user experience.
          I am proficient in HTML, CSS, JavaScript, and React, and
          have extensive experience with layout design, integrated APIs
          and building dynamic interactive user interfaces.
          </p>
          <p className='scroll-more' onClick={scrollToSkill}>SkillSet</p>
          </div>
          <div className='hero-img'>
            
          </div>
        </div>
      </div>
    </body>
  )
}

export default HeroSection;

