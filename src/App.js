
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Specialties from './components/specialties/Specialties';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import SmokedEyeliner from './components/eyeliner/SmokedEyeliner';
import eyeCare from "./icons/wired-lineal-69-eye.json"
import FormScreen from './screens/FormScreen';
import ThirdScreen from './screens/ThirdScreen';
import BasicAccordion from './components/questions/Akordion';
import ForthScreen from './screens/ForthScreen';
import CustomizedTimeline from './screens/FifthScreen';
function App() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  return <div style={{overflowX:"hidden" , width:"100%"}}>
  <NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <ForthScreen/>
  <FormScreen/>
  <SmokedEyeliner icon={eyeCare}/>
  <ThirdScreen/>
  <Specialties/>
  <CustomizedTimeline/>
  <BasicAccordion/>
  </div>
}

export default App;
