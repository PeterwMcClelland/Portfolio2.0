import "./App.css";
import HeroSection from "./components/HeroSection/herosection";
import SkillSet from "./components/SkillSet/skillset";
import Education from "./components/Education/education";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import { useRef } from "react";

function App() {
  const skillRef = useRef();
  const eduRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const homeRef = useRef();

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef} className="App">
      <div className="nav">
        <div onClick={scrollToHome} className="nav-container">
          PM
        </div>
      </div>
      <HeroSection
        homeRef={homeRef}
        skillRef={skillRef}
        eduRef={eduRef}
        projectRef={projectRef}
        contactRef={contactRef}
      ></HeroSection>
      <div ref={skillRef}>
        <SkillSet></SkillSet>
      </div>
      <div ref={projectRef}>
        <Project></Project>
      </div>
      <div ref={eduRef}>
        <Education></Education>
      </div>
      <div ref={contactRef}>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
