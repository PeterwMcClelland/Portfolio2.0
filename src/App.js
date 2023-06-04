import './App.css';
import HeroSection from './components/HeroSection/herosection';
import SkillSet from './components/SkillSet/skillset'
import Education from './components/Education/education';
import { useRef } from 'react';

function App() {
  const skillRef = useRef();
  const eduRef = useRef();

  return (
    <div className="App">
      <div className='nav'>
        <div className='nav-container'>
          PM
        </div>
      </div>
      <HeroSection skillRef={skillRef} eduRef={eduRef}></HeroSection>
      <div ref={skillRef}>
        <SkillSet></SkillSet>
      </div>
      <div ref={eduRef}>
        <Education></Education>
      </div>
    </div>
  );
}

export default App;
