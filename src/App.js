import './App.css';
import HeroSection from './components/HeroSection/herosection';
import SkillSet from './components/SkillSet/skillset'

function App() {
  return (
    <div className="App">
      <div className='nav'>
      <div className='nav-container'>
        PM
      </div>
      </div>
      <HeroSection></HeroSection>
      <SkillSet></SkillSet>
    </div>
  );
}

export default App;
