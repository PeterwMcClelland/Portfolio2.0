import React from "react";

function HeroSection({ skillRef, eduRef, projectRef, contactRef }) {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <body>
      <div className="main-section">
        <div className="columns">
          <div className="hero-text">
            <h2 className="first">Peter</h2>
            <h1 className="last">
              McClelland<span className="dot">.</span>
            </h1>
            <p className="p-text">
              I am a creative and detail-oriented web developer based in Austin,
              Texas. I'm passionate about creating functional, modern websites
              for the optimal user experience. Proficient in HTML, CSS,
              JavaScript, MongoDB and React, and have extensive experience with
              layout design, integrated APIs and building dynamic interactive
              user interfaces.
            </p>
          </div>
          <div className="hero-img"></div>
        </div>
      </div>
      
      <div className="scroll-nav">
        <p className="scroll-more" onClick={() => scrollToRef(skillRef)}>SkillSet</p>
        <p className="scroll-more" onClick={() => scrollToRef(projectRef)}>Projects</p>
        <p className="scroll-more" onClick={() => scrollToRef(eduRef)}>Education</p>
        <p className="scroll-more" onClick={() => scrollToRef(contactRef)}>Contact</p>
      </div>
    </body>
  );
}

export default HeroSection;
