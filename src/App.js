import './App.css';
import HeroSection from './components/HeroSection/herosection';
import SkillSet from './components/SkillSet/skillset'
import { useRef } from 'react';

function App() {
  const skillRef = useRef();

  return (
    <div className="App">
      <div className='nav'>
      <div className='nav-container'>
        PM
      </div>
      </div>
      <HeroSection skillRef={skillRef}></HeroSection>
      <div ref={skillRef}>
        <SkillSet></SkillSet>
      </div>
    </div>
  );
}

export default App;
