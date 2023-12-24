import "./App.css";
import HeroSection from "./components/HeroSection/herosection";
import SkillSet from "./components/SkillSet/skillset";
import Education from "./components/Education/education";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import { useState, useEffect, useRef } from "react";

function App() {
  const skillRef = useRef();
  const eduRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const homeRef = useRef();
  const lastScrollY = useRef(0);

  const [showNav, setShowNav] = useState(true);

  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNav(currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={homeRef} className="App">
      <div className={`nav ${showNav ? "" : "nav-hidden"}`}>
        <div className="nav-containers">
          <div onClick={scrollToHome} className="nav-container">
            PM
          </div>
          <p className="SE-nav">
            <span className="SE">Software </span>
            <span className="SE">Engineer</span>
          </p>
        </div>
      </div>
      <HeroSection {...{ homeRef, skillRef, eduRef, projectRef, contactRef }} />
      <div ref={skillRef}>
        <SkillSet />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
