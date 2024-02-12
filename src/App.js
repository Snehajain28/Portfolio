import Navbar from './component/Navbar';
import Home from './component/Home';
import { HashLink } from 'react-router-hash-link';
import About from './component/About';
import TechStack from './component/TechStack';
import Contact from './component/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Project from './component/Project';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='overflow-x-hidden text-white bg-black'>
      <Navbar />
     <HashLink to={'#home'} elementId='home' />
      <HashLink to={'#about'} elementId='about' />
      <HashLink to={'#tech'} elementId='tech' />
      <HashLink to={'#projects'} elementId='projects' />
      <HashLink to={'#contact'} elementId='contact' />
      <Home />
      <About />
      <TechStack />
      <Project/>
      <Contact />
    </div>
  );
}

export default App;
