import React from 'react';

function HeroSection({ skillRef, eduRef, projectRef, contactRef }) {
  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToEducation = () => {
    eduRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <body>
      <div className='main-section'>
        <div className='columns'>
          <div className='hero-text'>
          <h2 className='first'>Peter</h2>
          <h1 className='last'>McClelland<span className='dot'>.</span></h1>
          <p className='p-text'>
          I am a creative and detail-oriented web developer
           based in Austin, Texas. I am passionate about creating
          functional, modern websites for the optimal user experience.
          I am proficient in HTML, CSS, JavaScript, MongoDB and React, and
          have extensive experience with layout design, integrated APIs
          and building dynamic interactive user interfaces.
          </p>
          
          </div>
          <div className='hero-img'>
            
          </div>
          
        </div>
      </div>
      <div className='scroll-nav'>
            <p className='scroll-more' onClick={scrollToSkill}>SkillSet</p>
            <p className='scroll-more' onClick={scrollToProject}>Projects</p>
            <p className='scroll-more' onClick={scrollToEducation}>Education</p>
            <p className='scroll-more' onClick={scrollToContact}>Contact</p>
          </div>
    </body>
  )
}

export default HeroSection;


